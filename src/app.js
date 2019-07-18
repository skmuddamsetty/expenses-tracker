import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import { getVisibleExpenses } from './selectors/expenses';

// Start Dispatching actions from app.js
const store = configureStore();
store.dispatch(addExpense({ description: 'Water Bill', amount: '4500' }));
store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: '1095' }));
// store.dispatch(setTextFilter('gas'));
// console.log(store.getState());
// console.log(
//   getVisibleExpenses(store.getState().expenses, store.getState().filters)
// );
// End Dispatching actions from app.js
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
