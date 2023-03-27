import React from 'react';
import styled from 'styled-components';
import Flex from '../Flex/Flex';
import HistoryList from '../HistoryList/HistoryList';
import Title from '../Title/Title';

const StyledHistory = styled.div`
  background-color: black;
  height: calc(100vh - 80px);
  width: 25%;
  padding: 16px;
`;

const History = (props) => {
  return (
    <StyledHistory {...props}>
      <Flex align="center" justify="center">
        <Title as="h2">History</Title>
      </Flex>
      <HistoryList />
    </StyledHistory>
  );
};

export default History;
