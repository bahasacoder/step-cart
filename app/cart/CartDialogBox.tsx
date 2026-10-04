"use client"
import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, updateQuantity, clearCart } from '@/lib/features/cart/cartSlice';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import Image from "next/image";
import Link from "next/link";

export default function CartRootPage() {
  return (
    <div>
        
      </div>
  )
