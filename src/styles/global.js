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

export default Global;
