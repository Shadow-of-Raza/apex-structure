// src/app/awards-certifications/layout.tsx
import type { Metadata } from 'next'
import SeoHead from '@/components/common/SEO/SeoHead'

export const metadata: Metadata = {
    title: 'Awards & Certifications - Apex Structure',
    description: 'Explore the awards, certifications, and industry recognitions that validate Apex Structure\'s commitment to quality and excellence.',
    openGraph: {
        title: 'Awards & Certifications - Apex Structure',
        description: 'Recognized excellence in real estate development and construction.',
        type: 'website',
    },
}

export default function AwardsCertificationsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <SeoHead
                title="Awards & Certifications"
                description="Our journey of excellence recognized through prestigious awards and industry-standard certifications."
                keywords="construction awards, real estate certifications, quality standards, ISO certified construction company"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Awards & Certifications - Apex Structure",
                    "description": "Awards and certifications earned by Apex Structure for excellence in construction.",
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
