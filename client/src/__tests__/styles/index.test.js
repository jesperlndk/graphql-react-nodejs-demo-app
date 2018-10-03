import styles from '../../styles';

describe('styles', () => {
  it('should aways return an object', () => {
    expect(typeof styles()).toBe('object');
    expect(typeof styles('unknownTheme')).toBe('object');
  });
  it('should contain animations, mixins and responsive objects', () => {
    const style = styles('someTheme');
    expect(style).toHaveProperty('animations');
    expect(style).toHaveProperty('mixins');
    expect(style).toHaveProperty('responsive');
  });
});
