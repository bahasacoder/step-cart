"use client"
import React from 'react';
import Link from "next/link";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeListItemFromCart, onUpdateQuantity, increaseQuantity, decreaseQuantity, clearCart } from '@/lib/features/cart/cartSlice';
// import './CartView.css'; // Optional: for basic styling
import { useAppSelector, useAppDispatch } from '@/lib/hooks';

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import CartListItem from '@/app/cart/CartListItem';

export default function CartCardDialog() {
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
  
  
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-basket preview-icon">
              <path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/>
          </svg>
        </DialogTrigger>
        <DialogContent>          
              <div>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                  ) : (
                    <Card>
                    <CardHeader>
                      <CardTitle>Your Cart</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {cartItems.map((item, index) => {
                        const itemId = Number((item as { id?: string | number }).id);
                        const lineTotal = (Number((item as { price?: number }).price) || 0) * (Number(item.quantity) || 0);
                        
                        return (
                          <div key={item.idList || index}>
                            <CartListItem
                                                item={item}
                                                onRemove={() => {
                                                  if (item.idList !== undefined) {
                                                    dispatch(removeListItemFromCart(item.idList));
                                                  }
                                                }}
                                                onUpdateQuantity={(nextQuantity) => {
                                                  if (item.idList !== undefined) {
                                                    dispatch(onUpdateQuantity({ idList: item.idList, quantity: nextQuantity ?? item.quantity }));
                                                  }
                                                }}
                                                onChecked={() => {}}
                                              />
                          </div>
                        );
                        })}

                      <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                      <div>
                        <p>Total Items: {totalItemsCount}</p>
                          <p>Total Amount: ${totalPriceSum.toFixed(2)}</p>
                          <p>Total Discount: ${totalHargaDiskon.toFixed(2)}</p>
                          <p>Total Payable: ${totalPayable.toFixed(2)}</p>
                          
                          <Link href="/checkout">
                            <button>Proceed to Checkout</button>
                          </Link>
                          <button onClick={handleClearCart}>Clear Cart</button>
                      </div>
                    </CardFooter>
                  </Card>
                  )}
              </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

