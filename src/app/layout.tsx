import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'GulfMart – Shop UAE, Delivered to Oman',
  description: '10,000+ products from verified UAE suppliers. Customs, consolidation, and delivery handled.',
  keywords: ['UAE', 'Oman', 'cross-border', 'ecommerce', 'delivery', 'shopping'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  )
}
