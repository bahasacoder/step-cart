import { notFound } from "next/navigation";
import ProductDetailClient from "./ProductDetailClient";
// Sesuaikan path import ini dengan lokasi file JSON Anda (misal: @/data/products.json)
import productsData from "@/db/database.json";

// 1. Definisikan tipe data struktur objek sesuai JSON terbaru
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
  category: string | string[]; // Mendukung string maupun array string[] dari JSON
  teaser: string;
  descriptions: string;
  specification: string;
  satuan?: string;
  productItems: ProductItem[];
}

// 2. Ambil array products dari file JSON
const allProducts: Product[] = productsData.products;

// 3. Fungsi SSG untuk membuat route statis saat proses build dijalankan
export async function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.productSlug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = await params;

  const product = allProducts.find(
    (p) => p.productSlug === resolvedParams.slug
  );

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
