'use client';
import { useState, useEffect } from "react"; 
import Image from "next/image";
import Link from "next/link";
import { User, CreditCard, CheckCircle2, Form } from "lucide-react"
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { addListToCheckeds, removeListFromCheckout, clearCheckout } from '@/lib/features/checkout/checkoutSlice';
import { RootState } from "@/lib/store";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FormPrimaryAddress from "./form-primary-address";
import FormSecondaryAddress from "./form-secondary-address";
import YourOrderInfo from "./your-order-info";
import PaymentMethods from "./payment-methods";
import AddCustomerForm from "./form-add-customer"
import ShippingMethods from "./shipping-methods";

export default function BeliSajaPage() {
  const dispatch = useAppDispatch();
 
  return (
    <>
    <div className="w-full mx-auto mt-8">
        <Accordion type="multiple" defaultValue={["your_order", "customer_info", "payment_methods"]} className="w-[90%] mx-auto">
      {/*
             <AccordionItem value="customer_info" className="w-full border-b border-red-200 border-4">
              <AccordionTrigger>Customer Info</AccordionTrigger>
              <AccordionContent>
                <AddCustomerForm />
              </AccordionContent>
            </AccordionItem>
            
      */}
            <AccordionItem value="your_order"  className="w-full p-4">
              <AccordionTrigger className="bg-blue-300 p-2">Your Order</AccordionTrigger>
              <AccordionContent>
                <YourOrderInfo />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="customer_info" className="w-full p-4">
              <AccordionTrigger className="bg-blue-300 p-2">Customer Info</AccordionTrigger>
              <AccordionContent>
                <Tabs defaultValue="primary_address" className="" >
                  <TabsList className="w-full">
                    <TabsTrigger value="primary_address" className="">Billing Details</TabsTrigger>
                    <TabsTrigger value="secondary_address">Ship to a Different Address?</TabsTrigger>
                  </TabsList>
                  <TabsContent value="primary_address"><FormPrimaryAddress /></TabsContent>
                  <TabsContent value="secondary_address"><FormSecondaryAddress /></TabsContent>
                </Tabs>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="payment_methods"  className="w-full p-4">
              <AccordionTrigger className="bg-blue-300 p-2">Metode Pembayaran</AccordionTrigger>
              <AccordionContent>
                <PaymentMethods />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="shipping_methods"  className="w-full p-4">
              <AccordionTrigger className="bg-blue-300 p-2">Opsi Pengiriman</AccordionTrigger>
              <AccordionContent>
                <ShippingMethods />
              </AccordionContent>
            </AccordionItem>
          </Accordion>     
    </div>
    <div className="w-full flex justify-center gap-2 mx-auto p-8"><Button variant="secondary" className="bg-blue-400 hover:scale-105 hover:border-2 hover:border-blue-600">Buat Pesanan</Button></div>
    
    </>
  )
}
