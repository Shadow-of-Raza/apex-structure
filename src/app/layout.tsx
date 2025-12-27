// src/app/layout.tsx
import type { Metadata } from 'next'
import { IBM_Plex_Serif } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/common/Header/Header'
import Footer from '@/components/common/Footer/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://apex-structure.com'),
  title: {
    default: 'Apex Structure',
    template: '%s | Apex Structure',
  },
  description:
    'Leading real estate development company specializing in residential, commercial, and industrial projects.',
  keywords: ['real estate', 'construction', 'property development', 'builders'],
  openGraph: {
    title: 'Apex Structure',
    description:
      'Leading real estate development company specializing in premium projects.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/favicon/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-gray-50 font-sans"
        suppressHydrationWarning
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
