import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { Provider } from 'react-redux';

import './index.css';
import * as serviceWorker from './serviceWorker';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import store from './store/initialStore';


const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  align-items: center;
  background: #142136;
`;

function App() {
  return (
    <Provider store={store}>
      <AppWrapper>
        <SearchBar/>
        <WeatherCard/>
      </AppWrapper>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
