import React from 'react';
import { useSelector } from 'react-redux';

import { ThemeProvider } from 'styled-components';

const dark = {
  name: 'dark-theme',
  colors: {
    backgroundHeader: '#2b3945',
    backgroundBody: '#202c37',
    backgroundButton: '#121420',
    backgroundButtonHover: '#1e202b',
    text: '#ffffff',
  },
};

const light = {
  name: 'light-theme',
  colors: {
    backgroundHeader: '#333333',
    backgroundBody: '#e7e7e7',
    backgroundButton: '#cccccc',
    backgroundButtonHover: '#868994',
    text: '#121420',
  },
};

const Theme = ({ children }) => {
  const theme = useSelector((state) => state.theme.theme);
  const currentTheme = theme === 'light' ? light : dark;

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};

export default Theme;
