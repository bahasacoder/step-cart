
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/features/cartSlice";
import keranjangReducer from "@/features/keranjangSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    keranjang: keranjangReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppStore = typeof store;