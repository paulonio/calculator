/* eslint-env browser */
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    bix-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
`;

const root = createRoot(document.querySelector('.root'));

root.render(
  <>
    <Global />
    <App />
  </>
);
