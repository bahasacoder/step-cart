
import { createSlice } from '@reduxjs/toolkit';
import { ProductState } from '../types';

const initialState: ProductState = {
  products: [
    {
      id: 1,
      name: "Nebula Wireless Headphones",
      price: 299.99,
      description: "Immersive sound with active noise cancellation and 40-hour battery life.",
      category: "Electronics",
      image: "https://picsum.photos/seed/headphones/600/400"
    },
    {
      id: 2,
      name: "Solaris Smart Watch",
      price: 199.50,
      description: "Monitor your health, track your sleep, and stay connected with a sleek AMOLED display.",
      category: "Wearables",
      image: "https://picsum.photos/seed/watch/600/400"
    },
    {
      id: 3,
      name: "Vortex Gaming Mouse",
      price: 89.00,
      description: "Precision tracking and customizable RGB lighting for the ultimate gaming experience.",
      category: "Accessories",
      image: "https://picsum.photos/seed/mouse/600/400"
    },
    {
      id: 4,
      name: "Lumina Desk Lamp",
      price: 45.99,
      description: "Adjustable brightness and color temperature to reduce eye strain during long sessions.",
      category: "Home Office",
      image: "https://picsum.photos/seed/lamp/600/400"
    },
    {
      id: 5,
      name: "Onyx Mechanical Keyboard",
      price: 159.00,
      description: "Tactile switches and high-quality aluminum build for typing perfection.",
      category: "Accessories",
      image: "https://picsum.photos/seed/keyboard/600/400"
    },
    {
      id: 6,
      name: "Titan Laptop Bag",
      price: 75.00,
      description: "Water-resistant materials and padded compartments to protect your valuable gear.",
      category: "Fashion",
      image: "https://picsum.photos/seed/bag/600/400"
    }
  ],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

// Fix: Removed undeclared variable assignment in export to resolve "Cannot find name 'productReducer'"
export default productSlice.reducer;
