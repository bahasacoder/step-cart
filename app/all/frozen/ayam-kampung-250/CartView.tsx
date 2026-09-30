"use client"
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, clearCart } from '@/lib/features/pebe/pebeCartSlice';
import './CartView.css'; // Optional: for basic styling
import { useAppSelector, useAppDispatch } from '@/lib/hooks';

const CartView = () => {
  const cartItems = useAppSelector((state) => state.pebeCart.items);
  console.log('Cart items View:', cartItems);
  const totalQuantity = useAppSelector((state) => state.pebeCart.totalQuantity);
  const totalAmount = useAppSelector((state) => state.pebeCart.totalAmount);
  const dispatch = useAppDispatch();

  return (
    <div className="cart-view">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              
              <li key={item.id}>
                {item.name} (x{item.quantity}) - ${item.totalPrice}
                <button onClick={() => dispatch(removeItemFromCart(item.id))}>Remove One</button>
              </li>
            ))}
          </ul>
          <p>Total Items: {totalQuantity}</p>
          <p>Total Amount: ${totalAmount}</p>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default CartView;
