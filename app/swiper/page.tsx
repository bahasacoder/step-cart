"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link as LinkIcon } from 'lucide-react';

export default function App() {
  return (
    <>
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
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper flex justify-center items-center"
      >
        <SwiperSlide className='bg-rose-400' style={{width:'200px'}}><Link href="/slide1">Daging</Link></SwiperSlide>        
        <SwiperSlide className='bg-green-600' style={{width:'300px'}}><Link href="/slide2">Sayuran</Link></SwiperSlide>
        <SwiperSlide className='bg-yellow-400 w-[200px]'  style={{width:'200px'}}><Link href="/slide3">Buah</Link></SwiperSlide>
        <SwiperSlide className='bg-blue-600'  style={{width:'200px'}}><Link href="/slide4">Ikan</Link></SwiperSlide>
        <SwiperSlide className='bg-purple-600 w-24'><Link href="/slide5">Minuman</Link></SwiperSlide>
        <SwiperSlide className='bg-pink-600 '  style={{width:'200px'}}><Link href="/slide6">Rempah</Link></SwiperSlide>
        <SwiperSlide className='bg-indigo-600' style={{width:'300px'}}><Link href="/slide7">Suplemen</Link></SwiperSlide>
        <SwiperSlide className='bg-red-600 '  style={{width:'200px'}}><Link href="/slide8">Cake & Bakery</Link></SwiperSlide>
        <SwiperSlide className='bg-teal-600' style={{width:'200px'}}><Link href="/slide9">Snack</Link></SwiperSlide>
        <SwiperSlide className='bg-teal-600' style={{width:'200px'}}><Link href="/slide10">Jajanan</Link></SwiperSlide>
      </Swiper>
    </>
  );
}
