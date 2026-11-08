"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch  } from "react-redux";

import type { RootState, AppDispatch } from "@/lib/store";

// import { Product } from '@/lib/features/products/productSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { addItemToCart } from '@/lib/features/cart/cartSlice';

import QuantityInput from "./quantity-input"
import CarouselSwiper from "./carousel-swiper"
import OptionsBerat from "./options-berat"
// import CartCardDialog from "./cart-card";
import CartDialog from '@/components/pages/cart/cart-dialog';

//  onValueChangeHarga={setInputHarga}

export default function OverviewBlock() {
    
    const [inputHarga, setInputHarga] = useState<number>(55000)//useState<number | null>(null);
    const [diskonHarga, setDiskonHarga] = useState<number>(0); //  | null > (null)
    const [totalHarga, setTotalHarga] = useState<number| null > (null);
    const [diskonValue, setDiskonValue] = useState<number>(0);
    const [childValue, setChildValue] = useState(1);
    const [idPaket, setIdPaket] = useState('ay211');
    const [idList, setIdList] = useState(() => Str_Random(4));
    const [product, setProduct] = useState({ id: '', nama: '', kemasan: '', jumlah: '', harga: '' });
    const totalHargaItem = inputHarga - diskonHarga;
    const [totalHargaJadi, setTotalHargaJadi] = useState<number>(totalHargaItem);
    const [productName, setProductName] = useState('Ayam Kampung Frozen');
    const [productImage, setProductImage] = useState('url-to-image');
    //const [itemProduct, setItemProduct] = useState([]);
   

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
       <section className="py-8 sm:py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8 xl:gap-24">
                    <div>
                        <h1>Overview</h1>
                    
                    </div>
                </div>
            </div>
        </section>
      </div> 
  );
}
