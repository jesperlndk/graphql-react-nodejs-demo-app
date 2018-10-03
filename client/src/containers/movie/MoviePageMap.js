import React from 'react';
import injectSheet from 'react-jss';
import utils from '../../utils';
import { Section } from '../../components/layout';
import { GoogleMap, Heading } from '../../components/shared';

const MoviePageMap = ({ classes, movie }) => {
  if (!utils.movies.hasValidLocations(movie)) {
    return null;
  }

  return (
    <Section>
      <Heading
        type="h2"
        text="Be there"
        sub={`Filming locations of ${movie.title}`}
      />
      <GoogleMap
        movies={[movie]}
        className={classes.map}
        renderInfoWindowContent={(m, l) => mapRenderInfoWindowContent(m, l, classes)}
        gestureHandling="greedy"
      />
    </Section>
  );
};

const mapRenderInfoWindowContent = (movie, location, classes) => (
  <div className={classes.infoWindow}>
    <span className={classes.infoWindowTitle}>{location.name}</span>
    <a className={classes.infoWindowButton} href={`https://www.google.com/maps/search/${location.name}`} target="_blank" rel="noopener noreferrer">
      <span>See on Google Maps</span>
    </a>
  </div>
);

const styles = theme => ({
  mapContainer: {
    padding: '75px 0',
  },
  map: {
    marginTop: 40,
  },
  infoWindow: {
    padding: '18px 12px',
  },
  infoWindowTitle: {
    display: 'block',
    fontSize: 16,
  },
  infoWindowButton: theme.buttons.black,
});

export default injectSheet(styles)(MoviePageMap);
