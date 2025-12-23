import type { Metadata } from 'next'
import SeoHead from '@/components/common/SEO/SeoHead'
import { siteConfig } from '@/lib/constants/site-config'

export const metadata: Metadata = {
  title: 'Project Gallery - Apex Structure',
  description: 'Explore our construction projects gallery showcasing residential, commercial, and industrial developments with detailed photos and progress timelines.',
  openGraph: {
    title: 'Project Gallery - Apex Structure',
    description: 'Visual showcase of our construction projects and workmanship quality',
    type: 'website',
    images: [`${siteConfig.url}/images/gallery-og.jpg`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Gallery - Apex Structure',
    description: 'Visual showcase of our construction projects',
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SeoHead
        title="Project Gallery"
        description="Browse through our construction project gallery featuring residential apartments, commercial buildings, industrial facilities, and detailed workmanship photos."
        keywords="construction gallery, project photos, building progress, real estate photos, construction site images"
        canonicalUrl={`${siteConfig.url}/gallery`}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "Apex Structure Project Gallery",
          "description": "Collection of construction project images and photos",
          "url": `${siteConfig.url}/gallery`,
          "image": [
            "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
            "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
          ]
        }}
      />
      
      {children}
    </>
  )
}