import { createSlice } from '@reduxjs/toolkit';

const initialState = { theme: null };

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => ({
      ...state,
      theme: action.payload.theme,
    }),
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
