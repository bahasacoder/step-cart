"use client"
import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, updateQuantity, clearCart } from '@/lib/features/cart/cartSlice';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import Image from "next/image";
import Link from "next/link";
import CartListItem from "./CartListItem";

export default function CartDialogBox() {
  const cartItems = useAppSelector((state) => state.cart.items) || [];
  console.log('Cart items View:', cartItems);
  const totalQuantity = useAppSelector((state) => state.cart.totalItems );
  const totalAmount = useAppSelector((state) => state.cart.totalPrice );
  const dispatch = useAppDispatch();

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
                  <CartListItem 
                    key={item.idList}
                    item={item}
                    onRemove={() => dispatch(removeItemFromCart(item.idList))}
                    onUpdateQuantity={(quantity) =>
                      dispatch(updateQuantity({ listId: item.idList, quantity }))
                    }  
                  />
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
