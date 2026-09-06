import Image from "next/image";
import Link from "next/link"
import OverviewBlock from "./overview-block"

export default function FrozenAyamKampungPage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Welcome to My Frozen Ayam Kampung Site</h1>
      <p>This is a basic home page.</p>
      <OverviewBlock />
    </main>
  );
}
