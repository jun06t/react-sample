import AppDispatcher from '../dispatcher/dispatcher.jsx';
import Events from 'events';
import assign from 'object-assign';

var EventEmitter = Events.EventEmitter;

var _test = {value: null};

var FormStore = assign({}, EventEmitter.prototype, {
  getAll: function () {
    return _test;
  },
  emitChange: function () {
    this.emit("change");
  },
  addChangeListener: function (callback) {
    this.on("change", callback);
  },
  dispatcherIndex: AppDispatcher.register(function (payload) {
    if (payload.actionType === "test") {
      _test.value = payload.value;
      FormStore.emitChange();
    }
  })
});

module.exports = FormStore;
