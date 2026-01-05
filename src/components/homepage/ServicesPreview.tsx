// src/components/homepage/ServicesPreview.tsx
import Link from 'next/link'
import { servicesData } from '@/lib/constants/services'
import { getServiceIcon } from '@/lib/utils/services'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function ServicesPreview() {

  const displayServices = servicesData.slice(0, 6)

  return (
    <section className="py-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-50 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-bold uppercase tracking-widest mb-4">
            <Sparkles size={14} className="mr-2" />
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 leading-tight">
            Comprehensive <span className="text-gray-900">Construction</span> Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            From concept to completion, we deliver world-class infrastructure with precision, innovation, and sustainability at the core.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {displayServices.map((service, index) => {
            const Icon = getServiceIcon(service.icon)

            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-primary-100 relative overflow-hidden flex flex-col h-full"
              >
                {/* Header - Subtle */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary-600"></div>

                {/* Icon Container using Standard Colors */}
                <div className="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 bg-primary-50 text-secondary-600 shadow-sm">
                  <Icon size={32} />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-500 mb-8 leading-relaxed flex-grow">
                  {service.shortDescription || service.description}
                </p>

                <Link
                  href={`/services?id=${service.name}`}
                  className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-gray-400 group-hover:text-gray-900 transition-colors mt-auto"
                >
                  Explore Service
                  <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                {/* Hover Effect Background */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary-50 rounded-full blur-3xl transition-colors duration-500 opacity-50 pointer-events-none"></div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-2 bg-gray-900 text-white rounded-full font-bold hover:bg-primary-600 transition-all duration-300 shadow-xl hover:shadow-primary-600/30 transform hover:-translate-y-1"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
