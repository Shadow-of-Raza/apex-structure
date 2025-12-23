import type { Metadata } from 'next'
import SeoHead from '@/components/common/SEO/SeoHead'

export const metadata: Metadata = {
  title: 'Our Business - Apex Structure',
  description: 'Explore Apex Structure\'s business model, sectors we serve, project management approach, and our commitment to excellence in real estate development.',
  openGraph: {
    title: 'Our Business - Apex Structure',
    description: 'Comprehensive overview of our business operations, sectors, and development approach',
    type: 'website',
  },
}

export default function OurBusinessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SeoHead
        title="Our Business"
        description="Discover Apex Structure's comprehensive real estate development services across residential, commercial, and industrial sectors. Learn about our business model and project management expertise."
        keywords="real estate business model, construction company business, property development sectors, project management approach"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Our Business - Apex Structure",
          "description": "Real estate development business overview",
          "mainEntity": {
            "@type": "Organization",
            "name": "Apex Structure",
            "description": "Real estate development company",
            "areaServed": "Worldwide",
            "foundingDate": "2005"
          }
        }}
      />
      
      {children}
    </>
  )
}