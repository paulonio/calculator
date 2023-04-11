import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Current, PreviousResults, Wrapper } from './styled';

const Output = ({ error }) => {
  const current = useSelector((state) => state.calculator.currentOperand);
  const previous = useSelector((state) => state.calculator.previousOperations, shallowEqual);

  return (
    <Wrapper>
      <PreviousResults data-test-id="previous-output">{previous.join(' ')}</PreviousResults>
      <Current data-test-id="current-output">{error ? error.message : current}</Current>
    </Wrapper>
  );
};

Output.propTypes = {
  error: PropTypes.instanceOf(Error),
};

export default Output;
