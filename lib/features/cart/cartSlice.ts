import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  name?: string;
  price?: number;
  [key: string]: unknown;
}

export interface CartItem {
  id: string | number;
  item: Product;
  product: Product;
  quantity: number;

  idPaket?: string | number;
  idList?: string;
  productName?: string;
  productImage?: string;
  inputHarga?: number;
  diskonHarga?: number;
  diskonValue?: number;
  childValue?: number;
  totalHargaJadi?: number;
}    

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

interface CartTotals {
  totalItems: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const calculateTotals = (items: CartItem[]): CartTotals => {
  // const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  // const totalPrice = parseFloat(
  //   items
  //     .reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  //     .toFixed(2)
  // );
  // return { totalItems, totalPrice };
  return { totalItems: 0, totalPrice: 0 };
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state: CartState, action: PayloadAction<Product>) => {
      const newItem = action.payload;
      console.log('Adding item to cart:', newItem);
      if (!state.items) {
        state.items = [];
      }
      const existingItem = state.items.find((item) => item.idPaket === newItem.idPaket);
      if (!existingItem) {
        state.items.push(newItem as unknown as CartItem);
        //      console.log('existingItem', existingItem?.productName);

      }
      else {
         state.items.push( newItem as unknown as CartItem);
      }
            console.log('read object', state.items.map((item) => item.idPaket));

      const totals = calculateTotals(state.items);
      // state.totalItems = totals.totalItems;
      // state.totalPrice = totals.totalPrice;
    },
    addOneItemFromCart(){
      // idOrder, quantity
    },
    removeOneItemFromCart(){},
    removeItemFromCart: (state: CartState, action: PayloadAction<string>) => {
      console.log('item.idList 1 : ', item.idList)
      state.items = state.items.filter((item) => item.idList !== action.payload);
      console.log('item.idList 2 : ', item.idList)
       // 2. Hitung ulang total harga berdasarkan item yang tersisa
      // state.totalPrice = state.items.reduce(
      //   (total, item) => total + item.price * item.quantity, 
      //   0
      // );
      const totals = calculateTotals(state.items);
      state.totalItems = totals.totalItems;
      state.totalPrice = totals.totalPrice;
    },
    updateQuantity: (
      state: CartState,
      action: PayloadAction<{ idList: string; quantity: number }>,
    ) => {
      const item = state.items.find((item) => item.id === action.payload.idList);
      if (item) {
        if (action.payload.quantity <= 0) {
          state.items = state.items.filter((item) => item.id !== action.payload.idList);
        } else {
          item.quantity = action.payload.quantity;
        }
      }
      const totals = calculateTotals(state.items);
      state.totalItems = totals.totalItems;
      state.totalPrice = totals.totalPrice;
    },
    clearCart: (state: CartState) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItemToCart, removeItemFromCart, addOneItemFromCart, removeOneItemFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
