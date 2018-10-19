import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home, PageNotFound } from './pages';

const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/404" component={PageNotFound} />
    <Redirect to="/404" />
  </Switch>
);

export default routes;
