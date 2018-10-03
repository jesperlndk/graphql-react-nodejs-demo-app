import React from 'react';
import injectSheet from 'react-jss';
import StarRatings from 'react-star-ratings';
import utils from '../../utils';

const sizes = {
  small: {
    starDimension: '18px',
    starSpacing: '1px',
  },
  large: {
    starDimension: '30px',
    starSpacing: '5px',
  },
};

const MovieRating = ({ classes, className, movie, size, showNumber }) => (
  <div className={className}>
    <StarRatings
      rating={utils.movies.convertVoteAverage(movie.vote_average)}
      numberOfStars={5}
      starRatedColor="#fec001"
      {...sizes[size]}
    />
    {showNumber && (
      <span className={classes.number}>{utils.movies.convertVoteAverage(movie.vote_average)}</span>
    )}
  </div>
);


const styles = theme => ({
  number: {
    color: '#fff',
    marginLeft: 10,
    fontWeight: theme.weights.bold,
    fontSize: 15,
  },
});

export default injectSheet(styles)(MovieRating);
