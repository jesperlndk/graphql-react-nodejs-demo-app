import React from 'react';
import config from '../../config';

const RemoteImage = ({ src, size = 'w500', alt, className }) => {
  if (!src) {
    return null;
  }
  const imageUrl = `${config.images.remoteUrlBase}${size}${src}`;
  return (
    <img src={imageUrl} alt={alt} className={className} />
  );
};

export default RemoteImage;
