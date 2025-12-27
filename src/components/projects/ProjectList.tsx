// src/components/projects/ProjectList.tsx
'use client'

import { useState, useMemo, useEffect, useCallback } from 'react'
import { 
  Building2, 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  Calendar, 
  Filter, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Sparkles,
  Search,
  Grid,
  List,
  MapPin,
  Layers
} from 'lucide-react'
import { Project, ProjectCategory, ProjectStatus } from '@/lib/types'
import ProjectCard from './ProjectCard'
import Link from 'next/link'
import { 
  getProjectCategoriesWithCounts, 
  getProjectStatusesWithCounts,
  getUniqueCities,
  getFormattedLocation
} from '@/lib/utils/projects'
import { useSearchParams, useRouter } from 'next/navigation'

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
  onFilterChange?: (filters: any) => void
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
  showLocationFilter = true,
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
  
  // Get dynamic data
  const projectCategories = useMemo(() => getProjectCategoriesWithCounts(), [])
  const projectStatuses = useMemo(() => getProjectStatusesWithCounts(), [])
  const uniqueCities = useMemo(() => getUniqueCities(), [])

  // Status configuration
  const statusConfig = {
    all: {
      name: 'All Projects',
      icon: <Building2 size={18} />,
      color: 'bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700',
      activeColor: 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-200',
      border: 'border border-gray-200',
      activeBorder: 'border border-primary-300',
      glow: 'shadow-primary-100'
    },
    ongoing: {
      name: 'Ongoing',
      icon: <TrendingUp size={18} />,
      color: 'bg-gradient-to-r from-yellow-50 to-yellow-100 text-yellow-700',
      activeColor: 'bg-gradient-to-r from-yellow-500 to-yellow-400 text-white shadow-lg shadow-yellow-200',
      border: 'border border-yellow-200',
      activeBorder: 'border border-yellow-300',
      glow: 'shadow-yellow-100'
    },
    completed: {
      name: 'Completed',
      icon: <CheckCircle size={18} />,
      color: 'bg-gradient-to-r from-green-50 to-green-100 text-green-700',
      activeColor: 'bg-gradient-to-r from-green-500 to-green-400 text-white shadow-lg shadow-green-200',
      border: 'border border-green-200',
      activeBorder: 'border border-green-300',
      glow: 'shadow-green-100'
    },
    upcoming: {
      name: 'Upcoming',
      icon: <Calendar size={18} />,
      color: 'bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700',
      activeColor: 'bg-gradient-to-r from-purple-500 to-purple-400 text-white shadow-lg shadow-purple-200',
      border: 'border border-purple-200',
      activeBorder: 'border border-purple-300',
      glow: 'shadow-purple-100'
    },
    planning: {
      name: 'Planning',
      icon: <Clock size={18} />,
      color: 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700',
      activeColor: 'bg-gradient-to-r from-blue-500 to-blue-400 text-white shadow-lg shadow-blue-200',
      border: 'border border-blue-200',
      activeBorder: 'border border-blue-300',
      glow: 'shadow-blue-100'
    }
  }

  // Category configuration - moved to constants
  const categoryConfig = {
    all: {
      name: 'All Types',
      icon: <Layers size={18} />,
      color: 'bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700',
      activeColor: 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-200',
      border: 'border border-gray-200',
      activeBorder: 'border border-primary-300'
    },
    residential: {
      name: 'Residential',
      icon: <Building2 size={18} />,
      color: 'bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-700',
      activeColor: 'bg-gradient-to-r from-indigo-500 to-indigo-400 text-white shadow-lg shadow-indigo-200',
      border: 'border border-indigo-200',
      activeBorder: 'border border-indigo-300'
    },
    commercial: {
      name: 'Commercial',
      icon: <Building2 size={18} />,
      color: 'bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700',
      activeColor: 'bg-gradient-to-r from-cyan-500 to-cyan-400 text-white shadow-lg shadow-cyan-200',
      border: 'border border-cyan-200',
      activeBorder: 'border border-cyan-300'
    },
    industrial: {
      name: 'Industrial',
      icon: <Building2 size={18} />,
      color: 'bg-gradient-to-r from-orange-50 to-orange-100 text-orange-700',
      activeColor: 'bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-lg shadow-orange-200',
      border: 'border border-orange-200',
      activeBorder: 'border border-orange-300'
    },
    'mixed-use': {
      name: 'Mixed-Use',
      icon: <Building2 size={18} />,
      color: 'bg-gradient-to-r from-pink-50 to-pink-100 text-pink-700',
      activeColor: 'bg-gradient-to-r from-pink-500 to-pink-400 text-white shadow-lg shadow-pink-200',
      border: 'border border-pink-200',
      activeBorder: 'border border-pink-300'
    },
    hospitality: {
      name: 'Hospitality',
      icon: <Building2 size={18} />,
      color: 'bg-gradient-to-r from-teal-50 to-teal-100 text-teal-700',
      activeColor: 'bg-gradient-to-r from-teal-500 to-teal-400 text-white shadow-lg shadow-teal-200',
      border: 'border border-teal-200',
      activeBorder: 'border border-teal-300'
    }
  }

  // Initialize filters from URL parameters
  useEffect(() => {
    if (!syncWithURL) return
    
    const statusParam = searchParams.get('status') || 'all'
    const typeParam = searchParams.get('type') || 'all'
    const cityParam = searchParams.get('city') || 'all'
    const pageParam = searchParams.get('page')
    const searchParam = searchParams.get('search') || ''
    
    setActiveStatus(statusParam)
    setActiveCategory(typeParam)
    setActiveLocation(cityParam)
    setSearchQuery(searchParam)
    
    if (pageParam && !isNaN(parseInt(pageParam))) {
      const pageNum = parseInt(pageParam)
      setCurrentPage(pageNum)
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
    
    router.replace(newUrl, { scroll: false })
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
      filtered = filtered.filter(project => project.type === activeCategory)
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

  // Reset to page 1 when filters or search change
  useEffect(() => {
    setCurrentPage(1)
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
                    className={`px-4 py-2 rounded-lg flex items-center transition-all duration-300 ${
                      viewMode === 'grid' 
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
                    className={`px-4 py-2 rounded-lg flex items-center transition-all duration-300 ${
                      viewMode === 'list' 
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

              <div className={`${isFilterExpanded ? 'block' : 'hidden'} md:block transition-all duration-300 space-y-6`}>
                {showStatusFilter && (
                  <div>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                      {Object.entries(statusConfig).map(([key, config]) => {
                        const isActive = activeStatus === key
                        const count = projectCounts[key as keyof typeof projectCounts]
                        
                        return (
                          <button
                            key={key}
                            onClick={() => setActiveStatus(key)}
                            className={`relative p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md group ${
                              isActive 
                                ? `${config.activeColor} ${config.activeBorder} shadow-lg ${config.glow} scale-[1.02]` 
                                : `${config.color} ${config.border} hover:shadow-md`
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="mr-2">{config.icon}</div>
                                <span className={`font-medium ${isActive ? 'text-white' : 'text-gray-800'}`}>
                                  {config.name}
                                </span>
                              </div>
                              <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                                isActive 
                                  ? 'bg-white/30 text-white' 
                                  : 'bg-white text-gray-700 shadow-sm'
                              }`}>
                                {count}
                              </span>
                            </div>
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
                <div className="mt-12 pt-4 border-t border-gray-200">
                  <div className="flex flex-col items-center">
                    <div className="text-sm text-gray-600 mb-4">
                      Page {currentPage} of {totalPages}
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      <button
                        onClick={() => handleLocalPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          currentPage === 1
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        aria-label="Previous page"
                      >
                        <ChevronLeft size={25} />
                      </button>
                      
                      <div className="flex items-center space-x-1">
                        {getPageNumbers().map((page, index) => (
                          page === '...' ? (
                            <span 
                              key={`ellipsis-${index}`} 
                              className="px-3 py-2 text-gray-500"
                            >
                              ...
                            </span>
                          ) : (
                            <button
                              key={page}
                              onClick={() => handleLocalPageChange(page as number)}
                              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                                currentPage === page
                                  ? 'bg-primary-600 text-white font-semibold shadow-md'
                                  : 'text-gray-700 hover:bg-gray-100'
                              }`}
                              aria-label={`Page ${page}`}
                              aria-current={currentPage === page ? 'page' : undefined}
                            >
                              {page}
                            </button>
                          )
                        ))}
                      </div>
                      
                      <button
                        onClick={() => handleLocalPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          currentPage === totalPages
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        aria-label="Next page"
                      >
                        <ChevronRight size={25} />
                      </button>
                    </div>
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