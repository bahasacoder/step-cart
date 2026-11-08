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
    const [itemProduct, setItemProduct] = useState<ProductState[]>([]);
    // Sinkronisasi state jika nilai dasar berubah
    useEffect(() => {
      setTotalHargaJadi(inputHarga - diskonHarga);
    }, [inputHarga, diskonHarga]);
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
  
  function Str_Random(  length: number) {
      let result = '';
      const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
      
      // Loop to generate characters for the specified length
      for (let i = 0; i < length; i++) {
          const randomInd = Math.floor(Math.random() * characters.length);
          result += characters.charAt(randomInd);
      }
      return result;
  }

  const dispatch = useDispatch<AppDispatch>();    
  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  const totalItemsCount = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
    
    const handleAddToCart = (currentProduct: any) => {
     setIdList(Str_Random(4));
      const nextProductState: ProductState = {
        productName: productName,
        productImage: productImage,
        inputHarga: Number(inputHarga),
        diskonHarga: diskonHarga,
        diskonValue: diskonValue,
        childValue: Number(childValue),
        quantity: Number(childValue),
        idPaket: idPaket,
        totalHargaJadi: totalHargaJadi,
        idList: Str_Random(4), // Generate a new random idList for each product added to the cart
      };

      const newItemProduct = [...itemProduct, nextProductState];
      setItemProduct(newItemProduct);

      const cartProduct = {
        ...nextProductState,
        id: Number(nextProductState.idList),
      } as Parameters<typeof addItemToCart>[0];

      console.log('handleGetItemProduct (Updated):', newItemProduct);
      console.log('Product added to cart:', nextProductState);
        console.log('addItemToCart', cartProduct)
        console.log('idList', idList)
      dispatch(addItemToCart(cartProduct));
    };


  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
       <section className="py-8 sm:py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8 xl:gap-24">
                    <div>
                        <div className="flex flex-col gap-6">
                            <div>
                              <CarouselSwiper />
                            </div>                      
                            <div className="flex justify-between gap-6">                             
                            </div>
                        </div>

                        <div className="rounded-md border *:not-last:border-b">
                            <div className="flex items-center gap-6 px-6 py-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
                                <div className="flex flex-col gap-1">
                                    <p className="text-lg font-semibold">Free Delivery</p>
                                    <p className="text-muted-foreground">Enter your postal code for delivery Availability</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 px-6 py-4">
                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-refresh-ccw"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>
                                <div className="flex flex-col gap-1">
                                    <p className="text-lg font-semibold">Return Delivery</p>
                                    <p><span className="text-muted-foreground">Free 30 Days Delivery Returns.</span> <a href="#" className="underline">Details</a></p>
                                </div>
                            </div>                            
                        </div>
                    
                    </div>
                </div>
            </div>
        </section>
      </div> 
  );
}
