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
          totalHargaList: number;
  }

export default function ProductDetailHimelRCBOPage() {
  const dispatch = useAppDispatch(); 
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
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
  const [totalHargaList, setTotalHargaList] = useState<number>((hargaItem-hargaDiskon)*quantityValue);  
  const [itemProduct, setItemProduct] = useState<any[]>([]);

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
