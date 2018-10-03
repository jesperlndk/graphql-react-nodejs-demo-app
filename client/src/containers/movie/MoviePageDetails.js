import React from 'react';
import injectSheet from 'react-jss';
import { Wrapper } from '../../components/layout';
import { Heading } from '../../components/shared';
import { GenresList } from '../../components/genres';

const MoviePageDetails = ({ classes, movie }) => (
  <Wrapper>
    <div className={classes.content}>
      <Heading type="h6" text="Overview" />
      <p className={classes.textOverview}>
        {movie.overview || 'Unfortunately we do not have any overview information about this movie.'}
      </p>

      <Heading type="h6" text="Details" className={classes.marginTop} />
      <div className={classes.details}>
        <p>Release date: <span>{movie.release_date || 'Unknown'}</span></p>
        <p>Production company: <span>{movie.production_company.name || 'Unknown'}</span></p>
        <p>Distributor: <span>{movie.distributor.name || 'Unknown'}</span></p>
      </div>

      <GenresList genres={movie.genres} className={classes.marginTop} />

      <Heading type="h6" text="Stars &amp; Crew" className={classes.marginTopLarge} />
    </div>
  </Wrapper>
);

const styles = theme => ({
  marginTop: {
    marginTop: 50,
    ...theme.responsive.mobile({
      marginTop: 40,
    }),
  },
  marginTopLarge: {
    marginTop: 80,
    ...theme.responsive.mobile({
      marginTop: 50,
    }),
  },

  content: {
    marginLeft: '27%',
    marginRight: '27%',
    paddingTop: 60,
    ...theme.responsive.tablet({
      paddingTop: 50,
    }),
    ...theme.responsive.mobile({
      margin: 0,
      paddingTop: 40,
    }),
  },
  textOverview: {
    lineHeight: 1.8,
    fontSize: 18,
    fontWeight: theme.weights.light,
    ...theme.responsive.mobile({
      fontSize: 16,
    }),
  },
  details: {
    marginBottom: 25,
    '& p': {
      color: theme.colors.secondary,
      '& span': {
        color: theme.colors.primary,
        fontWeight: theme.weights.regular,
      },
    },
  },
});

export default injectSheet(styles)(MoviePageDetails);
