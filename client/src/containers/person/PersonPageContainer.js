import React from 'react';
import { DocumentTitle } from '../../components/window';
import {
  PersonPageProfile,
  PersonPageMoviesList,
  PersonPageColleagues,
} from '.';

const PersonPageContainer = ({ match }) => (
  <React.Fragment>
    <DocumentTitle title={match.params.name} />
    <PersonPageProfile variables={match.params} />
    <PersonPageMoviesList variables={match.params} />
    <PersonPageColleagues variables={match.params} />
  </React.Fragment>
);

export default PersonPageContainer;
