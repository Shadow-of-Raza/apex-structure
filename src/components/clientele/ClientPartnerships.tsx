'use client'

import { useState } from 'react'
import { Handshake, TrendingUp, Users, Award, ChevronRight } from 'lucide-react'

const partnerships = [
  {
    id: 1,
    name: 'Strategic Alliance Program',
    description: 'Long-term partnerships with select clients for ongoing projects',
    benefits: ['Priority scheduling', 'Dedicated account manager', 'Volume discounts'],
    duration: '5+ years',
    clients: 25,
    icon: <Handshake size={32} />,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: 2,
    name: 'Preferred Vendor Program',
    description: 'Formal vendor relationships with large corporations',
    benefits: ['Streamlined procurement', 'Joint marketing', 'Training programs'],
    duration: '3+ years',
    clients: 40,
    icon: <TrendingUp size={32} />,
    color: 'bg-green-100 text-green-600'
  },
  {
    id: 3,
    name: 'Government Contracts',
    description: 'Authorized contractor for government infrastructure projects',
    benefits: ['Public sector projects', 'Regulatory compliance', 'Large-scale developments'],
    duration: '8+ years',
    clients: 15,
    icon: <Award size={32} />,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    id: 4,
    name: 'Industry Consortium',
    description: 'Collaboration with industry leaders for innovation',
    benefits: ['Technology sharing', 'Research partnerships', 'Standards development'],
    duration: '6+ years',
    clients: 30,
    icon: <Users size={32} />,
    color: 'bg-orange-100 text-orange-600'
  },
]

export default function ClientPartnerships() {
  const [expandedPartnership, setExpandedPartnership] = useState<number | null>(null)

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Strategic Partnerships</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We believe in building lasting relationships through our structured partnership programs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {partnerships.map((partnership) => (
          <div
            key={partnership.id}
            className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${
              expandedPartnership === partnership.id ? 'ring-2 ring-primary-500' : ''
            }`}
            onMouseEnter={() => setExpandedPartnership(partnership.id)}
            onMouseLeave={() => setExpandedPartnership(null)}
          >
            <div className="flex items-start mb-6">
              <div className={`w-16 h-16 rounded-lg ${partnership.color} flex items-center justify-center mr-4`}>
                {partnership.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{partnership.name}</h3>
                <p className="text-gray-600">{partnership.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-primary-600">{partnership.duration}</div>
                <div className="text-sm text-gray-600">Average Duration</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-primary-600">{partnership.clients}</div>
                <div className="text-sm text-gray-600">Active Partners</div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-gray-700 mb-3">Key Benefits:</h4>
              <ul className="space-y-2">
                {partnership.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <ChevronRight size={16} className="text-primary-500 mr-2" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`transition-all duration-300 ${
              expandedPartnership === partnership.id ? 'opacity-100' : 'opacity-0'
            }`}>
              <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-semibold transition duration-300">
                Learn About Partnership
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Partnership CTA */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-6 lg:mb-0">
            <h3 className="text-2xl font-bold mb-2">Interested in Partnership?</h3>
            <p className="text-primary-100">
              Join our network of satisfied partners and grow together
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-primary-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition duration-300">
              Download Partnership Brochure
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition duration-300">
              Schedule Partnership Call
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}