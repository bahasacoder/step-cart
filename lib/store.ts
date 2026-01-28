// app/store/store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/features/cartSlice';
import productReducer from '@/features/productSlice';
// import counterReducer from '@/features/counterSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  //  counter: counterReducer,
  }

});