const fetcher = require('../utils/fetcher');
const config = require('../config');

const moviesApi = {
  get: slug => fetcher(`${config.apis.movies}/${slug}`),
  query: path => fetcher(`${config.apis.movies}?${path}`),
};

module.exports = moviesApi;
