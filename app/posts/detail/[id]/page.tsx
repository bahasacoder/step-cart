import posts from "@/db/posts.json";


export default function PostPage({ params }: { params: { id: string } }) {
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
