const fetcher = require('../utils/fetcher');
const config = require('../config');

const moviesApi = {
  get: path => fetcher(config.apis.tmdb.replace('$PATH', path)),
  query: (path, parameters) => fetcher(config.apis.tmdb.replace('$PATH', path) + parameters),
};

module.exports = moviesApi;
