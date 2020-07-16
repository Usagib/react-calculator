import React from 'react';
import PropTypes from 'prop-types';

export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0, // eslint-disable-line react/no-unused-state
    };
  }

  render() {
    const { result } = this.props;
    return (
      <div id="Display">
        <p className="result">{ result }</p>
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
