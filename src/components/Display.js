import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  console.log(props);
  const { total } = props;
  console.log(total);
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
