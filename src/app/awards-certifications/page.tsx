// src/app/awards-certifications/page.tsx
import PageHeader from '@/components/common/Layout/PageHeader'
import CertificationGrid from '@/components/awards-certifications/CertificationGrid'
import { ABOUT_US_IMAGES } from '@/lib/constants/page-header'

export default function AwardsCertificationsPage() {
    return (
        <>
            <PageHeader
                images={ABOUT_US_IMAGES}
                imageTransitionInterval={6000}
                showOverlay={true}
                overlayOpacity={0.7}
            />
            
            <CertificationGrid />
        </>
    )
}
