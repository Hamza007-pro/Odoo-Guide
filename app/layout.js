import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Odoo Installation Guide',
  description: 'Created by Ayoub SAHRAOUI, Hamza BENRAHHOU',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-white'>
      <body className={"w-full max-w-6xl min-h-screen mx-auto bg-white"}>{children}</body>
    </html>
  )
}
