import uuid from 'uuid';

// ADD_EXPENSE Action Generator
export const addExpense = ({
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
export const removeExpense = ({ id = '' } = {}) => ({
  type: 'REMOVE_EXPENSE',
  expense: {
    id: id
  }
});
// EDIT_EXPENSE Action Generator
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
