'use client';

import Image from "next/image";
import Link from "next/link";
import CartDialogBox from "./CartDialogBox";

export default function CartRootPage() {
  return (
    <div className="w-full">
      <h2 className="text-2xl">Shopping Cart</h2>
      <CartDialogBox />
     </div>
  )
}
