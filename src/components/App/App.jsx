import React from 'react';
import Header from '../Header/Header';
import styled from 'styled-components';
import Calculator from '../Calculator/Calculator';
import History from '../History/History';
import Main from '../Main/Main';

// const AppWrapper = styled.div`
//   margin: 0 auto;
//   min-height: 100vh;
//   display: flex;
//   flex-wrap: wrap;
//   background-color: #6d6d6d;
// `;

const App = () => {
  return (
    <>
      <Header />
      <Main />
      {/* <Calculator />
      <History /> */}
    </>
  );
};

export default App;
