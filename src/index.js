/* eslint-env browser */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import App from './components/App/App';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  body {
   background-color: #202c37;
  }
`;

const root = createRoot(document.querySelector('.root'));

root.render(
  <Provider store={store}>
    <Global />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
