import React from "react";
import ReactDom from "react-dom";

import TodoApp = require('./components/TodoApp.react');

ReactDom.render(
  <TodoApp />,
  document.getElementById('todoapp')
);
