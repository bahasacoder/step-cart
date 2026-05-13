import { FormEvent } from 'react'

export default function CreatePostPage() {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })
 
    // Handle response if necessary
    const data = await response.json()
    // ...
  }
 
  return (
    <div>
      <h1>Create Post</h1>
      {/* Form for creating a new post */}
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" required /> 
            </div>
            <div>
                <label htmlFor="content">Content:</label>
                <textarea id="content" name="content" required></textarea>
            </div>
            <button type="submit">Create Post</button>
        </form> 

    </div>
  );
}