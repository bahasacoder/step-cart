"use client"
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch  } from "react-redux";
import axios from "axios";
import { ShoppingCart, Plus } from 'lucide-react';
import Link from "next/link";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { RootState, AppDispatch } from "@/lib/store";
import { addToCart, selectTotalQuantity, selectTotalAmount } from "@/features/cartSlice";
// import { fetchProducts } from "@/features/productSlice";

function ProductList() {
    const [products, setProducts] = useState([]); // from fetchdata
   
    useEffect(()=>{    
            axios.get('https://fakestoreapi.com/products')
            .then(response => setProducts(response.data))
            .catch(error => {
              console.error('There was an error fetching the data!', error);
            });
    },[])
    
    const dispatch = useDispatch<AppDispatch>();
    const totalQuantity = useSelector((s: RootState) => selectTotalQuantity (s));
    const totalAmount = useSelector((s: RootState) => selectTotalAmount (s));
    
    const handleAddToCart = (product:any) => {
      dispatch(addToCart(product));
    };
    return (
        
        <div>
              <header className="bg-background border-b sticky top-0 z-50 backdrop-blur-sm bg-background/95">
                    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <ShoppingCart className="h-8 w-8 text-primary" />
                        <h1 className="text-2xl font-bold">ShopHub</h1>
                      </div>
                      <Link href="/cart">
                        <Button variant="outline" className="relative">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Cart
                          {totalQuantity > 0 && (
                            <Badge className="ml-2 bg-primary text-primary-foreground">
                              {totalQuantity}
                            </Badge>
                          )}
                        </Button>
                      </Link>
                    </div>
                  </header>
            

            
            <h1>Product List Page</h1>
            {products.map(product => (
                <div key={product?.id}>
                <img src={product?.image} alt="image title" />
                <h2>{product.title.length > 20 ? `${product.title.slice(0, 20)}...` : product.title }</h2>
                <p>Price : ${product.price}</p>
                <button onClick={()=>dispatch(addToCart(product))} className="border-2 p-2 m-2 bg-zinc-300 ">Add to cart</button>
                </div>
            ))}
           
        </div>
    )
}

export default ProductList
