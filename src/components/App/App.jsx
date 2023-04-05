import React from 'react';
import { RouterElement } from '../../routes';
import { createGlobalStyle } from 'styled-components';
import Header from '../Header/Header';
import Theme from '../Theme/Theme';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  body {
   background-color: ${({ theme }) => theme.colors.backgroundBody};
   /* background-color: #202c37; */
  }
`;

const App = () => {
  return (
    <Theme>
      <Global />
      <Header />
      <RouterElement />
    </Theme>
  );
};

export default App;
