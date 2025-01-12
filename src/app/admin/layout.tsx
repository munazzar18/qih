import UserSideBar from '@/components/AdminPannel'
import Link from 'next/link'

interface User {
  id: string
  username: string
  email: string
  role: string
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="d-flex min-vh-100">
        {/* Sidebar */}
        <UserSideBar />

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
