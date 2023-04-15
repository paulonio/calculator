import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '@styles/theme';

const Theme = ({ children }) => {
  const theme = useSelector((state) => state.theme.theme);
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};

export default Theme;
