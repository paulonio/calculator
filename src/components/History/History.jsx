import React from 'react';
import { List, ListItem, Wrapper, Title } from './styled';
import { useSelector } from 'react-redux';

const History = () => {
  const history = useSelector((state) => state.calculator.history);

  return (
    <Wrapper>
      <Title>History</Title>
      <List>
        {history.map((expression, id) => (
          <ListItem key={id.toString()}>{`${id + 1}. ${expression}`}</ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

export default History;
