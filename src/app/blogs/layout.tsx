import type { Metadata } from 'next'
import SeoHead from '@/components/common/SEO/SeoHead'
import { siteConfig } from '@/lib/constants/site-config'

export const metadata: Metadata = {
  title: 'Blog - Apex Structure Insights',
  description: 'Expert insights, industry news, and construction tips from Apex Structure. Stay updated with the latest in real estate development.',
  openGraph: {
    title: 'Blog - Apex Structure Insights',
    description: 'Expert insights and construction tips from industry leaders',
    type: 'website',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SeoHead
        title="Blog & Insights"
        description="Stay updated with expert insights, construction tips, industry news, and latest trends in real estate development from Apex Structure."
        keywords="construction blog, real estate insights, building tips, industry news, sustainable construction"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Apex Structure Blog",
          "description": "Expert insights on real estate development",
          "url": "https://apex-structure.com/blogs",
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