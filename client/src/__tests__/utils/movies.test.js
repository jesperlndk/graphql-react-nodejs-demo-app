import {
  convertVoteAverage,
  hasValidLocations,
  getMapOfCoordinates,
} from '../../utils/movies';

describe('utils > movies', () => {
  describe('convertVoteAverage', () => {
    it('should always return a number', () => {
      expect(convertVoteAverage()).toBe(0);
    });
    it('should devide given number by two', () => {
      expect(convertVoteAverage(10)).toBe(5);
      expect(convertVoteAverage(9)).toBe(4.5);
      expect(convertVoteAverage(2)).toBe(1);
    });
    it('should return value with only 1 decimal', () => {
      expect(convertVoteAverage(9.43452)).toBe(4.7);
      expect(convertVoteAverage(3.6821)).toBe(1.8);
    });
  });

  describe('hasValidLocations', () => {
    it('should return false if movie has no locations', () => {
      expect(hasValidLocations({ foo: 'bar' })).toBeFalsy();
      expect(hasValidLocations({ locations: [] })).toBeFalsy();
    });
    it('should return false if no locations have lat+lng', () => {
      const movie = {
        locations: [
          { foo: 'bar' },
          { some: 'other' },
        ],
      };
      expect(hasValidLocations(movie)).toBeFalsy();
    });
    it('should return true if at least one location has lat+lng', () => {
      const movie = {
        locations: [
          { foo: 'bar' },
          { lat: '123', lng: '123' }, // valid
        ],
      };
      expect(hasValidLocations(movie)).toBeTruthy();
    });
  });

  describe('getMapOfCoordinates', () => {
    it('should return map of valid locations from movies array', () => {
      const movies = [
        {
          locations: [],
        },
        {
          locations: [
            { foo: 'bar' },
            { lat: 1, lng: 2 },
          ],
        },
        {
          locations: [
            { lat: 3, lng: 4 },
          ],
        },
      ];
      expect(getMapOfCoordinates(movies)).toEqual([
        { lat: 1, lng: 2 },
        { lat: 3, lng: 4 },
      ]);
    });
  });
});
