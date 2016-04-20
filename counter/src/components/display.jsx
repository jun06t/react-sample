import React from 'react';

class CounterDisplay extends React.Component {
  render() {
    return (
      <div>
        {this.props.data}
      </div>
    );
  }
}

module.exports = CounterDisplay;
