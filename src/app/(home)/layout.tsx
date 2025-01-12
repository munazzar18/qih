import { cookies } from 'next/headers'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import NavbarSearch from '@/components/NavbarSearch'
import Topbar from '@/components/Topbar'

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const token = (await cookies()).get('token')?.value
  const user = JSON.parse((await cookies()).get('user')?.value ?? '')

  return (
    <div>
      <Topbar />
      <NavbarSearch />
      <Navbar token={token ?? ''} user={user} />
      {children}
      <Footer />
    </div>
  )
}
