import React from 'react';

class FormDisplay extends React.Component {
  render() {
    var message = this.props.data;
    return (
      <div>{message}</div>
    );
  }
}

module.exports = FormDisplay;
