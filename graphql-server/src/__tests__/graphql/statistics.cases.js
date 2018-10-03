module.exports = [
  {
    id: 'statistics, totalMoviesByYear',
    query: `
      query statistics($type: StatisticsType!) {
        statistics(type:$type) {
          labels
          values
        }
      }
    `,
    variables: {
      type: 'totalMoviesByYear',
    },
    context: { },
    expected: {
      data: {
        statistics: {
          labels: ['foo', 'foo'],
          values: [1, 1],
        },
      },
    },
  },
];
