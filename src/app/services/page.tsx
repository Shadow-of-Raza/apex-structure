// src/app/services/page.tsx
import PageHeader from '@/components/common/Layout/PageHeader'
import ServiceCard from '@/components/services/ServiceCard'
import SeoHead from '@/components/common/SEO/SeoHead'
import { SERVICES_IMAGES } from '@/lib/constants/page-header'
import OurEdge from '@/components/homepage/OurEdge'

export default function ServicesPage() {

  return (
    <>
      <SeoHead
        title="Our Construction Services"
        description="Complete range of construction and real estate development services delivered with excellence and innovation."
        keywords="construction services india, building construction, real estate developers, commercial construction services"
      />

      <PageHeader
        images={SERVICES_IMAGES}
        imageTransitionInterval={6000}
        showOverlay={true}
        overlayOpacity={0.7}
      />

      {/* Services Main Interface (Includes Selection & Details) */}
      <ServiceCard />

      {/* Why Choose Us - Enhanced */}
      <OurEdge />

    </>
  )
}
