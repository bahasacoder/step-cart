"use client"
import { useDispatch, useSelector } from 'react-redux';
import { postInvoice } from '@/lib/features/invoice/invoiceSlice'; 

export default function OrderComponent() {
  const dispatch = useDispatch<any>();
  
  // Ambil status loading dan error dari store Redux global
  const { loading, error } = useSelector(
    (state: { invoice: { loading: boolean; error: string | null } }) => state.invoice
  );

  const handleBuatInvoice = async () => {
    const invoicePayload = {
      itemOrder: [
        {
          idList: "list-11101", 
          productImage: "url_image", 
          productName: "nama produk", 
          quantity: 3, 
          hargaItem: 2000, 
          totalHargaList: 6000
        }
      ],
      customer: {
        idCustomer: "12je24983e", 
        uniqueName: "nama unik anda", 
        firstName: "Nama Depan Anda", 
        lastName: "nama belakang anda"
      },
      subTotal: 6000, 
      pajak: 300,    
      layanan: 100,  
      ship: 200,     
      totalInvoice: 9000,
      payment: "qris" 
    };

    // Eksekusi thunk
    const createInvoice = postInvoice as unknown as (payload: typeof invoicePayload) => any;
    const resultAction = await dispatch(createInvoice(invoicePayload));
    
    // Opsional: Cek apakah proses submit berhasil/gagal langsung dari komponen
    if (postInvoice.fulfilled.match(resultAction)) {
      alert('Invoice berhasil dibuat!');
      // Arahkan user ke halaman sukses atau bersihkan cart di sini
    } else {
      alert(`Gagal: ${resultAction.payload}`);
    }
  };

  return (
    <div>
      <button onClick={handleBuatInvoice} disabled={loading}>
        {loading ? 'Sedang Memproses...' : 'Buat Invoice & Bayar'}
      </button>
      
      {error && <p style={{ color: 'red' }}>Terjadi kesalahan: {error}</p>}
    </div>
  );
}
