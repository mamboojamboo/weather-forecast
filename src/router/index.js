import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { CaptureRouteNotFound, CaptureErrorBoundary } from './utils';

import { history } from '../store/initialStore';

import MainPage from '../pages/MainPage';
import MainWidget from '../pages/MainWidget';

export const Router = () => (
  <CaptureErrorBoundary>
    <CaptureRouteNotFound>
      <Switch>
        <Route exact path="/main" title="Main Page" component={MainPage} />
        <Route exact path="/" title="Main Widget" component={MainWidget} />
        <Redirect to={{ state: { notFoundError: true } }} />
      </Switch>
    </CaptureRouteNotFound>
  </CaptureErrorBoundary>
);

class MainRouter extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Router />
      </ConnectedRouter>
    );
  }
}

export default MainRouter;
