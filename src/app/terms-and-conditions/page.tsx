import Container from '@/components/common/Layout/Container'
import Section from '@/components/common/Layout/Section'
import PageHeader from '@/components/common/Layout/PageHeader'
import { ABOUT_US_IMAGES } from '@/lib/constants/page-header'

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHeader
        images={ABOUT_US_IMAGES}
        imageTransitionInterval={6000}
        showOverlay={true}
        overlayOpacity={0.7}
      />
      <Section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Welcome to Apex Structure. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions of use.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                The services that Apex Structure provides to you are subject to the following Terms and Conditions. Apex Structure reserves the right to update these terms at any time without notice to you.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Description of Services</h2>
              <p className="mb-4">
                Through its web property, Apex Structure provides you with access to a variety of resources, including construction project information, company updates, and communication tools.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Conduct</h2>
              <p className="mb-4">
                As a condition of your use of the services, you will not use the services for any purpose that is unlawful or prohibited by these terms, conditions, and notices.
              </p>

              <div className="mt-12 p-6 bg-primary-50 rounded-xl border border-primary-100">
                <p className="text-sm italic">
                  Note: These terms are subject to change. Please review this page periodically for updates.
                  Last updated: January 2026.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}