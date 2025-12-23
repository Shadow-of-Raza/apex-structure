// src/app/about-us/layout.tsx
import type { Metadata } from 'next'
import SeoHead from '@/components/common/SEO/SeoHead'
import Container from '@/components/common/Layout/Container'
import PageHeader from '@/components/common/Layout/PageHeader'
import { siteConfig } from '@/lib/constants/site-config'

export const metadata: Metadata = {
  title: 'About Us - Apex Structure',
  description: 'Learn about Apex Structure, our mission, vision, team, and commitment to excellence in real estate development.',
  openGraph: {
    title: 'About Us - Apex Structure',
    description: 'Learn about our journey, leadership team, and commitment to excellence in real estate.',
    type: 'website',
  },
}

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SeoHead
        title="About Us"
        description="Leading real estate developers with 18+ years of experience in creating innovative residential and commercial spaces."
        keywords="about apex structure, construction company about, real estate developers about us"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Apex Structure",
          "description": "Leading real estate developers with 18+ years of experience",
          "publisher": {
            "@type": "Organization",
            "name": "Apex Structure"
          }
        }}
      />
      
      {children}
    </>
  )
}