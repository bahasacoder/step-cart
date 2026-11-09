"use client";

import React, { useState } from "react";
import { Product, ProductItem } from "@/data/products";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  // Set default varian pertama
  const [selectedItem, setSelectedItem] = useState<ProductItem>(product.productItems[0]);
  const [quantity, setQuantity] = useState<number>(1);

  // Kalkulasi Harga Akhir
  const hargaFinal = selectedItem.hargaItem - selectedItem.hargaDiskon;

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(angka);
  };

  const handleQuantityChange = (type: "increment" | "decrement") => {
    if (type === "increment" && quantity < selectedItem.stokItem) {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 bg-white text-gray-800 rounded-xl shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Kiri: Gambar Produk */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-md aspect-square bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center border border-gray-200">
            {/* Fallback box jika gambar aset belum tersedia */}
            <span className="text-gray-400 font-medium">{product.productName} Image</span>
          </div>
          <p className="text-xs text-gray-400 mt-2">Gambar varian: {selectedItem.imageItem}</p>
        </div>

        {/* Kanan: Info Produk */}
        <div className="flex flex-col space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold mt-2 text-gray-900">{product.productName}</h1>
            <p className="text-sm text-gray-500 mt-1">ID: {product.idProduct}</p>
          </div>

          {/* Harga */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            {selectedItem.nilaiDiskon > 0 && (
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-sm line-through text-gray-400">
                  {formatRupiah(selectedItem.hargaItem)}
                </span>
                <span className="text-xs font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded">
                  -{selectedItem.nilaiDiskon}%
                </span>
              </div>
            )}
            <div className="text-3xl font-bold text-emerald-600">
              {formatRupiah(hargaFinal)}
              <span className="text-sm text-gray-500 font-normal"> / {selectedItem.unit}</span>
            </div>
          </div>

          {/* Teaser / Deskripsi Singkat */}
          {product.teaser && (
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Tentang Produk</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{product.teaser}</p>
            </div>
          )}

          {/* Pemilihan Varian Item */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Pilih Varian:</h3>
            <div className="flex flex-wrap gap-2">
              {product.productItems.map((item) => (
                <button
                  key={item.idItem}
                  onClick={() => {
                    setSelectedItem(item);
                    setQuantity(1); // reset qty saat ganti varian
                  }}
                  className={`px-4 py-2 text-sm font-medium rounded-md border transition-all duration-200 ${
                    selectedItem.idItem === item.idItem
                      ? "border-emerald-500 bg-emerald-50 text-emerald-700 shadow-sm"
                      : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {item.namaItem}
                </button>
              ))}
            </div>
          </div>

          {/* Spesifikasi Item Terpilih */}
          <div className="text-xs bg-gray-50 p-3 rounded border border-gray-100 text-gray-600 space-y-1">
            <div><strong className="text-gray-700">Dimensi:</strong> {selectedItem.dimensi}</div>
            <div><strong className="text-gray-700">Netto:</strong> {selectedItem.netto} {selectedItem.unit}</div>
            <div><strong className="text-gray-700">Stok Tersedia:</strong> {selectedItem.stokItem} item</div>
          </div>

          {/* Kontrol Kuantitas & Tambah ke Keranjang */}
          <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
            <div className="flex items-center border border-gray-300 rounded-md bg-white">
              <button
                onClick={() => handleQuantityChange("decrement")}
                className="px-3 py-2 text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="px-4 py-2 font-semibold text-gray-800 w-12 text-center select-none">
                {quantity}
              </span>
              <button
                onClick={() => handleQuantityChange("increment")}
                className="px-3 py-2 text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50"
                disabled={quantity >= selectedItem.stokItem}
              >
                +
              </button>
            </div>

            <button 
              onClick={() => alert(`Sukses menambahkan ${quantity}x ${product.productName} (${selectedItem.namaItem}) ke keranjang.`)}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold py-3 px-6 rounded-md transition-colors shadow-sm text-center"
            >
              Tambah ke Keranjang • {formatRupiah(hargaFinal * quantity)}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
