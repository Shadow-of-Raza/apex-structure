'use client'

import { Filter, X, ChevronDown } from 'lucide-react'

interface Category {
  id: string
  name: string
  description: string
  count: number
  icon: string
}

interface Status {
  id: string
  name: string
  count: number
}

interface GalleryFiltersProps {
  categories: Category[]
  statuses: Status[]
  years: string[]
  activeFilter: {
    category: string
    status: string
    year: string
  }
  onFilterChange: (filterType: string, value: string) => void
  onClearFilters: () => void
}

export default function GalleryFilters({
  categories,
  statuses,
  years,
  activeFilter,
  onFilterChange,
  onClearFilters
}: GalleryFiltersProps) {
  const hasActiveFilters = 
    activeFilter.category !== 'all' || 
    activeFilter.status !== 'all' || 
    activeFilter.year !== 'all'

  // Type-safe handler for filter changes
  const handleFilterChange = (filterType: 'category' | 'status' | 'year', value: string) => {
    onFilterChange(filterType, value)
  }

  return (
    <div className="mb-8">
      {/* Mobile Filters (Dropdowns) */}
      <div className="lg:hidden space-y-4 mb-6">
        <div className="relative">
          <select
            value={activeFilter.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="all">All Categories</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>
                {cat.name} ({cat.count})
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        
        <div className="relative">
          <select
            value={activeFilter.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="all">All Status</option>
            {statuses.map(status => (
              <option key={status.id} value={status.id}>
                {status.name} ({status.count})
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        
        <div className="relative">
          <select
            value={activeFilter.year}
            onChange={(e) => handleFilterChange('year', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="all">All Years</option>
            {years.map(year => (
              <option key={year} value={year}>
                {year === 'all' ? 'All Years' : year}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>

      {/* Desktop Filters (Button Groups) */}
      <div className="hidden lg:block space-y-6">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Project Type
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleFilterChange('category', category.id)}
                className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeFilter.category === category.id
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  activeFilter.category === category.id
                    ? 'bg-white/30'
                    : 'bg-gray-200'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Status Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Project Status
            </label>
            <div className="flex flex-wrap gap-2">
              {statuses.map((status) => (
                <button
                  key={status.id}
                  onClick={() => handleFilterChange('status', status.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    activeFilter.status === status.id
                      ? status.id === 'completed' ? 'bg-green-600 text-white' :
                        status.id === 'ongoing' ? 'bg-blue-600 text-white' :
                        status.id === 'planning' ? 'bg-yellow-600 text-white' :
                        status.id === 'upcoming' ? 'bg-purple-600 text-white' :
                        'bg-primary-600 text-white'
                      : status.id === 'completed' ? 'bg-green-100 text-green-700 hover:bg-green-200' :
                        status.id === 'ongoing' ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' :
                        status.id === 'planning' ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200' :
                        status.id === 'upcoming' ? 'bg-purple-100 text-purple-700 hover:bg-purple-200' :
                        'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {status.name}
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                    activeFilter.status === status.id
                      ? 'bg-white/30'
                      : 'bg-gray-200'
                  }`}>
                    {status.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Year Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Year
            </label>
            <div className="flex flex-wrap gap-2">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => handleFilterChange('year', year)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    activeFilter.year === year
                      ? 'bg-teal-600 text-white'
                      : 'bg-teal-100 text-teal-700 hover:bg-teal-200'
                  }`}
                >
                  {year === 'all' ? 'All Years' : year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium text-gray-700">Active Filters:</h4>
            <button
              onClick={onClearFilters}
              className="text-sm text-primary-600 hover:text-primary-700 flex items-center"
            >
              <X size={14} className="mr-1" />
              Clear all
            </button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {activeFilter.category !== 'all' && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-800">
                {categories.find(c => c.id === activeFilter.category)?.name}
                <button
                  onClick={() => handleFilterChange('category', 'all')}
                  className="ml-2 text-primary-600 hover:text-primary-800"
                >
                  <X size={14} />
                </button>
              </span>
            )}
            
            {activeFilter.status !== 'all' && (
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                activeFilter.status === 'completed' ? 'bg-green-100 text-green-800' :
                activeFilter.status === 'ongoing' ? 'bg-blue-100 text-blue-800' :
                activeFilter.status === 'planning' ? 'bg-yellow-100 text-yellow-800' :
                'bg-purple-100 text-purple-800'
              }`}>
                {statuses.find(s => s.id === activeFilter.status)?.name}
                <button
                  onClick={() => handleFilterChange('status', 'all')}
                  className="ml-2 text-gray-600 hover:text-gray-800"
                >
                  <X size={14} />
                </button>
              </span>
            )}
            
            {activeFilter.year !== 'all' && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-100 text-teal-800">
                Year: {activeFilter.year}
                <button
                  onClick={() => handleFilterChange('year', 'all')}
                  className="ml-2 text-teal-600 hover:text-teal-800"
                >
                  <X size={14} />
                </button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}