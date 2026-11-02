'use client';
import { useState, useEffect } from "react"; 
import Image from "next/image";
import Link from "next/link";
import { User, CreditCard, CheckCircle2, Form } from "lucide-react"
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { addListToCheckeds, removeListFromCheckout, clearCheckout } from '@/lib/features/checkout/checkoutSlice';
import { RootState } from "@/lib/store";
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import styles from './payment.module.css'

export default function TransferBankPayemnt() {
  const dispatch = useAppDispatch();
  const [selectedCuisine, setSelectedCuisine] = useState('');
  // 1. Definisikan daftar opsi dalam sebuah array
  const cuisines = [
    { id: 'thai', label: 'Thai' },
    { id: 'italian', label: 'Italian' },
    { id: 'mexican', label: 'Mexican' },
    { id: 'japanese', label: 'Japanese' }
  ];

  const handleCuisineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCuisine(event.target.value);
  };

  return (
    <>
    <div className={styles['cb-chips']}>
        <fieldset className={styles['cb-chips__set']}>
          <div className="rounded-xl bg-white p-6 text-center shadow-xl mt-6 border-2">
                                  <div
                                      className="mx-auto flex w-10 h-10 p-2 -translate-y-12 transform items-center justify-center rounded-full bg-gray-100 shadow-lg shadow-blue-500/40">
                                      1
                                  </div>  
                                  <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Bank BRI</h1>  
                                  <label className={styles['cb-chips__chip']}>
          <input 
            type="radio" 
            name="cuisine" 
            value="thai" 
            checked={selectedCuisine === 'thai'} 
            onChange={handleCuisineChange} 
          />
          <span>Thai</span>
        </label>    
                              </div>
        
        

        <label className={styles['cb-chips__chip']}>
          <input 
            type="radio" 
            name="cuisine" 
            value="italian" 
            checked={selectedCuisine === 'italian'} 
            onChange={handleCuisineChange} 
          />
          <span>Italian</span>
        </label>

        <label className={styles['cb-chips__chip']}>
          <input 
            type="radio" 
            name="cuisine" 
            value="mexican" 
            checked={selectedCuisine === 'mexican'} 
            onChange={handleCuisineChange} 
          />
          <span>Mexican</span>
        </label>

        <label className={styles['cb-chips__chip']}>
          <input 
            type="radio" 
            name="cuisine" 
            value="japanese" 
            checked={selectedCuisine === 'japanese'} 
            onChange={handleCuisineChange} 
          />
          <span>Japanese</span>
        </label>
      </fieldset>
    </div>


      <div className="grid gap-14 md:grid-cols-3 md:gap-5">
                              
                              <div className="rounded-xl bg-white p-6 text-center shadow-xl mt-6 border-2">
                                  <div
                                      className="mx-auto flex w-10 h-10 p-2 -translate-y-12 transform items-center justify-center rounded-full bg-gray-100 shadow-lg shadow-blue-500/40">
                                      2
                                  </div>  
                                  <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Bank Sulsebar</h1>      
                              </div>
                              <div className="rounded-xl bg-white p-6 text-center shadow-xl mt-6 border-2">
                                  <div
                                      className="mx-auto flex w-10 h-10 p-2 -translate-y-12 transform items-center justify-center rounded-full bg-gray-100 shadow-lg shadow-blue-500/40">
                                      3
                                  </div>  
                                  <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Sea Bank</h1>      
                              </div>
                              <div className="rounded-xl bg-white p-6 text-center shadow-xl mt-6 border-2">
                                  <div
                                      className="mx-auto flex w-10 h-10 p-2 -translate-y-12 transform items-center justify-center rounded-full bg-gray-100 shadow-lg shadow-blue-500/40">
                                      4
                                  </div>  
                                  <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Bank BCA</h1>      
                              </div>
                              <div className="rounded-xl bg-white p-6 text-center shadow-xl mt-6 border-2">
                                  <div
                                      className="mx-auto flex w-10 h-10 p-2 -translate-y-12 transform items-center justify-center rounded-full bg-gray-100 shadow-lg shadow-blue-500/40">
                                      5
                                  </div>  
                                  <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Bank Mandiri</h1>      
                              </div>
                          </div>
    </>
  )
}