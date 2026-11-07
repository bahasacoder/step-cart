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
         {/* BREADCRUMB NAVIGATION */}
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <nav className="flex space-x-2 text-xs font-medium tracking-wide uppercase text-stone-400">
            <a href="#" className="hover:text-amber-800">Beranda</a>
            <span>/</span>
            <a href="#" className="hover:text-amber-800">Katalog Organik</a>
            <span>/</span>
            <span className="text-stone-700">Detail Produk</span>
        </nav>
    </div>

    {/* MAIN PRODUCT VIEW SECTION */}
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* LEFT: PRODUCT IMAGES GALLERY */}
        </div>
    </main>

    </div>

  );
}

