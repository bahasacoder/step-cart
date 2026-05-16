export default function AddTodayForm(){
  return (
    <div>
      <div>Add Item Today</div>
      <form>
        <h2>Barang</h2>
          <label htmlFor="nama">Nama Barang</label>
            <input type="text" id="nama" name="nama" />
          <label htmlFor="harga">Harga</label>
            <input type="number" id="harga" name="harga" />
          <label htmlFor="kategori">Kategori</label>
            <input type="text" id="kategori" name="kategori" />
          <label htmlFor="deskripsi">Deskripsi</label>
            <input type="textarea" id="deskripsi" name="deskripsi" />
          <label htmlFor="lokasi">Lokasi</label>
            <input type="text" id="lokasi" name="lokasi" />
          <label htmlFor="gambar">Gambar</label>
            <input type="text" id="gambar1" name="gambar1" />
            <input type="text" id="gambar2" name="gambar2" />
            <input type="text" id="gambar3" name="gambar3" />
          <label htmlFor="map">Map</label>
            <input type="text" id="map" name="map" />
        <h2>Penjual</h2>
          <label htmlFor="penjual">Penjual</label>
            <input type="text" id="penjual" name="penjual" />
          <label htmlFor="kontak">Kontak</label>
            <input type="text" id="kontak" name="kontak" />
          <label htmlFor="alamat">Alamat</label>
            <input type="text" id="alamat" name="alamat" />        
        <button type="submit">Submit</button>

      </form>
    </div>
  )
}
