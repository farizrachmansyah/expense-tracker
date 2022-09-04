import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import styled from 'styled-components';

const NewExpenseContainer = styled.div`
  background-color: #a892ee;
  padding: 1rem;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);

  & button {
    font: inherit;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 1px solid #40005d;
    background-color: #40005d;
    color: white;
    border-radius: 12px;
    margin-right: 1rem;
  }

  & button:hover,
  & button:active {
    background-color: #510674;
    border-color: #510674;
  }

  & button.alternative {
    color: #220131;
    border-color: transparent;
    background-color: transparent;
  }

  & button.alternative:hover,
  & button.alternative:active {
    background-color: #ddb3f8;
  }
`;

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
      <NewExpenseContainer>
        <ExpenseForm onSaveExpense={saveExpenseHandler} onCancelForm={toggleFormHandler} />
      </NewExpenseContainer>
    );
  } else {
    return (
      <NewExpenseContainer>
        <button onClick={toggleFormHandler}>Add Expense</button>
      </NewExpenseContainer>
    );
  }
};

export default NewExpense;
