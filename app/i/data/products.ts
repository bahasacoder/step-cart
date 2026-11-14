// 1. Definisikan tipe data
export interface ProductItem {
  idItem: string;
  namaItem: string;
  imageItem: string | string[]; // <-- Ubah agar menerima array string[]  
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
  productImage: string | string[]; // <-- Ubah agar menerima array string[]  
  category: string | string[]; // <-- Ubah dari string menjadi string | string[]
  teaser: string;
  descriptions: string;
  specification: string;
  productItems: ProductItem[];
}

// 2. Import langsung dari properti "products" di dalam JSON
import dataJson from "@/data/database.json";

export const productsData: Product[] = dataJson.products.map(product => ({
  ...product,
  // Cek jika category di JSON sudah berupa array, gunakan langsung. 
  // Jika masih string tunggal, bungkus ke dalam array [].
  category: Array.isArray(product.category) 
    ? product.category 
    : [product.category] 
}));
