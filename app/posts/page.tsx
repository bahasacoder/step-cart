"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import posts from "@/db/posts.json";

export default function PostsPage() {
    const [results, setResults] = useState([]);
 
    return (
        <>
            <div>
                <h1>Posts</h1>
            </div>
            <div>
                {posts.map((post) => (
                    <div key={post.id}>
                        <p>{post.id}</p>
                        <h2>{post.title}</h2>       
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
