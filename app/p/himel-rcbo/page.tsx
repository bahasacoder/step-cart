'use client';

import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import type { RootState } from "@/lib/store";
import { addItemToCart } from '@/lib/features/cart/cartSlice';
import { Str_Random } from '@/actions/generalFunctions';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import CartDialog from '@/components/pages/cart/cart-dialog';

interface ProductItemState {    
  idProduct: string;  
  idList: string;
  idItem: string;
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
  
  // FIX UTAMA 1: Fallback array kosong mencegah error reduksi di sisi SSR/Next.js
  const totalItemsCount = (cartItems || []).reduce(
    (total: number, item: any) => total + (item.quantity || 0),
    0
  );

  const min = 1;
  const max = 49;
  const [productName] = useState('RCBO Himel HDB3LE');
  const [productImage] = useState('https://iili.io/nNdJZLF.jpg');
  const [idItem] = useState('elcbhim3x');
  const [value, setValue] = useState<number>(1);
  
  const [hargaItem, setHargaItem] = useState<number>(170000);
  const [nilaiDiskon] = useState<number>(0);
  const [hargaDiskon] = useState<number>(0);
  const [idList, setIdList] = useState<string>('');
  const [quantityValue, setQuantityValue] = useState<number>(1);
  
  // FIX UTAMA 2: Konsistensi nama state hargaList untuk sinkronisasi subtotal otomatis
  const [hargaList, setHargaList] = useState<number>(170000);  
  const [itemProduct, setItemProduct] = useState<any[]>([]);
  const [selectedAmpere, setSelectedAmpere] = useState<string>('6');

  // Sinkronisasi total harga secara aman dan otomatis
  useEffect(() => {
    setHargaList((hargaItem - hargaDiskon) * quantityValue);
  }, [hargaItem, hargaDiskon, quantityValue]);

  // Penanganan Hydration Safe untuk ID Awal di sisi Client
  useEffect(() => {
    setIdList(`List-${Str_Random(4)}`);
  }, []);
  
  const spesifikasiData = [
    { label: 'Merek', nilai: 'Himel' },
    { label: 'Tipe Seri', nilai: 'HDB3LE (RCBO)' },
    { label: 'Kapasitas Arus', nilai: `${selectedAmpere} Ampere (C${selectedAmpere})` },
    { label: 'Jumlah Kutub (Poles)', nilai: '2P (Phase + Neutral)' },
    { label: 'Sensitivitas Kebocoran', nilai: '30 mA (Aman untuk Manusia)' },
    { label: 'Breaking Capacity', nilai: '6000A / 6 kA' },
    { label: 'Tegangan Operasional', nilai: '240V ~ AC (50/60Hz)' },
    { label: 'Sertifikasi Patokan', nilai: 'SNI, IEC/EN 61009-1' },
  ];

  const updateQuantityValue = (newValue: number) => {
    const clamped = Math.min(Math.max(newValue, min), max);
    setValue(clamped);
    setQuantityValue(clamped);
    console.log('Quantity Value Aktual:', clamped);
  };

  function increment(): void {
    updateQuantityValue(value + 1);
  }

  function decrement(): void {
    updateQuantityValue(value - 1);
  }

  const handleQuantityInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const num = Number(event.target.value);
    if (!isNaN(num)) {
      updateQuantityValue(num);
    }
  };

  // FIX UTAMA 3: Perbaikan syntax kurung penutup, penamaan variabel 'ampere', dan log asinkronus
  function onChangeHarga(event: React.ChangeEvent<HTMLInputElement>): void {
    const hargaByAmpere: Record<string, number> = {
      '6': 150000,
      '10': 170000,
      '16': 190000,
    };
    const ampere = event.currentTarget.value;
    const harga = hargaByAmpere[ampere];
    if (harga !== undefined) {
      setHargaItem(harga);
      setSelectedAmpere(ampere);
      console.log('Change Harga Aktual:', harga);
    }
  }

  function handleAddToCart(event: React.FormEvent): void {
    event.preventDefault();
    
    const newIdList = `List-${Str_Random(4)}`;
    const newId = `${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
    
    setIdList(newIdList);

    const nextProductItemState = {
      id: newId,
      idProduct: Str_Random(8),
      idList: newIdList,
      productName: `${productName} C${selectedAmpere}`,
      productImage,
      hargaItem,
      hargaDiskon,
      nilaiDiskon, 
      quantity: quantityValue,
      idItem: idItem + selectedAmpere,
      hargaList: (hargaItem - hargaDiskon) * quantityValue,
    };

    setItemProduct((prev) => [...prev, nextProductItemState]);
    dispatch(addItemToCart(nextProductItemState as any));
                
    const freshIdList = `List-${Str_Random(4)}`;
    setIdList(freshIdList); 
    alert('Produk berhasil dimasukkan ke keranjang belanja.');
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
