"use client"
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { store, RootState } from '@/lib/store';
import ProductList from '@/components/product-list';

const List = () => {
  return (
      <ProductList />
  );
};

export default Usage;
