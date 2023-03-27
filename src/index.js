/* eslint-env browser */
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import store from './store';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
`;

const root = createRoot(document.querySelector('.root'));

root.render(
  <Provider store={store}>
    <Global />
    <App />
  </Provider>
);
