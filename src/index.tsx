import React from 'react';
import ReactDOM from 'react-dom';
import { MainPage } from './pages/MainPage';
import GlobalStyles from './app/globalStyles';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <MainPage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
