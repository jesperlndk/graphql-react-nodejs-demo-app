const { sortBy } = require('lodash');
const personUtils = require('../../utils/personUtils');

exports.resolver = {
  Query: {
    person: (root, { name, type }) => ({ name, type }),
    persons: async (root, { type, limit }, context) => {
      const movies = await context.moviesApi.query();
      const personTypes = personUtils.getTypes(type);
      const personNames = new Set();
      for (let i = 0; i < movies.length; i++) {
        const movie = movies[i];
        for (let x = 0; x < personTypes.length; x++) {
          const personType = personTypes[x];
          const personName = movie[personType];
          if (personName && !personUtils.isIgnored(personName)) {
            personNames.add(personName);
          }
        }
      }
      return [...personNames].slice(0, limit).map(name => ({ name, type }));
    },
  },

  Person: {
    movies: async (person, args, context) => {
      const movies = [];
      const requests = personUtils.getTypes(person.type).map(async (key) => {
        const results = await context.moviesApi.query(`${key}=${person.name}`);
        movies.push(...results);
      });
      await Promise.all(requests);
      return movies;
    },
    profile: async (person, args, context) => {
      const search = await context.tmdbApi.query('search/person', `query=${person.name}&page=1&include_adult=true`);
      if (search.total_results > 0) {
        const searchResult = search.results[0];
        const profile = await context.tmdbApi.get(`person/${searchResult.id}`);
        return profile;
      }
      return null;
    },
    colleagues: async (person, args, context) => {
      const allTypes = personUtils.getAllTypes();

      const colleaguesMap = {};
      await Promise.all(personUtils.getTypes(person.type).map(async (key) => {
        const movies = await context.moviesApi.query(`${key}=${person.name}`);
        for (let i = 0; i < movies.length; i++) {
          const movie = movies[i];
          for (let x = 0; x < allTypes.length; x++) {
            const type = allTypes[x];
            const name = movie[type];
            if (name && !personUtils.isIgnored(name) && name !== person.name) {
              colleaguesMap[name] = personUtils.getKeyOfPersonType(type);
            }
          }
        }
      }));

      const colleaguesArray = sortBy(Object.keys(colleaguesMap).map(name => ({
        name,
        type: colleaguesMap[name],
      })), 'type');

      return colleaguesArray;
    },
  },
};
