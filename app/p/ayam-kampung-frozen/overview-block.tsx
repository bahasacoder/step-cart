"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch  } from "react-redux";
import type { RootState, AppDispatch } from "@/lib/store";

// import { Product } from '@/lib/features/products/productSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { addItemToCart } from '@/lib/features/cart/cartSlice';

import CarouselSwiper from "./carousel-swiper"
import QuantityInput from "./quantity-input"
import OptionsBerat from "./options-berat"
// import CartCardDialog from "./cart-card";
import CartDialog from '@/components/pages/cart/cart-dialog';
import { Str_Random } from "@/actions/generalFunctions"
//  onValueChangeHarga={setInputHarga}

interface ProductState {      
          productName: string;
          productImage: string;
          hargaItem: number | null;
          hargaDiskon: number | null;
          nilaiDiskon: number;
          childValue: number;
          quantity: number;
          idItem: string;
          totalHargaItem: number;
          hargaList:number;
          idList: string;
        }

export default function OverviewBlock() {
const dispatch = useAppDispatch(); // Menggunakan useAppDispatch ter-typing bawaan hooks Anda
  // const dispatch = useDispatch<AppDispatch>();
const cartItems = useAppSelector((state: RootState) => state.cart.items);
 const totalItemsCount = (cartItems || []).reduce(
    (total: number, item: any) => total + (item.quantity || 0), 
    0
  );
            
    const [hargaItem, setHargaItem] = useState<number>(55000)//useState<number | null>(null);
    const [hargaDiskon, setHargaDiskon] = useState<number>(0); //  | null > (null)
    const [nilaiDiskon, setNilaiDiskon] = useState<number>(0);
    const [childValue, setChildValue] = useState(1); //Quantity
    const [idItem, setIdItem] = useState('ay211');
    const [idList, setIdList] = useState(() => Str_Random(4));
    const [product, setProduct] = useState({ id: '', nama: '', item: '', jumlah: '', harga: '' });
    const totalHargaItem = hargaItem * childValue; // hargaItem * Quantity
    const [hargaList, setHargaList] = useState(0); // (hargaItem - hargaDiskon)*Quantity
    const [productName, setProductName] = useState('Ayam Kampung Frozen');
    const [productImage, setProductImage] = useState('url-to-image');
    //const [itemProduct, setItemProduct] = useState([]);
    const [itemProduct, setItemProduct] = useState<ProductState[]>([]);
    // Sinkronisasi state jika nilai dasar berubah
    useEffect(() => {
      setHargaList(hargaItem - hargaDiskon);
    }, [hargaItem, hargaDiskon]);

    const [productState, setProductState] = useState<ProductState>({
      productName, // Replace with actual product name
      productImage, // Replace with actual image URL or path
      idItem,
      hargaItem,
      hargaDiskon,
      nilaiDiskon,
      childValue,
      quantity: childValue, // Assuming quantity is the same as childValue
      totalHargaItem,
      hargaList,
      idList: idList,
    });

    const handleValueFromChild = (value: number) => {
        setChildValue(value);
        console.log('Received value from child:', value);
      };
  
    // 1. Define the callback function that accepts data from the child
  const handleHargaFromChild = (numericValue: number) => {
    setHargaItem(numericValue);
    console.log('Received harga from child:', numericValue);
    //setDiskonHarga(numericValue * getDiskonHarga)
    let diskon: number = 0;
    switch (numericValue) {
      case 35000:
        diskon = 0.00
         return (() => {
            setNilaiDiskon(diskon);
            setHargaDiskon(numericValue * diskon);
          })();
        break;
      case 55000:
        diskon = 0.00
        return (() => {
            setNilaiDiskon(diskon);
            setHargaDiskon(numericValue * diskon);
          })();
        break;
     case 75000:
        diskon = 0.25
        return (() => {
            setNilaiDiskon(diskon);
            setHargaDiskon(numericValue * diskon);
          })();
        break;
      case 90000:
        diskon = 0.30
        return (() => {
            setNilaiDiskon(diskon);
            setHargaDiskon(numericValue * diskon);
          })();
        break;
    default:
          // Opsional: Berikan nilai default jika harga tidak ada yang cocok
          return (() => {
                setNilaiDiskon(0);
                setHargaDiskon(0);
              })();
          break;
      } // <-- Menutup switch          
  };

 const handleAddToCart = (currentProduct: any) => {
     setIdList(Str_Random(4));
      const nextProductState: ProductState = {
        productName,
        productImage,
        hargaItem: Number(hargaItem),
        hargaDiskon,
        nilaiDiskon,
        childValue: Number(childValue),
        quantity: Number(childValue),
        idItem,
        totalHargaItem: totalHargaItem,
          hargaList,
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
                     <div className="flex flex-col gap-6">
                        <div>
                          <CarouselSwiper />
                        </div>                      
                        <div className="flex justify-between gap-6"> </div>
                    </div>
                    <div className="space-y-6 py-5">
                        <nav aria-label="breadcrumb" data-slot="breadcrumb" className="cn-breadcrumb flex flex-wrap items-center gap-2.5 text-sm text-muted-foreground justify-between">
                            <ol data-slot="breadcrumb-list" className="cn-breadcrumb-list flex flex-wrap items-center wrap-break-word">
                                <div className="flex items-center gap-2.5">
                                    <li data-slot="breadcrumb-item" className="cn-breadcrumb-item inline-flex items-center"><a data-slot="breadcrumb-link" className="cn-breadcrumb-link" href="#">Daging</a></li>
                                    <li data-slot="breadcrumb-separator" role="presentation" aria-hidden="true" className="cn-breadcrumb-separator">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>                                      
                                    </li>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <li data-slot="breadcrumb-item" className="cn-breadcrumb-item inline-flex items-center"><a data-slot="breadcrumb-link" className="cn-breadcrumb-link" href="#">Ayam</a></li>
                                    <li data-slot="breadcrumb-separator" role="presentation" aria-hidden="true" className="cn-breadcrumb-separator">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                                    </li>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <li data-slot="breadcrumb-item" className="cn-breadcrumb-item inline-flex items-center"><span data-slot="breadcrumb-page" role="link" aria-disabled="true" aria-current="page" className="cn-breadcrumb-page">Frozen</span></li>
                                </div>
                            </ol>
                        </nav>
                        <h1 className="text-3xl font-semibold" id={'AyamKampungFrozen766'}>Ayam Kampung Frozen</h1>
                        <div className="flex w-fit items-center rounded-sm border px-2.5 py-1.5">
                            <span className="me-2.5 flex items-center gap-1 border-e pe-2.5 text-sm"><span className="text-lg font-medium">4.3</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                            </span><span className="text-muted-foreground">210{/*<!-- -->*/} Reviews</span>
                        </div>                    
                        <div className="flex items-center gap-3">
                            <p className="text-3xl font-bold">Rp {/*<!-- -->*/}{totalHargaItem}</p>
                            <span className="text-muted-foreground font-medium line-through">
                                { diskonValue > 0 ? 
                                    'Rp ' +
                                        hargaItem : '' 
                                }
                            </span>
                            <span data-slot="badge" data-variant="default" className="cn-badge group/badge focus-visible:border-ring aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap focus-visible:ring-[3px] [&amp;&gt;svg]:pointer-events-none cn-badge-variant-default border-none bg-green-600/10 text-green-600 focus-visible:ring-green-600/20 focus-visible:outline-none dark:bg-green-400/10 dark:text-green-400 dark:focus-visible:ring-green-400/40 [a&amp;]:hover:bg-green-600/5 dark:[a&amp;]:hover:bg-green-400/5">
                                {nilaiDiskon*100}{/*<!-- -->*/}% Off
                            </span>
                        </div>
                        <p className="text-muted-foreground">Daging Ayam Kampung Asli yang dipotong segar dari peternakan langsung dan diproses secara cepat kemudian dibekukan sehingga kualitas daging ayam tetap terjaga.</p>
                        <div data-orientation="horizontal" role="separator" aria-orientation="horizontal" data-slot="separator" className="bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch"></div>

                        
                       <OptionsBerat onChangeHarga={handleHargaFromChild} />

                              {/* 224 */}
                    </div>

                    
                </div>
            </div>
        </section>
      </div> 
  );
}
