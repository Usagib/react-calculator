import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: Number.parseInt(this.props.buttonName, 10),
    }
  }

  render() {
    return (
      <button className = "button" style = { { width: this.props.width, background: this.props.color } }>
        { this.props.buttonName }
      </button>
    );
  }
}

Button.defaultProps= {
  buttonName: '',
  color: 'orange',
  width: '25%',
};

Button.propTypes = {
  buttonName: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string,
};
