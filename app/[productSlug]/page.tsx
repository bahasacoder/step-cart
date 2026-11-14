import { notFound } from "next/navigation";
import database from "@/data/database.json"; // Sesuaikan path ke database.json Anda
import { Product } from "@/types/product";
import ProductDetailClient from "./ProductDetailClient";

const allProducts: Product[] = database.products;

// Pre-render semua halaman produk saat build
export async function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.productSlug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  // 1. Ambil slug dari URL (wajib await di Next.js 15+)
  const { slug } = await params;

  // 2. Cari produk berdasarkan productSlug
  const product = allProducts.find(
    (item) => item.productSlug.toLowerCase() === slug.toLowerCase()
  );

  // 3. Jika slug tidak ada di database.json, tampilkan halaman 404
  if (!product) {
    notFound();
  }

  // 4. Kirim data product yang ditemukan ke Client Component
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
        <ProductDetailClient product={product} />
      </div>
    </div>
  );
}
