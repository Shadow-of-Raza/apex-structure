import Container from '@/components/common/Layout/Container'
import Section from '@/components/common/Layout/Section'
import PageHeader from '@/components/common/Layout/PageHeader'
import { ABOUT_US_IMAGES } from '@/lib/constants/page-header'

export default function PrivacyPolicyPage() {
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
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                At Apex Structure, we are committed to protecting the privacy and security of our clients and website visitors.
                This Privacy Policy outlines how we collect, use, and safeguard the information you provide to us.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information Collection</h2>
              <p className="mb-4">
                We collect information when you visit our site, register, or contact us. This may include your name, email address, phone number, and project requirements.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use of Information</h2>
              <p className="mb-4">
                The information we collect is used to provide better services, improve user experience, and communicate important updates regarding our projects and company.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Security</h2>
              <p className="mb-4">
                We implement a variety of security measures to maintain the safety of your personal information. Your data is stored in secure environments.
              </p>

              <div className="mt-12 p-6 bg-primary-50 rounded-xl border border-primary-100">
                <p className="text-sm italic">
                  Note: This policy is subject to change. Please review this page periodically for updates.
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