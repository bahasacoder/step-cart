"use client"
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { store, RootState } from '@/lib/store';
import ProductList from '@/components/product-list';
import Navbar from '@/components/Navbar';
const List = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <ProductList />
    </div>  
  );
};

export default List;
