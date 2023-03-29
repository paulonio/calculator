import { createSlice } from '@reduxjs/toolkit';
import evals from '../../utils/evals';

const initialState = { previousOperand: '', operation: '', currentOperand: '', overwrite: false };

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addDigit: (state, action) => {
      if (action.payload.digit === '0' && state.currentOperand === '0') {
        return state;
      }
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: action.payload.digit,
          overwrite: false,
        };
      }
      if (state.currentOperand === '0') {
        return {
          ...state,
          currentOperand: action.payload.digit,
        };
      }
      return {
        ...state,
        currentOperand: state.currentOperand + action.payload.digit,
      };
    },
    addDot: (state, action) => {
      if (state.currentOperand.includes('.')) {
        return state;
      }
      return {
        ...state,
        currentOperand: state.currentOperand + action.payload.dot,
      };
    },
    deleteDigit: (state) => {
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    },
    clear: () => {
      return initialState;
    },
    operate: (state, action) => {
      if (!!state.operation) {
        return {
          ...state,
          operation: action.payload.operation,
        };
      }
      if (!state.currentOperand) {
        return state;
      }
      return {
        ...state,
        previousOperand: state.currentOperand,
        operation: action.payload.operation,
        currentOperand: '',
      };
    },
    changeSign: (state) => {
      const current = Number(state.currentOperand);
      // const result = -current;
      return {
        ...state,
        currentOperand: `${-current}`,
      };
    },
    evaluate: (state) => {
      let result = evals(state.previousOperand, state.currentOperand, state.operation);
      if (!Number.isInteger(result)) {
        result = result.toFixed(3);
      }
      return {
        ...state,
        currentOperand: `${result}`,
        previousOperand: '',
        operation: '',
        overwrite: true,
      };
    },
  },
});

export const { addDigit, deleteDigit, clear, operate, evaluate, addDot, changeSign } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
