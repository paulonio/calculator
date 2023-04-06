import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterElement } from '../../routes';
import { createGlobalStyle } from 'styled-components';
import Header from '../Header/Header';
import Theme from '../Theme/Theme';
import { toggleHistory } from '../../store/slices/historySlice';

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
    const showHistory = Boolean(localStorage.getItem('show-history'));

    if (showHistory) {
      const action = toggleHistory({ showHistory });
      dispatch(action);
    }
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
