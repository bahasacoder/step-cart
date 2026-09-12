"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from 'react';

import QuantityInput from "./quantity-input"
import CarouselSwiper from "./carousel-swiper"
import OptionsBerat from "./options-berat"
//  onValueChangeHarga={setInputHarga}
export default function OverviewBlock() {
    const [inputHarga, setInputHarga] = useState<number | null>(null);
    //const [realValue, setRealValue] = useState()
    const [realValue, setRealValue] = useState(() => Number(inputHarga) * 30 || 0);

    // 1. Define the callback function that accepts data from the child
  const handleDataFromChild = (numericValue: number) => {
    setInputHarga(numericValue);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
       <section className="py-8 sm:py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8 xl:gap-24">
                    <div className="flex flex-col gap-6">
                        <div>
                          <CarouselSwiper />
                        </div>                      
                        <div className="flex justify-between gap-6">                             
                        </div>
                    </div>

                  
                    <div className="space-y-6 py-5">
                        <nav aria-label="breadcrumb" data-slot="breadcrumb" className="cn-breadcrumb">
                            <ol data-slot="breadcrumb-list" className="cn-breadcrumb-list flex flex-wrap items-center wrap-break-word">
                                <div className="flex items-center gap-2.5">
                                    <li data-slot="breadcrumb-item" className="cn-breadcrumb-item inline-flex items-center"><a data-slot="breadcrumb-link" className="cn-breadcrumb-link" href="#">Daging</a></li>
                                    <li data-slot="breadcrumb-separator" role="presentation" aria-hidden="true" className="cn-breadcrumb-separator">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>                                      
                                    </li>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <li data-slot="breadcrumb-item" className="cn-breadcrumb-item inline-flex items-center"><a data-slot="breadcrumb-link" className="cn-breadcrumb-link" href="#">Ayam</a></li>
                                    <li data-slot="breadcrumb-separator" role="presentation" aria-hidden="true" className="cn-breadcrumb-separator">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                                    </li>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <li data-slot="breadcrumb-item" className="cn-breadcrumb-item inline-flex items-center"><span data-slot="breadcrumb-page" role="link" aria-disabled="true" aria-current="page" className="cn-breadcrumb-page">Frozen</span></li>
                                </div>
                            </ol>
                        </nav>
                        <h1 className="text-3xl font-semibold">Ayam Kampung Frozen</h1>
                        <div className="flex w-fit items-center rounded-sm border px-2.5 py-1.5">
                            <span className="me-2.5 flex items-center gap-1 border-e pe-2.5 text-sm"><span className="text-lg font-medium">4.3</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                            </span><span className="text-muted-foreground">210{/*<!-- -->*/} Reviews</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="text-3xl font-bold">Rp {/*<!-- -->*/}30.000</p><p>{inputHarga} - {realValue}</p>
                            <span className="text-muted-foreground font-medium line-through">Rp ${/*<!-- -->*/}45.000</span><span data-slot="badge" data-variant="default" className="cn-badge group/badge focus-visible:border-ring aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap focus-visible:ring-[3px] [&amp;&gt;svg]:pointer-events-none cn-badge-variant-default border-none bg-green-600/10 text-green-600 focus-visible:ring-green-600/20 focus-visible:outline-none dark:bg-green-400/10 dark:text-green-400 dark:focus-visible:ring-green-400/40 [a&amp;]:hover:bg-green-600/5 dark:[a&amp;]:hover:bg-green-400/5">30{/*<!-- -->*/}% Off</span>
                        </div>
                        <p className="text-muted-foreground">Daging Ayam Kampung Asli yang dipotong segar dari peternakan langsung dan diproses secara cepat kemudian dibekukan sehingga kualitas daging ayam tetap terjaga.</p>
                        <div data-orientation="horizontal" role="separator" aria-orientation="horizontal" data-slot="separator" className="bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch"></div>

                        
                       <OptionsBerat onChangeHarga={handleDataFromChild} />
                      
                        <div className="flex items-center gap-6">
                            <h4 className="text-lg font-semibold text-nowrap">Atur Jumlah :</h4>
                            <div role="radiogroup" data-slot="radio-group" className="cn-radio-group w-full flex gap-3!">
                              <QuantityInput />
                            </div>
                        </div>
                        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-2">
                            <button type="button" tabIndex={0} data-slot="button" className="cn-button group/button w-full md:w-[40%]  inline-flex gap-4 border-2 border-blue-200 p-2 rounded-md hover:bg-blue-100 shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 cn-button-variant-default cn-button-size-lg grow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart-plus"><path d="M16 5h6"/><path d="M19 2v6"/><path d="m2.05 2.05 1.099-.028a1 1 0 011.008.815l2.69 14.347A1 1 0 007.83 18H18"/><path d="M4.564 5H12"/><path d="M6.25 14h12.712a2 2 0 001.991-1.57l.172-1.041"/><circle cx="18" cy="20" r="2"/><circle cx="8" cy="20" r="2"/></svg>
                                Masukkan Keranjang</button><button type="button" tabIndex={0} data-slot="button" className="cn-button group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 cn-button-variant-secondary cn-button-size-lg grow">
                            </button>
                            <button type="button" tabIndex={0} data-slot="button" className="cn-button group/button w-full md:w-[40%]  inline-flex gap-4 border-2 border-blue-200 p-2 rounded-md hover:bg-blue-100 shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 cn-button-variant-default cn-button-size-lg grow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart-plus"><path d="m14.479 19.374-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49"/><path d="M15 15h6"/><path d="M18 12v6"/></svg>
                                Beli Langsung
                          </button>
                        </div>
                        <div className="rounded-md border *:not-last:border-b">
                            <div className="flex items-center gap-6 px-6 py-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-truck"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
                                <div className="flex flex-col gap-1">
                                    <p className="text-lg font-semibold">Free Delivery</p>
                                    <p className="text-muted-foreground">Enter your postal code for delivery Availability</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 px-6 py-4">
                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-refresh-ccw"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>
                                <div className="flex flex-col gap-1">
                                    <p className="text-lg font-semibold">Return Delivery</p>
                                    <p><span className="text-muted-foreground">Free 30 Days Delivery Returns.</span> <a href="#" className="underline">Details</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div> 
  );
}
