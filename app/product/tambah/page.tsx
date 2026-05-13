// Add Product
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";    
export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const router = useRouter();
return (
    <div>
      <h1>Add Product</h1>  
        <form onSubmit={handleSubmit}>  
            <div>   
                <label>Name:</label>
                <input
                    type="text"     
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Price:</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    required
                />
            </div>
            <div>
                <label>Description:</label> 
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}

                    required
                />
            </div>
            <button type="submit">Add Product</button>  
        </form>
    </div>
);
async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); 
    try {
        const response = await fetch("/api/products", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, price, description }),
        }); 
        if (response.ok) {
            alert("Product added successfully!");
            router.push("/products");
        }
    } catch (error) {
        console.error("Error adding product:", error);
    }
}
