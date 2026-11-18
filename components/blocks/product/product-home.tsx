"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/features/cart/cartSlice"; // Sesuaikan path cartSlice Anda

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

interface ProductItem {
  id: string;
  productSlug: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  discount: string;
  images: string[];
}

const products: ProductItem[] = [
  {
    id: "doc-ayam-kampung",
    productSlug: "doc-ayam-kampung",
    name: "DOC Ayam Kampung",
    category: "Ayam",
    price: 7000,
    originalPrice: 12000,
    discount: "40% Off",
    images: [
      "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@5836d3cfdc6d204d154b7992ff888b6df3e6759e/uploads/2026-02-12T05-51-25-172Z-bqpydx82p.png",
      "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@5836d3cfdc6d204d154b7992ff888b6df3e6759e/uploads/2026-02-12T05-51-25-172Z-bqpydx82p.png",
      "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@5836d3cfdc6d204d154b7992ff888b6df3e6759e/uploads/2026-02-12T05-51-25-172Z-bqpydx82p.png",
    ],
  },
  {
    id: "ayam-kampung-dewasa",
    productSlug: "ayam-kampung-dewasa",
    name: "Ayam Kampung Dewasa",
    category: "Ayam",
    price: 75000,
    originalPrice: 95000,
    discount: "20% Off",
    images: [
      "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@e3a8ff34a8d74beae6ace2b9b853d2a50fce3773/uploads/2026-02-12T05-56-39-420Z-e1rah59mc.png",
      "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@e3a8ff34a8d74beae6ace2b9b853d2a50fce3773/uploads/2026-02-12T05-56-39-420Z-e1rah59mc.png",
      "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@e3a8ff34a8d74beae6ace2b9b853d2a50fce3773/uploads/2026-02-12T05-56-39-420Z-e1rah59mc.png",
    ],
  },
];

const formatRupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);

export default function ProductPage() {
  const dispatch = useDispatch();

  const handleAddToCart = (item: ProductItem) => {
    dispatch(
      addToCart({
        id: item.id,
        productSlug: item.productSlug,
        name: item.name,
        price: item.price,
        image: item.images,
        quantity: 1,
      })
    );
  };

  return (
    <main className="flex flex-col py-8">
      <section className="flex-1">
        {/* Wadah max-w-7xl membungkus judul SEKALIGUS grid kartu produk */}
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="space-y-2 text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Ayam Kampung Asli
            </p>
            <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
              All New Collection
            </h2>
          </div>

          {/* Grid Kartu Produk */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                data-slot="card"
                className="bg-card text-card-foreground flex flex-col rounded-xl border group overflow-hidden shadow-xs transition-all duration-300 hover:shadow-md"
              >
                {/* Area Swiper Carousel */}
                <div
                  className="relative aspect-square w-full overflow-hidden bg-muted/30"
                  aria-roledescription="carousel"
                  data-slot="carousel"
                >
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    loop={product.images.length > 1}
                    className="h-full w-full"
                  >
                    {product.images.map((imgSrc, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="flex h-full w-full items-center justify-center">
                          <img
                            src={imgSrc}
                            alt={`${product.name} ${idx + 1}`}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Tombol Add to Cart Slide-Up */}
                  <div className="bg-card/95 backdrop-blur-xs absolute bottom-0 left-0 right-0 z-10 flex w-full translate-y-0 opacity-100 md:translate-y-full md:opacity-0 flex-col items-center px-5 py-3 transition-all duration-300 md:group-hover:translate-y-0 md:group-hover:opacity-100 border-t">
                    <button
                      type="button"
                      onClick={() => handleAddToCart(product)}
                      data-slot="button"
                      className="focus-visible:border-ring focus-visible:ring-ring/50 inline-flex shrink-0 items-center justify-center gap-2 text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] bg-background hover:bg-accent hover:text-accent-foreground border shadow-xs h-10 rounded-md px-6 w-full cursor-pointer"
                    >
                      Add to Cart
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-shopping-cart"
                        aria-hidden="true"
                      >
                        <circle cx="8" cy="21" r="1" />
                        <circle cx="19" cy="21" r="1" />
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Konten Detail Kartu */}
                <div
                  data-slot="card-content"
                  className="px-6 py-5 z-10 flex flex-col gap-1.5 bg-card"
                >
                  <div className="flex items-center justify-between gap-2 font-semibold">
                    <h3 className="text-lg line-clamp-1">{product.name}</h3>
                    <span className="text-xl font-bold shrink-0">
                      {formatRupiah(product.price)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="line-through text-muted-foreground text-xs">
                        {formatRupiah(product.originalPrice)}
                      </span>
                      <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                        {product.discount}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
