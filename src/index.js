import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';

import store from './store/initialStore';

import GlobalStyles from './globalStyles';
import MainRouter from './router/index';

const App = () => (
    <Provider store={store}>
      <Fragment>
        <GlobalStyles/>
        <MainRouter />
      </Fragment>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
