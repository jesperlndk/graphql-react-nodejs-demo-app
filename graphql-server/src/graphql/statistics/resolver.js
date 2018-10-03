const { filter } = require('lodash');
const { getPoints, sumByKey } = require('../../utils/statisticsUtils');

const typeHandlers = {
  totalMoviesByYear: movies => sumByKey(getPoints(movies, 'release_year'), 'label', 'asc'),
  totalMoviesByProductionCompany: movies => sumByKey(getPoints(movies, 'production_company'), 'value', 'desc'),
  totalMoviesByDistributor: movies => sumByKey(getPoints(movies, 'distributor'), 'label', 'asc'),
  totalMoviesByGenres: async (movies, context) => {
    const data = await context.tmdbApi.get('genre/movie/list');
    const points = data.genres.map(genre => ({
      label: genre.name,
      value: filter(movies, movie => movie.genre_ids && movie.genre_ids.includes(genre.id)).length,
    }));
    return sumByKey(points, 'value', 'desc');
  },
};

exports.resolver = {
  Query: {
    statistics: async (root, { type }, context) => {
      const movies = await context.moviesApi.query();
      const handler = typeHandlers[type];
      if (!handler) {
        return null;
      }
      return handler(movies, context);
    },
  },
};
