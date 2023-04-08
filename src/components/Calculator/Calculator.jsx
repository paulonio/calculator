import React from 'react';
import Buttons from '../Buttons/Buttons';
import Output from '../Output/Output';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const Calculator = () => {
  return (
    <ErrorBoundary>
      <Output />
      <Buttons />
    </ErrorBoundary>
  );
};

export default Calculator;
