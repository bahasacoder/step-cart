
import React from 'react';
import { useDispatch } from 'react-redux';
import { Product } from '@/lib/types';
import { addItem } from '@/features/cartSlice';
import { PlusIcon } from '@/lib/icons';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="aspect-video overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 text-xs font-semibold bg-white/90 backdrop-blur rounded-full text-slate-700">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
            {product.name}
          </h3>
          <span className="text-lg font-semibold text-indigo-600">
            ${product.price.toFixed(2)}
          </span>
        </div>
        
        <p className="text-sm text-slate-500 line-clamp-2 mb-4">
          {product.description}
        </p>
        
        <button 
          onClick={() => dispatch(addItem(product))}
          className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 bg-slate-900 text-white rounded-xl hover:bg-indigo-600 active:scale-95 transition-all duration-200"
        >
          <PlusIcon className="h-5 w-5" />
          <span className="font-medium">Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
