import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { changeTheme } from '../../store/slices/themeSlice';

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
  const dispatch = useDispatch();
  const currentTheme = theme === 'light' ? light : dark;

  useEffect(() => {
    const theme = localStorage.getItem('theme');

    if (theme) {
      const action = changeTheme({ theme });
      dispatch(action);
    }
  }, []);

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};

export default Theme;
