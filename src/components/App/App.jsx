import React from 'react';
import Header from '../Header/Header';
import styled from 'styled-components';
import Calculator from '../Calculator/Calculator';
import History from '../History/History';

const AppWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  background-color: #6d6d6d;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Calculator />
      <History />
    </AppWrapper>
  );
};

export default App;
