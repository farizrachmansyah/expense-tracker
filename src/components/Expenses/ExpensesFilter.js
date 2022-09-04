import styled from 'styled-components';

const FilterContainer = styled.div`
  color: white;
  padding: 0 1rem;

  .expenses-filter__control {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
  }

  & label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & select {
    font: inherit;
    padding: 0.5rem 3rem;
    font-weight: bold;
    border-radius: 6px;
  }
`;

const ExpensesFilter = (props) => {
  const changeYear = (event) => {
    props.onSaveYear(event.target.value);
  };

  return (
    <FilterContainer>
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select defaultValue={props.selected} onChange={changeYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </FilterContainer>
  );
};

export default ExpensesFilter;
