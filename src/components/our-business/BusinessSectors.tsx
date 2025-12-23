'use client'

import { useState } from 'react'
import { Building2, Home, Warehouse, Hotel, School, Hospital } from 'lucide-react'
import Container from '@/components/common/Layout/Container'
import Section from '@/components/common/Layout/Section'

const sectors = [
  {
    id: 'residential',
    icon: <Home size={32} />,
    title: 'Residential',
    description: 'Luxury apartments, townships, villas, and affordable housing projects',
    revenueShare: '45%',
    growth: '+18% YoY',
    projects: '250+',
    features: [
      'Smart home integration',
      'Sustainable design',
      'Community amenities',
      'Premium finishes'
    ],
    color: 'bg-blue-100 text-blue-700'
  },
  {
    id: 'commercial',
    icon: <Building2 size={32} />,
    title: 'Commercial',
    description: 'Office complexes, shopping malls, retail spaces, and mixed-use developments',
    revenueShare: '35%',
    growth: '+15% YoY',
    projects: '150+',
    features: [
      'LEED certification',
      'Modern amenities',
      'Prime locations',
      'Flexible layouts'
    ],
    color: 'bg-green-100 text-green-700'
  },
  {
    id: 'industrial',
    icon: <Warehouse size={32} />,
    title: 'Industrial',
    description: 'Warehouses, factories, logistics parks, and manufacturing facilities',
    revenueShare: '15%',
    growth: '+25% YoY',
    projects: '75+',
    features: [
      'Custom infrastructure',
      'Heavy-duty construction',
      'Logistics optimization',
      'Energy efficiency'
    ],
    color: 'bg-orange-100 text-orange-700'
  },
  {
    id: 'specialized',
    icon: <Hospital size={32} />,
    title: 'Specialized',
    description: 'Hospitals, educational institutions, hotels, and institutional buildings',
    revenueShare: '5%',
    growth: '+12% YoY',
    projects: '25+',
    features: [
      'Specialized requirements',
      'Advanced facilities',
      'Regulatory compliance',
      'Custom solutions'
    ],
    color: 'bg-purple-100 text-purple-700'
  }
]

export default function BusinessSectors() {
  const [activeSector, setActiveSector] = useState('residential')

  const activeSectorData = sectors.find(sector => sector.id === activeSector)

  return (
    <Section background="gray" id="business-sectors">
      <Container>
        <div className="text-center mb-12">
          <span className="text-primary-600 font-semibold">BUSINESS SECTORS</span>
          <h2 className="text-4xl font-bold mt-2 mb-6">Diversified Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We operate across multiple real estate sectors, leveraging our expertise 
            to deliver exceptional value in each domain
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          {sectors.map((sector) => (
            <button
              key={sector.id}
              onClick={() => setActiveSector(sector.id)}
              className={`p-6 rounded-xl text-left transition-all duration-300 ${
                activeSector === sector.id
                  ? `${sector.color} shadow-xl transform -translate-y-1`
                  : 'bg-white shadow-md hover:shadow-lg'
              }`}
            >
              <div className={`w-16 h-16 rounded-lg ${
                activeSector === sector.id 
                  ? 'bg-white' 
                  : sector.color.replace('100', '50')
              } flex items-center justify-center mb-4`}>
                <div className={activeSector === sector.id ? sector.color.replace('100', '600') : ''}>
                  {sector.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{sector.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{sector.description}</p>
              
              <div className="flex justify-between text-sm">
                <div>
                  <div className="font-bold">{sector.revenueShare}</div>
                  <div className="text-gray-500">Revenue</div>
                </div>
                <div>
                  <div className="font-bold text-green-600">{sector.growth}</div>
                  <div className="text-gray-500">Growth</div>
                </div>
              </div>
            </button>
          ))}
        </div>
        
        {/* Active Sector Details */}
        {activeSectorData && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  {activeSectorData.title} Sector Details
                </h3>
                <p className="text-gray-700 mb-6">
                  {activeSectorData.description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">Total Projects</span>
                    <span className="font-bold text-lg">{activeSectorData.projects}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">Revenue Contribution</span>
                    <span className="font-bold text-lg">{activeSectorData.revenueShare}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">Annual Growth</span>
                    <span className="font-bold text-lg text-green-600">{activeSectorData.growth}</span>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h4 className="text-xl font-bold mb-4">Key Features & Capabilities</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeSectorData.features.map((feature, index) => (
                    <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className={`w-8 h-8 rounded-full ${activeSectorData.color} flex items-center justify-center mr-3`}>
                        <span className="font-bold">✓</span>
                      </div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Project Examples */}
                <div className="mt-8">
                  <h4 className="text-xl font-bold mb-4">Notable Projects</h4>
                  <div className="space-y-3">
                    {[
                      'Premium Residential Complex',
                      'Mixed-Use Development',
                      'Commercial Tower',
                      'Industrial Park'
                    ].map((project, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                        <div className="flex items-center">
                          <div className={`w-10 h-10 rounded ${activeSectorData.color} flex items-center justify-center mr-3`}>
                            <span className="font-bold">{index + 1}</span>
                          </div>
                          <span>{project}</span>
                        </div>
                        <span className="text-sm text-gray-500">Completed</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </Section>
  )
}