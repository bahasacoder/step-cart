"use client"
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { RootState } from "@/lib/store";
import type { CheckoutItem } from "./your-order-info"

export const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    getlic?: CheckoutItem
  ) => {
    const nextChecked = e.target.checked;
    const currentId = getlic?.idList !== undefined && getlic?.idList !== null
      ? Number(getlic.idList)
      : NaN;

    const checkedCheckboxes = document.querySelectorAll<HTMLInputElement>('input[name="invoice-item"]:checked');
    const activeSls = Array.from(checkedCheckboxes)
      .map((cb) => Number(cb.value))
      .filter((value) => !Number.isNaN(value));

    if (!Number.isNaN(currentId)) {
      if (nextChecked && !activeSls.includes(currentId)) {
        activeSls.push(currentId);
      }

      if (!nextChecked) {
        const index = activeSls.indexOf(currentId);
        if (index >= 0) activeSls.splice(index, 1);
      }
    }
  };

  
       // Fungsi pembantu untuk mendapatkan format tanggal saat ini (YYYYMMDD-HHMMSS)
export const getFormattedDate = () => {
          const now = new Date();
          const year = now.getFullYear();
          const month = String(now.getMonth() + 1).padStart(2, '0');
          const day = String(now.getDate()).padStart(2, '0');
          const hours = String(now.getHours()).padStart(2, '0');
          const minutes = String(now.getMinutes()).padStart(2, '0');
          const seconds = String(now.getSeconds()).padStart(2, '0');
          
          return `${year}${month}${day}-${hours}${minutes}${seconds}`;
      };
  
export function generateDateUUID(): string {
      return window.crypto.randomUUID(); 
} 


export function uniqueNameChecker(
    getDataAddress: Record<string, unknown>,
    uniqueName: string,
    firstNamePrimary: string,
    lastNamePrimary: string
  ) {

    console.log('getDataAddress', getDataAddress)
    const convertToArray = <T extends object,>(obj: T): T[keyof T][] => {
        return Object.keys(obj).map((key) => {
            // Mengembalikan objek internalnya
            return obj[key as keyof T]; 
        });
    };
    const resultUniqueName = convertToArray(getDataAddress);
    // 2. ✨ PERBAIKAN: Cari data menggunakan variabel `uniqueName` dari form
    // const findUniqueName = Array.isArray(resultUniqueName) 
    //   ? resultUniqueName.find((item) => item.uniqueName === uniqueName)
    //   : undefined;
        const UniqueNameOld = getDataAddress.uniqueName;
        const firstNamePrimaryOld = getDataAddress.firstNamePrimary;
        const lastNamePrimaryOld = getDataAddress.lastNamePrimary;
      console.log('uniqueName', uniqueName)
    console.log('UniqueNameOld', UniqueNameOld)

    // 3. ✨ KONDISI: Jika `findUniqueName` DITEMUKAN (bukan undefined)
    if (UniqueNameOld === uniqueName && firstNamePrimaryOld === firstNamePrimary && lastNamePrimaryOld === lastNamePrimary) {
        console.log("Data ditemukan, tidak boleh duplikat:", UniqueNameOld);
        alert("Unique Name sudah terdaftar! Silakan gunakan nama lain.");
        return; // Hentikan proses submit jika data sudah ada
    }
}

export function useAmbilListItemCheckout (idChekout: unknown) {
    // === STATE UNTUK BIAYA PENGIRIMAN ===
    // Mengambil nilai awal dari localStorage jika ada, jika tidak default ke 0
    const [biayaPengiriman, setBiayaPengiriman] = useState<number>(() => {
        const savedPrice = localStorage.getItem('user_shipping_price');
        return savedPrice ? Number(savedPrice) : 0;
    });
    const [deliveryType, setDeliveryType] = useState<string>('');
    
  const checkedItems = (useAppSelector((state: RootState) => state.checkout.items) ?? []) as unknown as Array<CheckoutItem | CheckoutItem[]>;
    const getItemsCart = (useAppSelector((state: RootState) => state.cart.items) ?? []) as unknown as CheckoutItem[];      
    // const checkoutGroups: CheckoutList[] = checkedItems.filter((group): group is CheckoutList => Array.isArray(group));
    const checkoutGroups: CheckoutItem[] = checkedItems.flatMap((group) => 
                    Array.isArray(group) ? group : [group]
                );
    const checkedItemsStringify: string[] = checkoutGroups.map((chites: CheckoutItem): string => JSON.stringify(chites));
                
      
    const getIdListItemCheck = checkoutGroups.map((item) => item.idList).filter(Boolean);
    
    const getListItemCheckout: CheckoutItem[] = getIdListItemCheck
        .map((gilic) => getItemsCart.find((gisfy) => (gisfy as CheckoutItem).idList === gilic))
       .filter((item): item is CheckoutItem => Boolean(item));
    
        // 1. Dapatkan daftar idList yang di-check (tanpa stringify/parse yang berat)

        // 2. Hitung hargaPerIdList SECARA AKURAT langsung dari data checkoutGroups
    const hargaPerListItem = checkoutGroups.reduce((acc, checkedItem) => {
        const id = checkedItem.idList;
            if (id === undefined || id === null) return acc;

            // Cari data item yang bersangkutan di dalam Cart untuk mengambil harga TERBARU (fresh)
            const cartItem = getItemsCart.find((gisfy) => gisfy.idList === id);
                
            // UTAMA: Gunakan harga dari Cart, tapi GUNAKAN QUANTITY dari item yang sedang di-check!
            // Jika data di cartItem tidak ketemu, gunakan harga dari checkedItem itu sendiri sebagai cadangan
        const harga = Number(cartItem?.hargaItem ?? checkedItem.hargaItem ?? 0);
        const qty = Number(checkedItem.quantity ?? cartItem?.quantity ?? 1);
        const totalListItem = harga * qty;

        // Akumulasikan total harga berdasarkan idList yang sama
        if (acc[id]) {
                    acc[id] += totalListItem;
        } else {
                    acc[id] = totalListItem;
        }

        return acc;
    }, {} as Record<string | number, number>);
    
    // 4. Hitung total HARGA semua produk (Menggunakan data fresh dari getListItemCheckout)
    const totalHargaCheckout = getListItemCheckout.reduce((accumulator: number, item: CheckoutItem) => {
        const harga = Number(item.hargaItem ?? 0);
        const qty = Number(item.quantity ?? 1); // Default ke 1 jika quantity tidak ada
          return accumulator + (harga * qty);
    }, 0);
        
    // 1. Menghitung total HARGA semua produk
        // const totalHargaList = getListItemCheckout.reduce((accumulator: number, item: CheckoutItem) => {
        // return accumulator + Number(item.hargaItem ?? 0) * Number(item.quantity ?? 0);
            // }, 0); // 0 adalah nilai awal (initial value) angka hitungan
    const totalHargaDiskon = getListItemCheckout.reduce((accumulator: number, item: CheckoutItem) => {
              return accumulator + Number(item.hargaDiskon ?? 0) * Number(item.quantity ?? 0);
    }, 0);
    const totalBiayaPajak = getListItemCheckout.reduce((accumulator: number, item: CheckoutItem) => {
              return accumulator + Number(item.biayaPajak ?? 0) * Number(item.quantity ?? 0);
    }, 0);
        // 2. Menghitung total STOK barang yang tersedia
    const totalQuantity = getListItemCheckout.reduce((acc: number, item: CheckoutItem) => {
          return acc + Number(item.quantity ?? 0);
    }, 0);

    
    // return getListItemCheckout;
    // tambahan
    const handleDeliveryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
            const value = e.target.value;
            setDeliveryType(value);
            localStorage.setItem('user_shipping_price', value); 
            setBiayaPengiriman(Number(value)); // Mengubah state lokal hook
    };

        // === HITUNG TOTAL (OPSIONAL) ===
        const totalBiayaLayanan = 0;
        // Kamu bisa menghitung total harga di sini jika diperlukan nanti

    const totalPayable = Object.values(hargaPerListItem).reduce((total, harga) => total + harga, 0)
      - totalHargaDiskon + totalBiayaPajak + totalBiayaLayanan + biayaPengiriman;
    return {
    getListItemCheckout,
    hargaPerListItem,
    totalHargaDiskon,
    totalBiayaPajak,
    totalPayable,
    totalHargaCheckout,
    totalQuantity,
            biayaPengiriman,
            deliveryType,
            handleDeliveryChange,
            setBiayaPengiriman 
  };
}