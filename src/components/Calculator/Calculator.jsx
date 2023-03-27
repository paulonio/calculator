import React from 'react';
import styled from 'styled-components';
import Buttons from '../Buttons/Buttons';
import Input from '../Input/Input';

const StyledCalculator = styled.div`
  max-width: 75%;
  height: calc(100vh - 80px);
  padding: 16px 20px;
`;

const Calculator = (props) => {
  return (
    <StyledCalculator {...props}>
      <Input />
      <Buttons />
    </StyledCalculator>
  );
};

export default Calculator;
