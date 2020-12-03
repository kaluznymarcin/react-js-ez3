import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App/* , { PI as shortPI, fn } */ from './App';
import reportWebVitals from './reportWebVitals';

const MSG = "Moja aplikacja w react";

ReactDOM.render(
  <React.StrictMode>
    <App bgColor="#000" desc={MSG}>
      <div>sdjlkfsdf</div>
      <p>fdfdsfs</p>
    </App>
  </React.StrictMode>,
  document.getElementById('my-app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
