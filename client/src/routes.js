import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePageContainer } from './containers/home';
import { InsightsPageContainer } from './containers/insights';
import { MoviePageContainer } from './containers/movie';
import { GenrePageContainer } from './containers/genre';
import { PersonPageContainer } from './containers/person';
import { NotFoundError } from './components/shared';

export default () => (
  <Switch>
    <Route path="/" exact component={HomePageContainer} />
    <Route path="/insights" exact component={InsightsPageContainer} />
    <Route path="/movie/:slug" component={MoviePageContainer} />
    <Route path="/genre/:id" component={GenrePageContainer} />
    <Route path="/person/:type/:name" component={PersonPageContainer} />
    <Route component={NotFoundError} />
  </Switch>
);
