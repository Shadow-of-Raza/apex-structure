// src/app/terms-and-conditions/layout.tsx
import type { Metadata } from 'next'
import SeoHead from '@/components/common/SEO/SeoHead'

export const metadata: Metadata = {
    title: 'Terms and Conditions - Apex Structure',
    description: 'Read the terms and conditions governing the use of Apex Structure\'s website and services.',
    openGraph: {
        title: 'Terms and Conditions - Apex Structure',
        description: 'Our legal terms and conditions for service and website use.',
        type: 'website',
    },
}

export default function TermsAndConditionsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <SeoHead
                title="Terms and Conditions"
                description="Legal terms and agreement for using Apex Structure services."
                keywords="terms and conditions, legal agreement, service terms, apex structure terms"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Terms and Conditions - Apex Structure",
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
