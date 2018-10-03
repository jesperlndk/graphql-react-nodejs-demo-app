import React from 'react';
import injectSheet from 'react-jss';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Section, Wrapper } from '../../components/layout';
import { Heading, LoadingIndicator } from '../../components/shared';
import { PersonPhoto } from '../../components/persons';

const QUERY_PROFILE = gql`
  query person($type: PersonType!, $name: String!) {
    person(type: $type, name: $name) {
      name
      type
      profile {
        profile_path
        gender
        birthday
        deathday
        place_of_birth
        imdb_id
        biography
      }
    }
  }
`;

const PersonPageProfile = ({ classes, variables }) => (
  <Query query={QUERY_PROFILE} variables={variables}>
    {({ loading, error, data }) => {
      if (loading) return <LoadingIndicator height="100vh" />;

      // In case we get an error from GraphQL, we will handle it gracefully
      // and just create a person object with the basic information needed.
      const person = error ? {
        name: variables.name,
        type: variables.type,
      } : data.person;

      return (
        <React.Fragment>
          <Section className={classes.header}>
            <div className={classes.photoContainer}>
              <PersonPhoto person={person} className={classes.photo} />
            </div>
            <Heading
              className={classes.name}
              type="h1"
              text={person.name}
              sub={person.type}
            />
          </Section>

          <Wrapper>
            <main className={classes.content}>
              <Heading type="h6" text="Biography" />
              {person.profile ? (
                <React.Fragment>
                  <p className={classes.textOverview}>{person.profile.biography || 'No biography information.'}</p>

                  <div className={classes.section}>
                    <Heading type="h6" text="Details" />
                    <div className={classes.details}>
                      {console.log(person.profile.gender)}
                      <p>Gender: <span>{person.profile.gender === 1 ? 'Female' : 'Male'}</span></p>
                      <p>Birthday: <span>{person.profile.birthday || 'Unknown'}</span></p>
                      {person.profile.deathday ? <p>Deathday: <span>{person.profile.deathday}</span></p> : null}
                      <p>Place of birth: <span>{person.profile.place_of_birth || 'Unknown'}</span></p>
                      <a className={classes.imdbButton} href={`https://www.imdb.com/name/${person.profile.imdb_id}/`} target="_blank" rel="noopener noreferrer">
                        <span>See more on IMDb</span>
                      </a>
                    </div>
                  </div>
                </React.Fragment>
              ) : (
                <p className={classes.textOverview}>Unfortunately we do not have any biography details about this person.</p>
              )}
            </main>
          </Wrapper>
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
  },
  photoContainer: {
    float: 'left',
    width: '19%',
  },
  photo: {
    boxShadow: theme.boxShadow.light,
  },
  name: {
    marginLeft: '25%',
    color: '#fff',
    '& span': {
      display: 'inline-block',
      opacity: 0.6,
      marginLeft: 20,
      fontSize: 36,
      ...theme.responsive.tablet({
        fontSize: 28,
      }),
      ...theme.responsive.mobile({
        fontSize: 20,
        display: 'block',
        marginLeft: 0,
      }),
    },
  },

  content: {
    marginLeft: '25%',
    marginRight: '25%',
    minHeight: 200,
    paddingTop: 60,
    paddingBottom: 80,
    ...theme.responsive.mobile({
      margin: 0,
      paddingTop: 40,
      paddingBottom: 50,
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
  section: {
    marginTop: 50,
  },
  details: {
    '& p': {
      color: theme.colors.secondary,
      '& span': {
        color: theme.colors.primary,
        fontWeight: theme.weights.regular,
      },
    },
  },
  imdbButton: {
    ...theme.buttons.white,
    marginTop: 20,
  },
});

export default injectSheet(styles)(PersonPageProfile);
