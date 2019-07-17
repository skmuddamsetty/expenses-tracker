import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import { getVisibleExpenses } from './selectors/expenses';

const store = configureStore();
store.dispatch(addExpense({ description: 'Water Bill' }));
store.dispatch(addExpense({ description: 'Gas Bill' }));
store.dispatch(setTextFilter('bill'));
console.log(store.getState());
console.log(
  getVisibleExpenses(store.getState().expenses, store.getState().filters)
);
ReactDOM.render(<AppRouter />, document.getElementById('app'));
