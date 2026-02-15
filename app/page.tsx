import Image from "next/image";
import HeroPage from "@/components/blocks/hero/hero-page";
import MarqueeCategories from "@/components/blocks/marquee-categories/marquee-categories";
import ProductHome from "@/components/blocks/product/product-home";

export default function Home() {
  return (
    <>
     <HeroPage />
     <MarqueeCategories />
     <ProductHome />
    </>
  );
}

