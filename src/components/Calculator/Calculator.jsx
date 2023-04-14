import React from 'react';

import Buttons from '@components/Buttons/Buttons';
import Output from '@components/Output/Output';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';

const Calculator = () => {
  return (
    <ErrorBoundary>
      <Output />
      <Buttons />
    </ErrorBoundary>
  );
};

export default Calculator;
