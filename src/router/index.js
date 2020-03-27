import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { CaptureRouteNotFound, CaptureErrorBoundary } from './utils';

import { history } from '../store/initialStore';

import MainPage from '../pages/MainPage';

export const Router = () => (
    <CaptureErrorBoundary>
      <CaptureRouteNotFound>
        <Switch>
          <Route exact path='/main' title='Main Page' components={MainPage} />
          <Redirect from='/' to='main' />
          <Redirect to={{ state: { notFoundError: true } }} />
        </Switch>
      </CaptureRouteNotFound>
    </CaptureErrorBoundary>
);

export default class MainRouter extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Router />
      </ConnectedRouter>
    );
  }
}
