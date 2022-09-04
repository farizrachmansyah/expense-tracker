import ExpenseItem from './ExpenseItem';
import styled from 'styled-components';

const ExpensesFound = styled.ul`
  list-style: none;
  padding: 0;

  &__fallback {
    color: white;
    text-align: center;
  }
`;
const ExpensesNotFound = styled.h2`
  margin: 32px 0 16px 0;
  color: white;
  text-align: center;
`;

const ExpensesList = (props) => {
  if (props.items.length > 0) {
    return (
      <ExpensesFound>
        {props.items.map((expense) => (
          <ExpenseItem expense={expense} key={expense.id} />
        ))}
      </ExpensesFound>
    );
  } else {
    return <ExpensesNotFound>No Expenses Found.</ExpensesNotFound>;
  }
};

export default ExpensesList;
