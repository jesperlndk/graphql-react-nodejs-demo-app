import React from 'react';
import injectSheet from 'react-jss';
import _ from 'lodash';
import { Section } from '../../components/layout';
import { Heading } from '../../components/shared';
import { MovieVideoEmbedPlayer } from '../../components/movie';

const MoviePageVideos = ({ classes, movie }) => {
  if (!movie.videos || movie.videos.length <= 0) {
    return null;
  }

  const video = _.find(movie.videos, { type: 'Trailer' }) || movie.videos[0];

  return (
    <Section odd>
      {!movie.fun_facts && (
        <Heading
          type="h2"
          text="Get excited"
          sub="Watch the trailer"
          className={classes.heading}
        />
      )}

      <div className={classes.block}>
        <MovieVideoEmbedPlayer video={video} className={classes.player} />

        {movie.fun_facts && (
          <div className={classes.texts}>
            <Heading type="h2" sub="Trailer" />
            <p className={classes.funFactsTitle}>Did you know...?</p>
            <p className={classes.funFactsText}>{movie.fun_facts}</p>
          </div>
        )}
      </div>
    </Section>
  );
};

const styles = theme => ({
  heading: {
    marginBottom: 40,
  },
  block: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#fff',
    ...theme.responsive.tablet({
      display: 'block',
    }),
  },
  player: {
    flex: 1,
  },
  texts: {
    flexBasis: '30%',
    padding: '5%',
    ...theme.responsive.mobile({
      padding: '30px',
    }),
  },
  funFactsTitle: {
    marginTop: 30,
    fontWeight: theme.weights.light,
    fontSize: 20,
    color: theme.colors.secondary,
    ...theme.responsive.mobile({
      marginTop: 20,
    }),
  },
  funFactsText: {
    lineHeight: 1.6,
    color: theme.colors.secondary,
  },
});

export default injectSheet(styles)(MoviePageVideos);
