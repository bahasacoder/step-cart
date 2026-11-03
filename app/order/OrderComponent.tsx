"use client"
import { useDispatch, useSelector } from 'react-redux';
import { setInvoices } from '@/lib/features/invoice/invoiceSlice';

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

    dispatch(setInvoices([invoicePayload]));
    alert('Invoice berhasil dibuat!');
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
