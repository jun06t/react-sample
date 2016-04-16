import AppDispatcher from '../dispatcher/dispatcher.jsx';

var FormAction = {
  act: function (value) {
    AppDispatcher.dispatch({
      actionType: "test",
      value: value
    });
  }
};

module.exports = FormAction;
