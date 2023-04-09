import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Current, PreviousResults, Wrapper } from './styled';

const Output = ({ error }) => {
  const state = useSelector((state) => state.calculator);

  return (
    <Wrapper>
      <PreviousResults>{state.previousOperations.join(' ')}</PreviousResults>
      <Current>{error ? error.message : state.currentOperand}</Current>
    </Wrapper>
  );
};

Output.propTypes = {
  error: PropTypes.instanceOf(Error),
};

export default Output;
