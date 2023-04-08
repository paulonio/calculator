import React from 'react';
import { useSelector } from 'react-redux';
import { Current, PreviousResults, Wrapper } from './styled';

const Output = ({ error }) => {
  const state = useSelector((state) => state.calculator);

  return (
    <Wrapper>
      <PreviousResults>{state.previousOperations.join(' ')}</PreviousResults>
      <Current>{error ? error.error : state.currentOperand}</Current>
    </Wrapper>
  );
};

export default Output;
