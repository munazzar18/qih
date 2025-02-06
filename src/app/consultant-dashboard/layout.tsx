import React from 'react'
import AdminSideBar from '@/components/AdminPannel'
import { cookies } from 'next/headers'
import Link from 'next/link'
import ConsultantSideBar from '@/components/ConsultantPannel'

interface User {
  id: string
  username: string
  email: string
  role: string
}

export default async function ConsultantLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const token = (await cookies()).get('token')?.value

  return (
    <>
      <div className="d-flex min-vh-100" suppressHydrationWarning>
        {/* Sidebar */}
        <ConsultantSideBar />

        {/* Main Content */}
        <div className="flex-grow-1 p-0 p-md-4 p-lg-5">
          <main className="p-0 p-md-4 p-lg-5 overflow-auto bg-light">
            {children}
          </main>
        </div>
      </div>
    </>
  )
}
