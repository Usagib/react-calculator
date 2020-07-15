import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  render() {
    return (
      <button className="button"> { this.props.buttonName }</button>
    );
  }
}

Button.propTypes = {
  buttonName: PropTypes.string,
};
