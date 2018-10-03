import React from 'react';
import injectSheet from 'react-jss';
import { GenreButton } from '.';

const GenresList = ({ classes, genres, className }) => {
  if (!genres || genres.length <= 0) {
    return null;
  }
  return (
    <div className={className}>
      {genres.map(genre => (
        <GenreButton key={genre.id} {...genre} className={classes.item} />
      ))}
    </div>
  );
};

const styles = () => ({
  item: {
    marginRight: 20,
    marginBottom: 12,
  },
});

export default injectSheet(styles)(GenresList);
