import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';

import store from './store/initialStore';
import MainPage from './pages/MainPage';

import GlobalStyles from './globalStyles';
import MainRouter from './router/index';

const App = () => (
    <Provider store={store}>
      <GlobalStyles/>
      <MainPage/>
      <MainRouter />
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
