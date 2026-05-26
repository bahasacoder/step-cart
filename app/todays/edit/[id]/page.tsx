import EditItemTodayForm from "./edit-item-today-form"

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
  const response = await fetch(`http://localhost:3000/api/todays`, {
    method: "GET",
     headers: {
       "Content-Type": "application/json",
     },
   })
  const jsonItemsTodays: ItemsTodays = await response.json();
  const arrayItemsTodays = JSON.parse(JSON.stringify(jsonItemsTodays)) ;
    if (Array.isArray(arrayItemsTodays)) {
        console.log("arrayItemsTodays found:", arrayItemsTodays);
    } else {
        console.log("arrayItemsTodays is not an array.");
    }
    console.log("Response id:", id);
  
 const foundItem = arrayItemsTodays.find((ait: any) => ait.id === parseInt(id));
console.log("Found Item ID:", foundItem);
  if (!response.ok) {
    return <div>Item Todays not found</div>;
  }

  return (
    <>
    <div>This Edit Today</div>
      <EditItemTodayForm 
        params={{ id }} 
        foundItemTodays={foundItem} 
      />
    </> 
  )
}
