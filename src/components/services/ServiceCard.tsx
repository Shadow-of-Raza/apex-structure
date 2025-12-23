// src/components/services/ServiceCard.tsx
'use client'

import { useState } from 'react'
import { Building2, Home, Warehouse, Wrench, ClipboardCheck, Users, Shield, Target, Clock, Award, ChevronRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import ImageWithFallback from '@/components/common/UI/ImageWithFallback'

const services = [
  {
    id: 'commercial',
    icon: <Building2 className="w-8 h-8" />,
    title: 'Commercial Construction',
    description: 'Complete construction solutions for office complexes, shopping malls, retail spaces, and commercial buildings.',
    features: [
      'Office Buildings & Corporate Parks',
      'Shopping Malls & Retail Centers',
      'Hotels & Hospitality Projects',
      'Educational Institutions',
      'Healthcare Facilities'
    ],
    highlights: [
      'LEED & IGBC Certified Projects',
      'Modern Architectural Designs',
      'Smart Building Solutions',
      'Energy Efficient Systems'
    ],
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/projects?type=commercial',
    color: 'from-blue-500 to-blue-700'
  },
  {
    id: 'residential',
    icon: <Home className="w-8 h-8" />,
    title: 'Residential Projects',
    description: 'Premium residential developments including apartments, villas, townships, and gated communities.',
    features: [
      'Luxury Apartments & Condominiums',
      'Villas & Independent Houses',
      'Integrated Townships',
      'Gated Communities',
      'Affordable Housing'
    ],
    highlights: [
      'Modern Amenities & Facilities',
      'Sustainable Living Spaces',
      'Smart Home Automation',
      'Community-Centric Design'
    ],
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/projects?type=residential',
    color: 'from-green-500 to-green-700'
  },
  {
    id: 'industrial',
    icon: <Warehouse className="w-8 h-8" />,
    title: 'Industrial Construction',
    description: 'Specialized construction services for factories, warehouses, industrial parks, and manufacturing units.',
    features: [
      'Manufacturing Plants',
      'Warehouses & Storage Facilities',
      'Industrial Parks',
      'Logistics Centers',
      'Special Economic Zones'
    ],
    highlights: [
      'Heavy-Duty Construction',
      'Material Handling Systems',
      'Utility Infrastructure',
      'Safety Compliance'
    ],
    image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/projects?type=industrial',
    color: 'from-orange-500 to-orange-700'
  },
  {
    id: 'renovation',
    icon: <Wrench className="w-8 h-8" />,
    title: 'Renovation & Interior',
    description: 'Complete renovation, remodeling, and interior design services for residential and commercial spaces.',
    features: [
      'Home Renovation & Remodeling',
      'Commercial Space Refurbishment',
      'Interior Design & Decoration',
      'Structural Repairs',
      'Retrofit & Upgradation'
    ],
    highlights: [
      'Custom Design Solutions',
      'Premium Material Selection',
      'Timely Project Completion',
      'Minimal Disruption'
    ],
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/projects?type=renovation',
    color: 'from-purple-500 to-purple-700'
  },
  {
    id: 'management',
    icon: <ClipboardCheck className="w-8 h-8" />,
    title: 'Project Management',
    description: 'End-to-end project management services ensuring quality, timeline, and budget adherence.',
    features: [
      'Project Planning & Scheduling',
      'Cost Estimation & Control',
      'Quality Assurance',
      'Contract Management',
      'Risk Assessment'
    ],
    highlights: [
      'Professional PM Team',
      'Advanced Project Tools',
      'Regular Progress Reports',
      'Stakeholder Coordination'
    ],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/projects?type=management',
    color: 'from-indigo-500 to-indigo-700'
  },
  {
    id: 'consultation',
    icon: <Users className="w-8 h-8" />,
    title: 'Consultation Services',
    description: 'Expert consultation for real estate investment, project feasibility, and development strategies.',
    features: [
      'Feasibility Studies',
      'Site Selection & Evaluation',
      'Investment Advisory',
      'Regulatory Compliance',
      'Market Research'
    ],
    highlights: [
      'Industry Expertise',
      'Data-Driven Insights',
      'Customized Solutions',
      'Risk Mitigation'
    ],
    image: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/projects?type=consultation',
    color: 'from-teal-500 to-teal-700'
  }
]

export default function ServiceCard() {
  const [activeService, setActiveService] = useState('commercial')

  const activeServiceData = services.find(service => service.id === activeService)

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100">
      {/* Service Tabs - Horizontal Scroll for Mobile */}
      <div className="mb-8">
        <div className="flex overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          <div className="flex space-x-3 min-w-max">
            {services.map(service => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`flex items-center px-5 py-3 rounded-xl transition-all duration-300 whitespace-nowrap ${
                  activeService === service.id
                    ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow border border-gray-200'
                }`}
              >
                <span className="mr-3">{service.icon}</span>
                <span className="font-semibold">{service.title}</span>
                {activeService === service.id && (
                  <ChevronRight className="ml-2 w-4 h-4" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Service Details */}
      {activeServiceData && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Image & Overview */}
          <div className="space-y-6">
            {/* Main Image with Fallback */}
            <div className="rounded-2xl overflow-hidden shadow-lg group relative h-64">
              <ImageWithFallback
                src={activeServiceData.image}
                alt={activeServiceData.title}
                fallbackText={activeServiceData.title}
                aspectRatio="landscape"
                fill={true}
                className="group-hover:scale-105 transition-transform duration-500"
                priority={true}
                width={800}
                height={450}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                <div className="flex items-center">
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    Featured Service
                  </div>
                </div>
              </div>
            </div>
            
            {/* Service Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 shadow border border-gray-100 text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">500+</div>
                <div className="text-xs text-gray-600">Projects</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow border border-gray-100 text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">98%</div>
                <div className="text-xs text-gray-600">Satisfaction</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow border border-gray-100 text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">18+</div>
                <div className="text-xs text-gray-600">Years Exp</div>
              </div>
            </div>

            {/* Quick Overview */}
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-6 border border-primary-200">
              <h3 className="text-lg font-bold text-primary-800 mb-3 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Service Guarantee
              </h3>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Timely project delivery</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Quality assured workmanship</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Transparent pricing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Features & Highlights */}
          <div className="space-y-8">
            {/* Service Description */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {activeServiceData.title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {activeServiceData.description}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center text-gray-800">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                  {activeServiceData.icon}
                </div>
                Key Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeServiceData.features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg p-4 border border-gray-200 hover:border-primary-300 transition-colors group"
                  >
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Highlights */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Award className="w-6 h-6 text-secondary-500 mr-3" />
                Service Highlights
              </h3>
              <div className="space-y-4">
                {activeServiceData.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="w-8 h-8 bg-secondary-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-secondary-400 font-bold">{index + 1}</span>
                    </div>
                    <span className="text-white/90">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link
                href={activeServiceData.link}
                className="inline-flex items-center justify-center bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                View Related Projects
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <p className="text-sm text-gray-600 mt-3">
                Explore our portfolio of {activeServiceData.title.toLowerCase()} projects
              </p>
            </div>
          </div>
        </div>
      )}

      {/* All Services Grid */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">All Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(service => (
            <div
              key={service.id}
              className={`bg-white rounded-xl p-5 shadow border border-gray-200 hover:shadow-xl hover:border-primary-300 transition-all duration-300 cursor-pointer group ${
                activeService === service.id ? 'ring-2 ring-primary-500' : ''
              }`}
              onClick={() => setActiveService(service.id)}
            >
              <div className="flex items-start mb-4">
                <div className={`p-3 rounded-xl ${activeService === service.id ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-600'} group-hover:bg-primary-50 group-hover:text-primary-500 transition-colors`}>
                  {service.icon}
                </div>
                <div className="ml-4 flex-1">
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-primary-600 font-medium text-sm">
                  Learn More
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  activeService === service.id ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-400'
                }`}>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
