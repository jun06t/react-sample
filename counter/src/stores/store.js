import CounterDispatcher from '../dispatcher/dispatcher';
import Events from 'events';
import assign from 'object-assign';

var EventEmitter = Events.EventEmitter;

var count = {
  value: 0
};

function increment() {
  count.value++;
}

function decrement() {
  count.value--;
}

var CounterStore = assign({}, EventEmitter.prototype, {
  getAll: function() {
    return count;
  },
  emitChange: function() {
    this.emit('change');
  },
  addChangeListener: function(callback) {
    this.on('change', callback);
  },
  removeChangeListener: function() {
    this.removeListener('change', callback);
  }
});

CounterDispatcher.register((action) => {
  switch(action.actionType) {
    case 'increment':
      increment();
      CounterStore.emitChange();
      break;
    case 'decrement':
      decrement();
      CounterStore.emitChange();
      break;
    default:
  }
});

module.exports = CounterStore;
