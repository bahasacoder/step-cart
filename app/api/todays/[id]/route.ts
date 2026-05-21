export const dynamic = 'force-static';
import { NextResponse, NextRequest } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { any, array } from "zod";
import { it, tr } from "zod/v4/locales";
import { request } from "https";

export async function GET(request: NextRequest, {params}: { params: {id: string}}) { 
  try {    
    const id = params.id;
    const filePath = path.join(process.cwd(), "db", "todays.json");
    const fileData = await fs.readFile(filePath, "utf8");
    const itemsTodays = JSON.parse(fileData);
    const itemFind = itemsTodays.find((itemToday: any) => itemToday.id === id );  
    return NextResponse.json(itemFind);  
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const { id, name, email } = await request.json();
  const updatedUser = { id, name, email };
  let idUpdated = updatedUser.id;
  let nameUpdated = updatedUser.name;
  let emailUpdated = updatedUser.email;

  console.log("PUT request received for user ID:", id);
  console.log("Updateuser Id:", updatedUser);

  const filePath = path.join(process.cwd(), "data", "users.json");
  const fileData = await fs.readFile(filePath, "utf8");
  let users = JSON.parse(fileData);
  //console.log("users from jsonfile:", users);
  // bagaimana memasukkan updatedUser ke dalam users array dengan id yang sama?  
  /* users = users.map((user: any) => (user.id === updatedUser.id ? updatedUser : user)); */
  const targetId = id;
  const updates = { name: nameUpdated, email: emailUpdated };
  // Find index of the object with matching id
  const index = users.findIndex((user: any) => user.id === parseInt(targetId));
  console.log("Index of user to update:", index);
  if (index !== -1) {
    // Update only specific fields
    Object.assign(users[index], updates);
  } else {
    console.log(`User with id ${targetId} not found.`);
  }
  console.log("users array after update attempt:", users);

  console.log("updatedUser object:", updatedUser);
  await fs.writeFile(filePath, JSON.stringify(users, null, 2));
  return NextResponse.json({ message: "User updated", user: updatedUser });
  
}   
