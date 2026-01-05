// src/app/privacy-policy/layout.tsx
import type { Metadata } from 'next'
import SeoHead from '@/components/common/SEO/SeoHead'

export const metadata: Metadata = {
    title: 'Privacy Policy - Apex Structure',
    description: 'Your privacy is important to us. Learn about how Apex Structure collects, uses, and protects your personal information.',
    openGraph: {
        title: 'Privacy Policy - Apex Structure',
        description: 'Information about our privacy practices and data protection.',
        type: 'website',
    },
}

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <SeoHead
                title="Privacy Policy"
                description="Our commitment to protecting your privacy and managing your data securely."
                keywords="privacy policy, data protection, privacy terms, apex structure privacy"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Privacy Policy - Apex Structure",
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
