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

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']