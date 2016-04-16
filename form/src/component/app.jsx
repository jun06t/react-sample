import React from 'react';
import ReactDOM from 'react-dom';

import FormStore from '../store/formStore.jsx';
import FormSend from './send.jsx'
import FormDisplay from './display.jsx'

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

module.exports = FormApp;
