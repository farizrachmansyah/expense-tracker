import styled from 'styled-components';

const CardContainer = styled.div`
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

const Card = (props) => {
  const classes = `${props.className}`;
  return <CardContainer className={classes}>{props.children}</CardContainer>;
};

export default Card;
