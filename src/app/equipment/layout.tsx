// src/app/equipment/layout.tsx
import type { Metadata } from 'next'
import SeoHead from '@/components/common/SEO/SeoHead'
import { siteConfig } from '@/lib/constants/site-config'

export const metadata: Metadata = {
  title: 'Equipment & Machinery - Apex Structure',
  description: 'Explore our state-of-the-art construction equipment, heavy machinery, and technology infrastructure that powers our construction projects.',
  openGraph: {
    title: 'Equipment & Machinery - Apex Structure',
    description: 'Modern construction equipment and technology for superior project execution',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function EquipmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SeoHead
        title="Equipment & Machinery"
        description="State-of-the-art construction equipment, heavy machinery, and technology infrastructure powering Apex Structure projects."
        keywords="construction equipment, heavy machinery, construction technology, building tools, excavation equipment, concrete machinery"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Equipment & Machinery - Apex Structure",
          "description": "Modern construction equipment and technology",
          "about": {
            "@type": "Thing",
            "name": "Construction Equipment"
          }
        }}
      />
      
      {children}
    </>
  )
}