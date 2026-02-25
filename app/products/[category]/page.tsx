// app/products/[category]/page.tsx (or .js)
import products from "@/db/products.json";

// Define and export the generateStaticParams function
export async function generateStaticParams() {
  // You can fetch all possible categories from an API, database, or a local source
  // const categories = await fetch('https://api.example.com/categories').then((res) => res.json());

  // Return an array of objects, where each object matches the dynamic segment name
  return products.map((product) => ({
    category: product.category, // The value for the [category] dynamic segment
  }));
}

// Your main page component
export default function Page({ params }: { params: { category: string } }) {
  // Access the params.category here to render content for the specific category
  return (
    <div>
      <h1>Category: {params.category}</h1>
      {/* ... rest of your page content */}
    </div>
  );
}
