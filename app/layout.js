import './globals.css'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Achraf Sabbar',
  description: 'Front-End Developer',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/logo-b.svg',
        href: '/logo-b.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/logo-b.svg',
        href: '/logo-b.svg',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
          {children}
          <Analytics/>
          </body>
    </html>
  )
}
