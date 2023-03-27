import { createSlice } from "@reduxjs/toolkit";

const initialState = { previousOperand: '', operation: '', currentOperand: '' };

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addDigit: (state, action) => {
      state.currentOperand += action.payload.digit;
    },
    deleteDigit: (state) => {
      state.currentOperand.slice(0, -1);
    },
    clear: (state) => {
      return initialState;
    }
  }
})

export const { addDigit, deleteDigit, clear } = calculatorSlice.actions;

export default calculatorSlice.reducer;