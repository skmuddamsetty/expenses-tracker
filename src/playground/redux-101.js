import { createStore } from 'redux';
const store = createStore((state = { count: 0 }) => {
  return state;
});
store.getState();
