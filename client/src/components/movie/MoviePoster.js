import React from 'react';
import utils from '../../utils';
import { RemoteImage } from '../shared';

const MoviePoster = ({ movie, ...props }) => (
  movie.poster_path ? (
    <RemoteImage src={movie.poster_path} size="w500" alt={movie.title} {...props} />
  ) : (
    <img src={utils.assets.getAsset('no_poster.png')} alt="" {...props} />
  )
);


export default MoviePoster;
