import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [isOpenForm, setOpenForm] = useState(false);

  const saveExpenseHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString()
    };
    toggleFormHandler();

    // pass to parent
    props.onAddExpense(expenseData);
  };
  const toggleFormHandler = () => {
    setOpenForm(!isOpenForm);
  };

  if (isOpenForm) {
    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpense={saveExpenseHandler} onCancelForm={toggleFormHandler} />
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <button onClick={toggleFormHandler}>Add Expense</button>
      </div>
    );
  }
};

export default NewExpense;
