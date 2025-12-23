// src/components/equipment/EquipmentCategories.tsx
import { equipmentCategories, getEquipmentCountByCategory } from '@/lib/constants/equipment'
import Link from 'next/link'

export default function EquipmentCategories() {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Equipment Categories</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our comprehensive equipment fleet covers every aspect of construction
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipmentCategories.map((category) => {
          const count = getEquipmentCountByCategory(category.id)
          
          return (
            <div 
              key={category.id} 
              className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">
                  {category.icon}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{category.name}</h3>
              <p className="text-gray-600 mb-4 text-sm">
                {category.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-auto px-2 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-2">
                    <span className="text-primary-700 text-sm font-bold">{count} equipment items</span>
                  </div>
                </div>
                <Link 
                  href={`/equipment/categories/${category.id}`}
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center"
                >
                  View Equipment
                  <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}