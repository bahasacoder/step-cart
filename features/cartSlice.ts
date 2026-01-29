// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // { id, title, price, image, quantity, totalPrice }
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, title, price, image, quantity = 1 } = action.payload;
      const existing = state.items.find((it) => it.id === id);

      if (existing) {
        existing.quantity += quantity;
        existing.totalPrice = +(existing.totalPrice + price * quantity).toFixed(2);
      } else {
        state.items.push({
          id,
          title,
          price,
          image,
          quantity,
          totalPrice: +(price * quantity).toFixed(2),
        });
      }

      // update totals (keeps your provided line)
      state.totalPrice = +state.items.reduce((s, it) => s + it.totalPrice, 0).toFixed(2);
      state.totalQuantity = state.items.reduce((s, it) => s + it.quantity, 0);
    },

    // optional: remove one or remove all
    removeOneFromCart(state, action) {
      const id = action.payload;
      const existing = state.items.find((it) => it.id === id);
      if (!existing) return;
      if (existing.quantity > 1) {
        existing.quantity -= 1;
        existing.totalPrice = +(existing.totalPrice - existing.price).toFixed(2);
      } else {
        state.items = state.items.filter((it) => it.id !== id);
      }
      state.totalPrice = +state.items.reduce((s, it) => s + it.totalPrice, 0).toFixed(2);
      state.totalQuantity = state.items.reduce((s, it) => s + it.quantity, 0);
    },

    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
