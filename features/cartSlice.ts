import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Product = {
  id: string | number;
  title: string;
  price: number;
  image?: string;
  // add other product fields as needed (stock, description, etc.)
};

export type CartItem = {
  id: string | number;
  title: string;
  price: number;
  quantity: number;
  image?: string;
};

type CartState = {
  products: Product[]; // product catalog (set from your products array)
  cart: CartItem[]; // items in cart
  totalQuantity: number;
  totalAmount: number;
};

const initialState: CartState = {
  products: [],
  cart: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const findProductInCatalog = (products: Product[], id: string | number) =>
  products.find((p) => p.id === id);

const findCartIndex = (cart: CartItem[], id: string | number) =>
  cart.findIndex((c) => c.id === id);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // set the products array (call once when you have products, or whenever it changes)
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },

    // addToCart accepts either { id, quantity? } or { product, quantity? }
    addToCart(
      state,
      action: PayloadAction<
        | { id: string | number; quantity?: number }
        | { product: Product; quantity?: number }
      >
    ) {
      const payload: any = action.payload;
      const quantity = payload.quantity ?? 1;

      let product: Product | undefined;
      if (payload.product) product = payload.product;
      else if (payload.id !== undefined)
        product = findProductInCatalog(state.products, payload.id);

      if (!product) {
        // If product not found in catalog, can't add reliably. Optionally, allow adding raw payload.product.
        return;
      }

      const idx = findCartIndex(state.cart, product.id);
      if (idx >= 0) {
        // increment existing
        state.cart[idx].quantity += quantity;
      } else {
        // push new cart item
        state.cart.push({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity,
        });
      }

      

    },

    // remove an item fully
    removeFromCart(state, action: PayloadAction<{ id: string | number }>) {
      state.cart = state.cart.filter((c) => c.id !== action.payload.id);
    },

    // decrement quantity by 1 (or remove if result <= 0)
    decrementFromCart(
      state,
      action: PayloadAction<{ id: string | number; amount?: number }>
    ) {
      const { id, amount = 1 } = action.payload;
      const idx = findCartIndex(state.cart, id);
      if (idx >= 0) {
        state.cart[idx].quantity -= amount;
        if (state.cart[idx].quantity <= 0) {
          state.cart.splice(idx, 1);
        }
      }
    },

    // set exact quantity for an item
    updateQuantity(
      state,
      action: PayloadAction<{ id: string | number; quantity: number }>
    ) {
      const { id, quantity } = action.payload;
      const idx = findCartIndex(state.cart, id);
      if (idx >= 0) {
        if (quantity > 0) state.cart[idx].quantity = quantity;
        else state.cart.splice(idx, 1);
      }
    },

    // clear cart
    clearCart(state) {
      state.cart = [];
    },

    // optional: replace whole cart (useful for restoring from storage)
    setCart(state, action: PayloadAction<CartItem[]>) {
      state.cart = action.payload;
    },
  },
});

export const {
  setProducts,
  addToCart,
  removeFromCart,
  decrementFromCart,
  updateQuantity,
  clearCart,
  setCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// Selectors (example)
export const selectTotalQuantity = (state: { cart: CartState }) => state.cart.totalQuantity;
export const selectTotalAmount = (state: { cart: CartState }) => state.cart.totalAmount;

export const selectProducts = (state: { cart: CartState }) => state.cart.products;
export const selectCartItems = (state: { cart: CartState }) => state.cart.cart;
export const selectCartTotalItems = (state: { cart: CartState }) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
export const selectCartSubtotal = (state: { cart: CartState }) =>
  state.cart.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
