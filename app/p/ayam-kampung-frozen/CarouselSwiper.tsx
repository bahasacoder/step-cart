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
        className="mySwiper2 mb-3"
      >
        {SLIDES.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="bg-transparent flex items-center justify-center"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              width={540}
              height={544}
              priority={index === 0}
              className="object-cover w-[33.75rem] h-[34rem] rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Carousel */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={false}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {SLIDES.map((slide, index) => (
          <SwiperSlide key={index} className="cursor-pointer">
            <Image
              src={slide.src}
              alt={`${slide.alt} thumbnail`}
              width={118}
              height={64}
              className="object-cover w-[7.375rem] h-[4rem] rounded"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
