import posts from "@/db/posts.json";

export async function generateStaticParams() {
  // 1. Fetch your data (from an API, CMS, or local file)
  // const posts = await fetch('https://example.com').then((res) => res.json());

  // 2. Return an array of params matching the [id] segment
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
export default function DetailPostPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const post = posts.find((post) => post.id == (id));
    if (!post) {
        return <div>Post not found</div>;
    }
    return (
        <>
            <div>   
                <h1>{post.title}</h1>
            </div>
            <div>   
                <p>{post.content}</p>
            </div>
        </>
    )
}
