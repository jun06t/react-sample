import React from 'react';
import CounterActions from '../actions/action'

class CounterCount extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this._increment}>+1</button>
        <button onClick={this._decrement}>-1</button>
      </div>
    );
  }
  _increment() {
    CounterActions.increment();
  }
  _decrement() {
    CounterActions.decrement();
  }
}

module.exports = CounterCount;
