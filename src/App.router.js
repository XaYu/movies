import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Router from 'react-router-dom/BrowserRouter';
import { AppContent } from './content/content';
import { Details } from './content/details/details';

export function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={AppContent} />
        <Route
          path="/movies/:id"
          render={({ match }) => <Details id={match.params.id} type="Movie" />}
        />
        <Route
          path="/series/:id"
          render={({ match }) => <Details id={match.params.id} type="Serie" />}
        />
      </Switch>
    </Router>
  );
}

export default AppRouter;
