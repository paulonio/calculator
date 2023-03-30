import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Buttons from '../Buttons/Buttons';

const StyledCalculator = styled.div`
  max-width: 75%;
  height: calc(100vh - 80px);
  padding: 16px 20px;
`;

const Calculator = (props) => {
  const state = useSelector((state) => state.calculator);

  return (
    <StyledCalculator {...props}>
      <div>
        <div style={{ height: '50px' }}>{state.previousOperations.join('')}</div>
        <div style={{ height: '50px' }}>{state.currentOperand}</div>
      </div>
      <Buttons />
    </StyledCalculator>
  );
};

export default Calculator;
