// src/components/projects/ProjectFilters.tsx
'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Filter, X, ChevronDown, Building2, MapPin } from 'lucide-react'
import { ProjectFilter } from '@/lib/types'
import { projectCategories, projectStatuses } from '@/lib/constants/projects'
import { projectsData } from '@/lib/constants/projects'

interface ProjectFiltersProps {
  activeFilter: ProjectFilter
  onFilterChange: (filter: ProjectFilter) => void
}

export default function ProjectFilters({ activeFilter, onFilterChange }: ProjectFiltersProps) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const searchParams = useSearchParams()
  
  // Get unique locations from projects
  const locations = Array.from(new Set(projectsData.map(p => p.location)))

  // Sync with URL parameters on component mount
  useEffect(() => {
    const typeParam = searchParams.get('type')
    const statusParam = searchParams.get('status')
    const locationParam = searchParams.get('location')
    
    const newFilter: ProjectFilter = {}
    
    if (typeParam) {
      newFilter.type = [typeParam]
    }
    
    if (statusParam) {
      newFilter.status = [statusParam]
    }
    
    if (locationParam) {
      newFilter.location = [locationParam]
    }
    
    if (Object.keys(newFilter).length > 0) {
      onFilterChange(newFilter)
    }
  }, [searchParams, onFilterChange])

  const handleTypeChange = (type: string) => {
    const currentTypes = activeFilter.type || []
    const newTypes = currentTypes.includes(type)
      ? currentTypes.filter(t => t !== type)
      : [...currentTypes, type]
    
    onFilterChange({ ...activeFilter, type: newTypes })
  }

  const handleStatusChange = (status: string) => {
    const currentStatuses = activeFilter.status || []
    const newStatuses = currentStatuses.includes(status)
      ? currentStatuses.filter(s => s !== status)
      : [...currentStatuses, status]
    
    onFilterChange({ ...activeFilter, status: newStatuses })
  }

  const handleLocationChange = (location: string) => {
    const currentLocations = activeFilter.location || []
    const newLocations = currentLocations.includes(location)
      ? currentLocations.filter(l => l !== location)
      : [...currentLocations, location]
    
    onFilterChange({ ...activeFilter, location: newLocations })
  }

  const clearFilters = () => {
    onFilterChange({})
  }

  // Count active filters
  const activeFilterCount = 
    (activeFilter.type?.length || 0) + 
    (activeFilter.status?.length || 0) + 
    (activeFilter.location?.length || 0)

  return (
    <div className="mb-8">
      {/* Filter Toggle Button */}
      <button
        onClick={() => setIsFiltersOpen(!isFiltersOpen)}
        className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <div className="flex items-center">
          <Filter size={20} className="mr-3 text-gray-600" />
          <span className="font-medium">Filter Projects</span>
          {activeFilterCount > 0 && (
            <span className="ml-3 px-2 py-1 bg-primary-600 text-white text-xs rounded-full">
              {activeFilterCount} active
            </span>
          )}
        </div>
        <ChevronDown className={`transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Filter Panel */}
      {isFiltersOpen && (
        <div className="mt-4 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-lg font-bold">Filter Options</h4>
            <button
              onClick={clearFilters}
              className="flex items-center text-primary-600 hover:text-primary-700 text-sm"
            >
              <X size={16} className="mr-1" />
              Clear All Filters
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project Type Filter */}
            <div>
              <div className="flex items-center mb-4">
                <Building2 size={18} className="mr-2 text-gray-600" />
                <h5 className="font-semibold">Project Type</h5>
              </div>
              <div className="space-y-2">
                {projectCategories.map(category => {
                  const isActive = activeFilter.type?.includes(category.slug)
                  const projectCount = projectsData.filter(p => p.type === category.slug).length
                  
                  return (
                    <button
                      key={category.id}
                      onClick={() => handleTypeChange(category.slug)}
                      className={`flex items-center justify-between w-full p-3 rounded-lg transition-colors ${
                        isActive 
                          ? 'bg-primary-50 border border-primary-200' 
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-3 ${isActive ? 'bg-primary-600' : 'bg-gray-300'}`}></div>
                        <span className={isActive ? 'font-medium text-primary-700' : 'text-gray-700'}>
                          {category.name}
                        </span>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded ${
                        isActive ? 'bg-primary-100 text-primary-700' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {projectCount}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Project Status Filter */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                </div>
                <h5 className="font-semibold">Project Status</h5>
              </div>
              <div className="space-y-2">
                {projectStatuses.map(status => {
                  const isActive = activeFilter.status?.includes(status.id)
                  
                  return (
                    <button
                      key={status.id}
                      onClick={() => handleStatusChange(status.id)}
                      className={`flex items-center justify-between w-full p-3 rounded-lg transition-colors ${
                        isActive 
                          ? 'bg-primary-50 border border-primary-200' 
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-3 ${isActive ? 'bg-primary-600' : 'bg-gray-300'}`}></div>
                        <span className={isActive ? 'font-medium text-primary-700' : 'text-gray-700'}>
                          {status.name}
                        </span>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded ${
                        isActive ? 'bg-primary-100 text-primary-700' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {status.count}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Location Filter */}
            <div>
              <div className="flex items-center mb-4">
                <MapPin size={18} className="mr-2 text-gray-600" />
                <h5 className="font-semibold">Location</h5>
              </div>
              <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                {locations.map((location, index) => {
                  const isActive = activeFilter.location?.includes(location)
                  const locationCount = projectsData.filter(p => p.location === location).length
                  
                  return (
                    <button
                      key={index}
                      onClick={() => handleLocationChange(location)}
                      className={`flex items-center justify-between w-full p-3 rounded-lg transition-colors ${
                        isActive 
                          ? 'bg-primary-50 border border-primary-200' 
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-3 ${isActive ? 'bg-primary-600' : 'bg-gray-300'}`}></div>
                        <span className={isActive ? 'font-medium text-primary-700' : 'text-gray-700'}>
                          {location}
                        </span>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded ${
                        isActive ? 'bg-primary-100 text-primary-700' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {locationCount}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          {activeFilterCount > 0 && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h5 className="font-semibold mb-3">Active Filters:</h5>
              <div className="flex flex-wrap gap-2">
                {activeFilter.type?.map(type => (
                  <button
                    key={type}
                    onClick={() => handleTypeChange(type)}
                    className="flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                  >
                    {type}
                    <X size={14} className="ml-2" />
                  </button>
                ))}
                {activeFilter.status?.map(status => (
                  <button
                    key={status}
                    onClick={() => handleStatusChange(status)}
                    className="flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                  >
                    {status}
                    <X size={14} className="ml-2" />
                  </button>
                ))}
                {activeFilter.location?.map(location => (
                  <button
                    key={location}
                    onClick={() => handleLocationChange(location)}
                    className="flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                  >
                    {location}
                    <X size={14} className="ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}