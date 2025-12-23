import type { Metadata } from 'next'
import SeoHead from '@/components/common/SEO/SeoHead'
import { siteConfig } from '@/lib/constants/site-config'

export const metadata: Metadata = {
  title: 'Contact Us - Apex Structure',
  description: 'Get in touch with Apex Structure for real estate development inquiries, project consultations, and partnership opportunities.',
  openGraph: {
    title: 'Contact Us - Apex Structure',
    description: 'Connect with our team for premium real estate development solutions',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SeoHead
        title="Contact Us"
        description="Reach out to Apex Structure for expert real estate development consultation, project inquiries, and partnership opportunities."
        keywords="contact apex structure, real estate consultation, construction inquiry, project quote"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Apex Structure",
          "description": "Get in touch for real estate development projects",
          "url": "https://apex-structure.com/contact-us",
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+1-555-123-4567",
              "contactType": "customer service",
              "areaServed": "Worldwide",
              "availableLanguage": "English"
            }
          ]
        }}
      />
      
      {children}
    </>
  )
}