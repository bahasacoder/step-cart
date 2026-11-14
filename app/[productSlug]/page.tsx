'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function PathnameBadge() {
  const pathname = usePathname()
  const [lastSegment, setLastSegment] = useState('')

  useEffect(() => {
    if (pathname) {
      // 1. Pisahkan string berdasarkan garis miring '/'
      // 2. filter(Boolean) untuk menghapus string kosong (misal jika URL berakhiran '/')
      // 3. pop() untuk mengambil elemen paling terakhir
      const endOfPath = pathname.split('/').filter(Boolean).pop() || ''
      
      setLastSegment(endOfPath)
    }
  }, [pathname])

  return (
    <p>
      Current end of path: <span>{lastSegment || 'home'}</span>
    </p>
  )
}
