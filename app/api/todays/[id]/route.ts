export const dynamic = 'force-static';
import { NextResponse, NextRequest } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { any, array } from "zod";
import { it, tr } from "zod/v4/locales";
import { request } from "https";


interface ItemsTodays {
  nama: string;
  harga: string;  
  kategori: string;
  deskripsi: string;
  lokasi: string;
  gambar1: string;  
  gambar2: string;
  gambar3: string;
  map: string;
  penjual: string;
  kontak: string;
  alamat: string;
  id: string;
}

export async function generateStaticParams() {
  // Fetch your IDs from a database or CMS
  const response = await fetch('http://pasarbone.com/api/todays', {
     method: "GET",
     headers: {
       "Content-Type": "application/json",
     },
   } );
 const itemsTodays: ItemsTodays[] = await response.json();  
  return itemsTodays.map(itemTodays => ({ id: itemTodays.id.toString() }));  
}


export async function GET(request: Request, {params}: { params: {id: string}}) { 
  try {    
    const { id } = params;
    const filePath = path.join(process.cwd(), "db", "todays.json");
    const fileData = await fs.readFile(filePath, "utf8");
    const itemsTodays = JSON.parse(fileData);
    const itemFind = itemsTodays.find((itemToday: any) => itemToday.id === id );  
    return Response.json(itemFind);  
    // return NextResponse.json(itemFind);
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
}
 
