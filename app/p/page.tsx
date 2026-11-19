"use client";

import { useState } from "react";

// 1. Definisikan tipe data internal
interface ProductItem {
  idItem: string;
  namaItem: string;
  imageItem: string;
  size: string;
  unit: string;
  netto: string;
  dimensi: string;
  hargaItem: number;
  hargaDiskon: number;
  nilaiDiskon: number;
  stokItem: number;
}

interface Product {
  idProduct: string;
  productName: string;
  productSlug: string;
  productImage: string;
  category: string;
  teaser: string;
  descriptions: string;
  specification: string;
  productItems: ProductItem[];
}

// 2. Data Dummy dari input Anda (Mengambil contoh produk "Telur Ayam Kampung")
const productData: Product = {
  idProduct: "PROD-d336f8b3-7b58-417f-9cf0-872038daba02",
  productName: "Telur Ayam Kampung",
  productSlug: "telur-ayam-kampung",
  productImage: "telur-ayam-kampung.jpg",
  category: "daging, meat",
  teaser: "Dihasilkan langsung dari sistem peternakan berkelanjutan (*free-range*) tanpa kurungan stres. Kaya akan kandungan Omega-3 alami, vitamin esensial, serta memiliki warna kuning telur oranye pekat yang khas. Higienis dan disortir langsung menggunakan tangan demi kualitas masakan terbaik.",
  descriptions: "Telur berkualitas premium langsung dari peternakan.",
  specification: "Isi bervariasi, Kemasan aman",
  productItems: [
    { idItem: "ITEM-2f6eb901", namaItem: "1 butir", imageItem: "running-40.jpg", size: "1 butir", unit: "paket", netto: "1", dimensi: "5cm x 5cm x 5cm", hargaItem: 3000, hargaDiskon: 300, nilaiDiskon: 10, stokItem: 15 },
    { idItem: "ITEM-bf6eb902", namaItem: "6 butir", imageItem: "running-40.jpg", size: "6 butir", unit: "paket", netto: "6", dimensi: "15cm x 15cm x 5cm", hargaItem: 15000, hargaDiskon: 1500, nilaiDiskon: 10, stokItem: 15 },
    { idItem: "ITEM-cf6eb903", namaItem: "12 butir", imageItem: "running-40.jpg", size: "12 butir", unit: "paket", netto: "12", dimensi: "20cm x 20cm x 5cm", hargaItem: 30000, hargaDiskon: 3000, nilaiDiskon: 10, stokItem: 15 },
    { idItem: "ITEM-df6eb904", namaItem: "24 butir", imageItem: "running-40.jpg", size: "24 butir", unit: "paket", netto: "24", dimensi: "25cm x 25cm x 5cm", hargaItem: 50000, hargaDiskon: 5000, nilaiDiskon: 10, stokItem: 15 }
  ]
};

export default function ProductDetailPage() {
  // State untuk menyimpan item varian yang sedang aktif dipilih pengguna
  const [selectedItem, setSelectedItem] = useState<ProductItem>(productData.productItems[0]);
  const [quantity, setQuantity] = useState<number>(1);

  // Helper untuk format mata uang Rupiah
  const formatRupiah = (number: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  // Menghitung harga akhir setelah dipotong nominal diskon resmi
  const finalPrice = selectedItem.hargaItem - selectedItem.hargaDiskon;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">
          
          {/* Sisi Kiri: Gambar Produk */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-square w-full rounded-xl bg-gray-100 overflow-hidden flex items-center justify-center border border-gray-200">
              <span className="text-gray-400 text-sm">
                [ Gambar: {productData.productImage} ]
              </span>
            </div>
            <p className="text-xs text-center text-gray-400 italic">
              *Tampilan kemasan asli bisa berbeda dari ilustrasi foto
            </p>
          </div>

          {/* Sisi Kanan: Detail & Konfigurasi Varian */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Kategori */}
              <span className="inline-block bg-green-50 text-green-700 text-xs font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full mb-3">
                {productData.category}
              </span>
              
              {/* Nama Produk */}
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {productData.productName}
              </h1>

              {/* Tampilan Harga Dinamis */}
              <div className="flex items-baseline gap-3 my-4">
                <span className="text-3xl font-extrabold text-green-600">
                  {formatRupiah(finalPrice)}
                </span>
                {selectedItem.hargaDiskon > 0 && (
                  <>
                    <span className="text-sm line-through text-gray-400">
                      {formatRupiah(selectedItem.hargaItem)}
                    </span>
                    <span className="bg-red-50 text-red-600 text-xs font-bold px-2 py-0.5 rounded">
                      Hemat {selectedItem.nilaiDiskon}%
                    </span>
                  </>
                )}
              </div>

              {/* Ringkasan Teaser */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {productData.teaser}
              </p>

              {/* Pilihan Varian / Ukuran */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Pilih Ukuran / Paket:
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {productData.productItems.map((item) => {
                    const isSelected = selectedItem.idItem === item.idItem;
                    return (
                      <button
                        key={item.idItem}
                        type="button"
                        onClick={() => {
                          setSelectedItem(item);
                          setQuantity(1); // reset jumlah beli ketika ganti ukuran
                        }}
                        className={`py-2.5 px-4 text-sm font-medium rounded-lg border text-center transition-all ${
                          isSelected
                            ? "border-green-600 bg-green-50 text-green-700 shadow-sm"
                            : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {item.namaItem}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Spesifikasi Detail Varian Aktif */}
              <div className="border-t border-gray-100 pt-5 space-y-2">
                <div className="grid grid-cols-3 text-sm">
                  <span className="text-gray-500">Dimensi Paket</span>
                  <span className="col-span-2 text-gray-900 font-medium">: {selectedItem.dimensi}</span>
                </div>
                <div className="grid grid-cols-3 text-sm">
                  <span className="text-gray-500">Berat Netto</span>
                  <span className="col-span-2 text-gray-900 font-medium">: {selectedItem.netto} {selectedItem.unit}</span>
                </div>
                <div className="grid grid-cols-3 text-sm">
                  <span className="text-gray-500">Keterangan</span>
                  <span className="col-span-2 text-gray-900 font-medium">: {productData.descriptions}</span>
                </div>
                <div className="grid grid-cols-3 text-sm">
                  <span className="text-gray-500">Spesifikasi</span>
                  <span className="col-span-2 text-gray-900 font-medium">: {productData.specification}</span>
                </div>
              </div>
            </div>

            {/* Sektor Transaksi / Add To Cart */}
            <div className="border-t border-gray-100 pt-6 mt-8">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                
                {/* Atur Jumlah Beli */}
                <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                  <button
                    type="button"
                    disabled={quantity <= 1}
                    onClick={() => setQuantity(prev => prev - 1)}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-50 disabled:opacity-50 transition-colors"
                  >
                    -
                  </button>
                  <span className="w-12 text-center text-sm font-semibold text-gray-900">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    disabled={quantity >= selectedItem.stokItem}
                    onClick={() => setQuantity(prev => prev + 1)}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-50 disabled:opacity-50 transition-colors"
                  >
                    +
                  </button>
                </div>

                {/* Info Stok */}
                <span className="text-xs text-gray-500 sm:mr-auto">
                  Sisa Stok: <strong className="text-gray-800">{selectedItem.stokItem}</strong> item
                </span>

                {/* Tombol Aksi */}
                <button
                  type="button"
                  onClick={() => alert(`Berhasil menambahkan ${quantity}x varian ${selectedItem.namaItem} ke keranjang!`)}
                  className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-8 py-3 rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Beli Sekarang
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
