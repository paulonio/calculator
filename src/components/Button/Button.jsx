import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 80px;
  height: 80px;
  margin: 16px;
  background-color: rgb(22, 22, 22);
  color: white;
  font-size: 40px;
  line-height: 48px;
  border: none;
  border-radius: 4px;
  transition: opacity 0.3s;
  &:nth-child(5n + 1) {
    margin-left: 0;
    background-color: red;
  }
  &:nth-child(5n) {
    margin-right: 0;
    background-color: blue;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
  &:active {
    background-color: gray;
  }
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
