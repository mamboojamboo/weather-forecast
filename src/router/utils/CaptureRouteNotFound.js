import { withRouter } from 'react-router-dom';
// Todo error not found page

export default withRouter(({ children, location }) => (
  location && location.state && location.state.notFoundError
    ? '404 Page not found'
    : children));
