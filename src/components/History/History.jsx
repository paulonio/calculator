import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { List, ListItem, Wrapper, Title } from './styled';

const History = () => {
  const history = useSelector((state) => state.calculator.history, shallowEqual);

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
