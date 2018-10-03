import React from 'react';
import injectSheet from 'react-jss';
import utils from '../../utils';
import { Wrapper } from '../../components/layout';
import { Heading } from '../../components/shared';
import { MoviePoster, MovieRating } from '../../components/movie';

const MoviePageHeader = ({ classes, movie }) => {
  const backgroundImage = `url(${utils.assets.getRemoteImageUrl(movie.backdrop_path, 'original')})`;

  return (
    <main className={classes.header} style={{ backgroundImage }}>
      <div className={classes.overlay} />
      <Wrapper>
        <MoviePoster movie={movie} className={classes.poster} />
        <div className={classes.texts}>
          <Heading
            type="h1"
            text={movie.title}
            sub={`(${movie.release_year})`}
            className={classes.title}
          />
          <MovieRating
            className={classes.ratingLarge}
            movie={movie}
            size="large"
            showNumber
          />
          <MovieRating
            className={classes.ratingSmall}
            movie={movie}
            size="small"
            showNumber
          />
        </div>
      </Wrapper>
    </main>
  );
};

const styles = theme => ({
  header: {
    ...theme.animations.fadeIn('0s', '.5s'),
    ...theme.mixins.backgroundImageCover(),
    backgroundColor: '#555',
    position: 'relative',
    padding: '15% 0 5%',

    ...theme.responsive.mobile({
      paddingTop: 100,
      paddingBottom: 30,
    }),

    '& .wrapper': {
      position: 'relative',
      zIndex: 2,
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.6)',
    zIndex: -1,
  },

  poster: {
    float: 'left',
    maxWidth: '20%',
    boxShadow: theme.boxShadow.light,
    borderRadius: 2,
    ...theme.responsive.mobile({
      maxWidth: '17%',
    }),
  },

  texts: {
    marginLeft: '27%',
    ...theme.responsive.mobile({
      marginLeft: '24%',
    }),
  },

  title: {
    color: '#fff',
    margin: '0 0 10px',

    '& span': {
      display: 'inline-block',
      opacity: 0.9,
      marginLeft: 10,
      fontSize: 36,
      ...theme.responsive.desktop({
        fontSize: 30,
      }),
      ...theme.responsive.tablet({
        fontSize: 24,
      }),
      ...theme.responsive.mobile({
        display: 'block',
        marginLeft: 0,
        fontSize: 16,
      }),
    },
  },

  ratingLarge: {
    display: 'block',
    ...theme.responsive.mobile({
      display: 'none',
    }),
  },
  ratingSmall: {
    display: 'none',
    ...theme.responsive.mobile({
      display: 'block',
    }),
  },
});

export default injectSheet(styles)(MoviePageHeader);
