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
  const cartItems = useAppSelector((state) => state.cart.items);
  const itemInCart = cartItems.find((item) => item.product.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        Image
      </div>
      <div className={styles.content}>
        header
        </div>
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`${styles.addButton} primary`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
