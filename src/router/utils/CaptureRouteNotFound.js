import React from 'react';
import { withRouter } from 'react-router-dom';
import NotFoundPage from '../../pages/NotFoundPage';

export default withRouter(({ children, location }) => (
  location && location.state && location.state.notFoundError
    ? <NotFoundPage/>
    : children));
