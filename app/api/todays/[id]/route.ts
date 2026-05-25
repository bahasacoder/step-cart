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
  // You can also fetch these from a database or API
    const filePath = path.join(process.cwd(), "db", "todays.json");  
    const fileData = await fs.readFile(filePath, "utf8");
    const itemsTodays: ItemsTodays[] = JSON.parse(fileData);
  
  return itemsTodays.map((id) => ({
    id: id,
  }));
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }>}
  ) { 
  try {    
   const { id } = await params
    const filePath = path.join(process.cwd(), "data", "todays.json");  
    const fileData = await fs.readFile(filePath, "utf8");
    const itemsTodays: ItemsTodays[] = JSON.parse(fileData);
    const itemToday = itemsTodays.find((item: any) => item.id === id);

    if (!itemToday) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }
    return NextResponse.json(itemToday);
  } catch (error) {
    console.error("Error fetching item:", error);
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }
}
