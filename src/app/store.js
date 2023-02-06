import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/auth_slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  },
});
