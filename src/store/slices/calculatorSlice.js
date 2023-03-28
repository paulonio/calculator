import { createSlice } from "@reduxjs/toolkit";
import evals from "../../utils/evals";

const initialState = { previousOperand: '', operation: '', currentOperand: '' };

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addDigit: (state, action) => {
      state.currentOperand += action.payload.digit;
    },
    deleteDigit: (state) => {
      state.currentOperand = state.currentOperand.slice(0, -1);
    },
    clear: () => {
      return initialState;
    },
    operate: (state, action) => {
      state.previousOperand = state.currentOperand;
      state.operation = action.payload.operation;
      state.currentOperand = '';
    },
    evaluate: (state) => {
      const result = evals(state.previousOperand, state.currentOperand, state.operation);
      state.currentOperand = result;
      state.previousOperand = '';
      state.operation = '';
    }
  }
})

export const { addDigit, deleteDigit, clear, operate, evaluate } = calculatorSlice.actions;

export default calculatorSlice.reducer;