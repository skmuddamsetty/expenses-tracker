import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import { getVisibleExpenses } from '../selectors/expenses';

const ExpenseList = props => (
  <div>
    <h1>Expenses List</h1>
    {props.expenses.map(expense => {
      return <ExpenseListItem {...expense} key={expense.id} />;
    })}
  </div>
);
// const ConnectedExpenseList = connect(state => {
//   return {
//     expenses: state.expenses
//   };
// })(ExpenseList);
// export default ConnectedExpenseList;

// this is the most common pattern used rather than creating a seperate const like above and exporting the constant
// export default (ConnectedExpenseList = connect(state => {
//   return {
//     expenses: state.expenses
//   };
// })(ExpenseList));

// this is seperating the params that are being sent to the connect function
const mapStateToProps = state => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
