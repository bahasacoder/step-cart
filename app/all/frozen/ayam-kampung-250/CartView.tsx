"use client"
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, updateQuantity, clearCart } from '@/lib/features/cart/cartSlice';
// import './CartView.css'; // Optional: for basic styling
import { useAppSelector, useAppDispatch } from '@/lib/hooks';

const CartView = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  console.log('Cart items View:', cartItems);
  const totalQuantity = useAppSelector((state) => state.cart.totalItems );
  const totalAmount = useAppSelector((state) => state.cart.totalPrice );
  const dispatch = useAppDispatch();

  const getItemName = (item: any) => {
    const itemWithName = item as { name?: string; title?: string };
    return itemWithName.name ?? itemWithName.title ?? `Item #${item.id}`;
  };

  return (
    <div className="cart-view">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => {
              const itemId = Number((item as { id?: string | number }).id);
              const lineTotal = (Number((item as { price?: number }).price) || 0) * (Number(item.quantity) || 0);

              return (
                <li key={index}>
                  {getItemName(item)} (x{item.quantity}) - ${lineTotal.toFixed(2)}
                  <button
                    onClick={() => {
                      if (!Number.isNaN(itemId)) {
                        dispatch(removeItemFromCart(itemId));
                      }
                    }}
                  >
                    Remove One
                  </button>
                </li>
              );
            })}
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
