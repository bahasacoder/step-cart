"use client"
import { use, useEffect, useState } from "react";
import { NextResponse } from "next/server";

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
  id: string;
}

export default function EditItemTodayForm( {params, findItemTodays }: 
  {params: Promise<{ id: string }>, findItemTodays: any }) {
    const id = params;
    const idItemToday = findItemTodays?.id;
    const [itemsTodays, setItemTodays] = useState([])
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
    alamat: "",
    id: ""
  });
 
  const handleUpdateItemTodays = async (id: any, event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const formData = new FormData(event.target as HTMLFormElement); // Collect all form fields
    if (!formData.nama || !formData.harga || !formData.kategori || !formData.deskripsi || !formData.lokasi || !formData.map || !formData.gambar1 || !formData.gambar2 || !formData.gambar3 || !formData.penjual || !formData.kontak || !formData.alamat) {
      alert("Please fill in all required fields.");
      return;
    }      
    try {
      // const id = Number(params.id);
      const response = await fetch(`https://pasarbone.com/api/todays/${idItemToday}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: idItemToday, nama: formData.nama, harga: formData.harga, kategori: formData.kategori, deskripsi: formData.deskripsi, lokasi: formData.lokasi, map: formData.map, gambar1: formData.gambar1, gambar2: formData.gambar2, gambar3: formData.gambar3, penjual: formData.penjual, kontak: formData.kontak, alamat: formData.alamat }), // Send all form data as JSON
      }); 
      if (response.ok) {
        alert(`Item today's updated successfully!, id: ${idItemToday}, nama: ${formData.nama}, harga: ${formData.harga} `);
        // setFormData({} as FormData);
        
        const data = await response.json();
        return NextResponse.json(data);
      } else {
        alert("Failed to update item today's.");
        console.error("Failed to update item today's. Status:", response.status);
      }
    }  catch (error) {  
      console.error("Error updating item today's:", error);
      alert("An error occurred while updating the item today's.");
    } 
  }

   return (
    <div className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight">Update Item Todays</h2>
          <p className="text-gray-700">Please fill in the form below to update a item for today.</p>
        </div>
        <form onSubmit={(e) => handleUpdateItemTodays(id, e)} className="space-y-4">
          <h2 className="font-bold text-lg">Barang</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">             
              <label htmlFor="nama">Nama Barang</label>
                <input type="text" id="nama" name="nama" defaultValue={findItemTodays.nama || ``} onChange={(e) => setFormData({...formData, nama: e.target.value})} className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <label htmlFor="harga">Harga</label>
                <input type="number" id="harga" name="harga" defaultValue={findItemTodays.harga || ``} onChange={(e) => setFormData({...formData, harga: e.target.value})} className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <label htmlFor="kategori">Kategori</label>
                <input type="text" id="kategori" name="kategori" defaultValue={findItemTodays.kategori || ``} onChange={(e) => setFormData({...formData, kategori: e.target.value})}  className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <label htmlFor="deskripsi">Deskripsi</label>
                <input type="textarea" id="deskripsi" name="deskripsi" defaultValue={findItemTodays.deskripsi || ``} onChange={(e) => setFormData({...formData, deskripsi: e.target.value})} className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <label htmlFor="lokasi">Lokasi</label>
                <input type="text" id="lokasi" name="lokasi" defaultValue={findItemTodays.lokasi || ``} onChange={(e) => setFormData({...formData, lokasi: e.target.value})} className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <label htmlFor="gambar">Gambar</label>
                <div className="flex flex-col gap-2">
                  <input type="text" id="gambar1" name="gambar1" defaultValue={findItemTodays.gambar1 || ``} onChange={(e) => setFormData({...formData, gambar1: e.target.value})} className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                  <input type="text" id="gambar2" name="gambar2" defaultValue={findItemTodays.gambar2 || ``} onChange={(e) => setFormData({...formData, gambar2: e.target.value})} className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                  <input type="text" id="gambar3" name="gambar3" defaultValue={findItemTodays.gambar3 || ``} onChange={(e) => setFormData({...formData, gambar3: e.target.value})} className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
              <label htmlFor="map">Map</label>
                <input type="text" id="map" name="map" defaultValue={findItemTodays.map || ``} onChange={(e) => setFormData({...formData, map: e.target.value})} className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
          <h2 className="font-bold text-lg">Penjual</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label htmlFor="penjual">Penjual</label>
                <input type="text" id="penjual" name="penjual" defaultValue={findItemTodays.penjual || ``} onChange={(e) => setFormData({...formData, penjual: e.target.value})} className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <label htmlFor="kontak">Kontak</label>
                <input type="text" id="kontak" name="kontak" defaultValue={findItemTodays.kontak || ``} onChange={(e) => setFormData({...formData, kontak: e.target.value})} className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <label htmlFor="alamat">Alamat</label>
                <input type="text" id="alamat" name="alamat" defaultValue={findItemTodays.alamat || ``} onChange={(e) => setFormData({...formData, alamat: e.target.value})} className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />    
            </div>     
          <button type="submit">Submit</button>

        </form>
      </div>
    </div>
  )
}


// GET ITEM TODAY WHICH TO UPDATE
