import React from 'react';
import Header from '../Header/Header';
import styled from 'styled-components';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #6d6d6d;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
    </AppWrapper>
  );
};

export default App;
