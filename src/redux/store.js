// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterReducer';
import plantReducer from './plantsSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    plants: plantReducer,
  },
});

export default store;
