"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.css";

const SLIDES = [
  {
    src: "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@76d2f18cbbb5d6294cad122fbc5b62baf1d4f5ba/uploads/2026-02-12T07-03-40-599Z-su0xe2suz.png",
    alt: "Whole frozen chicken on dark slate",
  },
  {
    src: "https://raw.githubusercontent.com/bahasacoder/step-cart/refs/heads/main/public/assets/all/frozen-chicken-1.jpg",
    alt: "Pebe Frozen Chicken 1kg pack",
  },
];

export default function CarouselSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div
      className="relative w-full max-w-[33.75rem] mx-auto"
      role="region"
      aria-roledescription="carousel"
      data-slot="carousel"
    >
      {/* Main Carousel */}
      <Swiper
        loop={SLIDES.length > 2}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper:
            thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 mb-3 rounded-lg overflow-hidden"
      >
        {SLIDES.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full aspect-square bg-slate-100/80 rounded-lg overflow-hidden">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 640px) 100vw, 540px"
                className="object-contain p-2"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Carousel */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={false}
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          480: {
            slidesPerView: 4,
          },
        }}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {SLIDES.map((slide, index) => (
          <SwiperSlide key={index} className="cursor-pointer">
            <div className="relative w-full aspect-[4/3] bg-slate-100/80 rounded-md overflow-hidden border border-transparent hover:border-slate-300 transition-colors">
              <Image
                src={slide.src}
                alt={`${slide.alt} thumbnail`}
                fill
                sizes="(max-width: 640px) 33vw, 130px"
                className="object-contain p-1"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
