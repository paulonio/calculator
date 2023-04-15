import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { clear, evaluate } from '@store/slices/calculatorSlice';

import chooseAction from '@utils/chooseAction';
import getResult from '@utils/getResult';

const withClickHandler = (Component) => {
  return ({ type, value, ...otherProps }) => {
    const current = useSelector((state) => state.calculator.currentOperand);
    const previous = useSelector((state) => state.calculator.previousOperations, shallowEqual);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const action = chooseAction(type, value);

    useEffect(() => {
      if (error) {
        throw error;
      }
    }, [error]);

    const handleClick = () => {
      if (type === 'evaluate' && previous.length > 0) {
        try {
          const result = getResult(current, previous);
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

    return <Component handleClick={handleClick} {...otherProps} />;
  };
};

export default withClickHandler;
