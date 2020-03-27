import { getContext, resetContext } from 'kea';
import thunkPlugin from 'kea-thunk';
import localStoragePlugin from 'kea-localstorage';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import reduxReset from 'redux-reset';

const history = createBrowserHistory();

resetContext({
  plugins: [
    thunkPlugin,
    localStoragePlugin],
  createStore: {
    middleware: [routerMiddleware(history)],
    reducers: {
      router: connectRouter(history)
    },
    enhancers: [reduxReset()]
  }
});

export default getContext().store;

export { history };
