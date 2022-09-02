import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const dataValues = props.data.map((item) => item.value);
  const highestValue = Math.max(...dataValues);
  return (
    <div className="chart">
      {props.data.map((item) => (
        <ChartBar key={item.label} value={item.value} maxValue={highestValue} label={item.label} />
      ))}
    </div>
  );
};

export default Chart;
