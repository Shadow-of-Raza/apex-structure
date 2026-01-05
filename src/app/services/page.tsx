// src/app/services/page.tsx
import PageHeader from '@/components/common/Layout/PageHeader'
import ServiceCard from '@/components/services/ServiceCard'
import ServicesProcess from '@/components/services/ServicesProcess'
import SeoHead from '@/components/common/SEO/SeoHead'
import { SERVICES_IMAGES } from '@/lib/constants/page-header'
import { Sparkles, Trophy, Users, Clock } from 'lucide-react'
import { getCompletedProjectsCount, getTotalProjectsCount } from '@/lib/utils/projects'
import { COMPANY_PROFILE } from '@/lib/constants/about-us'
import { calculateYearsOfExperience } from '@/lib/utils/about-us'

export default function ServicesPage() {
  const data = COMPANY_PROFILE;
  const serviceExperience = calculateYearsOfExperience(data.establishedOn);

  return (
    <>
      <SeoHead
        title="Our Construction Services"
        description="Complete range of construction and real estate development services delivered with excellence and innovation."
        keywords="construction services india, building construction, real estate developers, commercial construction services"
      />

      <PageHeader
        images={SERVICES_IMAGES}
        imageTransitionInterval={6000}
        showOverlay={true}
        overlayOpacity={0.7}
      />

      <div className="text-center my-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-bold uppercase tracking-widest">
          <Sparkles size={16} className="mr-2" />
          What We Do
        </div>
        <h2 className="text-4xl md:text-5xl font-black my-2 text-gray-900 leading-tight">
          Comprehensive Construction <span className="text-primary-600">Solutions</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          From concept to completion, we provide end-to-end construction and development
          services tailored to meet your specific requirements and exceed expectations.
        </p>
      </div>

      {/* Services Main Interface */}
      <div className="mb-12">
        <ServiceCard />
      </div>

      {/* Why Choose Us - Enhanced */}
      <div className="container mb-12 mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-50 text-secondary-600 text-sm font-bold uppercase tracking-widest mb-1">
            <Trophy size={16} className="mr-2" />
            Our Edge
          </div>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-6 text-gray-900">Our Commitment to <span className="text-primary-600">Excellence</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Trophy,
              count: `${getCompletedProjectsCount()}+`,
              label: 'Successful Completed Projects',
              desc: 'Delivered across residential, commercial, and industrial sectors',
              color: 'blue'
            },
            {
              icon: Clock,
              count: `${serviceExperience}+`,
              label: 'Years Experience',
              desc: 'Industry expertise and technical knowledge',
              color: 'green'
            },
            {
              icon: Users,
              count: '98%',
              label: 'Client Satisfaction',
              desc: 'Consistently high satisfaction rate across all projects',
              color: 'orange'
            },
            {
              icon: Sparkles,
              count: '24/7',
              label: 'Project Support',
              desc: 'Round-the-clock project monitoring and support',
              color: 'purple'
            }
          ].map((item, i) => (
            <div key={i} className="group text-center p-8 bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-[100%] transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary-50 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 transition-colors duration-500">
                  <item.icon size={28} className="text-primary-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="text-3xl font-black text-gray-900 mb-2">{item.count}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{item.label}</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Process Section */}
      <ServicesProcess />

    </>
  )
}
