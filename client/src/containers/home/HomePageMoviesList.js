import React from 'react';
import injectSheet from 'react-jss';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { LoadingIndicator, ErrorIndicator, Heading } from '../../components/shared';
import { Section } from '../../components/layout';
import { MovieList } from '../../components/movie';

const QUERY_MOVIES = gql`
  query movies($limit: Int!, $sort: String!, $shuffle: Boolean) {
    movies(page: 1, limit: $limit, sort: $sort, order: desc, shuffle: $shuffle) {
      title
      slug
      release_year
      poster_path
      vote_average
      actors {
        name
        type
      }
    }
  }
`;

const HomePageMoviesList = ({ classes, sectionOdd, text, sub, variables, show }) => (
  <Section odd={sectionOdd}>
    <Heading
      type="h2"
      text={text}
      sub={sub}
    />
    <Query query={QUERY_MOVIES} variables={variables}>
      {({ loading, error, data }) => {
        if (loading) return <LoadingIndicator />;
        if (error) return <ErrorIndicator />;
        return (
          <MovieList
            className={classes.list}
            movies={data.movies.slice(0, show)}
            withLink
            showPoster
            showDetails
            showTitle
            showReleaseYear
            showRating
            showActors
          />
        );
      }}
    </Query>
  </Section>
);

const styles = theme => ({
  list: {
    marginTop: 35,
    ...theme.responsive.mobile({
      marginTop: 20,
    }),
  },
});

export default injectSheet(styles)(HomePageMoviesList);
