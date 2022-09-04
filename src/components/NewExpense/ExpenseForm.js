import { useState } from 'react';
import styled from 'styled-components';

const FormControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;

  & label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
  }

  & input {
    font: inherit;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    width: 20rem;
    max-width: 100%;
  }
`;

const FormActions = styled.div`
  text-align: right;
`;

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: ''
  });

  const changeTitle = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        title: event.target.value
      };
    });
  };
  const changeAmount = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        amount: event.target.value
      };
    });
  };
  const changeDate = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        date: event.target.value
      };
    });
  };

  const submit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.title,
      amount: userInput.amount,
      date: new Date(userInput.date)
    };

    // pass to parent
    props.onSaveExpense(expenseData);

    // reset form
    setUserInput({
      title: '',
      amount: '',
      date: ''
    });
  };

  return (
    <form onSubmit={submit}>
      <FormControls>
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" value={userInput.title} onChange={changeTitle} required />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input type="number" value={userInput.amount} min="100" step="100" onChange={changeAmount} required />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input type="date" value={userInput.date} min="2019-01-01" max="2022-12-31" onChange={changeDate} required />
        </div>
      </FormControls>
      <FormActions>
        <button type="button" onClick={props.onCancelForm}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </FormActions>
    </form>
  );
};

export default ExpenseForm;
