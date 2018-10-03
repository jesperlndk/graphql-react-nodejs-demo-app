const moviesApi = require('../../apis/moviesApi');

exports.resolver = {
  Query: {
    company: (root, { name, type }) => ({ name, type }),
  },

  Company: {
    movies: async company => moviesApi.query(`${company.type}=${company.name}`),
  },
};
