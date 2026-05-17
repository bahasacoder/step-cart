
export default function AddTodayForm(){
  const handleAddTodayItem = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Data:", data);
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
                <input type="text" id="nama" name="nama" className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <label htmlFor="harga">Harga</label>
                <input type="number" id="harga" name="harga" className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <label htmlFor="kategori">Kategori</label>
                <input type="text" id="kategori" name="kategori" className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <label htmlFor="deskripsi">Deskripsi</label>
                <input type="textarea" id="deskripsi" name="deskripsi" className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <label htmlFor="lokasi">Lokasi</label>
                <input type="text" id="lokasi" name="lokasi" className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <label htmlFor="gambar">Gambar</label>
                <input type="text" id="gambar1" name="gambar1" className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <input type="text" id="gambar2" name="gambar2" className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <input type="text" id="gambar3" name="gambar3" className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <label htmlFor="map">Map</label>
                <input type="text" id="map" name="map" className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
          <h2 className="font-bold text-lg">Penjual</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label htmlFor="penjual">Penjual</label>
                <input type="text" id="penjual" name="penjual" className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <label htmlFor="kontak">Kontak</label>
                <input type="text" id="kontak" name="kontak" className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <label htmlFor="alamat">Alamat</label>
                <input type="text" id="alamat" name="alamat" className="border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />    
            </div>    
          <button type="submit">Submit</button>

        </form>
      </div>
    </div>
  )
}
