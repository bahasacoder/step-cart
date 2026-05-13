"use client"; // Required for client-side interactivity

import { useState } from "react";

import items from "@/db/items.json";
export async function generateStaticParams() {
  // Fetch your data to get the list of IDs
  //const posts = await fetch('https://.../items').then((res) => res.json());

  // Return an array of IDs to be pre-rendered
  return items.map((item) => ({
    id: item.id.toString(), // id must be a string
  }));
}


export default function EditProductPage() {
  
  return (
    <main style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Simple Edit Form</h1>
    </main>
  );
}
