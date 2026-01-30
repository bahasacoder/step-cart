// assume React + react-redux hooks
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, addToCart, selectCartItems, selectCartTotalItems, selectCartSubtotal } from "@/features/cartSlice";
import type { RootState, AppDispatch } from "@/lib/store";

const productsArray = [
  { id: "p1", title: "Shirt", price: 29.99, image: "/shirt.jpg" },
  { id: "p2", title: "Hat", price: 14.5, image: "/hat.jpg" },
];

export default function Carts() {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((s: RootState) => selectCartItems(s));
  const totalCount = useSelector((s: RootState) => selectCartTotalItems(s));
  const subtotal = useSelector((s: RootState) => selectCartSubtotal(s));

  useEffect(() => {
    // initialize catalog
    dispatch(setProducts(productsArray));
  }, [dispatch]);

  const handleAdd = (id: string) => {
    dispatch(addToCart({ id, quantity: 1 }));
  };

  return (
    <div>
 

      <h2>Cart ({totalCount})</h2>
      <div>Subtotal: ${subtotal.toFixed(2)}</div>
      <ul>
        {cartItems.map((c) => (
          <li key={c.id}>
            {c.title} x {c.quantity} — ${c.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
