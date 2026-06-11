import { useRouter } from 'next/router'
 
export default function IdItemPage() {
  const router = useRouter()
  return <p>Post: {router.query.id}</p>
}
