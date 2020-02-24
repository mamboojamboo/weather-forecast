import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';


function App() {
  return (
    <Fragment>
      <SearchBar/>
      <WeatherCard/>
    </Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
