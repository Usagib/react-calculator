import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  render() {
    return (
      <button className='button' style={{width: this.props.width, background: this.props.color}}>
        { this.props.buttonName }
      </button>
    );
  }
}

Button.defaultProps= {
  color: 'orange',
  width: '25%',
};

Button.propTypes = {
  buttonName: PropTypes.string,
};
