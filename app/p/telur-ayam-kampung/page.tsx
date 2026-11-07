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
    const [mainProductImage, setMainProductImage] = useState("image_hu8mgj.png");
    const [packetOption, setPacketOptions] = useState("");
    const [hargaItem, setHargaItem] = useState<number>(15000)
    const [nilaiDiskon, setNilaiDiskonState] = useState<number>(0);
    const setNilaiDiskon = (diskon: number): void => {
        setNilaiDiskonState(diskon);
    };
    const [diskonHarga, setDiskonHarga] = useState<number>(0);
    const [paketValue, setpaketValue] = useState<number>(0);
    const [hargaDiskon, setHargaDiskon] = useState<number>(0);
    const [quantityValue, setQuantityValue] = useState<number>(1);
    const [itemProduct, setItemProduct] = useState<any[]>([]);
    const [idList, setIdList] = useState("");
    // const newerIdList = (prefix: string, suffix: string) => {
    //     setIdList(`${prefix}${suffix}`);
    // };

    const [productName, setProductName] = useState('Telur Ayam Kampung');
    const [productImage, setProductImage] = useState('https://iili.io/nwIvykG.jpg');
    const [idKemasan, setIdKemasan] = useState('teyeka01');

    const totalHargaItem = hargaItem - hargaDiskon;
        const [totalHargaJadi, setTotalHargaJadi] = useState<number>(totalHargaItem);

    const handleHargaFromPacket = (hargaPaket: number) => {
        // 1. Simpan harga item ke dalam state
        setHargaItem(hargaPaket);
        console.log("Harga Paket : ", hargaPaket);

        const harga = Number(hargaPaket);
        let diskon: number = 0;

        // 2. Gunakan switch hanya untuk menentukan persentase diskon
        switch (harga) {
            case 3000:
            diskon = 0.01;
            break;
            case 15000:
            diskon = 0.02;
            break;
            case 30000:
            diskon = 0.03;
            break;
            case 50000:
            diskon = 0.04;
            break;
            default:
            diskon = 0;
            break;
        }

        // 3. Hitung nominal diskon ke dalam variabel lokal
        const hasilPotonganHarga = harga * diskon;

        // 4. Perbarui semua state sekaligus di akhir fungsi (Tanpa IIFE/Return bersarang)
        setNilaiDiskon(diskon);
        setHargaDiskon(hasilPotonganHarga);

        // 5. PERBAIKAN LOG: Tampilkan variabel lokal agar nilainya langsung terlihat (bukan dari state)
        console.log("Persentase Diskon : ", diskon);
        console.log("Harga Diskon (Nominal) : ", hasilPotonganHarga);
         const hasilPotongan = harga * diskon;
         // Update state di induk
            setHargaItem(harga);
            setNilaiDiskon(diskon);
            setHargaDiskon(hasilPotongan);
    };
    const handleQuantityChange = (value: number) => {
        setQuantityValue(value);
        console.log('Handle quantity :', value);
    };
  // Fungsi pembantu untuk membuat string acak sepanjang X karakter
  const generateRandomStr = (length: number) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
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
    // Sinkronisasi state jika nilai dasar berubah
      useEffect(() => {
        setTotalHargaJadi(hargaItem - diskonHarga);
      }, [hargaItem, diskonHarga]);

    const handleAddToCart = () => {
            // 1. Buat ID unik untuk item saat ini
            const newIdList = `List-${Str_Random(4)}`;
            const newId = `${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
            
            // Simpan ke state lokal untuk item saat ini jika dibutuhkan komponen lain
            setIdList(newIdList);
            
        // 2. Susun objek state produk baru
        const nextProductItemState = {
            id: newId,
            idProduct: generateRandomStr(8),
            idList: newIdList, // Menggunakan ID yang baru saja dibuat di atas
            productName,
            productImage,
            hargaItem,
            hargaDiskon,
            nilaiDiskon, 
            quantity: quantityValue,
            idItem: generateRandomStr(16),
            totalHargaList: (hargaItem - hargaDiskon) * quantityValue,
        };
           // 3. Update state array produk lokal
        const newItemProduct = [...itemProduct, nextProductItemState];
        setItemProduct(newItemProduct);
        // 4. Kirim data ke Redux Store
        dispatch(addItemToCart(nextProductItemState as unknown as Parameters<typeof addItemToCart>[0]));
        console.log('nextProductItemState Add : ', nextProductItemState);
            // ✨ FIX UTAMA: OTOMATIS REFRESH IDLIST UNTUK KLIK BERIKUTNYA
            const freshIdList = `List-${Str_Random(4)}`;
            setIdList(freshIdList); 
        };
    const totalItemsCount = cartItems.reduce(
        (total: number, item: (typeof cartItems)[number]) => total + (item.quantity || 0),
        0,
    );
  return (
     <div className="flex flex-col min-h-screen bg-stone-50">
         <h1>Telur Ayam Kampung</h1>

    </div>

  );
}

