import React, {Component} from 'react';

class FormDisplay extends Component {
  render() {
    var message = this.props.data;
    return (
      <div>{message}</div>
    );
  }
}

module.exports = FormDisplay;
