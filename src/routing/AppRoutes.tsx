import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Login } from 'app/login/Login';
import { ProductsContainer } from 'app/products/ProductsContainer';

import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => {
  return (
    <Switch>
      <Route
        path={ AppRoute.Home }
        exact
        component={ ProductsContainer }
      />
      <Route
        path={ AppRoute.Login }
        component={ Login }
      />

      <Redirect to={ AppRoute.Home } />
    </Switch>
  );
};
