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

interface PaymentMethodsProps {
    selectedPayment: string;
    onPaymentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PaymentMethods({ selectedPayment, onPaymentChange }: PaymentMethodsProps) {

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
                                            checked={selectedPayment === 'ovo'} 
                                            onChange={onPaymentChange} 
                                        />
                                        <span>OVO</span>
                                    </label>
                                    <label className={styles['cb-chips__chip']}>
                                        <input 
                                            type="radio" 
                                            name="gopay" 
                                            value="gopay" 
                                            checked={selectedPayment === 'gopay'} 
                                            onChange={onPaymentChange} 
                                        />
                                        <span>GOPAY</span>
                                    </label>
                                    <label className={styles['cb-chips__chip']}>
                                        <input 
                                            type="radio" 
                                            name="dana" 
                                            value="dana" 
                                            checked={selectedPayment === 'dana'} 
                                            onChange={onPaymentChange} 
                                        />
                                        <span>DANA</span>
                                    </label>
                                    <label className={styles['cb-chips__chip']}>
                                        <input 
                                            type="radio" 
                                            name="qris" 
                                            value="qris" 
                                            checked={selectedPayment === 'qris'} 
                                            onChange={onPaymentChange} 
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
                                            checked={selectedPayment === 'bri'} 
                                            onChange={onPaymentChange} 
                                        />
                                        <span>BRI</span>
                                    </label>
                                    <label className={styles['cb-chips__chip']}>
                                        <input 
                                            type="radio" 
                                            name="bca" 
                                            value="bca" 
                                            checked={selectedPayment === 'bca'} 
                                            onChange={onPaymentChange} 
                                        />
                                        <span>BCA</span>
                                    </label>
                                    <label className={styles['cb-chips__chip']}>
                                        <input 
                                            type="radio" 
                                            name="bsi" 
                                            value="bsi" 
                                            checked={selectedPayment === 'bsi'} 
                                            onChange={onPaymentChange} 
                                        />
                                        <span>BSI</span>
                                    </label>
                                    <label className={styles['cb-chips__chip']}>
                                        <input 
                                            type="radio" 
                                            name="bni" 
                                            value="bni" 
                                            checked={selectedPayment === 'bni'} 
                                            onChange={onPaymentChange} 
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
                                            checked={selectedPayment === 'indomaret'} 
                                            onChange={onPaymentChange} 
                                        />
                                        <span>Indomaret</span>
                                    </label>
                                    <label className={styles['cb-chips__chip']}>
                                        <input 
                                            type="radio" 
                                            name="alfamart" 
                                            value="alfamart" 
                                            checked={selectedPayment === 'alfamart'} 
                                            onChange={onPaymentChange} 
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