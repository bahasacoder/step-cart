'use client';

import { Product } from '@/lib/features/products/productSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { addToCart } from '@/lib/features/cart/cartSlice';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        Image
      </div>
      <div className={styles.content}>
        header
      </div>
        
    </div>
  );
}
