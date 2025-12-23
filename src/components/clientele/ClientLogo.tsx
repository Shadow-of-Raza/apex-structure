'use client'

import { useState } from 'react'
import { Building2, Factory, Home, Hospital, School, Building, ShoppingBag, Hotel } from 'lucide-react'

const clientCategories = [
  { id: 'all', name: 'All Clients', icon: <Building2 size={20} /> },
  { id: 'corporate', name: 'Corporate', icon: <Building2 size={20} /> },
  { id: 'industrial', name: 'Industrial', icon: <Factory size={20} /> },
  { id: 'residential', name: 'Residential', icon: <Home size={20} /> },
  { id: 'healthcare', name: 'Healthcare', icon: <Hospital size={20} /> },
  { id: 'education', name: 'Education', icon: <School size={20} /> },
  { id: 'finance', name: 'Finance', icon: <Building size={20} /> },
  { id: 'retail', name: 'Retail', icon: <ShoppingBag size={20} /> },
  { id: 'hospitality', name: 'Hospitality', icon: <Hotel size={20} /> },
]

const clients = [
  { id: 1, name: 'TechCorp Solutions', category: 'corporate', logo: 'TC', color: 'bg-blue-100 text-blue-700' },
  { id: 2, name: 'Green Valley Residency', category: 'residential', logo: 'GV', color: 'bg-green-100 text-green-700' },
  { id: 3, name: 'Global Industries', category: 'industrial', logo: 'GI', color: 'bg-orange-100 text-orange-700' },
  { id: 4, name: 'Metro Hospital', category: 'healthcare', logo: 'MH', color: 'bg-red-100 text-red-700' },
  { id: 5, name: 'State University', category: 'education', logo: 'SU', color: 'bg-purple-100 text-purple-700' },
  { id: 6, name: 'Capital Bank', category: 'finance', logo: 'CB', color: 'bg-yellow-100 text-yellow-700' },
  { id: 7, name: 'Urban Mall', category: 'retail', logo: 'UM', color: 'bg-pink-100 text-pink-700' },
  { id: 8, name: 'Grand Hotels', category: 'hospitality', logo: 'GH', color: 'bg-indigo-100 text-indigo-700' },
  { id: 9, name: 'Innovate Labs', category: 'corporate', logo: 'IL', color: 'bg-cyan-100 text-cyan-700' },
  { id: 10, name: 'City Apartments', category: 'residential', logo: 'CA', color: 'bg-emerald-100 text-emerald-700' },
  { id: 11, name: 'Precision Manufacturing', category: 'industrial', logo: 'PM', color: 'bg-amber-100 text-amber-700' },
  { id: 12, name: 'HealthCare Plus', category: 'healthcare', logo: 'HP', color: 'bg-rose-100 text-rose-700' },
  { id: 13, name: 'Tech Institute', category: 'education', logo: 'TI', color: 'bg-violet-100 text-violet-700' },
  { id: 14, name: 'Wealth Bank', category: 'finance', logo: 'WB', color: 'bg-lime-100 text-lime-700' },
  { id: 15, name: 'Mega Mart', category: 'retail', logo: 'MM', color: 'bg-fuchsia-100 text-fuchsia-700' },
  { id: 16, name: 'Luxury Resorts', category: 'hospitality', logo: 'LR', color: 'bg-sky-100 text-sky-700' },
]

export default function ClientLogo() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredClient, setHoveredClient] = useState<number | null>(null)

  const filteredClients = selectedCategory === 'all' 
    ? clients 
    : clients.filter(client => client.category === selectedCategory)

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        {clientCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            <span className="font-medium">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Client Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {filteredClients.map((client) => (
          <div
            key={client.id}
            className={`group relative bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
              hoveredClient === client.id ? 'ring-2 ring-primary-500' : ''
            }`}
            onMouseEnter={() => setHoveredClient(client.id)}
            onMouseLeave={() => setHoveredClient(null)}
          >
            {/* Logo */}
            <div className={`w-16 h-16 rounded-full ${client.color} flex items-center justify-center text-2xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300`}>
              {client.logo}
            </div>
            
            {/* Client Name */}
            <h3 className="text-center font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
              {client.name}
            </h3>
            
            {/* Category Badge */}
            <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 capitalize">
              {client.category}
            </span>
            
            {/* Hover Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br from-primary-600/90 to-primary-700/90 rounded-xl flex flex-col items-center justify-center p-6 transition-all duration-300 ${
              hoveredClient === client.id ? 'opacity-100' : 'opacity-0'
            }`}>
              <h4 className="text-white font-bold text-lg mb-2 text-center">{client.name}</h4>
              <p className="text-white/90 text-sm text-center mb-4">
                {client.category === 'corporate' && 'Corporate Office Construction'}
                {client.category === 'residential' && 'Luxury Residential Complex'}
                {client.category === 'industrial' && 'Factory & Warehouse Facility'}
                {client.category === 'healthcare' && 'Hospital & Medical Center'}
                {client.category === 'education' && 'Educational Campus Development'}
                {client.category === 'finance' && 'Bank Headquarters Building'}
                {client.category === 'retail' && 'Shopping Mall Development'}
                {client.category === 'hospitality' && 'Hotel & Resort Construction'}
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-white/70 text-sm">Since 2020</span>
                <span className="w-2 h-2 bg-white/50 rounded-full"></span>
                <span className="text-white/70 text-sm">5 Projects</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredClients.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">No clients found in this category</div>
          <button
            onClick={() => setSelectedCategory('all')}
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            View all clients
          </button>
        </div>
      )}

      {/* Stats Bar */}
      <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-gray-600">Active Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
            <div className="text-gray-600">Years Average Partnership</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">95%</div>
            <div className="text-gray-600">Client Retention Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">8</div>
            <div className="text-gray-600">Industry Sectors</div>
          </div>
        </div>
      </div>
    </div>
  )
}