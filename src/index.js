import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';
// var PropTypes = require('prop-types'); // ES5 with npm
// import Big from './big.mjs';
const Big = require('big.js');

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 1,
    };
  }
  render() {
    return (
      <div className="container">
        <h1> Test result: {this.state.test} </h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Test />,
  document.getElementById('root')
)
