'use client';
import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import type { RootState, AppDispatch } from "@/lib/store";
import { addItemToCart } from '@/lib/features/cart/cartSlice';
import { Str_Random } from '@/actions/generalFunctions';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import CartDialog from '@/components/pages/cart/cart-dialog';

interface QuantityInputProps {
  id?: string;
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  initialValue?: number;
  onQuantityChange: (value: number) => void;
}

interface ProductItemState {    
          idProduct: string;  
          idList: string,
          idItem: string,
          productName: string;
          productImage: string;
          hargaItem: number | null;
          hargaDiskon: number | null;
          nilaiDiskon: number;
          quantity: number;
          hargaList: number;
  }

export default function ProductDetailHimelRCBOPage() {
  const dispatch = useAppDispatch(); 
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
   // FIX UTAMA: Fallback array kosong mencegah error reduksi di sisi SSR/Next.js
  const totalItemsCount = (cartItems || []).reduce(
    (total: number, item: any) => total + (item.quantity || 0),
    0
  );
  const min = 1;
  const max = 49;
  const [productName, setProductName] = useState('RCBO Himel HDB3LE');
  const [productImage, setProductImage] = useState('https://iili.io/nNdJZLF.jpg');
  const [idItem, setIdItem] = useState('elcbhim3x');
  const [value, setValue] = React.useState<number>(1);
  const [hargaItem, setHargaItem] = useState(170000);
  const [nilaiDiskon, setNilaiDiskon] = useState(0);
  const [hargaDiskon, setHargaDiskon] = useState<number>(0);
  const [idList, setIdList] = useState('');
  const [quantityValue, setQuantityValue] = useState<number>(1);
  const totalHargaItem = hargaItem*quantityValue;
  const [hargaList, sethargaList] = useState<number>((hargaItem-hargaDiskon)*quantityValue);  
  const [itemProduct, setItemProduct] = useState<any[]>([]);
   const [selectedAmpere, setSelectedAmpere] = useState<string>('6');
  // Sinkronisasi total harga list secara aman dan otomatis
  useEffect(() => {
    setTotalHargaList((hargaItem - hargaDiskon) * quantityValue);
  }, [hargaItem, hargaDiskon, quantityValue]);
  // Penanganan Hydration Safe untuk ID Awal di sisi Client
  useEffect(() => {
    setIdList(`List-${Str_Random(4)}`);
  }, []);
  
  const spesifikasiData = [
    { label: 'Merek', nilai: 'Himel' },
    { label: 'Tipe Seri', nilai: 'HDB3LE (RCBO)' },
    { label: 'Kapasitas Arus', nilai: '6 Ampere (C6)' },
    { label: 'Jumlah Kutub (Poles)', nilai: '2P (Phase + Neutral)' },
    { label: 'Sensitivitas Kebocoran', nilai: '30 mA (Aman untuk Manusia)' },
    { label: 'Breaking Capacity', nilai: '6000A / 6 kA' },
    { label: 'Tegangan Operasional', nilai: '240V ~ AC (50/60Hz)' },
    { label: 'Sertifikasi Patokan', nilai: 'SNI, IEC/EN 61009-1' },
  ];

   const updateQuantityValue = (newValue: number) => {
    // Memastikan nilai tidak kurang dari min dan tidak lebih dari max
    const clamped = Math.min(Math.max(newValue, min), max);
    setValue(clamped);
    setQuantityValue(clamped);
    // Hasil log yang terjamin akurat di konsol browser
    console.log('Quantity Value Aktual:', clamped);
  };
  // 3. Handler Tombol Tambah (+)
  function increment(): void {
    // Ambil nilai terbaru (current) lalu kirim ke fungsi pusat
    updateQuantityValue(value + 1);
  }
  // 4. Handler Tombol Kurang (-)
  function decrement(): void {
    // Ambil nilai terbaru (current) lalu kirim ke fungsi pusat
    updateQuantityValue(value - 1);
  }
  // 5. Handler Ketik Manual di Input
  const handleQuantityInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const num = Number(event.target.value);
    if (!isNaN(num)) {
      updateQuantityValue(num);
    }
  };

  
  function onChangeHargahandleAmpereChange = (ampere: string) => {
    const hargaByAmpere: Record<string, number> = {
      '6': 150000,
      '10': 170000,
      '16': 190000,
    };
  const harga = hargaByAmpere[ampere];
      if (harga !== undefined) {
        setHargaItem(harga);
        setSelectedAmpere(ampere);
        console.log('Change Harga Aktual:', harga);
      }
    };
    console.log('Change Harga : ', hargaItem)
  }
  const d = new Date();
  // Membuat format YYYYMMDD-HHMMSS
  const exactTime = d.getFullYear() +
                    String(d.getMonth() + 1).padStart(2, '0') +
                    String(d.getDate()).padStart(2, '0') + "-" +
                    String(d.getHours()).padStart(2, '0') +
                    String(d.getMinutes()).padStart(2, '0') +
                    String(d.getSeconds()).padStart(2, '0');
               
                  
  function handleAddToCart(event: any): void {
    event.preventDefault();
     // 1. Buat ID unik untuk item saat ini
    const newIdList = `List-${Str_Random(4)}`;
    const newId = `${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
    
    // Simpan ke state lokal untuk item saat ini jika dibutuhkan komponen lain
    setIdList(newIdList);

    const nextProductItemState = {
          id: newId,
          idProduct: Str_Random(8),
          idList: newIdList,
          productName,
          productImage,
          hargaItem,
          hargaDiskon,
          nilaiDiskon, 
          quantity: quantityValue,
          idItem: Str_Random(16),
          hargaList: (hargaItem - hargaDiskon) * quantityValue,
        };
      const newItemProduct = [...itemProduct, nextProductItemState];
      setItemProduct(newItemProduct);
    
      const cartProduct = {
                  ...nextProductItemState,
                  id: Date.now(),
      } as Parameters<typeof addItemToCart>[0];
      console.log('handleGetItemProduct (Updated):', newItemProduct);
                console.log('Product added to cart:', nextProductItemState);
                  console.log('addItemToCart', cartProduct)
                              console.log('quantity', quantityValue)
                dispatch(addItemToCart(nextProductItemState as unknown as Parameters<typeof addItemToCart>[0])); // cartProductk
                
       // ✨ FIX UTAMA: OTOMATIS REFRESH IDLIST UNTUK KLIK BERIKUTNYA
      const freshIdList = `List-${Str_Random(4)}`;
      setIdList(freshIdList); 
  }
  


  return (
    <>
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased">
      
      {/* NAVIGATION BAR */}
      <h1>Himel RCBO Page</h1>

      {/* FOOTER */}

</div>
</>
  )
}
