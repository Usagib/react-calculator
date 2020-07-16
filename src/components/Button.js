import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: Number.parseInt( this.props.buttonName , 10), // eslint-disable-line react/no-unused-state
    }
  }

  render() {
    const btnWidth =  this.props.width ;
    const btnBackground =  this.props.color ;

    return (
      <button className="button" style={{ width: btnWidth , background: btnBackground }}>
        { this.props.buttonName }
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
