"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
<<<<<<< HEAD
=======
import categories from "@/db/categories.json";
>>>>>>> ca6c537bf02255caa824cd9dd6937149859fd864

// import './styles.css';

// import required modules
import { Autoplay } from 'swiper/modules';
import { Link as LinkIcon } from 'lucide-react';

export default function CategoriesBlock() {
  return (
        <section className="py-8 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <div className="relative w-full" role="region" aria-roledescription="carousel" data-slot="carousel">
                <div className="overflow-hidden" data-slot="carousel-content">
                    <div className="flex -ml-6" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                    <Swiper
                            slidesPerView={'auto'}
                            spaceBetween={80}
                            centeredSlides={true}
                            loop={true}
                            speed={9000}
                            autoplay={{
                              delay: 1,
                              disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            className="mySwiper flex justify-center items-center"
                          >
<<<<<<< HEAD
                            <SwiperSlide style={{width:'200px'}}>
                            <div role="group" aria-roledescription="slide" data-slot="carousel-item" className="min-w-0 shrink-0 grow-0 basis-full pl-6 md:basis-1/3 lg:basis-1/6"><a href="#">
                                    <div className="bg-muted mb-6 flex h-32 items-center justify-center rounded-md px-11.25"><img src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-10.png" alt="Smart Electronics" className="h-22 object-contain" /></div>
                                    <h2 className="text-center text-lg font-medium">Smart Electronics</h2>
                                </a></div>
                            </SwiperSlide>
                            <SwiperSlide style={{width:'200px'}}>
                            <div role="group" aria-roledescription="slide" data-slot="carousel-item" className="min-w-0 shrink-0 grow-0 basis-full pl-6 md:basis-1/3 lg:basis-1/6"><a href="#">
                                    <div className="bg-muted mb-6 flex h-32 items-center justify-center rounded-md px-11.25"><img src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-11.png" alt="Smart Appliances" className="h-22 object-contain" /></div>
                                    <h2 className="text-center text-lg font-medium">Smart Appliances</h2>
                                </a></div>
                            </SwiperSlide>
                            <SwiperSlide style={{width:'200px'}}>
                            <div role="group" aria-roledescription="slide" data-slot="carousel-item" className="min-w-0 shrink-0 grow-0 basis-full pl-6 md:basis-1/3 lg:basis-1/6"><a href="#">
                                    <div className="bg-muted mb-6 flex h-32 items-center justify-center rounded-md px-11.25"><img src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-9.png" alt="Smart Lighting" className="h-22 object-contain" /></div>
                                    <h2 className="text-center text-lg font-medium">Smart Lighting</h2>
                                </a></div>
                            </SwiperSlide>
                            <SwiperSlide style={{width:'200px'}}>
                            <div role="group" aria-roledescription="slide" data-slot="carousel-item" className="min-w-0 shrink-0 grow-0 basis-full pl-6 md:basis-1/3 lg:basis-1/6"><a href="#">
                                    <div className="bg-muted mb-6 flex h-32 items-center justify-center rounded-md px-11.25"><img src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-12.png" alt="Audio Visual" className="h-22 object-contain" /></div>
                                    <h2 className="text-center text-lg font-medium">Audio Visual</h2>
                                </a></div>
                            </SwiperSlide>
                            <SwiperSlide style={{width:'200px'}}>
                            <div role="group" aria-roledescription="slide" data-slot="carousel-item" className="min-w-0 shrink-0 grow-0 basis-full pl-6 md:basis-1/3 lg:basis-1/6"><a href="#">
                                    <div className="bg-muted mb-6 flex h-32 items-center justify-center rounded-md px-11.25"><img src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-13.png" alt="Smart Hubs" className="h-22 object-contain" /></div>
                                    <h2 className="text-center text-lg font-medium">Smart Hubs</h2>
                                </a></div>
                            </SwiperSlide>
                            <SwiperSlide style={{width:'200px'}}>
                            <div role="group" aria-roledescription="slide" data-slot="carousel-item" className="min-w-0 shrink-0 grow-0 basis-full pl-6 md:basis-1/3 lg:basis-1/6"><a href="#">
                                    <div className="bg-muted mb-6 flex h-32 items-center justify-center rounded-md px-11.25"><img src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-14.png" alt="Smart Gadget" className="h-22 object-contain" /></div>
                                    <h2 className="text-center text-lg font-medium">Smart Gadget</h2>
                                </a></div>
                            </SwiperSlide>
                            <SwiperSlide style={{width:'200px'}}>
                            <div role="group" aria-roledescription="slide" data-slot="carousel-item" className="min-w-0 shrink-0 grow-0 basis-full pl-6 md:basis-1/3 lg:basis-1/6"><a href="#">
                                    <div className="bg-muted mb-6 flex h-32 items-center justify-center rounded-md px-11.25"><img src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-15.png" alt="Buds" className="h-22 object-contain" /></div>
                                    <h2 className="text-center text-lg font-medium">Buds</h2>
                                </a></div>
                            </SwiperSlide>
                            <SwiperSlide style={{width:'200px'}}>
                            <div role="group" aria-roledescription="slide" data-slot="carousel-item" className="min-w-0 shrink-0 grow-0 basis-full pl-6 md:basis-1/3 lg:basis-1/6"><a href="#">
                                    <div className="bg-muted mb-6 flex h-32 items-center justify-center rounded-md px-11.25"><img src="https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-category/image-17.png" alt="Goggles" className="h-22 object-contain" /></div>
                                    <h2 className="text-center text-lg font-medium">Goggles</h2>
                                </a></div>
                            </SwiperSlide>
=======
                          {categories.map((category) => (
                            <SwiperSlide style={{width:'200px'}}>
                            <div role="group" aria-roledescription="slide" data-slot="carousel-item" className="min-w-0 shrink-0 grow-0 basis-full pl-6 md:basis-1/3 lg:basis-1/6"><a href="#">
                                    <div className="bg-muted mb-6 flex h-32 items-center justify-center rounded-md px-11.25"><img src={category.imgSrc} alt={category.imgAlt} className="h-full object-contain" /></div>
                                    <h2 className="text-center text-lg font-medium capitalize">{category.name}</h2>
                                </a></div>
                            </SwiperSlide>
                            ))}
>>>>>>> ca6c537bf02255caa824cd9dd6937149859fd864
                    </Swiper>    
                    </div>
                </div>
               
            </div>
        </div>
    </section>
  )
}
