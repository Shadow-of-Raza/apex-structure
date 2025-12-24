// src/components/common/SEO/SeoHead.tsx
'use client'

import Head from 'next/head'

interface SeoHeadProps {
  title?: string
  description?: string
  canonicalUrl?: string
  ogImage?: string
  keywords?: string
  structuredData?: object
  noindex?: boolean
  publishedTime?: string
  modifiedTime?: string
  author?: string
  type?: 'website' | 'article' | 'profile' | 'product'
}

export default function SeoHead({
  title = 'Apex Structure Private Limited',
  description = 'Leading real estate development company specializing in residential, commercial, and industrial projects.',
  canonicalUrl,
  ogImage = 'https://apexstructure.in/images/og-image.jpg',
  keywords = 'real estate, construction, property development, builders, Apex Structure',
  structuredData,
  noindex = false,
  publishedTime,
  modifiedTime,
  author = 'Apex Structure',
  type = 'website',
}: SeoHeadProps) {
  const siteUrl = 'https://apexstructure.in'
  const fullTitle = title === 'Apex Structure' || title === 'Home' ? 
    'Apex Structure Private Limited' : 
    `${title} | Apex Structure Private Limited`
  
  const fullCanonicalUrl = canonicalUrl ? canonicalUrl : `${siteUrl}${typeof window !== 'undefined' ? window.location.pathname : ''}`

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Apex Structure Private Limited" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@ApexStructure" />
      
      {/* Article Specific */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
    </Head>
  )
}