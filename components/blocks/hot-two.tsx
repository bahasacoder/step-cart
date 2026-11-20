"use client"
import { useState } from "react";
import { AirVent } from "lucide-react";
import { ShoppingBag, Sparkles } from "lucide-react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/lib/features/cart/cartSlice"; // Sesuaikan path cartSlice Anda
import { Str_Random, formatRibuan, formatRupiah } from "@/actions/generalFunctions"

const PRODUCTS = [
  {
    id: 1,
    name: "Abon Telur Kita", // Fixed spelling from "Abone" based on package label
    price: "Rp 25.000",
    description: "Bahan Telur Ayam • Gurih Rasa (100g)",
    image:
      "https://raw.githubusercontent.com/bahasacoder/step-cart/refs/heads/main/uploads/2026-07-29T06-46-44-073Z-p2c3zeb2s.png",
    badge: "Best Seller",
    bgAccent: "bg-amber-50/70",
  },
  {
    id: 2,
    name: "Sambal Cakalang",
    price: "Rp 25.000",
    description: "Bahan Ikan Cakalang Pilihan",
    image: "/images/sambacakalang2.png",
    badge: "New Arrival",
    bgAccent: "bg-emerald-50/70",
  },
];

export default function HotTwoProducts() {
  const dispatch = useDispatch();
  const [idList, setIdList] = useState<string>(() => Str_Random(4));
  const [itemProduct, setItemProduct] = useState<any[]>([]);
  // State untuk efek animasi tombol per produk & notifikasi toast
  const [addedItemId, setAddedItemId] = useState<string | null>(null);
  const [toastProduct, setToastProduct] = useState<string | null>(null);

 const handleAddToCart = (product: ProductItem, hargaAkhir: number) => {
   const newIdList = Str_Random(4);
   setIdList(newIdList);
    const qty = 1; // Default quantity 1 saat klik dari kartu produk
    const hargaItemNum = Number(product.hargaItem);
    const hargaDiskon = (hargaItemNum * product.nilaiDiskon) / 100;
    const totalHargaItem = hargaItemNum * qty;
   
      const nextProductState = {
         productName: product.productName,
         productImage: product.imagesItem[0] ?? "", // Ambil gambar pertama dari array imagesItem
         hargaItem: hargaItemNum,
         hargaDiskon: hargaDiskon,
         nilaiDiskon: product.nilaiDiskon,
         quantity: qty, // default=1
         idItem: product.idItem,
         totalHargaItem: totalHargaItem, // hargaItem * Qty
         hargaList: Number(hargaAkhir) * qty, // (hargaItem - hargaDiskon) * Qty
         idList: newIdList,
         // idList: Str_Random(4), // Generate a new random idList for each product added to the cart
      };
    const newItemProduct = [...itemProduct, nextProductState];
        setItemProduct(newItemProduct);
     const cartProduct = {
          ...nextProductState,
          id: newIdList,
      } as unknown as Parameters<typeof addItemToCart>[0];

        console.log('addItemToCart', cartProduct)
        console.log('idList', idList)
     // Kirim data ke Redux Store
    dispatch(addItemToCart(cartProduct));
   
    // Picu animasi tombol & toast notifikasi
    setAddedItemId(product.idItem);
    setToastProduct(`${product.productName} (${product.namaItem})`);

    setTimeout(() => {
      setAddedItemId((prev) => (prev === product.idItem ? null : prev));
    }, 1500);

    setTimeout(() => {
      setToastProduct(null);
    }, 2500);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-indigo-50 text-indigo-600 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Featured Selection
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900">
          New Hot Products
        </h2>
        <p className="mt-3 text-base sm:text-lg text-zinc-500">
          Handcrafted local delicacies made with authentic ingredients.
        </p>
      </div>

      {/* Responsive Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="group relative flex flex-col sm:flex-row bg-white rounded-3xl border border-zinc-200/80 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 overflow-hidden"
          >
            {/* Image Container */}
            <div
              className={`relative w-full sm:w-2/5 min-h-[260px] sm:min-h-full ${product.bgAccent} flex items-center justify-center p-6 overflow-hidden`}
            >
              <span className="absolute top-4 left-4 z-10 px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm text-zinc-800 rounded-full shadow-sm">
                {product.badge}
              </span>

              <div className="relative w-44 h-52 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 176px, 200px"
                  className="object-contain drop-shadow-md"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-between w-full sm:w-3/5 p-6 sm:p-8">
              <div>
                <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-zinc-900">
                    {product.price}
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-100">
                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-semibold py-3.5 px-6 rounded-xl shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
