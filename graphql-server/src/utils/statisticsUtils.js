const { groupBy, orderBy } = require('lodash');

const getPoints = (movies = [], key = '') => {
  const grouped = groupBy(movies, key);
  return Object.keys(grouped)
    .map(i => ({
      label: i,
      value: grouped[i].length,
    }));
};

const sumByKey = (points = [], sortBy = '', order = 'asc') => {
  const pointsOrdered = orderBy(points, sortBy, order);
  const labels = pointsOrdered.map(p => p.label);
  const values = pointsOrdered.map(p => p.value);
  return { labels, values };
};

module.exports = {
  getPoints,
  sumByKey,
};
