'use client'

import { useState } from 'react'
import { Building2, Factory, Home, Hospital, School, Building, ShoppingBag, Hotel, ChevronRight, CheckCircle } from 'lucide-react'

const industries = [
  {
    id: 'corporate',
    name: 'Corporate',
    icon: <Building2 size={24} />,
    description: 'Office buildings, headquarters, tech parks',
    projects: 85,
    clients: 45,
    growth: '15%',
    color: 'bg-blue-100 text-blue-600',
    features: ['Smart office solutions', 'LEED Certification', 'Modular designs']
  },
  {
    id: 'industrial',
    name: 'Industrial',
    icon: <Factory size={24} />,
    description: 'Factories, warehouses, manufacturing units',
    projects: 65,
    clients: 30,
    growth: '12%',
    color: 'bg-orange-100 text-orange-600',
    features: ['Heavy machinery support', 'Custom layouts', 'Safety compliance']
  },
  {
    id: 'residential',
    name: 'Residential',
    icon: <Home size={24} />,
    description: 'Apartments, villas, townships',
    projects: 120,
    clients: 80,
    growth: '18%',
    color: 'bg-green-100 text-green-600',
    features: ['Luxury amenities', 'Green spaces', 'Community facilities']
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: <Hospital size={24} />,
    description: 'Hospitals, clinics, medical centers',
    projects: 40,
    clients: 25,
    growth: '20%',
    color: 'bg-red-100 text-red-600',
    features: ['Medical infrastructure', 'Clean room facilities', 'Emergency access']
  },
  {
    id: 'education',
    name: 'Education',
    icon: <School size={24} />,
    description: 'Schools, colleges, universities',
    projects: 55,
    clients: 35,
    growth: '14%',
    color: 'bg-purple-100 text-purple-600',
    features: ['Smart classrooms', 'Laboratories', 'Sports facilities']
  },
  {
    id: 'finance',
    name: 'Finance',
    icon: <Building size={24} />,
    description: 'Banks, financial institutions',
    projects: 35,
    clients: 20,
    growth: '10%',
    color: 'bg-yellow-100 text-yellow-600',
    features: ['Security systems', 'Vault rooms', 'Customer areas']
  },
  {
    id: 'retail',
    name: 'Retail',
    icon: <ShoppingBag size={24} />,
    description: 'Malls, showrooms, retail spaces',
    projects: 50,
    clients: 30,
    growth: '16%',
    color: 'bg-pink-100 text-pink-600',
    features: ['Customer flow design', 'Display areas', 'Parking solutions']
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    icon: <Hotel size={24} />,
    description: 'Hotels, resorts, restaurants',
    projects: 45,
    clients: 25,
    growth: '22%',
    color: 'bg-indigo-100 text-indigo-600',
    features: ['Luxury interiors', 'Recreational facilities', 'Service areas']
  },
]

export default function ClientIndustries() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null)
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null)

  const selectedIndustryData = industries.find(ind => ind.id === selectedIndustry) || industries[0]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our expertise spans across multiple sectors, delivering customized solutions for each industry
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {industries.map((industry) => (
          <button
            key={industry.id}
            onClick={() => setSelectedIndustry(industry.id)}
            onMouseEnter={() => setHoveredIndustry(industry.id)}
            onMouseLeave={() => setHoveredIndustry(null)}
            className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 ${
              selectedIndustry === industry.id
                ? 'bg-primary-600 text-white shadow-lg scale-105'
                : hoveredIndustry === industry.id
                ? 'bg-gray-100 scale-102'
                : 'bg-white shadow-md'
            }`}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
              selectedIndustry === industry.id ? 'bg-white/20' : industry.color
            }`}>
              <div className={selectedIndustry === industry.id ? 'text-white' : ''}>
                {industry.icon}
              </div>
            </div>
            <div className="font-bold text-center mb-1">{industry.name}</div>
            <div className={`text-xs text-center ${
              selectedIndustry === industry.id ? 'text-white/90' : 'text-gray-500'
            }`}>
              {industry.projects} Projects
            </div>
          </button>
        ))}
      </div>

      {/* Industry Details */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Industry Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className={`w-16 h-16 rounded-lg ${selectedIndustryData.color} flex items-center justify-center mr-4`}>
                {selectedIndustryData.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold">{selectedIndustryData.name} Sector</h3>
                <p className="text-gray-600">{selectedIndustryData.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary-600">{selectedIndustryData.projects}</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary-600">{selectedIndustryData.clients}</div>
                <div className="text-sm text-gray-600">Active Clients</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600">{selectedIndustryData.growth}</div>
                <div className="text-sm text-gray-600">Annual Growth</div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-700 mb-4">Key Features:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedIndustryData.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Case Study */}
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-100">
            <h4 className="font-bold text-primary-700 mb-4">Case Study</h4>
            <div className="mb-4">
              <div className="text-sm text-gray-500">Featured Project</div>
              <div className="font-bold">
                {selectedIndustryData.name === 'Corporate' && 'TechCorp Headquarters'}
                {selectedIndustryData.name === 'Industrial' && 'Global Industries Factory'}
                {selectedIndustryData.name === 'Residential' && 'Green Valley Apartments'}
                {selectedIndustryData.name === 'Healthcare' && 'Metro Hospital Expansion'}
                {selectedIndustryData.name === 'Education' && 'State University Campus'}
                {selectedIndustryData.name === 'Finance' && 'Capital Bank Tower'}
                {selectedIndustryData.name === 'Retail' && 'Urban Mega Mall'}
                {selectedIndustryData.name === 'Hospitality' && 'Grand Luxury Resort'}
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              <div>
                <div className="text-sm text-gray-500">Duration</div>
                <div className="font-medium">18 Months</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Value</div>
                <div className="font-medium">$25 Million</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Completion</div>
                <div className="font-medium">3 Months Early</div>
              </div>
            </div>

            <button className="w-full flex items-center justify-center text-primary-600 hover:text-primary-700 font-semibold">
              View Case Study
              <ChevronRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Industry CTA */}
      <div className="text-center">
        <p className="text-gray-600 mb-6">
          Looking for industry-specific expertise? Our specialized teams understand the unique requirements of each sector.
        </p>
        <button className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
          Get Industry-Specific Consultation
          <ChevronRight className="ml-2" size={20} />
        </button>
      </div>
    </div>
  )
}