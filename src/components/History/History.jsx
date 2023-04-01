import React from 'react';
import { List, ListItem, Wrapper, Title } from './styled';

const History = () => {
  return (
    <Wrapper>
      <Title>History</Title>
      <List>
        <ListItem>5+3</ListItem>
        <ListItem>8-3</ListItem>
        <ListItem>5-3+5+7-6+9</ListItem>
      </List>
    </Wrapper>
  );
};

export default History;
