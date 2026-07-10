import Image from "next/image";
import HeroPage from "@/components/blocks/hero/hero-page";
import MarqueeCategories from "@/components/blocks/marquee-categories/marquee-categories";
import ProductHome from "@/components/blocks/product/product-home";
import DialogBoxHome from "@/components/blocks/dialog-box-home";

export default function Home() {
  
  return (
    <>
     <DialogBoxHome />
     <HeroPage />
     <MarqueeCategories />
     <ProductHome />
    </>
  );
}

