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
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  return (
    <div
      className="relative w-full max-w-[33.75rem] mx-auto"
      role="region"
      aria-roledescription="carousel"
      data-slot="carousel"
    >
      {/* Main Carousel Wrapper */}
      <div className="relative group mb-3">
        <Swiper
          loop={SLIDES.length > 2}
          spaceBetween={10}
          navigation={{
            prevEl,
            nextEl,
          }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {SLIDES.map((slide, index) => (
            <SwiperSlide key={index} className="!bg-transparent">
              <div className="relative w-full aspect-square bg-transparent">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 640px) 100vw, 540px"
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Prev Button */}
        <button
          ref={setPrevEl}
          type="button"
          aria-label="Previous slide"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex size-9 items-center justify-center rounded-full bg-white/85 text-slate-800 shadow-md backdrop-blur-xs transition-all hover:bg-white hover:scale-105 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
        >
          <svg
            xmlns="http://w3.org"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        {/* Custom Next Button */}
        <button
          ref={setNextEl}
          type="button"
          aria-label="Next slide"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex size-9 items-center justify-center rounded-full bg-white/85 text-slate-800 shadow-md backdrop-blur-xs transition-all hover:bg-white hover:scale-105 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
        >
          <svg
            xmlns="http://w3.org"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

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
          <SwiperSlide
            key={index}
            className="cursor-pointer !bg-transparent opacity-60 transition-opacity hover:opacity-100 [&.swiper-slide-thumb-active]:opacity-100"
          >
            <div className="relative w-full aspect-[4/3] bg-transparent">
              <Image
                src={slide.src}
                alt={`${slide.alt} thumbnail`}
                fill
                sizes="(max-width: 640px) 33vw, 130px"
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
