"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";

// Import Redux Toolkit hooks & action
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/lib/features/cart/cartSlice"; // Sesuaikan path cartSlice Anda
import { Str_Random, formatRibuan, formatRupiah } from "@/actions/generalFunctions"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

export interface ProductItem {
  id: number;
  idProduct: string;
  productName: string;
  productSlug: string;
  idItem: string;
  namaItem: string;
  categories: string[];
  hargaItem: number;
  nilaiDiskon: number;
  imagesItem: string[];
  quantity: number;
}

const products: ProductItem[] = [
  {
    id: 6,
    idProduct: "PROD-05b38a6e-42da-4f5d-95c5-ce979ed60055",
    productName: "Anakan Ayam Kampung",
    productSlug: "anakan-ayam-kampung",
    idItem: "ITEM-896e4e44",
    namaItem: "200 gr",
    categories: ["Ayam"],
    hargaItem: 20000,
    nilaiDiskon: 0,
    imagesItem: [
      "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@dd26c643cc88c067b5225453d7e1cc5332e37db5/uploads/2026-02-12T07-35-04-532Z-czubo9knp.png",
      "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@dd26c643cc88c067b5225453d7e1cc5332e37db5/uploads/2026-02-12T07-35-04-532Z-czubo9knp.png",
      "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@dd26c643cc88c067b5225453d7e1cc5332e37db5/uploads/2026-02-12T07-35-04-532Z-czubo9knp.png",
    ],
    quantity: 1,
  },
  {
    id: 5,
    idProduct: "PROD-138dc19c-52aa-4d53-b295-59e324d68a85",
    productName: "DOC Ayam Kampung",
    productSlug: "doc-ayam-kampung",
    idItem: "ITEM-1fb54640",
    namaItem: "5 ekor",
    categories: ["Ayam"],
    hargaItem: 50000,
    nilaiDiskon: 0,
    imagesItem: [
      "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@5836d3cfdc6d204d154b7992ff888b6df3e6759e/uploads/2026-02-12T05-51-25-172Z-bqpydx82p.png",
      "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@5836d3cfdc6d204d154b7992ff888b6df3e6759e/uploads/2026-02-12T05-51-25-172Z-bqpydx82p.png",
      "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@5836d3cfdc6d204d154b7992ff888b6df3e6759e/uploads/2026-02-12T05-51-25-172Z-bqpydx82p.png",
    ],
    quantity: 1,
  },
  {
    id: 4,
    idProduct: "PROD-3650e2eb-66d5-4da1-9cfb-146e83b3a214",
    productName: "Indukan AKA Betina",
    productSlug: "indukan-aka-betina",
    idItem: "ITEM-700cd608",
    namaItem: "1 ekor",
    categories: ["Ayam"],
    hargaItem: 80000,
    nilaiDiskon: 0,
    imagesItem: [
      "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@e3a8ff34a8d74beae6ace2b9b853d2a50fce3773/uploads/2026-02-12T05-56-39-420Z-e1rah59mc.png",
      "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@e3a8ff34a8d74beae6ace2b9b853d2a50fce3773/uploads/2026-02-12T05-56-39-420Z-e1rah59mc.png",
      "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@e3a8ff34a8d74beae6ace2b9b853d2a50fce3773/uploads/2026-02-12T05-56-39-420Z-e1rah59mc.png",
    ],
    quantity: 1,
  },
  {
    id: 3,
    idProduct: "PROD-5fd3f354-fa58-4466-b413-a9006c2d5728",
    productName: "Ayam Kampung Frozen",
    productSlug: "ayam-kampung-frozen",
    idItem: "ITEM-d24df704",
    namaItem: "1000 Gram",
    categories: ["Ayam", "Frozen"],
    hargaItem: 100000,
    nilaiDiskon: 0,
    imagesItem: [
      "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@76d2f18cbbb5d6294cad122fbc5b62baf1d4f5ba/uploads/2026-02-12T07-03-40-599Z-su0xe2suz.png",
      "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@76d2f18cbbb5d6294cad122fbc5b62baf1d4f5ba/uploads/2026-02-12T07-03-40-599Z-su0xe2suz.png",
      "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@76d2f18cbbb5d6294cad122fbc5b62baf1d4f5ba/uploads/2026-02-12T07-03-40-599Z-su0xe2suz.png",
    ],
    quantity: 1,
  },
  {
    id: 2,
    idProduct: "PROD-d336f8b3-7b58-417f-9cf0-872038daba02",
    productName: "Telur Ayam Kampung",
    productSlug: "telur-ayam-kampung",
    idItem: "ITEM-bf6eb902",
    namaItem: "6 butir",
    categories: ["Ayam", "Egg"],
    hargaItem: 15000,
    nilaiDiskon: 0,
    imagesItem: [
      "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@f23f3bcbe88aa817beefd139e1864048af4bb8a6/uploads/2026-02-12T07-08-35-970Z-689dx58l9.png",
      "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@f23f3bcbe88aa817beefd139e1864048af4bb8a6/uploads/2026-02-12T07-08-35-970Z-689dx58l9.png",
      "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@f23f3bcbe88aa817beefd139e1864048af4bb8a6/uploads/2026-02-12T07-08-35-970Z-689dx58l9.png",
    ],
    quantity: 1,
  },
  {
    id: 1,
    idProduct: "PROD-269062b1-c936-440c-b85c-023ad3b4709e",
    productName: "Ayam Kampung Pejantan",
    productSlug: "ayam-kampung-pejantan",
    idItem: "ITEM-6c2070ba",
    namaItem: "< 1200 gr",
    categories: ["Ayam", "Meat"],
    hargaItem: 10000,
    nilaiDiskon: 0,
    imagesItem: [
      "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@7ede68d3dc1c8a65138b92cc464271bfda006a7d/uploads/2026-02-12T07-14-39-174Z-6o4qguvkp.png",
      "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@7ede68d3dc1c8a65138b92cc464271bfda006a7d/uploads/2026-02-12T07-14-39-174Z-6o4qguvkp.png",
      "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@7ede68d3dc1c8a65138b92cc464271bfda006a7d/uploads/2026-02-12T07-14-39-174Z-6o4qguvkp.png",
    ],
    quantity: 1,
  },
];


export default function ProductPage() {
      const [idList, setIdList] = useState(() => Str_Random(4));

 const dispatch = useDispatch();
 const handleAddToCart = (item: ProductItem, finalPrice: number) => {
   return ;
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
            {products.map((product) => {
              // Hitung harga akhir jika nilaiDiskon > 0
              const hasDiscount = product.nilaiDiskon > 0;
              const hargaAkhir = hasDiscount
                ? product.hargaItem - (product.hargaItem * product.nilaiDiskon) / 100
                : product.hargaItem;

              return (
                <div
                  key={product.idProduct}
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
                      navigation={{
                        prevEl: `.prev-${product.id}`,
                        nextEl: `.next-${product.id}`,
                      }}
                      pagination={{ clickable: true }}
                      loop={product.imagesItem.length > 1}
                      className="h-full w-full"
                    >
                      {product.imagesItem.map((imgSrc, idx) => (
                        <SwiperSlide key={idx}>
                          <Link
                            href={`/${product.productSlug}`}
                            className="flex h-full w-full items-center justify-center"
                          >
                            <img
                              src={imgSrc}
                              alt={`${product.productName} ${idx + 1}`}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </Link>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* Custom Tombol Prev & Next */}
                    {product.imagesItem.length > 1 && (
                      <>
                        <button
                          type="button"
                          aria-label="Previous slide"
                          className={`prev-${product.id} absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/85 text-gray-900 shadow-md backdrop-blur-xs border border-gray-200 transition-all duration-300 hover:bg-white hover:scale-105 opacity-90 md:opacity-0 md:group-hover:opacity-100 cursor-pointer`}
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>

                        <button
                          type="button"
                          aria-label="Next slide"
                          className={`next-${product.id} absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/85 text-gray-900 shadow-md backdrop-blur-xs border border-gray-200 transition-all duration-300 hover:bg-white hover:scale-105 opacity-90 md:opacity-0 md:group-hover:opacity-100 cursor-pointer`}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </>
                    )}

                    {/* Tombol Add to Cart Slide-Up */}
                    <div className="bg-card/75 backdrop-blur-xs absolute bottom-0 left-0 right-0 z-10 flex w-full translate-y-0 opacity-100 md:translate-y-full md:opacity-0 flex-col items-center px-5 py-3 transition-all duration-300 md:group-hover:translate-y-0 md:group-hover:opacity-100 border-t">
                      <button
                        type="button"
                        onClick={() => handleAddToCart(product, hargaAkhir)}
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
                      <Link
                        href={`/${product.productSlug}`}
                        className="text-lg line-clamp-1 hover:underline"
                      >
                        {product.productName}
                      </Link>
                      <span className="text-xl font-bold shrink-0">
                        {formatRupiah(hargaAkhir)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        {product.categories.join(", ")} • {product.namaItem}
                      </span>
                      {hasDiscount && (
                        <div className="flex items-center gap-2">
                          <span className="line-through text-muted-foreground text-xs">
                            {formatRupiah(product.hargaItem)}
                          </span>
                          <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                            {product.nilaiDiskon}% Off
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
