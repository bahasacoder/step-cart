export async function generateStaticParams() {
  return [{ "category" : "meats" }, { "category" : "fruits"}, { "category" : "drinks"}];
}

export default async function ProductPage(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center gap-4">
         <p>Product Page</p>
      </div>
    </div>
  );
}
