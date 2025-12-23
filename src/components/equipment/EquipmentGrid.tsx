// src/components/equipment/EquipmentGrid.tsx
'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import EquipmentCard from '@/components/equipment/EquipmentCard'
import { equipmentData, equipmentCategories } from '@/lib/constants/equipment'

const allCategories = [
  { id: 'all', name: 'All Equipment' },
  ...equipmentCategories.map(cat => ({ id: cat.id, name: cat.name }))
]

export default function EquipmentGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredEquipment = equipmentData.filter(equipment => {
    const matchesCategory = selectedCategory === 'all' || equipment.category === selectedCategory
    const matchesSearch = equipment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         equipment.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         equipment.specifications.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Featured Equipment</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Modern machinery and tools that ensure precision, safety, and efficiency in every project
          </p>
      </div>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search equipment by name, type, or specifications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition hover:border-gray-400"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {allCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <p className="text-gray-600">
          Showing <span className="font-semibold text-primary-700">{filteredEquipment.length}</span> equipment items
          {selectedCategory !== 'all' && ` in ${allCategories.find(c => c.id === selectedCategory)?.name}`}
          {searchQuery && ` matching "${searchQuery}"`}
        </p>
      </div>

      {filteredEquipment.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEquipment.map((equipment) => (
            <EquipmentCard key={equipment.id} equipment={equipment} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-5xl mb-4">🚜</div>
          <h3 className="text-xl font-bold text-gray-700 mb-2">No equipment found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  )
}