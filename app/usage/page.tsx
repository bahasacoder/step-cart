"use client"
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { store, RootState } from '@/lib/store';
import Shop from '@/components/Shop';

const Usage = () => {
  return (
    <Provider store={store}>
      <Shop />
    </Provider>
  );
};

export default Usage;
