const _ = require('lodash');
const { errorNotFound } = require('../../utils/errorHandler');
const config = require('../../config');

exports.resolver = {
  Query: {
    movie: async (root, { slug }, context) => {
      const movie = await context.moviesApi.get(slug);
      if (movie.title) {
        return movie;
      }
      return errorNotFound('Movie not found');
    },
    movies: async (root, { page = 1, limit = 1000, locationsLimit = 0, shuffle = false, sort = '', order = '' }, context) => {
      const extended = sort !== '' ? 'extended_data=true&' : '';
      let results = await context.moviesApi.query(`${extended}_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);
      if (locationsLimit > 0) {
        results = _.map(results, movie => ({
          ...movie,
          locations: movie.locations && movie.locations.length ? movie.locations.slice(0, locationsLimit) : [],
        }));
      }
      return shuffle ? _.shuffle(results) : results;
    },
    search: async (root, { query, limit }, context) => {
      if (query) {
        return context.moviesApi.query(`title_like=${query}&_page=1&_limit=${limit}`);
      }
      return [];
    },
  },

  Movie: {
    actors: movie => config.personTypeMap.actor.filter(type => movie[type]).map(type => ({
      name: movie[type],
      type: 'actor',
    })),
    director: movie => ({
      name: movie.director,
      type: 'director',
    }),
    writer: movie => ({
      name: movie.writer,
      type: 'writer',
    }),
    production_company: movie => ({
      name: movie.production_company,
      type: 'production_company',
    }),
    distributor: movie => ({
      name: movie.production_company,
      type: 'distributor',
    }),
    videos: async (movie, args, context) => {
      const data = await context.tmdbApi.get(`movie/${movie.id}/videos`);
      if (data.results) {
        return data.results;
      }
      return null;
    },
    genres: async (movie, args, context) => {
      if (movie.genre_ids) {
        const data = await context.tmdbApi.get('genre/movie/list');
        if (data.genres) {
          return data.genres.filter(genre => movie.genre_ids.includes(genre.id));
        }
      }
      return [];
    },
  },
};
