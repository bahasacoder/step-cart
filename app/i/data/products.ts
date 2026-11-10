// 1. Definisikan tipe data (jika belum ada di file terpisah)
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
  category: string[]; // Tambahkan tanda kurung siku [] untuk menandakan Array  
  teaser: string;
  descriptions: string;
  specification: string;
  productItems: ProductItem[];
}

// 2. Import langsung dari properti "products" di dalam JSON
import dataJson from "@/db/database.json";

// export const productsData: Product[] = dataJson.products;
export const productsData: Product[] = dataJson.products.map(product => ({
  ...product,
  // Menggabungkan array kategori menjadi satu string dipisahkan koma (misal: "elektronik, gadget")
  category: product.category.join(", ") 
}));
