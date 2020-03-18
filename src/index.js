import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import * as serviceWorker from './serviceWorker';

import store from './store/initialStore';
import MainPage from './pages/MainPage';


function App() {
  return (
    <Provider store={store}>
      <MainPage/>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
