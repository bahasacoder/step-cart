// app/actions.ts
"use server";

import { FormDataSchema } from "@/lib/schema";

export async function submitForm(data: unknown) {
  const result = FormDataSchema.safeParse(data);

  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors };
  }

  // Process valid data (e.g., save to DB)
  return { success: true };
}