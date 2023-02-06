import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/auth_slice';
import productListReducer from '../features/product_list/product_list_slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    productList: productListReducer
  },
});
