"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import posts from "@/db/posts.json";

export default function PostsPage() {
    const [results, setResults] = useState([]);
    const getResults = async () => {
        await axios
            .get('http://')
            .then(response => {
                setResults(response.data.MRData)
            })
    }
    useEffect(()=>{
        getResults()
    }, [])

    return (
        <>
            <div>
                <h1>Posts</h1>
            </div>
        </>
    )
}