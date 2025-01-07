'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() // Detect path changes

  useEffect(() => {
    // Dynamically reload the functions.js file on path change
    const script = document.createElement('script')
    script.src = '/assets/js/functions.js'
    script.async = true
    document.body.appendChild(script)

    // Cleanup old script to prevent duplication
    return () => {
      document.body.removeChild(script)
    }
  }, [pathname]) // Run effect when pathname changes

  return <>{children}</>
}
