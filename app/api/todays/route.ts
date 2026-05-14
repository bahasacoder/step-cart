import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() { 
  const filePath = path.join(process.cwd(), "db", "todays.json");
  const fileData = await fs.readFile(filePath, "utf8");
  const users = JSON.parse(fileData);
  return Response.json(users);  
}
