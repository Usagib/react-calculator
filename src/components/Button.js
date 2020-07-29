import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  width,
  color,
  buttonName,
  clickHandler,
}) => return (
    <button
      type="button"
      className="button"
      style={{
        width: width, // eslint-disable-line object-shorthand
        background: color,
      }}
      onClick={() => {
        clickHandler(buttonName);
      }}
    >
      { buttonName }
    </button>
  );

Button.defaultProps = {
  buttonName: '',
  color: 'orange',
  width: '25%',
};

Button.propTypes = {
  buttonName: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
