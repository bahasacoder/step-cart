'use client';

// import type { RootState, AppDispatch } from './store';
import { Product } from '@/lib/features/products/productSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { addToCart } from '@/lib/features/cart/cartSlice';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}
interface CartItem {
  product: Product;
  quantity: number;
}


export function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();
    const cartItems = useAppSelector((state) => state.cart.items);
  const itemInCart = cartItems.find((item: CartItem) => item.product.id === product.id);

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
