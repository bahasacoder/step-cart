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

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link as LinkIcon } from 'lucide-react';

export default function MarqueeCategries() {
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
        <SwiperSlide style={{width:'200px'}}><Link href="/slide1"><Image src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@9d083315f938e6eabd384cc2dabd5c33555505d6/uploads/2026-02-11T14-13-42-800Z-c5n04a1li.png" alt="Ayam" width={200} height={200} /></Link></SwiperSlide>        
        <SwiperSlide style={{width:'200px'}}><Link href="/slide1"><Image src="/logo_marque/meat-cat.png" alt="Daging" width={200} height={200} /></Link></SwiperSlide>        
        <SwiperSlide style={{width:'200px'}}><Link href="/slide2"><Image src="/logo_marque/sayuran-cat.png" alt="Sayuran" width={200} height={200} /></Link></SwiperSlide>
        <SwiperSlide style={{width:'200px'}}><Link href="/slide3"><Image src="/logo_marque/buah-cat.png" alt="Buahan" width={200} height={200} /></Link></SwiperSlide>
        <SwiperSlide style={{width:'200px'}}><Link href="/slide4"><Image src="/logo_marque/ikan-cat.png" alt="Ikan" width={200} height={200} /></Link></SwiperSlide>
        <SwiperSlide style={{width:'200px'}}><Link href="/slide5"><Image src="/logo_marque/drink-cat.png" alt="Minuman" width={200} height={200} /></Link></SwiperSlide>
        <SwiperSlide style={{width:'200px'}}><Link href="/slide6"><Image src="/logo_marque/rempah-ext.png" alt="Rempah" width={200} height={200} /></Link></SwiperSlide>
        <SwiperSlide style={{width:'300px'}}><Link href="/slide7"><Image src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@a43a6a8f5a26eb06674ac0937196b0823fe403b7/uploads/2026-02-11T14-11-52-491Z-g1rk9xcg5.png" alt="Suplemen" width={200} height={200} /></Link></SwiperSlide>
        <SwiperSlide style={{width:'200px'}}><Link href="/slide8"><Image src="/logo_marque/cookies-cat.png" alt="Cookies" width={200} height={200} /></Link></SwiperSlide>
        <SwiperSlide style={{width:'200px'}}><Link href="/slide9"><Image src="/logo_marque/snack-cat.png" alt="Snack" width={200} height={200} /></Link></SwiperSlide>
        <SwiperSlide style={{width:'200px'}}><Link href="/slide10"><Image src="/logo_marque/bibit-buah.png" alt="Bibit" width={200} height={200} /></Link></SwiperSlide>

      </Swiper>
    </>
  );
}
