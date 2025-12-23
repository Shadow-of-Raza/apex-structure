// src/app/projects/layout.tsx
import type { Metadata } from 'next'
import SeoHead from '@/components/common/SEO/SeoHead'
import { siteConfig } from '@/lib/constants/site-config'

export const metadata: Metadata = {
  title: 'Projects Portfolio - Apex Structure',
  description: 'Explore our portfolio of residential, commercial, and industrial projects. View current, completed, and upcoming developments.',
  openGraph: {
    title: 'Projects Portfolio - Apex Structure',
    description: 'Explore our portfolio of innovative construction projects',
    type: 'website',
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SeoHead
        title="Our Projects Portfolio"
        description="Browse through 500+ successful projects across residential, commercial, and industrial sectors delivered by Apex Structure."
        keywords="construction projects, real estate portfolio, completed projects, ongoing projects, residential projects, commercial buildings"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Project Portfolio",
          "description": "Portfolio of construction projects by Apex Structure",
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