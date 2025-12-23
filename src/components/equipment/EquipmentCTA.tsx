// src/components/equipment/EquipmentCTA.tsx
import { Phone, Mail, MessageSquare, FileText } from 'lucide-react'
import Link from 'next/link'

export default function EquipmentCTA() {
  return (
    <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg p-8 md:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Equipment for Your Project?</h2>
          <p className="text-gray-600 mb-6">
            Whether you need to rent specific equipment or want to discuss our fleet capabilities 
            for your project, our team is ready to assist you.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <FileText className="w-5 h-5 text-primary-600 mr-3" />
              <span>Get detailed equipment specifications</span>
            </div>
            <div className="flex items-center">
              <FileText className="w-5 h-5 text-primary-600 mr-3" />
              <span>Request equipment rental quotes</span>
            </div>
            <div className="flex items-center">
              <FileText className="w-5 h-5 text-primary-600 mr-3" />
              <span>Schedule equipment demonstrations</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <Link
            href="tel:+15551234567"
            className="flex items-center justify-center bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-4 rounded-lg font-semibold text-lg transition duration-300"
          >
            <Phone className="mr-3" size={20} />
            Call for Equipment Inquiry
          </Link>
          
          <Link
            href="mailto:equipment@apexstructure.com"
            className="flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-4 rounded-lg font-semibold text-lg transition duration-300"
          >
            <Mail className="mr-3" size={20} />
            Email Equipment Team
          </Link>
          
          <Link
            href="/contact-us"
            className="flex items-center justify-center bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-4 rounded-lg font-semibold text-lg transition duration-300"
          >
            <MessageSquare className="mr-3" size={20} />
            Request Equipment Catalog
          </Link>
        </div>
      </div>
    </div>
  )
}