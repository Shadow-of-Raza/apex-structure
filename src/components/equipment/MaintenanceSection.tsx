// src/components/equipment/MaintenanceSection.tsx
'use client'
import { Wrench, Calendar, CheckCircle, Users, FileText, Clock } from 'lucide-react'

const maintenanceServices = [
  {
    icon: <Wrench size={32} />,
    title: 'Preventive Maintenance',
    description: 'Scheduled servicing to prevent breakdowns',
    frequency: 'Monthly/Quarterly',
    benefits: ['Extended equipment life', 'Reduced downtime', 'Lower repair costs']
  },
  {
    icon: <Calendar size={32} />,
    title: 'Predictive Maintenance',
    description: 'Data-driven maintenance based on equipment usage',
    frequency: 'As needed (IoT monitoring)',
    benefits: ['Minimal disruption', 'Optimal performance', 'Cost efficiency']
  },
  {
    icon: <Users size={32} />,
    title: 'Operator Training',
    description: 'Certified training for equipment operators',
    frequency: 'Quarterly/Annually',
    benefits: ['Improved safety', 'Better efficiency', 'Reduced wear & tear']
  }
]

export default function MaintenanceSection() {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Maintenance & Support</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Comprehensive maintenance programs to ensure optimal equipment performance and longevity
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {maintenanceServices.map((service, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center mb-6">
              <div className="text-blue-600">
                {service.icon}
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            
            <div className="flex items-center mb-4">
              <Clock size={16} className="text-gray-400 mr-2" />
              <span className="text-sm text-gray-600">Frequency: {service.frequency}</span>
            </div>
            
            <div className="border-t border-gray-100 pt-4">
              <h4 className="font-semibold text-gray-700 mb-2">Benefits:</h4>
              <ul className="space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle size={14} className="text-green-500 mr-2" />
                    <span className="text-sm text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      {/* Maintenance Stats */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-blue-200">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">98%</div>
            <div className="text-blue-200">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">2h</div>
            <div className="text-blue-200">Average Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-blue-200">Certified Technicians</div>
          </div>
        </div>
      </div>
    </div>
  )
}