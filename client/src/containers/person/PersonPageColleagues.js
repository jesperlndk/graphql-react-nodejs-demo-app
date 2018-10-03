import React from 'react';
import injectSheet from 'react-jss';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Section } from '../../components/layout';
import { Heading } from '../../components/shared';
import { PersonsList } from '../../components/persons';

const QUERY_COLLEAGUES = gql`
  query person($type: PersonType!, $name: String!) {
    person(type: $type, name: $name) {
      colleagues {
        name
        type
        profile {
          profile_path
        }
      }
    }
  }
`;

const PersonPageColleagues = ({ classes, variables }) => (
  <Query query={QUERY_COLLEAGUES} variables={variables}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return null;
      const { person } = data;
      if (person.colleagues.length <= 0) {
        return null;
      }
      return (
        <Section>
          <Heading
            type="h2"
            text="Colleagues"
            sub="Often seen with"
          />
          <PersonsList
            className={classes.list}
            persons={person.colleagues}
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

export default injectSheet(styles)(PersonPageColleagues);
