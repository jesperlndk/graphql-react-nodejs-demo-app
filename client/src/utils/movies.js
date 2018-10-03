import _ from 'lodash';

export const convertVoteAverage = (voteAverage = 0) =>
  Math.round((voteAverage / 2) * 10) / 10;

export const hasValidLocations = (movie = {}) =>
  Array.isArray(movie.locations) && movie.locations.filter(l => l.lat && l.lng).length > 0;

export const getMapOfCoordinates = (movies = []) =>
  _.flatten(movies.map(movie => movie.locations.filter(l => l.lat && l.lng).map(l => _.pick(l, ['lat', 'lng']))));
