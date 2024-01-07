import './globals.css'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import {  } from '@vercel/analytics/react';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Achraf Sabbar',
  description: 'Front-End Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head
        title={metadata.title}
        description={metadata.description}
        favicon="./Ach.svg"
        />
        <body className={inter.className}>
          {children}
          <Analytics/>
          </body>
    </html>
  )
}
