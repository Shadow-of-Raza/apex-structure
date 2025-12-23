// src/app/services/page.tsx
import Container from '@/components/common/Layout/Container'
import Section from '@/components/common/Layout/Section'
import PageHeader from '@/components/common/Layout/PageHeader'
import ServiceCard from '@/components/services/ServiceCard'
import ServicesProcess from '@/components/services/ServicesProcess'
import ServiceCTA from '@/components/services/ServiceCTA'
import SeoHead from '@/components/common/SEO/SeoHead'
import { projectsData } from '@/lib/constants/projects'

const totalProjects = projectsData.length

export const metadata = {
  title: 'Our Services - Apex Structure',
  description: 'Comprehensive construction and real estate development services including residential, commercial, industrial projects, renovation, and project management.',
  keywords: 'construction services, real estate development, building contractors, project management, renovation services',
}

export default function ServicesPage() {

  return (
    <>
      <SeoHead
        title="Our Construction Services"
        description="Complete range of construction and real estate development services delivered with excellence and innovation."
        keywords="construction services india, building construction, real estate developers, commercial construction services"
      />

      <PageHeader
        title="Our Services"
        description="Comprehensive construction and real estate development solutions delivered with innovation, quality, and precision"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' }
        ]}
      />
      {/* Stats Overview */}
      <Section padding="md" background="primary">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{totalProjects}+</div>
              <div className="text-primary-200">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-primary-200">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-primary-200">Budget Adherence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">18+</div>
              <div className="text-primary-200">Years Experience</div>
            </div>
          </div>
        </Container>
      </Section>


      <Section padding="lg">
        <Container>
          <div className="text-center mb-16">
            <span className="text-primary-600 font-semibold">WHAT WE OFFER</span>
            <h2 className="text-4xl font-bold mt-2 mb-6">Comprehensive Construction Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              From concept to completion, we provide end-to-end construction and development
              services tailored to meet your specific requirements and exceed expectations.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <ServiceCard />
          </div>

          {/* Why Choose Us */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="text-primary-600 font-semibold">WHY CHOOSE US</span>
              <h2 className="text-4xl font-bold mt-2 mb-6">Our Commitment to Excellence</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl font-bold">500+</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Successful Projects</h3>
                <p className="text-gray-600">
                  Delivered across residential, commercial, and industrial sectors
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">18+</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Years Experience</h3>
                <p className="text-gray-600">
                  Industry expertise and technical knowledge
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-2xl font-bold">98%</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Client Satisfaction</h3>
                <p className="text-gray-600">
                  Consistently high satisfaction rate across all projects
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-2xl font-bold">24/7</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Project Support</h3>
                <p className="text-gray-600">
                  Round-the-clock project monitoring and support
                </p>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <ServicesProcess />

          {/* CTA Section */}
          <ServiceCTA />
        </Container>
      </Section>
    </>
  )
}