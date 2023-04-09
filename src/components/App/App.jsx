import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { RouterElement } from '@routes';
import { toggleHistory } from '@store/slices/historySlice';

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
  const dispatch = useDispatch();

  useEffect(() => {
    const isHistoryShown = localStorage.getItem('show-history');
    const showHistory = isHistoryShown === 'true' ? true : false;
    const action = toggleHistory({ showHistory });
    dispatch(action);
  }, []);

  return (
    <Theme>
      <Global />
      <Header />
      <RouterElement />
    </Theme>
  );
};

export default App;
