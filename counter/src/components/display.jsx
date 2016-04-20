import React from 'react';

class CounterDisplay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>{this.props.data}</h1>
      </div>
    );
  }
}

module.exports = CounterDisplay;
