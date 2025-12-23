// src/components/homepage/ServicesPreview.tsx
import { Building, Home, Warehouse, Wrench, Truck, ClipboardCheck } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: <Building size={32} />,
    title: "Commercial Construction",
    description: "Office complexes, shopping malls, and commercial spaces with modern amenities",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: <Home size={32} />,
    title: "Residential Projects",
    description: "Apartments, villas, and townships with luxury living standards",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: <Warehouse size={32} />,
    title: "Industrial Construction",
    description: "Warehouses, factories, and industrial parks with efficient layouts",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: <Wrench size={32} />,
    title: "Renovation & Interior",
    description: "Complete interior design and renovation services for existing spaces",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: <Truck size={32} />,
    title: "Construction Management",
    description: "End-to-end project management ensuring quality and timely delivery",
    color: "bg-red-100 text-red-600"
  },
  {
    icon: <ClipboardCheck size={32} />,
    title: "Consultation Services",
    description: "Expert advice on real estate investment and development strategies",
    color: "bg-indigo-100 text-indigo-600"
  }
]

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary-600 font-semibold">OUR SERVICES</span>
          <h2 className="text-4xl font-bold mt-2 mb-4">Comprehensive Construction Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer end-to-end real estate development services from concept to completion
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-lg ${service.color} flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              
              <Link 
                href="/services"
                className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
        
        <div className="bg-primary-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Need a Custom Solution?</h3>
              <p className="text-primary-100">
                Contact us for tailored construction services that fit your specific requirements
              </p>
            </div>
            <Link 
              href="/contact-us"
              className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300 whitespace-nowrap"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}