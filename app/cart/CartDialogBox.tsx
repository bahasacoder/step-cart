"use client"
import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeListItemFromCart, removeItemFromCart, onUpdateQuantity, clearCart } from '@/lib/features/cart/cartSlice';
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

  const totalItemsCount = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
  const totalPriceSum = cartItems.reduce((total, item) => total + ((item.inputHarga || 0) * (item.quantity || 0)), 0);
  const totalHargaDiskon = cartItems.reduce((total, item) => total + (item.diskonHarga || 0) * (item.quantity || 0), 0);
  const totalPayable = totalPriceSum - totalHargaDiskon;


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
                  <CartListItem
                    item={item}
                    onRemove={() => {
                      if (item.idList !== undefined) {
                        dispatch(removeListItemFromCart(item.idList));
                      }
                    }}
                    onUpdateQuantity={() => {
                      if (item.idList !== undefined) {
                        dispatch(onUpdateQuantity({ idList: item.idList, quantity: item.quantity }));
                      }
                    }}
                  />
                </li>
              );
            })}
            
          </ul>
          <p>Total Items: {totalItemsCount}</p>
          <p>Total Amount: ${totalPriceSum.toFixed(2)}</p>
          <p>Total Discount: ${totalHargaDiskon.toFixed(2)}</p>
          <p>Total Payable: ${totalPayable.toFixed(2)}</p>
          
          <Link href="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
          <button onClick={handleClearCart}>Clear Cart</button>
        </>
      )}
        
      </div>
  )
}
