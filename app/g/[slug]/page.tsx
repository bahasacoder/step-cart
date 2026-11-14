import { notFound } from "next/navigation";
import ProductDetailClient from "./ProductDetailClient";
import database from "@/data/database.json"; // Sesuaikan path ke database.json Anda

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
  satuan?: string;
  productItems: ProductItem[];
}

// Ambil seluruh produk dari database.json
// const allProducts: Product[] = database.products;
const allProducts = database.products.map((item) => ({
  ...item,
  category: Array.isArray(item.category)
    ? item.category.join(", ")
    : item.category,
  productImage: Array.isArray(item.productImage)
    ? item.productImage[0] ?? ""
    : item.productImage,
  productItems: item.productItems.map((subItem) => ({
    ...subItem,
    imageItem: Array.isArray(subItem.imageItem)
      ? subItem.imageItem[0] ?? ""
      : subItem.imageItem,
  })),
}));
// Ambil semua produk
// products = database.products;

// Cari satu produk berdasarkan slug
// const anakanAyam = database.products.find(
//   (item) => item.productSlug === "anakan-ayam-kampung"
// );

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.productSlug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const product = allProducts.find((p) => p.productSlug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
        <ProductDetailClient product={product} />
      </div>
    </div>
  );
}
