import React from 'react';
import injectSheet from 'react-jss';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { BrowserRouter, Link } from 'react-router-dom';
import { Section } from '../../components/layout';
import { Heading, LoadingIndicator, ErrorIndicator, GoogleMap } from '../../components/shared';

const QUERY_LOCATIONS = gql`
  {
    movies (limit: 50, locationsLimit: 1) {
      title
      slug
      locations {
        name
        lat
        lng
      }
    }
  }
`;

const InsightsPageMap = ({ classes }) => (
  <Section odd>
    <Heading
      type="h2"
      text="Locations"
      sub="Where movies were shot"
    />
    <Query query={QUERY_LOCATIONS}>
      {({ loading, error, data }) => {
        if (loading) return <LoadingIndicator />;
        if (error) return <ErrorIndicator />;
        const { movies } = data;
        return (
          <GoogleMap
            className={classes.map}
            movies={movies}
            renderInfoWindowContent={movie => (
              <div className={classes.infoWindow}>
                <span className={classes.infoWindowTitle}>{movie.title}</span>
                <BrowserRouter>
                  <Link to={`/movie/${movie.slug}`} className={classes.infoWindowButton}>
                    <span>See movie details</span>
                  </Link>
                </BrowserRouter>
              </div>
            )}
          />
        );
      }}
    </Query>
  </Section>
);

const styles = theme => ({
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
  infoWindowLocation: {
    display: 'block',
    fontSize: 15,
  },
  infoWindowButton: theme.buttons.black,
});

export default injectSheet(styles)(InsightsPageMap);
