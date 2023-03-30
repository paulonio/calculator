import { createSlice } from '@reduxjs/toolkit';
import evals from '../../utils/evals';

const initialState = { previousOperations: [], currentOperand: '', overwrite: false };

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
    addOperation: (state, action) => {
      const operand = state.currentOperand && Number(state.currentOperand);
      if (!state.currentOperand) {
        return state;
      }
      if (operand) {
        return {
          ...state,
          previousOperations: [...state.previousOperations, operand, action.payload.operation],
          currentOperand: '',
        };
      }
      return {
        ...state,
        previousOperations: [...state.previousOperations, action.payload.operation],
        currentOperand: '',
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
    addParenthesis: (state, action) => {
      const parenthesis = action.payload.parenthesis;
      const operand = state.currentOperand && Number(state.currentOperand);
      if (parenthesis === '(' && operand) {
        return {
          ...state,
          previousOperations: [...state.previousOperations, operand, '×', parenthesis],
          currentOperand: '',
        };
      } else if (parenthesis === '(') {
        return {
          ...state,
          previousOperations: [...state.previousOperations, parenthesis],
          currentOperand: '',
        };
      } else {
        return {
          ...state,
          previousOperations: [...state.previousOperations, operand, parenthesis],
          currentOperand: '',
        };
      }
    },
    clear: () => {
      return initialState;
    },
    deleteDigit: (state) => {
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    },
    changeSign: (state) => {
      const current = Number(state.currentOperand);
      return {
        ...state,
        currentOperand: `${-current}`,
      };
    },
    evaluate: (state) => {
      const operand = state.currentOperand && Number(state.currentOperand);
      let [result] = evals([...state.previousOperations, operand]);
      if (!Number.isInteger(result)) {
        result = result.toFixed(3);
      }
      return {
        ...state,
        previousOperations: [],
        currentOperand: result,
        overwrite: true,
      };
    },
  },
});

export const {
  addDigit,
  addOperation,
  addDot,
  addParenthesis,
  deleteDigit,
  clear,
  changeSign,
  evaluate,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
