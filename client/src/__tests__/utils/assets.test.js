import { getRemoteImageUrl, getAsset } from '../../utils/assets';

describe('utils > assets', () => {
  describe('getRemoteImageUrl', () => {
    it('should return an empty string if no path is given', () => {
      expect(getRemoteImageUrl()).toBe('');
    });
    it('should return string with path and size set', () => {
      expect(getRemoteImageUrl('/myfile.jpg')).toBe('https://image.tmdb.org/t/p/w500/myfile.jpg');
      expect(getRemoteImageUrl('/myfile.jpg', 'w200')).toBe('https://image.tmdb.org/t/p/w200/myfile.jpg');
    });
  });

  describe('getAsset', () => {
    it('should return null if fileName does not exist', () => {
      expect(getAsset('unknownKey', { foo: 'bar' })).toBeNull();
    });
    it('should return file path if given file name exists', () => {
      expect(getAsset('someFile', { someFile: 'path-to-file.jpg' })).toBe('path-to-file.jpg');
    });
  });
});
