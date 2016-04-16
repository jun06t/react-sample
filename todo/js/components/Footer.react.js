import React from 'react';
import TodoActions from '../actions/TodoActions';

class Footer extends React.Component {
  render() {
    return (
      <header id="footer">
      </header>
    );
  }
  _onSave(text) {
    if (text.trim()) {
      TodoActions.create(text);
    }
  }
}

module.exports = Footer;
