// app/actions.ts
'use server' // Marks this file's functions to run exclusively on the server

export async function handleSubmitItem(formData: FormData) {
  // Extract inputs using their native HTML 'name' attribute
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // Process data (e.g., save to a database or authenticate)
  console.log({ email, password })
}
