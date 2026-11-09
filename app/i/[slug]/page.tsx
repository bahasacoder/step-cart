import React from "react";
import { notFound } from "next/navigation";
import { productsData } from "../data/products";
import ProductDetail from "../components/ProductDetail";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

// Generate static params agar performa cepat saat build (SSG)
export async function generateStaticParams() {
  return productsData.map((prod) => ({
    slug: prod.productSlug,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;

  // Mencari produk yang sesuai dengan slug di URL
  const product = productsData.find((p) => p.productSlug === slug);

  // Jika produk tidak ditemukan, arahkan ke 404
  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
      <ProductDetail product={product} />
    </main>
  );
}
