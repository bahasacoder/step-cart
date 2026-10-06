"use client"
import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeListItemFromCart, removeItemFromCart, updateQuantity, clearCart } from '@/lib/features/cart/cartSlice';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import Image from "next/image";
import Link from "next/link";
import CartListItem from "./CartListItem";

export default function CartDialogBox() {
    const dispatch = useAppDispatch();
  const { items, totalItems, totalPrice } = useAppSelector((state) => state.cart);

  const handleClearCart = () => {
    if (confirm('Are you sure you want to clear the cart?')) {
      dispatch(clearCart());
    }
  };

  const cartItems = useAppSelector((state) => state.cart.items) || [];
  console.log('Cart Dialog Box:', cartItems);
  const totalQuantity = useAppSelector((state) => state.cart.totalItems );
  const totalAmount = useAppSelector((state) => state.cart.totalPrice );

  const getItemName = (item: any) => {
    const itemWithName = item as { id?: string | number; name?: string; title?: string; product?: { name?: string; title?: string }; productName?: { name?: string; title?: string } };
    return itemWithName.name ?? itemWithName.title ?? itemWithName.product?.name ?? itemWithName.product?.title ?? `Item #${item.id}`;
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => {
              const itemId = Number((item as { id?: string | number }).id);
              const lineTotal = (Number((item as { price?: number }).price) || 0) * (Number(item.quantity) || 0);

              return (
                <li key={item.idList || index}>
                  <p>{item.idList}</p>
                  <CartListItem
                    item={item}
                    onRemove={() => dispatch(removeListItemFromCart(item.idList || ''))}
                    onUpdateQuantity={(quantity) =>
                      dispatch(updateQuantity({ idList: item.idList ?? '', quantity }))
                    }
                  />
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
  )
}
