import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import chooseAction from '../../utils/chooseAction';
import { ButtonElement } from './styled';
import { getResult } from '../../utils/getResult';
import { evaluate } from '../../store/slices/calculatorSlice';

const Button = ({ type, value, children }, ...props) => {
  const state = useSelector((state) => state.calculator);
  const dispatch = useDispatch();
  const action = chooseAction(type, value);

  const clickHandler = () => {
    if (type === 'evaluate') {
      try {
        const result = getResult(state);
        const action = evaluate({ result });
        return dispatch(action);
      } catch (error) {
        const action = evaluate({ result: error });
        return dispatch(action);
      }
    } else {
      return dispatch(action);
    }
  };

  if (state.error) {
    if (type === 'clear') {
      return (
        <ButtonElement onClick={clickHandler} {...props}>
          {children}
        </ButtonElement>
      );
    } else {
      return (
        <ButtonElement disabled onClick={clickHandler} {...props}>
          {children}
        </ButtonElement>
      );
    }
  }

  return (
    <ButtonElement onClick={clickHandler} {...props}>
      {children}
    </ButtonElement>
  );
};

export default Button;
