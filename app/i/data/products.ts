// 1. Definisikan tipe data
export interface ProductItem {
  idItem: string;
  namaItem: string;
  imageItem: string;
  size: string;
  unit: string;
  netto: string;
  dimensi: string;
  hargaItem: number;
  hargaDiskon: number;
  nilaiDiskon: number;
  stokItem: number;
}

export interface Product {
  idProduct: string;
  productName: string;
  productSlug: string;
  productImage: string;
  category: string[]; // <-- Tambahkan [] di sini agar menjadi array
  teaser: string;
  descriptions: string;
  specification: string;
  productItems: ProductItem[];
}

// 2. Import langsung dari properti "products" di dalam JSON
import dataJson from "@/db/database.json";

export const productsData: Product[] = dataJson.products.map(product => ({
  ...product,
  // Cek jika category di JSON sudah berupa array, gunakan langsung. 
  // Jika masih string tunggal, bungkus ke dalam array [].
  category: Array.isArray(product.category) 
    ? product.category 
    : [product.category] 
}));
