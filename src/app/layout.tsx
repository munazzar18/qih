// import type { Metadata } from 'next'
// import { Geist, Geist_Mono } from 'next/font/google'
// import './styles/style.css'
// //import './styles/style.css.map'
//  import './styles/vendor.css'
//  import './styles/vendor.min.css'
//  import './styles/vendor/all.css'
//  import './styles/vendor/animate.compat.css'
//  import './styles/vendor/bootstrap.min.css'
//  //import './styles/vendor/bootstrap.min.css.map'
//  import './styles/vendor/carousel.css'
//  import './styles/vendor/dental.css'
//  import './styles/vendor/flaticon.css'
//  import './styles/vendor/magnific-popup.css'
//  import './styles/vendor/medisch.css'
//  import './styles/vendor/nice-select.css'
//  import './styles/vendor/owl.carousel.min.css'
//  import './styles/vendor/owl.theme.default.min.css'
//  import './styles/vendor/style.css'

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// })

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// })

// export const metadata: Metadata = {
//   title: 'Quaid-e-Azam International Hospital',
//   description: 'Quaid-e-Azam International Hospital',
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable}`}>
//         {children}
//       </body>
//     </html>
//   )
// }

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link"; // Import Link for navigation
import "./styles/style.css";
//import './styles/style.css.map'
import "./styles/vendor.css";
import "./styles/vendor.min.css";
import "./styles/vendor/all.css";
import "./styles/vendor/animate.compat.css";
import "./styles/vendor/bootstrap.min.css";
//import './styles/vendor/bootstrap.min.css.map'
import "./styles/vendor/carousel.css";
import "./styles/vendor/dental.css";
import "./styles/vendor/flaticon.css";
import "./styles/vendor/magnific-popup.css";
import "./styles/vendor/medisch.css";
import "./styles/vendor/nice-select.css";
import "./styles/vendor/owl.carousel.min.css";
import "./styles/vendor/owl.theme.default.min.css";
import "./styles/vendor/style.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quaid-e-Azam International Hospital",
  description: "Quaid-e-Azam International Hospital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Meta tags for SEO */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Quaid-e-Azam International Hospital" />
        <meta
          name="description"
          content="A leading hospital offering quality medical services."
        />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700&family=Roboto:ital,wght@0,400;0,500;0,700&family=Rubik:ital,wght@0,400;0,500;0,600;0,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"
          defer
        ></script>
        
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
