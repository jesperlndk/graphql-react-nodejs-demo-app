import { getRandomColor } from '../../utils/misc';

describe('utils > misc', () => {
  describe('getRandomColor', () => {
    it('should return a string with a color', () => {
      const fn = (options) => {
        expect(options.seed).toBe('someSeed');
        expect(options.format).toBe('someFormat');
        return 'myColor';
      };
      expect(getRandomColor('someSeed', 'someFormat', fn)).toBe('myColor');
    });
  });
});
