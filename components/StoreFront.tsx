import React from 'react';
import { useSelector } from 'react-redux';
import productReducer from '@/features/productSlice';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import CartDrawer from '@/components/CartDrawer';

const Storefront: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Modern Tech Catalog
          </h1>
          <p className="mt-4 text-xl text-slate-500 max-w-2xl">
            Discover precision-engineered devices designed to elevate your lifestyle and boost your productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-slate-900 mb-4 md:mb-0">
              LUMINA
            </div>
            <div className="text-slate-500 text-sm">
              © 2024 Lumina Commerce. Powered by Gemini AI.
            </div>
          </div>
        </div>
      </footer>

      <CartDrawer />
    </div>
  );
};

export default Storefront;