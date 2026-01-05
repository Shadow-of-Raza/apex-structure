// src/app/services/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Our Services - Apex Structure',
    description: 'Comprehensive construction and real estate development services including residential, commercial, industrial projects, renovation, and project management.',
    keywords: 'construction services, real estate development, building contractors, project management, renovation services',
    openGraph: {
        title: 'Our Services - Apex Structure',
        description: 'Complete range of construction and real estate development services delivered with excellence.',
        type: 'website',
    },
}

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}
