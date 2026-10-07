'use client';
import Image from "next/image";
import Link from "next/link";
import CartPageContent from "./cart-page";

export default function CheckoutPage() {
  return (
    <div className="w-full">
      <h2 className="text-2xl">Checkput Page</h2>
      
      <CartPageContent />
    </div>
  )
}
