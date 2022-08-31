import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');
  const filteredExpense = props.data.filter((expense) => expense.date.getFullYear().toString() === filteredYear);

  const saveYearHandler = (year) => {
    setFilteredYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onSaveYear={saveYearHandler} />
      <ExpensesList items={filteredExpense} />
    </Card>
  );
};

export default Expenses;
