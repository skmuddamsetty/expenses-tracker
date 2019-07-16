import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE Action Generator
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});
// REMOVE_EXPENSE Action Generator
const removeExpense = ({ id = '' } = {}) => ({
  type: 'REMOVE_EXPENSE',
  expense: {
    id: id
  }
});
// EDIT_EXPENSE
// REMOVE_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// EXPENSES REDUCER
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => {
        return id !== action.expense.id;
      });
    default:
      return state;
  }
};
// FILTERS REDUCER
const filtersReducerDefaultState = {
  text: 'rent',
  sortBy: 'amount',
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(addExpense({ description: 'desc', amount: 100 }));
const expenseTwo = store.dispatch(
  addExpense({ description: 'desc', amount: 3 })
);
store.dispatch(removeExpense({ id: expenseTwo.expense.id }));
// const demoState = {
//   expenses: [
//     {
//       id: 'dawdkjahdjkahwjdk',
//       description: 'January Rent',
//       note: 'This was the final payment',
//       amount: 54500,
//       createdAt: 0
//     },
//     {
//       id: 'gdfgdfgdfg',
//       description: 'February Rent',
//       note: 'This was the final payment',
//       amount: 65500,
//       createdAt: 0
//     }
//   ],
//   filters: {
//     text: 'rent',
//     sortBy: 'amount',
//     startDate: undefined,
//     endDate: undefined
//   }
// };
