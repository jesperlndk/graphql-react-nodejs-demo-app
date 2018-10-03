import React from 'react';
import injectSheet from 'react-jss';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { LoadingIndicator, ErrorIndicator, Heading } from '../../components/shared';
import { Section } from '../../components/layout';
import { GenresList } from '../../components/genres';

const QUERY_GENRES = gql`
  {
    genres {
      id
      name
    }
  }
`;

const HomePageGenresList = ({ classes }) => (
  <Section>
    <Heading
      type="h2"
      text="Genres"
      sub="Find your niche"
    />
    <Query query={QUERY_GENRES}>
      {({ loading, error, data }) => {
        if (loading) return <LoadingIndicator height={147} />;
        if (error) return <ErrorIndicator />;
        return (
          <GenresList
            className={classes.list}
            genres={data.genres}
          />
        );
      }}
    </Query>
  </Section>
);

const styles = theme => ({
  list: {
    marginTop: 30,
    height: 70,
    overflowX: 'scroll',
    whiteSpace: 'nowrap',
    ...theme.responsive.mobile({
      marginTop: 20,
    }),
  },
});

export default injectSheet(styles)(HomePageGenresList);
