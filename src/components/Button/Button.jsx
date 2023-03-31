import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import chooseAction from '../../utils/chooseAction';

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
  }
  &:nth-child(5n) {
    margin-right: 0;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
  &:active {
    background-color: gray;
  }
`;

const Button = ({ type, value, children }, ...props) => {
  const dispatch = useDispatch();

  const action = chooseAction(type, value);
  const clickHandler = () => dispatch(action);

  return (
    <StyledButton onClick={clickHandler} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
