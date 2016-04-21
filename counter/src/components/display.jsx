import React from 'react';
var ReactPropTypes = React.PropTypes;

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

CounterDisplay.propTypes = {
  data: ReactPropTypes.number.isRequired
};

module.exports = CounterDisplay;
