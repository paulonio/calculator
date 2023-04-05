import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './slices/calculatorSlice';
import themeReducer from './slices/themeSlice';

export default configureStore({
  reducer: {
    calculator: calculatorReducer,
    theme: themeReducer,
  },
});
