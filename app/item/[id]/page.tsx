// import get_item from "@/actions/getDb"
export async function generateStaticParams() {
  return [{ id: "10001" }, { id : "10002"}, { id : "10003"}, { id : "10004"}, { id : "10005"}];
}

export default async function ProductPage(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center gap-4">
         <p>Product Page {id}</p>
      </div>
    </div>
  );
}
