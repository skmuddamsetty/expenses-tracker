import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import { getVisibleExpenses } from '../selectors/expenses';

const ExpenseList = props => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
      {props.expenses.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No expenses</span>
        </div>
      ) : (
        props.expenses.map(expense => {
          return <ExpenseListItem key={expense.id} {...expense} />;
        })
      )}
    </div>
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
