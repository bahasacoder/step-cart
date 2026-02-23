// app/blog/[slug]/page.tsx
export default function Page({ params }: { params: { slug: string } }) {
  // Fetch data for the specific post using params.slug
  // const postData = await getPostDetails(params.slug); 

  return (
    <div>
      <h1>Welcome to my blog</h1>
      <h2>Post Slug: {params.slug}</h2>
      {/* Render the rest of your post content here */}
    </div>
  );
}

// Optional: you can use generateStaticParams to pre-render static routes at build time.
// export async function generateStaticParams() {
//   const posts = [{ slug: 'post-1' }, { slug: 'post-2' }];
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }
