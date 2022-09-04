import ChartBar from './ChartBar';
import styled from 'styled-components';

const ChartContainer = styled.div`
  padding: 1rem;
  border-radius: 12px;
  background-color: #f8dfff;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
`;

const Chart = (props) => {
  const dataValues = props.data.map((item) => item.value);
  const highestValue = Math.max(...dataValues);
  return (
    <ChartContainer>
      {props.data.map((item) => (
        <ChartBar key={item.label} value={item.value} maxValue={highestValue} label={item.label} />
      ))}
    </ChartContainer>
  );
};

export default Chart;
