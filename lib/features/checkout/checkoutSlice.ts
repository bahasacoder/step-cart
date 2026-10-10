import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CheckedItem {
  idList: string,
  idPaket?: string | number;
  productName?: string;
  productImage?: string;
  inputHarga?: number;
  diskonPrice?: number;
  diskonTotal?: number;
  quatity?: number;
  totalHargaBayar?: number;
  idSeller: string | 'pebe';
} 
interface CheckedItemsState {
  items: CheckedItem[];
  totalItems: number;
  totalPrice: number;
}

interface CheckoutTotals {
  totalItems: number;
  totalPrice: number;
  totalDiscount: number;
  
}

const initialState: CheckedItemsState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const calculateTotals = (items: CheckedItem[]): CheckoutTotals => {
  const totalItems = items.reduce((sum, item) => sum + (item.quatity ?? 0), 0);
   const totalPrice = parseFloat(
     items
      .reduce((sum, item) => sum + (item.inputHarga ?? 0) * (item.quatity ?? 0), 0)
       .toFixed(2)
   );
  const totalDiscount = items.reduce(
    (sum, item) => sum + (item.diskonTotal ?? 0) * (item.quatity ?? 0),
    0
  );
  return { totalItems, totalPrice, totalDiscount };
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    addListToCheckout: (state: CheckedItemsState, action: PayloadAction<CheckedItem>) => {
        const newItem = action.payload;
        console.log('Adding item to checkout:', newItem);

        if (!state.items) {
          state.items = [];
        }

        const existingItem = state.items.find((item) => item.idList === newItem.idList);

        if (!existingItem) {
          // Jika belum ada, langsung push ke dalam array
          state.items.push(newItem);
        } else {
          // Jika sudah ada, langsung update/mutasi properti objek tersebut
          Object.assign(existingItem, newItem);
        }
    
      const totals = calculateTotals(state.items);
      state.totalItems = totals.totalItems;
      state.totalPrice = totals.totalPrice;

      console.log('read checkout', state.items.map((item) => item.idList));
    },
    removeListFromCheckout: (state: CheckedItemsState, action: PayloadAction<string | number>) => {
      // Payload cukup berupa idList dari item yang ingin dihapus (bisa string atau number)
      const idListToRemove = action.payload; 
      console.log('Removing item from checkout:', idListToRemove);

      if (state.items) {
        // Saring array untuk menyisakan item yang ID-nya TIDAK COCOK dengan idListToRemove
        state.items = state.items.filter((item) => item.idList !== idListToRemove);
      }

      console.log('read checkout', state.items?.map((item) => item.idList) || []);
    },
    addListToCheckeds: (state: CheckedItemsState, action: PayloadAction<string>) => {
      console.log(action.payload);
      return state;
    },
    canceListToCheckeds: (state: CheckedItemsState, action: PayloadAction<string>) => {
      console.log(action.payload);
      return state;
    },
  },
});

export const { addListToCheckout, removeListFromCheckout, addListToCheckeds, canceListToCheckeds } = checkoutSlice.actions;
export default checkoutSlice.reducer;
