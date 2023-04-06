import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './slices/calculatorSlice';
import themeReducer from './slices/themeSlice';
import historyReducer from './slices/historySlice';

export default configureStore({
  reducer: {
    calculator: calculatorReducer,
    theme: themeReducer,
    history: historyReducer,
  },
});
