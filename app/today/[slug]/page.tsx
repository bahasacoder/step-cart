const data = [
  { id: '1', title: 'First Post' },
  { id: '2', title: 'Second Post' },
];

// Returns an array of objects to populate the [id] dynamic segment
export async function generateStaticParams() {
  return data.map((t) => ({
    slug: t.id,
  }));
}

export default function EditProductPage() {
  
  return (
    <main style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Detail Today Item</h1>
    </main>
  );
}
