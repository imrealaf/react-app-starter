import React from 'react';
import { Route, Switch } from 'react-router-dom';

import * as routes from '../constants/routes';
import { Home, NotFound } from './pages';

const Routes = () => {
  return (
    <Switch>
      {/**
       * Home
       * @path /
       * @access public
       */}
      <Route exact={true} path={routes.HOME} component={Home} />

      {/**
       * 404 page
       * @access public
       */}
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
