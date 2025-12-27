// src/app/about-us/page.tsx
import Container from '@/components/common/Layout/Container'
import PageHeader from '@/components/common/Layout/PageHeader'
import CompanyProfile from '@/components/about-us/CompanyProfile'
import DirectorsMessage from '@/components/about-us/DirectorsMessage'
import MentorsMessage from '@/components/about-us/MentorsMessage'
import VisionMission from '@/components/about-us/VisionMission'
import OurTeam from '@/components/about-us/OurTeam'
import CSRActivity from '@/components/about-us/CSRActivity'
import Section from '@/components/common/Layout/Section'

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHeader
        title="About Apex Structure"
        description="Building excellence in real estate since 2005 with innovation, quality, and integrity"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'About Us', href: '/about-us' }
        ]}
      />
      
      {/* Rest of your content remains the same */}
      <CompanyProfile />
      <DirectorsMessage />
      <MentorsMessage />
      <VisionMission />
      <OurTeam />
      <CSRActivity />
      {/* CTA Section */}
      <Section background="primary" padding="lg">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Dream Project?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Partner with Apex Structure for exceptional real estate development solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300"
              >
                Contact Us Today
              </a>
              <a
                href="/projects"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300"
              >
                View Our Projects
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}