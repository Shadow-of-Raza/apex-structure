// src/app/page.tsx
import HeroSection from '@/components/homepage/HeroSection'
import FeaturedProjects from '@/components/homepage/FeaturedProjects'
import ServicesPreview from '@/components/homepage/ServicesPreview'
import StatsCounter from '@/components/homepage/StatsCounter'
import Testimonials from '@/components/homepage/Testimonials'
import CTA from '@/components/homepage/CTA'
import BlogPreview from '@/components/homepage/BlogPreview'

import SeoHead from '@/components/common/SEO/SeoHead'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apex Structure',
  description: 'Apex Structure is a leading real estate development company delivering exceptional residential and commercial projects with innovation and quality.',
  keywords: 'real estate development, construction company, property builders, commercial construction, residential projects',
  openGraph: {
    title: 'Apex Structure',
    description: 'Leading real estate developers creating sustainable and innovative spaces',
    type: 'website',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex Structure',
    description: 'Leading real estate developers creating sustainable and innovative spaces',
    images: ['/images/og-image.jpg'],
  },
}

export default function HomePage() {
  return (
    <>
      <SeoHead 
        title="Apex Structure"
        description="Apex Structure is a leading real estate development company delivering exceptional residential and commercial projects with innovation and quality."
        canonicalUrl="https://apex-structure.com"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Apex Structure",
          "description": "Leading real estate development company",
          "url": "https://apex-structure.com",
          "logo": "https://apex-structure.com/images/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "Customer Service"
          }
        }}
      />
      
      <HeroSection />
      <FeaturedProjects />
      <ServicesPreview />
      <StatsCounter />
      <Testimonials />
      <BlogPreview />
      <CTA />
    </>
  )
}