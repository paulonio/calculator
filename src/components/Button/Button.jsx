import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import chooseAction from '../../utils/chooseAction';
import { ButtonElement } from './styled';
import { getResult } from '../../utils/getResult';
import { clear, evaluate } from '../../store/slices/calculatorSlice';

const Button = ({ type, value, children, disabled, resetError }, props) => {
  const state = useSelector((state) => state.calculator);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const action = chooseAction(type, value);

  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  const clickHandler = () => {
    if (type === 'evaluate') {
      try {
        const result = getResult(state);
        const action = evaluate({ result });
        return dispatch(action);
      } catch (error) {
        const clearOutput = clear();
        dispatch(clearOutput);
        setError(error);
      }
    } else {
      return dispatch(action);
    }
  };

  return (
    <ButtonElement onClick={resetError ? resetError : clickHandler} disabled={disabled} {...props}>
      {children}
    </ButtonElement>
  );
};

export default Button;
