import React from 'react';
import CounterStore from '../stores/store';
import CounterDisplay from './display.jsx';
import CounterCount from './count.jsx';

class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = CounterStore.getAll();
  }
  componentDidMount() {
    CounterStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    CounterStore.removeChangeListener(this._onChange.bind(this));
  }

  _onChange() {
    var v = CounterStore.getAll();
    this.setState(v);
  }

  render() {
    return (
      <div>
        <CounterDisplay data={this.state.value} />
        <CounterCount />
      </div>
    );
  }
}

module.exports = CounterApp;
