import React from 'react';
import ReactDom from 'react-dom';

import FormAction from './action/formAction.jsx';
import FormStore from './store/formStore.jsx';

class FormApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = FormStore.getAll();
  }
  componentDidMount() {
    FormStore.addChangeListener(() => {
      this.setState(TestStore.getAll());
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
  constructor(props) {
    super(props);
  }

  send(e) {
    e.preventDefault();
    var testValue = ReactDom.findDOMNode(this.refs.test_value).value.trim();
    FormAction.act(testValue);
    ReactDom.findDOMNode(this.refs.test_value).value = "";
    return;
  }

  render() {
    return (
      <form>
        <input type="text" ref="test_value" />
        <button onClick={this.send}>送信</button>
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

ReactDom.render(
  <FormApp />,
  document.getElementById("content")
);
