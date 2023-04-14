import React from 'react';

import RouterElement from '@routes';

import Header from '@components/Header/Header';
import Global from '@styles/global';

const App = () => {
  return (
    <>
      <Global />
      <Header />
      <RouterElement />
    </>
  );
};

export default App;
