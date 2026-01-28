"use client"
import { addToCart } from "@/features/cartSlice";
// import { fetchProducts } from "@/features/productSlice";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch  } from "react-redux";
import axios from "axios";

function ProductList() {
    const [products, setProducts] = useState<product[]>([]); // from fetchdata
    interface product {
        id: number;
        image: string;
        price: number;
        title: string
    }
    useEffect(()=>{    
            axios.get('https://fakestoreapi.com/products')
            .then(response => setProducts(response.data))
            .catch(error => {
              console.error('There was an error fetching the data!', error);
            });
    },[])
    
    //const {items, status} = useSelector((state)=>state.products)
    const dispatch = useDispatch();
       
    return (
        <div>
            <h1>Product List Page</h1>
            {products.map(product => (
                <div key={product?.id}>
                <img src={product?.image} alt="image title" />
                <h2>{product.title.length > 20 ? `${product.title.slice(0, 20)}...` : product.title }</h2>
                <p>Price : ${product.price}</p>
                <button onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
                </div>
            ))}
           
        </div>
    )
}

export default ProductList
