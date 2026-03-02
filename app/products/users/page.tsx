import Image from "next/image";
import Link from "next/link";
export default function UserPage() {
  return (
    <div className="flex flex-col  min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-2xl font-bold">Dashboard User</h1>
      <div className="flex flex-col items-center gap-4">
         <ul className="list-disc" >
            <li><Link href="/dashboard/users/1">User 1</Link></li>
            <li><Link href="/dashboard/users/2">User 2</Link></li>
            <li><Link href="/dashboard/users/3">User 3</Link></li>
            <li><Link href="/dashboard/users/4">User 4</Link></li>
         </ul>
      </div>
    </div>
  );
}
