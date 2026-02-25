export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <div>My Post: {slug}</div>
}

/*
// app/blog/[slug]/page.tsx
export default function Page() {
//
  return (
    <div>
      <h1>Welcome to my blog</h1>
    
    </div>
  );
}
*/
