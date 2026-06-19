// app/actions.ts
'use server' // Marks this file's functions to run exclusively on the server

import { error } from "console";
import fs from "fs/promises";
import path from "path";

export async function handleSubmitUser(formData: FormData) {
  // Extract inputs using their native HTML 'name' attribute
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // Process data (e.g., save to a database or authenticate)
  console.log({ email, password })
}

export async function myActionItems(formData: FormData): Promise<{ success: boolean }> {
        "use server";
        // Logic to handle form submission and add item to the database
        console.log("Item added!");
            
    }

