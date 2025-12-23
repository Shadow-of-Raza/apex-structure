import type { Metadata } from 'next'
import SeoHead from '@/components/common/SEO/SeoHead'
import { siteConfig } from '@/lib/constants/site-config'

export const metadata: Metadata = {
  title: 'Our Clientele - Apex Structure',
  description: 'Explore our prestigious client portfolio including leading corporations, institutions, and satisfied customers who trust Apex Structure.',
  openGraph: {
    title: 'Our Clientele - Apex Structure',
    description: 'Trusted by leading corporations and institutions for premium real estate development',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ClienteleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SeoHead
        title="Our Clientele"
        description="Apex Structure is proud to work with leading corporations, institutions, government organizations, and satisfied customers across various sectors."
        keywords="apex structure clients, construction clients, real estate client portfolio, corporate clients, institutional clients"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Apex Structure Clientele",
          "description": "Our portfolio of prestigious clients",
          "numberOfItems": 50,
          "itemListOrder": "https://schema.org/ItemListOrderDescending",
        }}
      />
      
      {children}
    </>
  )
}