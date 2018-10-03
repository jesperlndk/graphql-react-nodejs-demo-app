const {
  getPoints,
  sumByKey,
} = require('../../utils/statisticsUtils');

describe('statisticsUtils', () => {
  describe('getPoints', () => {
    it('should return an empty array by default', () => {
      expect(getPoints()).toEqual([]);
    });
    it('should return an array with objects counting occurrences by the given key', () => {
      const movies = [
        { title: 'James Bond' },
        { title: 'James Bond' },
        { title: 'James Bond' },
        { title: 'Pretty Woman' },
        { title: 'Pretty Woman' },
      ];
      expect(getPoints(movies, 'title')).toEqual([
        { label: 'James Bond', value: 3 },
        { label: 'Pretty Woman', value: 2 },
      ]);
    });
  });

  describe('sumByKey', () => {
    it('should return an object with empty arrays by default', () => {
      expect(sumByKey()).toEqual({
        labels: [],
        values: [],
      });
    });
    it('should convert points array into separate arrays of labels an values', () => {
      const points = [
        { label: 'James Bond', value: 3 },
        { label: 'Pretty Woman', value: 2 },
      ];
      expect(sumByKey(points)).toEqual({
        labels: ['James Bond', 'Pretty Woman'],
        values: [3, 2],
      });
    });
    it('should sort the points the by given sortBy value', () => {
      const points = [
        { label: 'James Bond', value: 3 },
        { label: 'Pretty Woman', value: 2 },
      ];
      expect(sumByKey(points, 'value')).toEqual({
        labels: ['Pretty Woman', 'James Bond'],
        values: [2, 3],
      });
    });
  });
});
