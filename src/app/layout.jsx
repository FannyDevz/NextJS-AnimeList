import {Gabarito, Poppins} from 'next/font/google'
import './globals.css'
import Navbar from "@/components/Utilities/Navbar";

const poppins = Poppins({ subsets: ['latin'] , weight: ['400', '700'] })

export const metadata = {
  title: 'FZAnimeList',
  description: 'My Anime List in Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-color-dark`} suppressContentEditableWarning={true}>
      <Navbar/>
      {children}

      </body>
    </html>
  )
}
