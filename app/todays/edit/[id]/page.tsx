
interface ItemsTodays {
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

export async function generateStaticParams() {
  const response = await fetch("https://pasarbone.com/api/todays", {
     method: "GET",
     headers: {
       "Content-Type": "application/json",
     },
   }
  );
  const itemsTodays: ItemsTodays[] = await response.json();  
  return itemsTodays.map(itemTodays => ({ id: itemTodays.id.toString() }));  
}

export default async function EditTodayPage({ params }: { params: Promise<{ id: string } > }){
  const { id } = await params;

  return (
    <>
    <div>This Edit Today</div>
  
    </> 
  )

  // <EditItemTodayForm params={{id}} foundItemTodays={foundItem}/>
}
