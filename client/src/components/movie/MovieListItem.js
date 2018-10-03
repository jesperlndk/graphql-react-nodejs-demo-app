import React from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import { MovieRating, MoviePoster } from '.';
import utils from '../../utils';

const MAX_ANIMATION_TIME = 1.8;
const ANIMATION_TIME_EACH = 0.2;

const MovieListItem = ({
  movie,
  classes,
  index,
  animated,
  withLink,
  showPoster,
  showDetails,
  showTitle,
  showReleaseYear,
  showRating,
  showActors,
}) => {
  const inlineStyles = {};
  if (animated) {
    inlineStyles.animationDelay = `${Math.min((index + 1) * ANIMATION_TIME_EACH, MAX_ANIMATION_TIME)}s`;
  } else {
    inlineStyles.animation = 'none';
    inlineStyles.opacity = 1;
  }

  return (
    <div className={classes.item} style={{ ...inlineStyles }}>
      {showPoster && (
        withLink ? (
          <Link to={`/movie/${movie.slug}`}>
            <MoviePoster movie={movie} />
          </Link>
        ) : (
          <MoviePoster movie={movie} />
        )
      )}

      {showDetails && (
        <div className={classes.details}>
          {showTitle && (
            withLink ? (
              <Link to={`/movie/${movie.slug}`} className={classes.title}>
                {movie.title}
              </Link>
            ) : (
              <span className={classes.title}>
                {movie.title}
              </span>
            )
          )}

          {showReleaseYear && (
            <span className={classes.year}>
              {movie.release_year}
            </span>
          )}

          {showRating && (
            <MovieRating
              movie={movie}
              size="small"
              className={classes.rating}
            />
          )}

          {showActors && (
            <p className={classes.actors}>
              Featuring&nbsp;
              {movie.actors.map((person, i) => {
                const separatorChar = i === movie.actors.length - 1 ? '' : ', ';
                return (
                  <span key={person.name}>
                    <Link to={utils.persons.getPersonUrl(person)}>{person.name}</Link>
                    {separatorChar}
                  </span>
                );
              })}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

const styles = theme => ({
  item: {
    ...theme.animations.fadeInSlideUpSubtle(),
    flexGrow: 1,
    padding: '2%',
    maxWidth: '25%',
    ...theme.responsive.tablet({
      maxWidth: 'calc(100% / 3)',
      '&:nth-child(7), &:nth-child(8)': {
        display: 'none',
      },
    }),
    ...theme.responsive.mobile({
      maxWidth: '50%',
    }),

    '& img': {
      display: 'block',
      boxShadow: theme.boxShadow.light,
      transition: 'all .3s',
    },
    '&:hover img': {
      boxShadow: theme.boxShadow.light.heavy,
      transform: 'scale(1.015)',
    },
  },

  details: {
    padding: '25px 20px',
    ...theme.responsive.mobile({
      padding: '17px 10px',
    }),
  },

  title: {
    display: 'inline-block',
    marginRight: 6,
    fontWeight: theme.weights.bold,
    fontSize: 17,
    color: theme.colors.primary,
    textDecoration: 'none',
    ...theme.responsive.mobile({
      fontSize: 16,
    }),
  },
  year: {
    fontSize: 12,
    color: '#3e3e3e',
  },

  rating: {
    marginTop: 4,
    position: 'relative',
    left: -2,
  },

  actors: {
    margin: 0,
    marginTop: 10,
    fontSize: 15,
    lineHeight: 1.4,
    color: theme.colors.secondary,
    ...theme.responsive.mobile({
      display: 'none',
    }),

    '& a:hover': {
      textDecoration: 'underline',
    },
  },
});

export default injectSheet(styles)(MovieListItem);
