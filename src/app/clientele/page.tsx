import PageHeader from '@/components/common/Layout/PageHeader'
import Container from '@/components/common/Layout/Container'
import Section from '@/components/common/Layout/Section'
import ClientStats from '@/components/clientele/ClientStats'
import ClientLogo from '@/components/clientele/ClientLogo'
import ClientTestimonials from '@/components/clientele/ClientTestimonials'
import ClientIndustries from '@/components/clientele/ClientIndustries'
import ClientPartnerships from '@/components/clientele/ClientPartnerships'
import CTA from '@/components/homepage/CTA'

export default function ClientelePage() {
  return (
    <>
      {/* Hero Section */}
      <PageHeader
        title="Our Prestigious Clientele"
        description="Trusted by leading corporations, institutions, and satisfied customers across various sectors for premium real estate development solutions."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Clientele', href: '/clientele' }
        ]}
      />
      
      {/* Client Statistics */}
      <Section>
        <Container>
          <ClientStats />
        </Container>
      </Section>
      
      {/* Client Logos Grid */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Trusted By Industry Leaders</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are proud to collaborate with some of the most respected names across various industries
            </p>
          </div>
          <ClientLogo />
        </Container>
      </Section>
      
      {/* Client Testimonials */}
      <Section>
        <Container>
          <ClientTestimonials />
        </Container>
      </Section>
      
      {/* Industries Served */}
      <Section background="gray">
        <Container>
          <ClientIndustries />
        </Container>
      </Section>
      
      {/* Partnerships Section */}
      <Section>
        <Container>
          <ClientPartnerships />
        </Container>
      </Section>
      
      {/* CTA Section */}
      <CTA />
    </>
  )
}