import posts from "@/db/posts.json";
// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  // const posts = await fetch('https://.../posts').then((res) => res.json())
  return posts.map((post) => ({
    id: post.id,
  }))
}

export default async function DetailEditPageAsli({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return (
    <>
      <h1>Halaman Detail Edit Page</h1>
      <p> id: {id} </p>
    </>
  )
}
