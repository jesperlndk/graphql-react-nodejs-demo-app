import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { MovieListItem } from '.';

const MovieList = ({ classes, className, movies, ...props }) => (
  <div className={classNames(classes.list, className)}>
    {movies.map((movie, index) => (
      <MovieListItem
        index={index}
        key={movie.slug}
        movie={movie}
        {...props}
      />
    ))}
  </div>
);


const styles = () => ({
  list: {
    position: 'relative',
    left: '-1.5%',
    marginRight: '-1.5%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
});

export default injectSheet(styles)(MovieList);
