import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import PropTypes from 'prop-types'; // eslint-disable-line no-unused-vars
// var PropTypes = require('prop-types'); // ES5 with npm
// import Big from './big.mjs';
const Big = require('big.js'); // eslint-disable-line no-unused-vars


ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
