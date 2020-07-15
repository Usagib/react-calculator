import React from 'react';
import PropTypes from 'prop-types';

export default class Display extends React.Component {
  render() {
    const result = String(this.props.result);
    return (
      <div id="Display">
        <h1>{result}</h1>
      </div>
    );
  }
}

Display.defaultProps = {
  result: 0,
};

Display.propTypes = {
  result: PropTypes.string,
};