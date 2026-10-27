"use client"
import React, { useState } from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useId } from 'react'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import styles from './payment.module.css'

export default function PaymentMethods() {
    const id = useId()
    const [selectedCuisine, setSelectedCuisine] = useState('');

    const handleCuisineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedCuisine(event.target.value);
    };

    return (
        <>
        <div className="w-full grid gap-14 md:grid-cols-1 md:gap-5 mx-auto">
                <div className="w-full mx-auto {styles['cb-chips']}">
                    <fieldset className={styles['cb-chips__set']}>
                        <div className="rounded-xl bg-white p-6 text-center shadow-xl mt-6 border-2">
                            <div
                                className="mx-auto flex w-10 h-10 p-2 -translate-y-12 transform items-center justify-center rounded-full bg-gray-100 shadow-lg shadow-blue-500/40">
                                1
                            </div>  
                            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">E-Wallet</h1>  
                            <div className='flex gap-2 mx-auto items-center justify-center border'>
                                    <label className={styles['cb-chips__chip']}>
                                        <input 
                                            type="radio" 
                                            name="ovo" 
                                            value="ovo" 
                                            checked={selectedCuisine === 'ovo'} 
                                            onChange={handleCuisineChange} 
                                        />
                                        <span>OVO</span>
                                    </label>
                                    <label className={styles['cb-chips__chip']}>
                                        <input 
                                            type="radio" 
                                            name="gopay" 
                                            value="gopay" 
                                            checked={selectedCuisine === 'gopay'} 
                                            onChange={handleCuisineChange} 
                                        />
                                        <span>GOPAY</span>
                                    </label>
                                    <label className={styles['cb-chips__chip']}>
                                        <input 
                                            type="radio" 
                                            name="dana" 
                                            value="dana" 
                                            checked={selectedCuisine === 'dana'} 
                                            onChange={handleCuisineChange} 
                                        />
                                        <span>DANA</span>
                                    </label>
                                    <label className={styles['cb-chips__chip']}>
                                        <input 
                                            type="radio" 
                                            name="qris" 
                                            value="qris" 
                                            checked={selectedCuisine === 'qris'} 
                                            onChange={handleCuisineChange} 
                                        />
                                        <span>QRIS</span>
                                    </label>
                                </div>    
                        </div>
                        <div className="rounded-xl bg-white p-6 text-center shadow-xl mt-6 border-2">
                            <div
                                className="mx-auto flex w-10 h-10 p-2 -translate-y-12 transform items-center justify-center rounded-full bg-gray-100 shadow-lg shadow-blue-500/40">
                                2
                            </div>  
                            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Trasfer Bank</h1>  
                                <div className='flex gap-2 mx-auto items-center justify-center border'>
                                    <label className={styles['cb-chips__chip']}>
                                        <input 
                                            type="radio" 
                                            name="bri" 
                                            value="bri" 
                                            checked={selectedCuisine === 'bri'} 
                                            onChange={handleCuisineChange} 
                                        />
                                        <span>BRI</span>
                                    </label>
                                    <label className={styles['cb-chips__chip']}>
                                        <input 
                                            type="radio" 
                                            name="bca" 
                                            value="bca" 
                                            checked={selectedCuisine === 'bca'} 
                                            onChange={handleCuisineChange} 
                                        />
                                        <span>BCA</span>
                                    </label>
                                    <label className={styles['cb-chips__chip']}>
                                        <input 
                                            type="radio" 
                                            name="bsi" 
                                            value="bsi" 
                                            checked={selectedCuisine === 'bsi'} 
                                            onChange={handleCuisineChange} 
                                        />
                                        <span>BSI</span>
                                    </label>
                                    <label className={styles['cb-chips__chip']}>
                                        <input 
                                            type="radio" 
                                            name="bni" 
                                            value="bni" 
                                            checked={selectedCuisine === 'bni'} 
                                            onChange={handleCuisineChange} 
                                        />
                                        <span>BNI</span>
                                    </label>
                                </div>    
                        </div>
                        <div className="rounded-xl bg-white p-6 text-center shadow-xl mt-6 border-2">
                            <div
                                className="mx-auto flex w-10 h-10 p-2 -translate-y-12 transform items-center justify-center rounded-full bg-gray-100 shadow-lg shadow-blue-500/40">
                                3
                            </div>  
                            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Convenience Store</h1>  
                                <div className='flex gap-2 mx-auto items-center justify-center border'>
                                    <label className={styles['cb-chips__chip']}>
                                        <input 
                                            type="radio" 
                                            name="indomaret" 
                                            value="indomaret" 
                                            checked={selectedCuisine === 'indomaret'} 
                                            onChange={handleCuisineChange} 
                                        />
                                        <span>Indomaret</span>
                                    </label>
                                    <label className={styles['cb-chips__chip']}>
                                        <input 
                                            type="radio" 
                                            name="alfamart" 
                                            value="alfamart" 
                                            checked={selectedCuisine === 'alfamart'} 
                                            onChange={handleCuisineChange} 
                                        />
                                        <span>Alfamart</span>
                                    </label>
                                </div>    
                        </div>
                    
                </fieldset>
                </div>

        </div>
        
        </>
        
    )
}
