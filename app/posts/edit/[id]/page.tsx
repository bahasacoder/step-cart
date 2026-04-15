import posts from "@/db/posts.json";
import FormEditPost from "./form-post";
// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  // const posts = await fetch('https://.../posts').then((res) => res.json())
  return posts.map((post) => ({
    id: post.id,
  }))
}

export default async function DetailEditPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return (
    <>
      <FormEditPost id={id} />
    </>
  )
}