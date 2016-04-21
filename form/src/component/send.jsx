import React from 'react';
import ReactDOM from 'react-dom';
import FormAction from '../action/formAction';

class FormSend extends React.Component {
  send(e) {
    e.preventDefault();
    var testValue = ReactDOM.findDOMNode(this.refs.test_value).value.trim();
    FormAction.act(testValue);
    ReactDOM.findDOMNode(this.refs.test_value).value = "";
    return;
  }

  render() {
    return (
      <form>
        <input type="text" ref="test_value" />
        <button onClick={this.send.bind(this)}>送信</button>
      </form>
    );
  }
}

module.exports = FormSend;
