import _randomcolor from 'randomcolor';

export const getRandomColor = (seed, format = 'hex', fn = _randomcolor) =>
  fn({ seed, format, alpha: 1 });
