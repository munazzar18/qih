import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './styles/style.css'
// import './styles/styles.css.map'
// import './styles/vendor.css'
// import './styles/vendor.min.css'
// import './styles/vendor/all.css'
// import './styles/vendor/animate.compat.css'
// import './styles/vendor/bootstrap.min.css'
// import './styles/vendor/bootstrap.min.css.map'
// import './styles/vendor/carousel.css'
// import './styles/vendor/dental.css'
// import './styles/vendor/flaticon.css'
// import './styles/vendor/magnific-popup.css'
// import './styles/vendor/medisch.css'
// import './styles/vendor/nice-select.css'
// import './styles/vendor/owl.carousel.min.css'
// import './styles/vendor/owl.theme.default.min.css'
// import './styles/vendor/style.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Quaid-e-Azam International Hospital',
  description: 'Quaid-e-Azam International Hospital',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
