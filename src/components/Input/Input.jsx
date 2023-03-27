import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  display: block;
  height: 80px;
  width: 100%;
  background-color: rgb(22, 22, 22, 0.6);
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 20px;
  line-height: 24px;
`;
const Input = (props) => {
  return <StyledInput {...props} />;
};

export default Input;
