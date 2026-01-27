// src/components/projects/ProjectList.tsx
'use client'

import React, { useState, useMemo, useEffect } from 'react'
import {
  Building2,
  TrendingUp,
  Filter,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Search,
  Grid,
  List,
  Layers
} from 'lucide-react'
import { Project, ProjectCategory } from '@/lib/types'
import { Service } from '@/lib/types/service'
import ProjectCard from './ProjectCard'
import Link from 'next/link'
import {
  getFormattedLocation,
  getProjectCategoriesWithCounts
} from '@/lib/utils/projects'
import { PROJECT_LIST_STATUS_CONFIG } from '@/lib/constants/projects'
import { getAllServices, getServiceIcon } from '@/lib/utils/services'
import { useSearchParams, useRouter } from 'next/navigation'

export interface ProjectListFilter {
  status: string | null
  category: string | null
  location: string | null
  search: string
}

interface ProjectListProps {
  projects: Project[]
  title?: string
  description?: string
  showFilters?: boolean
  showSearch?: boolean
  showViewAll?: boolean
  showViewToggle?: boolean
  defaultViewMode?: 'grid' | 'list'
  itemsPerPage?: number
  showPagination?: boolean
  showCategoryFilter?: boolean
  showStatusFilter?: boolean
  showLocationFilter?: boolean
  onViewModeChange?: (mode: 'grid' | 'list') => void
  onPageChange?: (page: number) => void
  onFilterChange?: (filters: ProjectListFilter) => void
  syncWithURL?: boolean
}

export default function ProjectList({
  projects,
  title = "Our Projects",
  description = "Explore our portfolio of successful projects",
  showFilters = true,
  showSearch = true,
  showViewAll = true,
  showViewToggle = true,
  defaultViewMode = 'grid',
  itemsPerPage = 9,
  showPagination = true,
  showCategoryFilter = true,
  showStatusFilter = true,
  onViewModeChange,
  onPageChange,
  onFilterChange,
  syncWithURL = false
}: ProjectListProps) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [activeStatus, setActiveStatus] = useState<string>('all')
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [activeLocation, setActiveLocation] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>(defaultViewMode)
  const [isFilterExpanded, setIsFilterExpanded] = useState(false)
  const [projectCategories, setProjectCategories] = useState<ProjectCategory[]>([])
  const [services, setServices] = useState<Service[]>([])

  // Get dynamic data
  useEffect(() => {
    async function loadDynamicData() {
      try {
        const [categories, serviceData] = await Promise.all([
          getProjectCategoriesWithCounts(),
          getAllServices()
        ])
        setProjectCategories(categories)
        setServices(serviceData)
      } catch (error) {
        console.error('Error loading dynamic data:', error)
      }
    }
    loadDynamicData()
  }, [])

  // Configurations from constants
  const statusConfig = PROJECT_LIST_STATUS_CONFIG

  // Initialize filters from URL parameters
  useEffect(() => {
    if (!syncWithURL) return

    const statusParam = searchParams.get('status')
    const typeParam = searchParams.get('type')
    const cityParam = searchParams.get('city')
    const pageParam = searchParams.get('page')
    const searchParam = searchParams.get('search')

    if (statusParam) setActiveStatus(statusParam)
    if (typeParam) setActiveCategory(typeParam)
    if (cityParam) setActiveLocation(cityParam)
    if (searchParam) setSearchQuery(searchParam)

    if (pageParam && !isNaN(parseInt(pageParam))) {
      setCurrentPage(parseInt(pageParam))
    }
  }, [searchParams, syncWithURL])

  // Update URL when filters change
  useEffect(() => {
    if (!syncWithURL) return

    const params = new URLSearchParams()

    if (activeStatus !== 'all') {
      params.set('status', activeStatus)
    }

    if (activeCategory !== 'all') {
      params.set('type', activeCategory)
    }

    if (activeLocation !== 'all') {
      params.set('city', activeLocation)
    }

    if (searchQuery) {
      params.set('search', searchQuery)
    }

    if (currentPage > 1) {
      params.set('page', currentPage.toString())
    }

    const queryString = params.toString()
    const newUrl = queryString ? `/projects?${queryString}` : '/projects'

    if (window.location.search !== (queryString ? `?${queryString}` : '')) {
      router.replace(newUrl, { scroll: false })
    }
  }, [activeStatus, activeCategory, activeLocation, searchQuery, currentPage, router, syncWithURL])

  // Notify parent component about filter changes
  useEffect(() => {
    if (!onFilterChange) return

    // Use setTimeout to avoid state update during render
    const timer = setTimeout(() => {
      onFilterChange({
        status: activeStatus !== 'all' ? activeStatus : null,
        category: activeCategory !== 'all' ? activeCategory : null,
        location: activeLocation !== 'all' ? activeLocation : null,
        search: searchQuery
      })
    }, 0)

    return () => clearTimeout(timer)
  }, [activeStatus, activeCategory, activeLocation, searchQuery, onFilterChange])

  // Notify parent component about page change
  useEffect(() => {
    if (onPageChange) {
      onPageChange(currentPage)
    }
  }, [currentPage, onPageChange])

  // Filter projects by active filters and search
  const filteredProjects = useMemo(() => {
    let filtered = projects

    if (activeStatus !== 'all') {
      filtered = filtered.filter(project => project.status === activeStatus)
    }

    if (activeCategory !== 'all') {
      filtered = filtered.filter(project => project.type.toLowerCase() === activeCategory.toLowerCase())
    }

    if (activeLocation !== 'all') {
      filtered = filtered.filter(project => project.address.city === activeLocation)
    }

    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase()
      filtered = filtered.filter(project => {
        return (
          project.title.toLowerCase().includes(searchLower) ||
          project.description.toLowerCase().includes(searchLower) ||
          project.address.city.toLowerCase().includes(searchLower) ||
          project.client.toLowerCase().includes(searchLower) ||
          project.type.toLowerCase().includes(searchLower) ||
          project.features.some(feature => feature.toLowerCase().includes(searchLower)) ||
          getFormattedLocation(project).toLowerCase().includes(searchLower)
        )
      })
    }

    return filtered
  }, [projects, activeStatus, activeCategory, activeLocation, searchQuery])

  // Calculate counts
  const projectCounts = useMemo(() => ({
    all: projects.length,
    ongoing: projects.filter(p => p.status === 'ongoing').length,
    completed: projects.filter(p => p.status === 'completed').length,
    upcoming: projects.filter(p => p.status === 'upcoming').length,
    planning: projects.filter(p => p.status === 'planning').length
  }), [projects])

  useEffect(() => {
    if (currentPage !== 1) {
      setCurrentPage(1)
    }
  }, [activeStatus, activeCategory, activeLocation, searchQuery])

  // Handle view mode change
  const handleViewModeChange = (mode: 'grid' | 'list') => {
    setViewMode(mode)
    if (onViewModeChange) {
      onViewModeChange(mode)
    }
  }

  // Handle page change locally
  const handleLocalPageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex)

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages: (number | string)[] = []
    const maxVisible = 5

    if (totalPages <= maxVisible + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)

      if (currentPage <= 3) {
        pages.push(2, 3, 4)
        pages.push('...')
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push('...')
        pages.push(totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
      } else {
        pages.push('...')
        pages.push(currentPage - 1, currentPage, currentPage + 1)
        pages.push('...')
        pages.push(totalPages)
      }
    }

    return pages
  }

  // Clear all filters
  const clearFilters = () => {
    setActiveStatus('all')
    setActiveCategory('all')
    setActiveLocation('all')
    setSearchQuery('')
    setCurrentPage(1)
  }

  return (
    <div className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="space-y-3">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-2">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
              <p className="text-gray-600 max-w-2xl">{description}</p>
            </div>

            <div className="flex items-center space-x-4">
              {showSearch && (
                <div className="relative hidden md:block">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent w-64"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      aria-label="Clear search"
                    >
                      ×
                    </button>
                  )}
                </div>
              )}

              {showViewToggle && (
                <div className="flex bg-gray-100 p-1 rounded-xl">
                  <button
                    onClick={() => handleViewModeChange('grid')}
                    className={`px-4 py-2 rounded-lg flex items-center transition-all duration-300 ${viewMode === 'grid'
                      ? 'bg-white text-primary-600 shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                      }`}
                    aria-label="Grid view"
                  >
                    <Grid size={18} className="mr-2" />
                    <span className="font-medium">Grid</span>
                  </button>
                  <button
                    onClick={() => handleViewModeChange('list')}
                    className={`px-4 py-2 rounded-lg flex items-center transition-all duration-300 ${viewMode === 'list'
                      ? 'bg-white text-primary-600 shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                      }`}
                    aria-label="List view"
                  >
                    <List size={18} className="mr-2" />
                    <span className="font-medium">List</span>
                  </button>
                </div>
              )}

              {showViewAll && filteredProjects.length > itemsPerPage && (
                <Link
                  href="/projects"
                  className="text-primary-600 hover:text-primary-700 font-semibold flex items-center whitespace-nowrap hover:underline transition-colors"
                >
                  View All
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Search Bar */}
          {showSearch && (
            <div className="md:hidden">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search projects by name, location, type, or client..."
                  className="w-full pl-12 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Filter Section */}
          {showFilters && showStatusFilter && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Filter size={20} className="mr-2 text-primary-600" />
                  <h3 className="text-lg font-semibold">Filter Projects</h3>
                </div>

                <button
                  onClick={() => setIsFilterExpanded(!isFilterExpanded)}
                  className="md:hidden flex items-center text-primary-600 hover:text-primary-700"
                >
                  <span className="mr-2 font-medium">{isFilterExpanded ? 'Hide Filters' : 'Show Filters'}</span>
                  <div className={`w-6 h-6 transition-transform ${isFilterExpanded ? 'rotate-180' : ''}`}>
                    <Filter className="w-full h-full" />
                  </div>
                </button>
              </div>

              <div className={`${isFilterExpanded ? 'block' : 'hidden'} md:block transition-all duration-300 space-y-8`}>
                {showCategoryFilter && (
                  <div className="space-y-4">
                    <h4 className="text-sm font-black text-gray-500 uppercase tracking-widest flex items-center">
                      <Layers size={14} className="mr-2" />
                      Browse by Services
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {/* All Types Button */}
                      <button
                        onClick={() => setActiveCategory('all')}
                        className={`flex items-center px-5 py-3 rounded-2xl transition-all duration-300 ${activeCategory === 'all'
                          ? 'bg-primary-600 text-white shadow-xl border border-primary-600 scale-[1.02]'
                          : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                          }`}
                      >
                        <span className="font-bold text-sm mr-3">All Types</span>
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${activeCategory === 'all' ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                          }`}>
                          {services.length}
                        </span>
                      </button>

                      {/* Dynamic Categories */}
                      {projectCategories.filter(c => c.projectCount > 0).map((category) => {
                        const isActive = activeCategory === category.slug
                        const service = services.find(s => s.name === category.slug)

                        return (
                          <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.slug)}
                            className={`flex items-center px-5 py-3 rounded-2xl transition-all duration-300 ${isActive
                              ? 'bg-primary-600 text-white shadow-xl scale-[1.02] border border-transparent'
                              : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                              }`}
                          >
                            {service && (
                              <div className={`mr-2 ${isActive ? 'text-white' : 'text-secondary-600'}`}>
                                {React.createElement(getServiceIcon(service.icon_name), { size: 18 })}
                              </div>
                            )}
                            <span className="font-bold text-sm mr-3 capitalize">{category.name}</span>
                            <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                              }`}>
                              {category.projectCount}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}

                {showStatusFilter && (
                  <div className="space-y-4">
                    <h4 className="text-sm font-black text-gray-500 uppercase tracking-widest flex items-center">
                      <TrendingUp size={14} className="mr-2" />
                      Filter by Status
                    </h4>
                    <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3">
                      {Object.entries(statusConfig).map(([key, config]) => {
                        const isActive = activeStatus === key
                        const count = projectCounts[key as keyof typeof projectCounts]

                        return (
                          <button
                            key={key}
                            onClick={() => setActiveStatus(key)}
                            className={`flex items-center justify-between sm:justify-start px-5 py-3 rounded-2xl transition-all duration-300 ${isActive
                              ? 'bg-primary-600 text-white shadow-xl scale-[1.02] border border-primary-600'
                              : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                              }`}
                          >
                            <div className="flex items-center">
                              <div className={`mr-2 ${isActive ? 'text-white' : 'text-secondary-600'}`}>{config.icon}</div>
                              <span className="font-bold text-sm mr-3">{config.name}</span>
                            </div>
                            <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                              }`}>
                              {count}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Projects Grid/List */}
          {paginatedProjects.length > 0 ? (
            <>
              <div className={viewMode === 'grid'
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-6"
              }>
                {paginatedProjects.map(project => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    viewMode={viewMode}
                  />
                ))}
              </div>

              {showPagination && totalPages > 1 && (
                <div className="mt-16 sm:mt-24 pb-12">
                  <div className="flex flex-col items-center space-y-6">
                    {/* Page Info Pill */}
                    <div className="px-4 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-xs font-bold text-gray-500 uppercase tracking-widest shadow-sm">
                      Showing Page {currentPage} of {totalPages}
                    </div>

                    {/* Pagination Controls */}
                    <nav className="flex items-center gap-2 p-1.5 bg-white/50 backdrop-blur-md rounded-2xl border border-gray-100 shadow-xl" aria-label="Pagination">
                      {/* Previous Button */}
                      <button
                        onClick={() => handleLocalPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 ${currentPage === 1
                          ? 'text-gray-300 cursor-not-allowed'
                          : 'text-gray-600 hover:bg-primary-50 hover:text-primary-600 hover:scale-105 active:scale-95'
                          }`}
                        aria-label="Previous page"
                      >
                        <ChevronLeft size={24} strokeWidth={2.5} />
                      </button>

                      {/* Page Numbers */}
                      <div className="flex items-center gap-1.5">
                        {getPageNumbers().map((page, index) => (
                          page === '...' ? (
                            <div
                              key={`ellipsis-${index}`}
                              className="w-10 h-12 flex items-end justify-center pb-3 text-gray-400 font-bold"
                            >
                              <span className="tracking-widest">...</span>
                            </div>
                          ) : (
                            <button
                              key={page}
                              onClick={() => handleLocalPageChange(page as number)}
                              className={`w-12 h-12 flex items-center justify-center rounded-xl font-bold text-sm transition-all duration-300 ${currentPage === page
                                ? 'bg-primary-600 text-white shadow-xl shadow-primary-200 scale-105 ring-2 ring-primary-600 ring-offset-2'
                                : 'text-gray-500 hover:bg-primary-50 hover:text-primary-600 hover:scale-105 active:scale-95'
                                }`}
                              aria-label={`Page ${page}`}
                              aria-current={currentPage === page ? 'page' : undefined}
                            >
                              {page}
                            </button>
                          )
                        ))}
                      </div>

                      {/* Next Button */}
                      <button
                        onClick={() => handleLocalPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 ${currentPage === totalPages
                          ? 'text-gray-300 cursor-not-allowed'
                          : 'text-gray-600 hover:bg-primary-50 hover:text-primary-600 hover:scale-105 active:scale-95'
                          }`}
                        aria-label="Next page"
                      >
                        <ChevronRight size={24} strokeWidth={2.5} />
                      </button>
                    </nav>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-dashed border-gray-300">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                <Building2 className="w-12 h-12 text-gray-500" />
              </div>
              <h4 className="text-2xl font-bold mb-2">No Projects Found</h4>
              <p className="text-gray-600 max-w-md mx-auto mb-6">
                {searchQuery
                  ? `No projects found for "${searchQuery}". Try adjusting your search.`
                  : activeStatus !== 'all'
                    ? `No ${statusConfig[activeStatus as keyof typeof statusConfig]?.name.toLowerCase()} projects at the moment.`
                    : "No projects available at the moment. Check back soon!"}
              </p>
              <button
                onClick={clearFilters}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:from-primary-700 hover:to-primary-600 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              >
                <Sparkles size={16} className="mr-2" />
                View All Projects
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}