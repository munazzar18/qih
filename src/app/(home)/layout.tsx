
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import NavbarSearch from '@/components/NavbarSearch'
import Topbar from '@/components/Topbar'

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Topbar />
      <NavbarSearch />
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
