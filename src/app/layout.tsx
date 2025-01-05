import type { Metadata } from 'next'
import { Heebo, Roboto, Rubik } from 'next/font/google'
import './styles/vendor/all.css'
import './styles/vendor.min.css'
import './styles/vendor.css'
import './styles/vendor/animate.compat.css'
import './styles/vendor/carousel.css'
import './styles/vendor/dental.css'
import './styles/vendor/magnific-popup.css'
import './styles/vendor/medisch.css'
import './styles/vendor/nice-select.css'
import './styles/vendor/owl.theme.default.min.css'
import './styles/vendor/style.css'
import './styles/vendor/owl.carousel.min.css'
import './styles/vendor/bootstrap.min.css'
import './styles/style.css'
import './styles/vendor/flaticon.css'
import Script from 'next/script'
import '@fortawesome/fontawesome-free/css/all.min.css'

const heebo = Heebo({ weight: ['400', '500', '600', '700'] })
const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
})
const rubik = Rubik({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
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
      <head>
        <Script src="/assets/js/vendor/jquery-3.6.0.min.js"></Script>
        <Script src="/assets/js/vendor.min.js"></Script>
        <Script src="/assets/js/functions.js"></Script>
        <Script src="/assets/js/vendor/bootstrap.bundle.min.js"></Script>
      </head>
      <body
        className={`${heebo.className} ${roboto.className} ${rubik.className}`}
      >
        {children}
      </body>
    </html>
  )
}
