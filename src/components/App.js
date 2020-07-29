import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../index.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(button) {
    this.setState(state => calculate(
      {
        total: state.total,
        next: state.next,
        operation: state.operation,
      }, button,
    ));
  }

  render() {
    const { total, next } = this.state;
    const result = next || total;
    return (
      <div id="Calcualtor">
        <Display total={result} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
