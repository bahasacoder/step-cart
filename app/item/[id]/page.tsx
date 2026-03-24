// import { fetchItems } from "@/actions/getDb"
import items from "@/db/items.json";
/*
export async function generateStaticParams() {
  return [{ id: "10001" }, { id : "10002"}, { id : "10003"}, { id : "10004"}, { id : "10005"}];
}
  */


export default async function ItemDetailPage(
  { params }: { params: { id: string } }
)  {
  const { id } = await params
  const found = await items.find((item) => item.id === id );

  return (


    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center gap-4">
         <p>Product Page</p>
      </div>
      <div>
        {items.map((item) => (
          <p key={item.id}>{item.value}</p>
        ))}
      </div>
      <div>
        <h2>found : { found?.value }</h2>
        <h2>iditem : { id }</h2>
      </div>
    </div>
  );

}
