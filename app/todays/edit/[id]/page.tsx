import EditItemTodaysForm from "./edit-item-todays-form"; 
export const dynamic = 'force-dynamic';
export async function generateStaticParams() {
  // const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pasarbone.com';
  const response = await fetch(`/api/todays`, {
     method: "GET",
     headers: {
       "Content-Type": "application/json",
     },
   }
  );
  const itemsTodays = await response.json();  
  return itemsTodays.map((item: any) => ({ id: item.id.toString() }));  
}

interface EditItemTodaysProps {
  params: Promise<{ id: string }>;
}
export default async function EditItemTodaysPage(
  { params }: EditItemTodaysProps
)  {
  const { id } = await params;
 // const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pasarbone.com';
  const response = await fetch(`/api/todays`, {
      method: "GET"
      }
    );
    const itemsTodays = await response.json();
  //const mapItemsTodays = itemsTodays.map((ait: any) => ait.id === id ? ait : null);
  const findItemTodays = itemsTodays.find((ait: any) => ait.id ===  parseInt(id));
        console.log("found ", findItemTodays);
 
  return (

    <div>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <div className="flex flex-col items-center gap-4">
          <p>Product Page</p>
        </div>
        <div>
          <h2>found : </h2>
          <h2>iditem : { id }</h2>
        </div>
        <div>
          <h2>ITEM TODAY TO UPDATE:</h2>
          <p> nama barang : {findItemTodays?.nama} </p>
        </div>
      </div>
      <div>
        <EditItemTodaysForm params={params} findItemTodays={findItemTodays}/>
      </div>
    </div>
    
  );
}
