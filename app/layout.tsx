import Navbar from '@/components/global/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const pop = Poppins({ subsets: ['latin-ext'], weight: ["900", "100", "200", "300", "400", "600"] })

export const metadata: Metadata = {
  title: 'Demo Next App',
  description: 'Learn and Understand next with Vijay',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={pop.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
