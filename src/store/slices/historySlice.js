import { createSlice } from '@reduxjs/toolkit';

const initialState = { showHistory: true };

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    toggleHistory: (state, action) => {
      return {
        ...state,
        showHistory: action.payload.showHistory,
      };
    },
  },
});

export const { toggleHistory } = historySlice.actions;

export default historySlice.reducer;
