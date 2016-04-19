import React from 'react';
import TodoStore from '../stores/TodoStore';
import MainSection from './MainSection.react';
import Header from './Header.react';
import Footer from './Footer.react';

function getTodoState() {
  return {
    allTodos: TodoStore.getAll(),
    areAllComplete: TodoStore.areAllComplete()
  };
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = getTodoState();
  }

  componentDidMount() {
    TodoStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange.bind(this));
  }

  render() {
    return (
      <div>
        <Header />
        <MainSection
          allTodos={this.state.allTodos}
          areAllComplete={this.state.areAllComplete}
        />
        <Footer allTodos={this.state.allTodos} />
      </div>
    );
  }

  _onChange() {
    this.setState(getTodoState());
  }
};

module.exports = TodoApp;
