import Container from '@/components/common/Layout/Container'
import PageHeader from '@/components/common/Layout/PageHeader'
import Section from '@/components/common/Layout/Section'
import BusinessSectors from '@/components/our-business/BusinessSectors'
import BusinessModel from '@/components/our-business/BusinessModel'
import ProjectLifecycle from '@/components/our-business/ProjectLifecycle'
import MarketPresence from '@/components/our-business/MarketPresence'
import BusinessAdvantages from '@/components/our-business/BusinessAdvantages'

export default function OurBusinessPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHeader
        title="Our Business"
        description="Comprehensive real estate development solutions across residential, commercial, and industrial sectors. Discover our business model, expertise, and commitment to excellence."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Our Business', href: '/our-business' }
        ]}
      />
      
      {/* Introduction */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Building the Future of Real Estate</h2>
            <p className="text-xl text-gray-600">
              Apex Structure operates as a full-service real estate development company 
              with a diversified portfolio spanning residential, commercial, and industrial 
              sectors. Our business is built on innovation, quality, and sustainable growth.
            </p>
          </div>
        </Container>
      </Section>
      
      <BusinessSectors />
      <BusinessModel />
      <ProjectLifecycle />
      <MarketPresence />
      <BusinessAdvantages />
      
      {/* CTA Section */}
      <Section background="primary" padding="lg">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partner with Us
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Explore partnership opportunities, joint ventures, or investment options 
              with Apex Structure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300"
              >
                Business Inquiry
              </a>
              <a
                href="/projects"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}