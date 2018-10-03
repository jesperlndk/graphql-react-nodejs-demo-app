const { find } = require('lodash');
const { errorNotFound } = require('../../utils/errorHandler');

exports.resolver = {
  Query: {
    genre: async (root, { id }, context) => {
      const data = await context.tmdbApi.get('genre/movie/list');
      const genre = find(data.genres, { id });
      if (genre) {
        return genre;
      }
      return errorNotFound('Genre not found');
    },
    genres: async (root, args, context) => {
      const data = await context.tmdbApi.get('genre/movie/list');
      return data.genres;
    },
  },

  Genre: {
    movies: async (genre, args, context) => {
      const movies = await context.moviesApi.query(`genre_ids_like=${genre.id}`);
      return movies;
    },
  },
};
