// import { fetchItems } from "@/actions/getDb"
import itemsTodays from "@/db/todays.json";

export async function generateStaticParams() {
  // Fetch your data to get the list of IDs
  //const posts = await fetch('https://.../items').then((res) => res.json());

  // Return an array of IDs to be pre-rendered
  return itemsTodays.map((itemTodays) => ({
    id: itemTodays.id.toString(), // id must be a string
  }));
}

export default async function ItemTodaysPage(
  { params }: { params: { id: string } }
)  {
  const { id } = await params
  const found = await itemsTodays.find((item) => item.id === id );

  return (


    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center gap-4">
         <p>Product Page</p>
      </div>
      <div>
        {itemsTodays.map((item) => (
          <p key={item.id}>{item.nama}</p>
        ))}
      </div>
      <div>
        <h2>found : { found?.nama }</h2>
        <h2>iditem : { id }</h2>
      </div>
    </div>
  );

}
