import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './components/Portfolio/Portfolio.js';
import R3F from './components/R3F/R3F.js';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from 'gsap/TextPlugin';

import './stylesheets/reset.css';
import './stylesheets/style.css';
import './stylesheets/portfolio.css';
import './stylesheets/projects.css';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

ReactDOM.render(
  <React.StrictMode>
    <>
      <R3F />
      <Portfolio />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
