"use client"
import { useState } from "react";

interface FormData {
  nama: string;
  harga: string;  
  kategori: string;
  deskripsi: string;
  lokasi: string;
  gambar1: string;  
  gambar2: string;
  gambar3: string;
  map: string;
  penjual: string;
  kontak: string;
  alamat: string;
}

export default function AddTodayForm(){
  const [formData, setFormData] = useState({
    nama: "",
    harga: "",
    kategori: "",
    deskripsi: "",
    lokasi: "",
    gambar1: "",
    gambar2: "",
    gambar3: "",
    map: "",
    penjual: "",
    kontak: "",
    alamat: ""
  });


  const handleAddTodayItem = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.nama || !formData.harga || !formData.kategori || !formData.deskripsi || !formData.lokasi || !formData.gambar1 || !formData.penjual || !formData.kontak || !formData.alamat) {
      alert("Please fill in all required fields.");
      return;
    }
    
    // const formData = new FormData(event.currentTarget);
    // const data = Object.fromEntries(formData.entries());
    // console.log("Form Data:", data);
    try {
      const response = await fetch("/api/todays", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }); 
      if (response.ok) {
        alert("Item today's added successfully!");
        setFormData({} as FormData);  
      } else {
        alert("Failed to add item today's.");
      }
  }  catch (error) {  
      console.error("Error adding item today's:", error);
      alert("An error occurred while adding the item today's.");
    } 
  };

  return (
    <div className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight">Add Item Today</h2>
          <p className="text-gray-700">Please fill in the form below to add a new item for today.</p>
        </div>
        <form onSubmit={handleAddTodayItem} className="space-y-4">
          <h2 className="font-bold text-lg">Barang</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label htmlFor="nama">Nama Barang</label>
                <input type="text" id="nama" name="nama" value={formData.nama || ``} onChange={(e) => setFormData({...formData, nama: e.target.value})} className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <label htmlFor="harga">Harga</label>
                <input type="number" id="harga" name="harga" value={formData.harga || ``} onChange={(e) => setFormData({...formData, harga: e.target.value})} className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <label htmlFor="kategori">Kategori</label>
                <input type="text" id="kategori" name="kategori" value={formData.kategori || ``} onChange={(e) => setFormData({...formData, kategori: e.target.value})}  className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <label htmlFor="deskripsi">Deskripsi</label>
                <input type="textarea" id="deskripsi" name="deskripsi" value={formData.deskripsi || ``} onChange={(e) => setFormData({...formData, deskripsi: e.target.value})} className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <label htmlFor="lokasi">Lokasi</label>
                <input type="text" id="lokasi" name="lokasi" value={formData.lokasi || ``} onChange={(e) => setFormData({...formData, lokasi: e.target.value})} className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <label htmlFor="gambar">Gambar</label>
                <div className="flex flex-col gap-2">
                  <input type="text" id="gambar1" name="gambar1" value={formData.gambar1 || ``} onChange={(e) => setFormData({...formData, gambar1: e.target.value})} className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                  <input type="text" id="gambar2" name="gambar2" value={formData.gambar2 || ``} onChange={(e) => setFormData({...formData, gambar2: e.target.value})} className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                  <input type="text" id="gambar3" name="gambar3" value={formData.gambar3 || ``} onChange={(e) => setFormData({...formData, gambar3: e.target.value})} className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
              <label htmlFor="map">Map</label>
                <input type="text" id="map" name="map" value={formData.map || ``} onChange={(e) => setFormData({...formData, map: e.target.value})} className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
          <h2 className="font-bold text-lg">Penjual</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label htmlFor="penjual">Penjual</label>
                <input type="text" id="penjual" name="penjual" value={formData.penjual || ``} onChange={(e) => setFormData({...formData, penjual: e.target.value})} className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <label htmlFor="kontak">Kontak</label>
                <input type="text" id="kontak" name="kontak" value={formData.kontak || ``} onChange={(e) => setFormData({...formData, kontak: e.target.value})} className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <label htmlFor="alamat">Alamat</label>
                <input type="text" id="alamat" name="alamat" value={formData.alamat || ``} onChange={(e) => setFormData({...formData, alamat: e.target.value})} className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />    
            </div>    
          <button type="submit">Submit</button>

        </form>
      </div>
    </div>
  )
}
