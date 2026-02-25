"use client"
import React, { useEffect, useState } from "react";

// app/products/[category]/page.tsx (or .js)
// Define and export the generateStaticParams function
export async function generateStaticParams() {
  // You can fetch all possible categories from an API, database, or a local source
  // const categories = await fetch('https://api.example.com/categories').then((res) => res.json());
     interface ProductWithId {
    id: string | number; // Use the actual type of 'id'
    image: string;
    title: string;
    price: number;
    // Add other properties as needed
  }
    const [products, setProducts] = useState<ProductWithId[]>([]); // from fetchdata
    // Initialize state as an empty array []
    useEffect(() => {
      
      const fetchData = async () => {
          try {
            axios.get('https://fakestoreapi.com/products')
              .then(response => {
                //console.log(response.data);
                setProducts(response.data);
              });
                  
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };

      fetchData()
    }, []); 

  // Return an array of objects, where each object matches the dynamic segment name
  return products.map((product) => ({
    product: product.category, // The value for the [category] dynamic segment
  }));
}

// Your main page component
export default function Page({ params }: { params: { product: string } }) {
  // Access the params.category here to render content for the specific category
  return (
    <div>
      <h1>Category: {params.product}</h1>
      {/* ... rest of your page content */}
    </div>
  );
}
