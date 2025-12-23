// src/components/common/SEO/SeoHead.tsx
// The Head component should come from 'next/head' but in Next.js 13+, we use Metadata API
// Let's update this component:

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  keywords?: string;
  structuredData?: object;
}

export default function SeoHead({
  title,
  description,
  canonicalUrl,
  ogImage = '/images/og-image.jpg',
  keywords = 'real estate, construction, property development',
  structuredData,
}: SeoHeadProps) {
  // This component is now just for structured data and canonical URLs
  // SEO metadata should be handled in page.tsx files using the Metadata API
  
  return (
    <>
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Keywords meta tag */}
      <meta name="keywords" content={keywords} />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
    </>
  )
}