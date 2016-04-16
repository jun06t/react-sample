import React from 'react';
import ReactDOM from 'react-dom';

import FormAction from './action/formAction.jsx';
import FormStore from './store/formStore.jsx';

class FormApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = FormStore.getAll();
  }
  componentDidMount() {
    FormStore.addChangeListener(() => {
      this.setState(FormStore.getAll());
    });
  }
  render() {
    return (
      <div className="testApp">
        <FormSend />
        <FormDisplay data={this.state.value} />
      </div>
    );
  }
}

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

class FormDisplay extends React.Component {
  render() {
    var message = this.props.data;
    return (
      <div>{message}</div>
    );
  }
}

ReactDOM.render(
  <FormApp />,
  document.getElementById("content")
);
