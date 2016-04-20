import CounterDispathcer from '../dispatcher/dispatcher';

var CounterActions = {
  increment: function() {
    CounterDispathcer.dispatch({
      actionType: 'increment'
    });
  },
  decrement: function() {
    CounterDispathcer.dispatch({
      actionType: 'decrement'
    });
  }
}

module.exports = CounterActions;
