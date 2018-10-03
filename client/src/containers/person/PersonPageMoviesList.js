import React from 'react';
import injectSheet from 'react-jss';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Section } from '../../components/layout';
import { Heading } from '../../components/shared';
import { MovieList } from '../../components/movie';

const QUERY_MOVIES = gql`
  query person($type: PersonType!, $name: String!) {
    person(type: $type, name: $name) {
      name
      type
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

const PersonPageMoviesList = ({ classes, variables }) => (
  <Query query={QUERY_MOVIES} variables={variables}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return null;
      const { person } = data;
      return (
        <Section odd>
          <Heading
            type="h2"
            text="Movies"
            sub={`Starring ${person.name}`}
          />
          <MovieList
            animated
            className={classes.list}
            movies={person.movies}
            withLink
            showPoster
            showDetails
            showTitle
            showReleaseYear
            showRating
          />
        </Section>
      );
    }}
  </Query>
);

const styles = () => ({
  list: {
    marginTop: 35,
  },
});

export default injectSheet(styles)(PersonPageMoviesList);
