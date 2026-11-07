"use client";

import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import type { RootState, AppDispatch } from "@/lib/store";
import { addItemToCart } from '@/lib/features/cart/cartSlice';

import ImageBlock from "./images-kiri";
import OptionsKemasan from "./kemasan";
import HargaItem from './harga-item';
import QuantityInput from './quantity-button';

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
            {/*  <ImageBlock /> */}
              {/* RIGHT: PRODUCT INFO & E-COMMERCE FORM */}
            <div className="lg:col-span-6 space-y-6">
                
                {/* Product Title & Meta */}
                <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100/60 px-3 py-1 rounded-full inline-block">⭐ Pilihan Utama Sehat</span>
                    <h1 className="font-serif text-3xl sm:text-4xl text-amber-900 leading-tight">Telur Ayam Kampung Asli (Premium Pack)</h1>
                    <div className="flex items-center space-x-4 pt-1">
                        <div className="flex text-amber-500 text-sm tracking-tighter">★★★★★</div>
                        <span className="text-xs text-stone-500 font-medium">(48 Ulasan Pelanggan)</span>
                        <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded">Tersedia / Stok Aman</span>
                    </div>
                </div>

                {/* Price Area */}
            </div>
            
        </div>
    </main>

    </div>

  );
}

