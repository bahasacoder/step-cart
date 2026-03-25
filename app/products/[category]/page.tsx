import ProductCategoryList from "@/componetns/blocks/product-category-list";
export async function generateStaticParams() {
  return [{ "category" : "meats" }, { "category" : "fruits"}, { "category" : "drinks"}];
}

export default async function CategoryPage(
  { params }: { params: Promise<{ category: string }> }
) {
  const { category } = await params;
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <div className="flex flex-col items-center gap-4">
           <p>Product Category</p>
          <h3>{ category }</h3>
        </div>
      </div>
      <ProductCategoryList />
    </>
  );
}
