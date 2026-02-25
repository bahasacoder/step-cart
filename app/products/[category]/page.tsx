// app/products/[category]/page.tsx (or .js)

// Define and export the generateStaticParams function
export async function generateStaticParams() {
  // You can fetch all possible categories from an API, database, or a local source
  // const categories = await fetch('https://api.example.com/categories').then((res) => res.json());
   const categories = ['food', 'meat', 'drink'];

  // Return an array of objects, where each object matches the dynamic segment name
  return categories.map((category) => ({
    category: category.slug, // The value for the [category] dynamic segment
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
