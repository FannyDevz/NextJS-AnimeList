import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/Utilities/Navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FZAnimeList',
  description: 'My Anime List in Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      {children}

      </body>
    </html>
  )
}
