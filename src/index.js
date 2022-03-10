import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './components/Portfolio.js';
import R3F from './components/R3F.js';
import './stylesheets/reset.css';
import './stylesheets/style.css';
import './stylesheets/welcome.css';

ReactDOM.render(
  <React.StrictMode>
    <>
      <R3F />
      <Portfolio />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
