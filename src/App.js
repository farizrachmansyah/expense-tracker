import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  // check for the expenses storage
  let EXPENSES_STORAGE;
  if (localStorage.getItem('EXPENSES_STORAGE') === null) {
    EXPENSES_STORAGE = [];
  } else {
    EXPENSES_STORAGE = JSON.parse(localStorage.getItem('EXPENSES_STORAGE'));
    EXPENSES_STORAGE.forEach((item) => {
      item.date = new Date(item.date);
    });
  }

  const [expenses, setExpenses] = useState(EXPENSES_STORAGE);
  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      const data = [...prevState, expense];
      localStorage.setItem('EXPENSES_STORAGE', JSON.stringify(data));
      return data;
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  );
};

export default App;
