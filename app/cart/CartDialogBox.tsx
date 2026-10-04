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
  
const [value, setValue] = useState({
    quantity: 1, 
  });
  
  const updateValue = (newValue: number) => {
    const clamped = Math.min(Math.max(newValue));
    setValue({ quantity: clamped });
    // onValueChange?.(clamped);
  };

  const increment = () => updateValue(value.quantity + 1);
  const decrement = () => updateValue(value.quantity - 1);

  const cartItems = useAppSelector((state) => state.cart.items) || [];
  console.log('Cart items View:', cartItems);
  const totalQuantity = useAppSelector((state) => state.cart.totalItems );
  const totalAmount = useAppSelector((state) => state.cart.totalPrice );
  const dispatch = useAppDispatch();

  const getItemName = (item: any) => {
    const itemWithName = item as { id?: string | number; name?: string; title?: string; product?: { name?: string; title?: string }; productName?: { name?: string; title?: string } };
    return itemWithName.name ?? itemWithName.title ?? itemWithName.product?.name ?? itemWithName.product?.title ?? `Item #${item.id}`;
  };

  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // dispatch(updateQuantity({ productId, quantity: newQuantity }));
    const num = Number(e.target.value);
    if (!isNaN(num)) {
      updateValue(num);
    }
   }

  
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
                    key={item.idOrder}
                    item={item}
                    onRemove={() => dispatch(removeFromCart(item.idOrder))}
                    onUpdateQuantity={(quantity) =>
                      dispatch(updateQuantity({ productId: item.idOrder, quantity }))
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
