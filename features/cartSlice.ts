import { configureStore, createSlice } from '@reduxjs/toolkit'
interface product {
        id: number;
        image: string;
        price: number;
        title: string
    }
 interface item {
        id: number;
        image: string;
        price: number;
        title: string
    }   
const initialState = {
    items:[], // Final cart items
    totalQuantity: 0,
    totalAmount: 0,
}
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
         addToCart(state, action) {
        const newItem = action.payload;
        const existingItem = state.items.find(item => item.id === newItem.id);
        
        if (existingItem) {
            existingItem.quantity++;
            existingItem.totalPrice += newItem.price;
        } else {
            state.items.push({
            id: newItem.id,
            name: newItem.name,
            price: newItem.price,
            image: newItem.image,
            quantity: 1,
            totalPrice: newItem.price,
            });
        }
        
        state.totalQuantity++;
        state.totalAmount += newItem.price;
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find((item) => item.id === id);
            if (item && quantity > 0) {
                item.quantity = quantity;
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
     }
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
