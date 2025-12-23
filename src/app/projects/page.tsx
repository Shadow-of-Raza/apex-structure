// src/app/projects/page.tsx
'use client'

import { useState, useMemo, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Search, Building2, ArrowRight, CheckCircle } from 'lucide-react'
import Container from '@/components/common/Layout/Container'
import Section from '@/components/common/Layout/Section'
import PageHeader from '@/components/common/Layout/PageHeader'
import ProjectCard from '@/components/projects/ProjectCard'
import ProjectFilters from '@/components/projects/ProjectFilters'
import { projectsData, projectCategories, projectStatuses } from '@/lib/constants/projects'
import { ProjectFilter } from '@/lib/types'
import Link from 'next/link'

export default function ProjectsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>({})
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [isInitialized, setIsInitialized] = useState(false)

  // Initialize filters from URL parameters
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
    
    // Also check for hash (for backward compatibility)
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.substring(1) // Remove the # symbol
      if (hash && !typeParam && !statusParam && !locationParam) {
        // Check if hash matches any project type
        const validTypes = projectCategories.map(cat => cat.slug)
        if (validTypes.includes(hash)) {
          newFilter.type = [hash]
        }
      }
    }
    
    if (Object.keys(newFilter).length > 0) {
      setActiveFilter(newFilter)
    }
    
    setIsInitialized(true)
  }, [searchParams])

  // Update URL when filters change (for sharing filtered views)
  useEffect(() => {
    if (!isInitialized) return
    
    const params = new URLSearchParams()
    
    if (activeFilter.type && activeFilter.type.length > 0) {
      params.set('type', activeFilter.type[0])
    }
    
    if (activeFilter.status && activeFilter.status.length > 0) {
      params.set('status', activeFilter.status[0])
    }
    
    if (activeFilter.location && activeFilter.location.length > 0) {
      params.set('location', activeFilter.location[0])
    }
    
    const queryString = params.toString()
    const newUrl = queryString ? `/projects?${queryString}` : '/projects'
    
    // Update URL without reloading the page
    router.replace(newUrl, { scroll: false })
  }, [activeFilter, router, isInitialized])

  // Filter projects based on search and filters
  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      // Search filter
      const matchesSearch = searchQuery === '' || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase())

      // Type filter
      const matchesType = !activeFilter.type || activeFilter.type.length === 0 || 
        activeFilter.type.includes(project.type)

      // Status filter
      const matchesStatus = !activeFilter.status || activeFilter.status.length === 0 ||
        activeFilter.status.includes(project.status)

      // Location filter
      const matchesLocation = !activeFilter.location || activeFilter.location.length === 0 ||
        activeFilter.location.includes(project.location)

      return matchesSearch && matchesType && matchesStatus && matchesLocation
    })
  }, [searchQuery, activeFilter])

  // Get current projects
  const currentProjects = filteredProjects.filter(p => p.status === 'ongoing')
  const completedProjects = filteredProjects.filter(p => p.status === 'completed')

  // Stats
  const totalProjects = projectsData.length
  const totalArea = projectsData.reduce((sum, project) => sum + parseInt(project.area.replace(/,/g, '')), 0)
  const citiesCovered = new Set(projectsData.map(p => p.address.city)).size

  // Function to clear all filters
  const clearAllFilters = () => {
    setActiveFilter({})
    setSearchQuery('')
  }

  // Show loading state
  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading projects...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <PageHeader
        title="Our Projects Portfolio"
        description="Explore 500+ successful projects across residential, commercial, and industrial sectors delivered with excellence"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Projects', href: '/projects' }
        ]}
      />

      {/* Stats Overview */}
      <Section padding="md" background="primary">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{totalProjects}+</div>
              <div className="text-primary-200">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">
                {Math.floor(totalArea / 1000000)}+ Million
              </div>
              <div className="text-primary-200">Sq. Ft. Built</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{citiesCovered}+</div>
              <div className="text-primary-200">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">18+</div>
              <div className="text-primary-200">Years Experience</div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Search and Filter Section */}
      <Section padding="lg">
        <Container>
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  Discover Our Work
                </h2>
                <p className="text-gray-600">
                  Browse through our diverse portfolio of successful projects
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* View Toggle */}
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-4 py-2 ${viewMode === 'grid' ? 'bg-primary-600 text-white' : 'bg-white text-gray-700'}`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-4 py-2 ${viewMode === 'list' ? 'bg-primary-600 text-white' : 'bg-white text-gray-700'}`}
                  >
                    List
                  </button>
                </div>
              </div>
            </div>

            {/* Active Filter Indicator */}
            {(Object.keys(activeFilter).length > 0 || searchQuery) && (
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-1">Active Filters:</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeFilter.type?.map(type => (
                        <span key={type} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                          Type: {type}
                        </span>
                      ))}
                      {activeFilter.status?.map(status => (
                        <span key={status} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                          Status: {status}
                        </span>
                      ))}
                      {activeFilter.location?.map(location => (
                        <span key={location} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                          Location: {location}
                        </span>
                      ))}
                      {searchQuery && (
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                          Search: "{searchQuery}"
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={clearAllFilters}
                    className="text-red-600 hover:text-red-700 font-medium text-sm whitespace-nowrap"
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>
            )}

            {/* Search Bar */}
            <div className="relative max-w-2xl mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects by name, location, or type..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Quick Filter Tabs */}
            <div className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={clearAllFilters}
                className={`px-4 py-2 rounded-full transition-colors ${Object.keys(activeFilter).length === 0 ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                All Projects
              </button>
              
              {projectStatuses.map(status => (
                <button
                  key={status.id}
                  onClick={() => setActiveFilter(prev => ({ ...prev, status: [status.id] }))}
                  className={`px-4 py-2 rounded-full transition-colors flex items-center ${activeFilter.status?.includes(status.id) ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  {status.name}
                  <span className="ml-2 px-2 py-1 text-xs bg-white/30 rounded-full">
                    {status.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Category Filter */}
            <ProjectFilters 
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </div>

          {/* Results Summary */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold">
                Projects
                {filteredProjects.length !== projectsData.length && (
                  <span className="ml-2 text-lg font-normal text-gray-600">
                    ({filteredProjects.length} of {projectsData.length} results)
                  </span>
                )}
              </h3>
              <div className="text-sm text-gray-600">
                Showing {Math.min(filteredProjects.length, 1)}-{Math.min(filteredProjects.length, 6)} of {filteredProjects.length} projects
              </div>
            </div>
          </div>

          {/* Current Projects Section */}
          <div className="mb-16" id="current">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-2 flex items-center">
                  <div className="w-3 h-3 bg-secondary-500 rounded-full mr-3 animate-pulse"></div>
                  Current Projects
                </h3>
                <p className="text-gray-600">Projects currently under construction</p>
              </div>
              {currentProjects.length > 6 && (
                <Link 
                  href="/projects#current" 
                  className="text-primary-600 hover:text-primary-700 font-semibold flex items-center"
                >
                  View All
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              )}
            </div>

            {currentProjects.length > 0 ? (
              <div className={viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
                : "space-y-6"
              }>
                {currentProjects.slice(0, 6).map(project => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    viewMode={viewMode}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-xl">
                <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">No Current Projects Found</h4>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>

          {/* Completed Projects Section */}
          <div id="completed">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-2 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Completed Projects
                </h3>
                <p className="text-gray-600">Successfully delivered projects</p>
              </div>
              {completedProjects.length > 6 && (
                <Link 
                  href="/projects#completed" 
                  className="text-primary-600 hover:text-primary-700 font-semibold flex items-center"
                >
                  View All
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              )}
            </div>

            {completedProjects.length > 0 ? (
              <div className={viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
                : "space-y-6"
              }>
                {completedProjects.slice(0, 6).map(project => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    viewMode={viewMode}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-xl">
                <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">No Completed Projects Found</h4>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>

          {/* Categories Overview */}
          <div className="mt-16 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-8 text-center">Project Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {projectCategories.map(category => {
                const categoryProjects = filteredProjects.filter(p => p.type === category.slug)
                const isActive = activeFilter.type?.includes(category.slug)
                
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(prev => ({ ...prev, type: [category.slug] }))}
                    className={`text-center group cursor-pointer transition-all duration-300 ${isActive ? 'scale-105' : ''}`}
                  >
                    <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:from-primary-200 group-hover:to-primary-100 transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-br from-primary-600 to-primary-700 shadow-lg' 
                        : 'bg-gradient-to-br from-primary-100 to-primary-50'
                    }`}>
                      <Building2 className={`w-10 h-10 ${isActive ? 'text-white' : 'text-primary-600'}`} />
                    </div>
                    <h4 className="font-bold mb-1">{category.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                    <div className={`text-2xl font-bold ${isActive ? 'text-white' : 'text-primary-700'}`}>
                      {categoryProjects.length}
                    </div>
                    <div className={`text-xs ${isActive ? 'text-primary-200' : 'text-gray-500'}`}>
                      Projects
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-primary-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-bold mb-2">Have a Project in Mind?</h3>
                <p className="text-primary-200">
                  Contact us to discuss your construction requirements and get a customized proposal
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact-us"
                  className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300 whitespace-nowrap text-center"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  href="/services"
                  className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300 whitespace-nowrap text-center"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}