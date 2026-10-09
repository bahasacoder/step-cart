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
   const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
   const totalPrice = parseFloat(
     items
      .reduce((sum, item) => sum + (item.inputHarga ?? 0) * item.quantity, 0)
       .toFixed(2)
   );
  return { totalItems, totalPrice };
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    addItemToCheckout: (state: CartState, action: PayloadAction<Product>) => {
      const newItem = action.payload;
      console.log('Adding item to checkout:', newItem);
      },
    }
});

export const { addItemToCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
