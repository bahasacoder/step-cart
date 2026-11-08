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
import { Str_Random } from "@/actions/generalFunctions"
//  onValueChangeHarga={setInputHarga}

    interface ProductState {      
          productName: string;
          productImage: string;
          inputHarga: number | null;
          diskonHarga: number | null;
          diskonValue: number;
          childValue: number;
          quantity: number;
          idPaket: string;
          totalHargaJadi: number;
          idList: string;
        }

export default function OverviewBlock() {
  const dispatch = useAppDispatch(); // Menggunakan useAppDispatch ter-typing bawaan hooks Anda
  // const dispatch = useDispatch<AppDispatch>();
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
            
    const [hargaItem, setHargaItem] = useState<number>(55000)//useState<number | null>(null);
    const [diskonHarga, setDiskonHarga] = useState<number>(0); //  | null > (null)
    const [totalHarga, setTotalHarga] = useState<number| null > (null);
    const [diskonValue, setDiskonValue] = useState<number>(0);
    const [childValue, setChildValue] = useState(1);
    const [idItem, setIdItem] = useState('ay211');
    const [idList, setIdList] = useState(() => Str_Random(4));
    const [product, setProduct] = useState({ id: '', nama: '', item: '', jumlah: '', harga: '' });
    const totalHargaItem = inputHarga * childValue; // hargaItem * Quantity
    const [hargaList, setHargaList] = useState(() => Str_Random(4));
    const [productName, setProductName] = useState('Ayam Kampung Frozen');
    const [productImage, setProductImage] = useState('url-to-image');
    //const [itemProduct, setItemProduct] = useState([]);
    const [itemProduct, setItemProduct] = useState<ProductState[]>([]);
    // Sinkronisasi state jika nilai dasar berubah
    useEffect(() => {
      setTotalHargaList(inputHarga - diskonHarga);
    }, [inputHarga, diskonHarga]);

    const [productState, setProductState] = useState<ProductState>({
      productName: productName, // Replace with actual product name
      productImage: productImage, // Replace with actual image URL or path
      inputHarga: inputHarga,
      diskonHarga: diskonHarga,
      diskonValue: diskonValue,
      childValue: childValue,
      quantity: childValue, // Assuming quantity is the same as childValue
      idPaket: idPaket,
      totalHargaJadi: totalHargaJadi,
      idList: idList,
    });


    const handleValueFromChild = (value: number) => {
        setChildValue(value);
        console.log('Received value from child:', value);
      };
    // 1. Define the callback function that accepts data from the child
  const handleHargaFromChild = (numericValue: number) => {
    setInputHarga(numericValue);
    console.log('Received harga from child:', numericValue);
    //setDiskonHarga(numericValue * getDiskonHarga)
    let diskon: number = 0;
    switch (numericValue) {
      case 35000:
        diskon = 0.00
         return (() => {
            setDiskonValue(diskon);
            setDiskonHarga(numericValue * diskon);
          })();
        break;
      case 55000:
        diskon = 0.00
        return (() => {
            setDiskonValue(diskon);
            setDiskonHarga(numericValue * diskon);
          })();
        break;
     case 75000:
        diskon = 0.25
        return (() => {
            setDiskonValue(diskon);
            setDiskonHarga(numericValue * diskon);
          })();
        break;
      case 90000:
        diskon = 0.30
        return (() => {
            setDiskonValue(diskon);
            setDiskonHarga(numericValue * diskon);
          })();
        break;
    default:
          // Opsional: Berikan nilai default jika harga tidak ada yang cocok
          return (() => {
                setDiskonValue(0);
                setDiskonHarga(0);
              })();
          break;
      } // <-- Menutup switch          
  };

  const totalItemsCount = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
    

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
       <section className="py-8 sm:py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8 xl:gap-24">
                     <div className="flex flex-col gap-6">
                        <div>
                          CarouselSwiper 1
                        </div>                      
                        <div className="flex justify-between gap-6"> </div>
                    </div>

                    
                </div>
            </div>
        </section>
      </div> 
  );
}
