// src/components/equipment/TechnologyShowcase.tsx
'use client'
import { Cpu, Satellite, Wifi, Shield, Battery, Zap, Radio, MapPin } from 'lucide-react'

const technologies = [
  {
    icon: <Cpu size={32} />,
    title: 'GPS Tracking',
    description: 'Real-time location monitoring of all equipment',
    benefits: ['Improved fleet management', 'Reduced idle time', 'Enhanced security']
  },
  {
    icon: <Satellite size={32} />,
    title: 'Telematics Systems',
    description: 'Advanced performance monitoring and diagnostics',
    benefits: ['Predictive maintenance', 'Fuel optimization', 'Performance analytics']
  },
  {
    icon: <Shield size={32} />,
    title: 'Safety Technology',
    description: 'Integrated safety systems and collision avoidance',
    benefits: ['360° camera systems', 'Proximity sensors', 'Automatic braking']
  },
  {
    icon: <Battery size={32} />,
    title: 'Hybrid & Electric',
    description: 'Environmentally friendly equipment options',
    benefits: ['Reduced emissions', 'Lower operating costs', 'Quieter operation']
  }
]

export default function TechnologyShowcase() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">Advanced Technology Integration</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We invest in cutting-edge technology to enhance equipment performance, safety, and efficiency
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {technologies.map((tech, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-start mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                <div className="text-white">
                  {tech.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </div>
            </div>
            
            <div className="border-t border-white/20 p-6">
              <h4 className="font-semibold mb-3 text-primary-200">Key Benefits:</h4>
              <ul className="space-y-2">
                {tech.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center">
                    <Zap size={16} className="text-primary-400 mr-2" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}