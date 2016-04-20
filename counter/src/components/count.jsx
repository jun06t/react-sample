import React from 'react';
import CounterActions from '../actions/action.jsx'

class CounterCount extends React.Component {
  render() {
    return (
      <form>
        <button onClick={this._increment}>+1</button>
        <button onClick={this._decrement}>-1</button>
      </form>
    );
  }
  _increment() {
    CounterActions.increment();
  }
  _decrement() {
    CounterActions.decrement();
  }
}

module.expores = CounterCount;
