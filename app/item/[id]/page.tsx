export async function generateStaticParams() {
  return [{ id: "1" }, { id : "2"}, { id : "3"}];
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
