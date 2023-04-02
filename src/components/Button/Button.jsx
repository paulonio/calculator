import React from 'react';
import { useDispatch } from 'react-redux';
import chooseAction from '../../utils/chooseAction';
import { ButtonElement } from './styled';

const Button = ({ type, value, children }, ...props) => {
  const dispatch = useDispatch();

  const action = chooseAction(type, value);
  const clickHandler = () => dispatch(action);

  return (
    <ButtonElement onClick={clickHandler} {...props}>
      {children}
    </ButtonElement>
  );
};

export default Button;
