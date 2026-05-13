"use client"; // Required for client-side interactivity

import { useState } from "react";

export async function generateStaticParams() {
  const product = [{}];
  return  product;
} 
export default function HomePage() {
  
  return (
    <main style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Simple Edit Form</h1>
    </main>
  );
}
