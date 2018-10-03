import React from 'react';
import injectSheet from 'react-jss';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import utils from '../../utils';
import { DocumentTitle } from '../../components/window';
import { Heading, LoadingIndicator, ErrorIndicator } from '../../components/shared';
import { MovieList } from '../../components/movie';
import { Section } from '../../components/layout';

const QUERY = gql`
  query genre($id: Int!) {
    genre(id: $id) {
      id
      name
      movies {
        title
        slug
        release_year
        poster_path
        vote_average
      }
    }
  }
`;

const GenrePageContainer = ({ classes, match }) => (
  <Query query={QUERY} variables={{ id: Number(match.params.id) }}>
    {({ loading, error, data }) => {
      if (loading) return <LoadingIndicator height="100vh" />;
      if (error) {
        return (
          <ErrorIndicator
            backgroundColor="#555"
            textColor="white"
            height={500}
            text="The genre page could not be loaded at the moment. Please try again later."
          />
        );
      }

      const { genre } = data;
      const backgroundColor = utils.misc.getRandomColor(genre.name);

      return (
        <React.Fragment>
          <DocumentTitle title={`Genre: ${genre.name}`} />
          <Section className={classes.header} style={{ backgroundColor }}>
            <Heading
              type="h1"
              text={`${genre.name} movies`}
            />
          </Section>
          <Section>
            {genre.movies.length > 0 ? (
              <MovieList
                className={classes.list}
                movies={genre.movies}
                animated
                withLink
                showPoster
                showDetails
                showTitle
                showReleaseYear
                showRating
              />
            ) : (
              <ErrorIndicator
                text="We couldn't find any movies of this particular genre. Perhaps you could try another genre?"
              />
            )}
          </Section>
        </React.Fragment>
      );
    }}
  </Query>
);

const styles = theme => ({
  header: {
    ...theme.animations.fadeIn('0s', '.5s'),
    backgroundColor: '#000',
    paddingTop: 120,
    paddingBottom: 50,
    ...theme.responsive.mobile({
      paddingTop: 85,
      paddingBottom: 30,
    }),

    '& h1': {
      color: '#fff',
    },
  },
});

export default injectSheet(styles)(GenrePageContainer);
