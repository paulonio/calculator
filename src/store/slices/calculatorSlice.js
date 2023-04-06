import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  previousOperations: [],
  currentOperand: '',
  overwrite: false,
  history: [],
  error: null,
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addDigit: (state, action) => {
      const previous = state.previousOperations;
      if (previous[previous.length - 1] === ')') {
        return state;
      }
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
      const operand = !Number.isNaN(state.currentOperand) && Number(state.currentOperand);
      const lastSymbol = state.previousOperations[state.previousOperations.length - 1];
      if (lastSymbol === ')') {
        return {
          ...state,
          previousOperations: [...state.previousOperations, action.payload.operation],
          currentOperand: '',
        };
      }
      if (!state.currentOperand) {
        if (
          lastSymbol === '+' ||
          lastSymbol === '-' ||
          lastSymbol === '×' ||
          lastSymbol === '÷' ||
          lastSymbol === '%'
        ) {
          return {
            ...state,
            overwrite: false,
            previousOperations: [
              ...state.previousOperations.slice(0, -1),
              action.payload.operation,
            ],
          };
        }
        return state;
      }

      if (state.currentOperand[state.currentOperand.length - 1] === '.') {
        return state;
      }
      if (operand || operand === 0) {
        return {
          ...state,
          overwrite: false,
          previousOperations: [...state.previousOperations, operand, action.payload.operation],
          currentOperand: '',
        };
      }
      return {
        ...state,
        overwrite: false,
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
      const { parenthesis } = action.payload;
      const operand = !Number.isNaN(state.currentOperand) && Number(state.currentOperand);
      const previous = state.previousOperations;
      if (state.currentOperand === '' && parenthesis === ')') {
        return {
          ...state,
          previousOperations: [...previous, parenthesis],
          currentOperand: '',
        };
      }
      if (parenthesis === '(' && operand) {
        return {
          ...state,
          previousOperations: [...previous, operand, '×', parenthesis],
          currentOperand: '',
        };
      }
      if (parenthesis === '(') {
        return {
          ...state,
          previousOperations: [...previous, parenthesis],
          currentOperand: '0',
          overwrite: true,
        };
      }
      if (parenthesis === ')' && !previous.includes('(')) {
        return state;
      }
      return {
        ...state,
        previousOperations: [...previous, operand, parenthesis],
        currentOperand: '',
      };
    },
    clear: (state) => ({
      ...state,
      currentOperand: '',
      previousOperations: [],
      history: [...state.history],
      overwrite: false,
      error: null,
    }),
    deleteDigit: (state) => {
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: '',
          previousOperations: [],
          history: [...state.history],
          overwrite: false,
          error: null,
        };
      }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    },
    changeSign: (state) => {
      const current = Number(state.currentOperand);
      if (Number.isNaN(current)) {
        return state;
      }
      if (state.currentOperand === '') {
        return {
          ...state,
          previousOperations: [...state.previousOperations, '('],
          currentOperand: '-',
        };
      }
      if (state.previousOperations.slice(-1)[0] === '(') {
        return {
          ...state,
          currentOperand: `${-current}`,
        };
      }
      return {
        ...state,
        previousOperations: [...state.previousOperations, '('],
        currentOperand: `${-current}`,
      };
    },
    evaluate: (state, action) => {
      const operations = `${state.previousOperations.join(' ')} ${state.currentOperand}`.trim();
      if (state.previousOperations.length === 0) {
        return state;
      }
      if (state.currentOperand[state.currentOperand.length - 1] === '.') {
        return state;
      }
      if (typeof action.payload.result === 'object') {
        return {
          ...state,
          previousOperations: [],
          currentOperand: action.payload.result.error,
          error: action.payload.result,
        };
      }
      return {
        ...state,
        history: [...state.history, operations],
        previousOperations: [],
        currentOperand: action.payload.result,
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
