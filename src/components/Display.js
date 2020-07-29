import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { total } = props;
  return (
    <div id="Display">
      <p className="result">{ total }</p>
    </div>
  );
};

Display.defaultProps = {
  total: '0',
};

Display.propTypes = {
  total: PropTypes.string,
};

export default Display;
