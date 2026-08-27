"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

// import styles from './index.module.css';
import TabDescription from "./tab-description";
import TabDataSheet from "./tab-data-sheet";
import TabReviews from "./tab-reviews";

export default function AllProductsPage() {
  const [quantity, setQuantity] = useState(5);
  const [selectedOption, setSelectedOption] = useState("0");

  return (
    <div>
       <section className="relative block p-[140px]">
          <div className="container max-w-6xl flex flex-wrap p-0 m-auto">

            <div className="row w-full mb-24 flex flex-wrap justify-between items-start gap-4">
              <div className="col-sm-6 w-full md:max-w-4/9 flex flex-col border-2 border-red-200 float">
                <div className="product-gallery absolute top-0 left-0 h-[550px] flex mb-2 pb-4 relative bg-yellow-100 ">
                    <Link className="gallery" href="/assets/images/shop/product-7.jpg">
                      <Image 
                        src="/assets/images/shop/product-7.jpg" alt="Single Product Image"
                        fill 
                        className="w-full h-full"
                      />
                    </Link>
                </div>
                <ul className="product-gallery w-full flex flex-row p-0 m-0 gap-2 justify-start items-center overflow-x-auto">
                  <li><a className="gallery" href="/assets/images/shop/product-8.jpg"></a><Image src="/assets/images/shop/product-8.jpg" alt="Single Product" width={100} height={100}/></li>
                  <li><a className="gallery" href="/assets/images/shop/product-9.jpg"></a><Image src="/assets/images/shop/product-9.jpg" alt="Single Product"  width={100} height={100}/></li>
                  <li><a className="gallery" href="/assets/images/shop/product-10.jpg"></a><Image src="/assets/images/shop/product-10.jpg" alt="Single Product"  width={100} height={100}/></li>
                </ul>
              </div>
              <div className="col-sm-6 float-left w-full md:w-1/2 bg-orange-100 p-6">
                <div className="row">
                  <div className="col-sm-12 mt-0 my-8">
                    <h1 className="product-title text-4xl">Accessories Pack</h1>
                  </div>
                </div>
                <div className="row w-full my-4 ">
                  <div className="col-sm-12"><span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star"></i></span><span><i className="fa fa-star star-off"></i></span><a className="open-tab section-scroll" href="#reviews">-2customer reviews</a>
                  </div>
                </div>
                <div className="row w-full mt-4 mb-8">
                  <div className="col-sm-12">
                    <div className="price tracking-widest uppercase text-3xl"><span className="amount">£20.00</span></div>
                  </div>
                </div>
                <div className="row mb-18">
                  <div className="col-sm-12">
                    <div className="description">
                      <p>The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                    </div>
                  </div>
                </div>
                <div className="row w-full flex my-2 justify-between items-center">
                  <div className="col-sm-4 bg-rose-100 w-3xs mx-auto my-2 flex items-center justify-center">
                    <input className="form-control border border-gray-300 px-4 py-2 w-4/5" type="number" name="" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} max="40" min="1" required />
                  </div>
                  <div className="col-sm-8 bg-black w-full mx-auto my-2 flex items-center justify-center">
                    <Link className="btn px-6 py-2 uppercase text-white" href="#">Add To Cart</Link>
                  </div>
                </div>
                <div className="row mb-18">
                  <div className="col-sm-12">
                    <div className="product_meta">Categories:<a href="#"> Man, </a><a href="#">Clothing, </a><a href="#">T-shirts</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Tabs */}
            <div className="row">
              <div className="col-sm-12">
                 <Tabs className="w-full flex flex-col gap-3" defaultValue="description">
                    <TabsList className="w-full flex p-4" variant="line">
                      <TabsTrigger className="relative flex border-b border-red-100 rounded-none py-4 active:bg-blue-300" value="description">
                        Description
                      </TabsTrigger>
                      <TabsTrigger className="relative flex border-b border-red-200 py-4" value="datasheet">
                        Data Sheet
                      </TabsTrigger>
                      <TabsTrigger className="relative flex border-b border-red-300 py-4 active:bg-yellow-200" value="reviews">
                        Reviews (2)
                      </TabsTrigger>
                    </TabsList>
                      <TabsContent className="" value="description">
                        <TabDescription />
                      </TabsContent>
                      <TabsContent className="" value="datasheet">
                        <TabDataSheet />
                      </TabsContent>
                      <TabsContent className="" value="reviews">
                        <TabReviews />
                      </TabsContent>
                  </Tabs>
              </div>         
            </div>
            
            
          </div>
        </section>
        <div id="divider" className="divider divider-center block p-[2rem]">
          <div className="max-w-[42rem] m-auto inline">
              <div className="flex m-0 p-0 text-center justify-center items-center">
                <div className="w-full m-0 p-0 border border-gray-300"></div>
                  <i className="fa fa-star-o">*</i>
                <div className="w-full m-0 p-0 border border-rose-300"></div>
              </div>
          </div>
        
        </div>

   
       </div>
  )
}
