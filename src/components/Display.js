import React from 'react';
import PropTypes from 'prop-types';

export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: this.props.result,
    }
  }

  render() {
    const result = String(this.state.result);
    return (
      <div id="Display">
        <p className="result">{result}</p>
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
