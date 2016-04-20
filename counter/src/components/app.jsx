import React from 'react';
import CounterStore from '../stores/store.jsx';
import CounterDisplay from './display.jsx';

class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = CounterStore.getAll();
  }
  componentDidMount() {
    CounterStore.addChangeListener(() => {
      this.setState(CounterStore.getAll());
    })
  }
  render() {
    return (
      <div>
        <CounterDisplay data={this.state.value} />
      </div>
    );
  }
}

module.exports = CounterApp;