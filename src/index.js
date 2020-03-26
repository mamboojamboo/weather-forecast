import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';

import store from './store/initialStore';
import MainPage from './pages/MainPage';

import GlobalStyles from './globalStyles';

const App = () => (
    <Provider store={store}>
      <GlobalStyles/>
      <MainPage/>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
