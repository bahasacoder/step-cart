"use client";

import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import type { RootState, AppDispatch } from "@/lib/store";
import { addItemToCart } from '@/lib/features/cart/cartSlice';

import ImageBlock from "./images-kiri";
import OptionsKemasan from "./kemasan";
import HargaItem from './harga-item';
// import QuantityInput from './quantity-button';

export default function TelurAyamKampungPage() {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector((state: RootState) => state.cart.items);
    //

  return (
     <div className="flex flex-col min-h-screen bg-stone-50">
         <h1>Telur Ayam Kampung</h1>

    </div>

  );
}

