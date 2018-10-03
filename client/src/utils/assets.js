import config from '../config';
import _assets from '../assets';

// TODO: Make type for size
export const getRemoteImageUrl = (path, size = 'w500') =>
  path ? `${config.images.remoteUrlBase}${size}${path}` : '';

export const getAsset = (fileName, assets = _assets) =>
  assets[fileName] || null;
