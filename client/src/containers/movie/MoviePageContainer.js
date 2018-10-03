import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { DocumentTitle } from '../../components/window';
import { Section } from '../../components/layout';
import { LoadingIndicator, ErrorIndicator } from '../../components/shared';
import { PersonsList } from '../../components/persons';
import {
  MoviePageHeader,
  MoviePageDetails,
  MoviePageVideos,
  MoviePageMap,
} from '.';

const QUERY = gql`
  query movie($slug: String!) {
    movie(slug: $slug) {
      title
      slug
      extended_data
      poster_path
      backdrop_path
      vote_average
      overview
      fun_facts
      release_year
      release_date
      production_company {
        name
      }
      distributor {
        name
      }
      genres {
        id
        name
      }
      locations {
        name
        lat
        lng
      }
      actors {
        name
        type
        profile {
          profile_path
        }
      }
      writer {
        name
        type
        profile {
          profile_path
        }
      }
      director {
        name
        type
        profile {
          profile_path
        }
      }
      videos {
        name
        type
        url
        key
        site
      }
    }
  }
`;

const MoviePageContainer = ({ match }) => (
  <Query query={QUERY} variables={{ slug: match.params.slug }}>
    {({ loading, error, data }) => {
      if (loading) return <LoadingIndicator height="100vh" />;
      if (error) {
        return (
          <ErrorIndicator
            backgroundColor="#555"
            textColor="white"
            height={500}
            text="The movie could not be loaded at the moment. Please try again later."
          />
        );
      }

      const { movie } = data;
      return (
        <React.Fragment>
          <DocumentTitle title={movie.title} />

          <MoviePageHeader movie={movie} />
          <MoviePageDetails movie={movie} />
          <Section>
            <PersonsList
              centered
              persons={[...movie.actors, movie.writer, movie.director]}
            />
          </Section>
          <MoviePageVideos movie={movie} />
          <MoviePageMap movie={movie} />
        </React.Fragment>
      );
    }}
  </Query>
);

export default MoviePageContainer;
