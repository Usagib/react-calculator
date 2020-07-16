import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0, // eslint-disable-line react/no-unused-state
    };
  }

  render() {
    const { width, color, buttonName } = this.props;

    return (
      <button
        type="button"
        className="button"
        style={{
          width: width, // eslint-disable-line object-shorthand
          background: color,
        }}
      >
        { buttonName }
      </button>
    );
  }
}

Button.defaultProps = {
  buttonName: '',
  color: 'orange',
  width: '25%',
};

Button.propTypes = {
  buttonName: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string,
};
