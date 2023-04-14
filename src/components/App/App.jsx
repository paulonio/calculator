import React from 'react';

import RouterElement from '@routes';

import Header from '@components/Header/Header';
import Theme from '@components/Theme/Theme';

import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  body {
   background-color: ${({ theme }) => theme.colors.backgroundBody};
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
