"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Redux Toolkit hooks & action
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice"; // <-- Sesuaikan path cartSlice Anda

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import "./styles.css";

interface ProductCardItem {
  id: string;
  productSlug: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  discountText: string;
  images: string[];
}

const collectionProducts: ProductCardItem[] = [
  {
    id: "prod-1",
    productSlug: "doc-ayam-kampung",
    name: "DOC Ayam Kampung",
    category: "Ayam",
    price: 7000,
    originalPrice: 12000,
    discountText: "40% Off",
    images: [
      "ttps://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@5836d3cfdc6d204d154b7992ff888b6df3e6759e/uploads/2026-02-12T05-51-25-172Z-bqpydx82p.png",
      "https://jsdelivr.net",
      "https://jsdelivr.net",
    ],
  },
  {
    id: "prod-2",
    productSlug: "ayam-kampung-dewasa",
    name: "Ayam Kampung Dewasa",
    category: "Ayam",
    price: 75000,
    originalPrice: 95000,
    discountText: "20% Off",
    images: [
      "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@e3a8ff34a8d74beae6ace2b9b853d2a50fce3773/uploads/2026-02-12T05-56-39-420Z-e1rah59mc.png",
      "https://jsdelivr.net",
      "https://jsdelivr.net",
    ],
  },
];

// Helper format Rupiah
const formatRupiah = (angka: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(angka);
};

export default function ProductPage() {
  const dispatch = useDispatch();

  const handleAddToCart = (item: ProductCardItem) => {
    dispatch(
      addToCart({
        id: item.id,
        productSlug: item.productSlug,
        name: item.name,
        price: item.price,
        image: item.images[0],
        quantity: 1,
      })
    );
  };

  return (
    <main className="flex flex-col">
      <section className="flex-1">
        <div className="mx-auto max-w-7xl space-y-12 px-4 py-4 sm:space-y-16 sm:px-6 lg:space-y-24 lg:px-8">
          <div className="space-y-4 text-center">
            <p className="text-sm font-medium uppercase">Ayam Kampung Asli</p>
            <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
              All New Collection
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {collectionProducts.map((product) => (
              <div
                key={product.id}
                data-slot="card"
                className="bg-card text-card-foreground flex flex-col rounded-xl border group gap-0 py-0 shadow-none transition-all duration-300 overflow-hidden"
              >
                <div
                  className="relative"
                  aria-roledescription="carousel"
                  data-slot="carousel"
                >
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    loop={product.images.length > 1}
                    className="w-full"
                  >
                    {product.images.map((imgUrl, index) => (
                      <SwiperSlide key={index}>
                        <div className="flex items-center justify-center">
                          <img
                            src={imgUrl}
                            alt={`${product.name} ${index + 1}`}
                            className="h-[415px] w-full object-contain"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Tombol Add to Cart dengan Dispatch Redux */}
                  <div className="bg-card absolute bottom-0 z-10 flex w-full translate-y-full flex-col items-center gap-4 px-6 pt-4 pb-2 opacity-0 duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <button
                      type="button"
                      onClick={() => handleAddToCart(product)}
                      data-slot="button"
                      className="focus-visible:border-ring focus-visible:ring-ring/50 inline-flex shrink-0 items-center justify-center gap-2 text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 bg-background hover:bg-accent hover:text-accent-foreground border shadow-xs h-10 rounded-md px-6 w-full cursor-pointer"
                    >
                      Add to Cart
                      <svg
                        xmlns="http://w3.org"
                        width="20"
                        height="20"
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

                <div
                  data-slot="card-content"
                  className="px-6 z-10 flex flex-col gap-1 py-6 bg-card"
                >
                  <div className="flex items-center justify-between font-semibold">
                    <h3 className="text-lg">{product.name}</h3>
                    <span className="text-2xl">
                      {formatRupiah(product.price)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">
                      {product.category}
                    </span>
                    <div className="flex items-center justify-between gap-2">
                      <span className="line-through">
                        {formatRupiah(product.originalPrice)}
                      </span>
                      <span className="text-sm text-green-600">
                        {product.discountText}
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
