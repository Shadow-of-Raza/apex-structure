import type { Metadata } from 'next'
import SeoHead from '@/components/common/SEO/SeoHead'

export const metadata: Metadata = {
  title: 'Careers - Join Apex Structure',
  description: 'Explore exciting career opportunities at Apex Structure. Join our team of construction and real estate professionals.',
  openGraph: {
    title: 'Careers - Join Apex Structure',
    description: 'Build your career with a leading real estate development company',
    type: 'website',
  },
}

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SeoHead
        title="Careers"
        description="Join Apex Structure and build your career in real estate development. Explore job openings in engineering, architecture, project management, and more."
        keywords="construction jobs, real estate careers, engineering jobs, architecture jobs, project management jobs"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CareerPage",
          "name": "Apex Structure Careers",
          "description": "Job opportunities at Apex Structure",
          "url": "https://apex-structure.com/career",
          "hiringOrganization": {
            "@type": "Organization",
            "name": "Apex Structure",
            "sameAs": "https://apex-structure.com"
          }
        }}
      />
      
      {children}
    </>
  )
}