'use client'

import { useState, useMemo, useEffect } from 'react'
import Container from '@/components/common/Layout/Container'
import PageHeader from '@/components/common/Layout/PageHeader'
import Section from '@/components/common/Layout/Section'
import GalleryGrid from '@/components/gallery/GalleryGrid'
import GalleryFilters from '@/components/gallery/GalleryFilters'
import ImageModal from './components/ImageModal'
import { projectsData } from '@/lib/constants/projects'
import { Search, Filter, Grid3x3, List, Download, Building2, ChevronLeft, ChevronRight } from 'lucide-react'
import { cleanImageUrl, isValidImageUrl } from '@/lib/utils/images'

// Define gallery categories from project data
const galleryCategories = [
  { id: 'all', name: 'All Photos', description: 'All project images', count: 0, icon: '📸' },
  { id: 'residential', name: 'Residential', description: 'Apartments, Villas, Townships', count: 0, icon: '🏠' },
  { id: 'commercial', name: 'Commercial', description: 'Offices, Malls, Retail', count: 0, icon: '🏢' },
  { id: 'industrial', name: 'Industrial', description: 'Factories, Warehouses', count: 0, icon: '🏭' },
  { id: 'mixed-use', name: 'Mixed-Use', description: 'Integrated Developments', count: 0, icon: '🏙️' },
  { id: 'hospitality', name: 'Hospitality', description: 'Hotels, Resorts', count: 0, icon: '🏨' },
]

// Calculate counts for each category
projectsData.forEach(project => {
  const category = galleryCategories.find(c => c.id === project.type)
  if (category) {
    category.count += project.images.gallery.length + 1 // +1 for main image
  }
  galleryCategories[0].count += project.images.gallery.length + 1 // Add to all count
})

// Project status mapping for gallery
const galleryStatuses = [
  { id: 'all', name: 'All Status', count: 0 },
  { id: 'completed', name: 'Completed', count: 0 },
  { id: 'ongoing', name: 'Ongoing', count: 0 },
  { id: 'planning', name: 'Planning', count: 0 },
  { id: 'upcoming', name: 'Upcoming', count: 0 },
]

// Calculate counts for statuses
projectsData.forEach(project => {
  const status = galleryStatuses.find(s => s.id === project.status)
  if (status) {
    status.count += project.images.gallery.length + 1
  }
  galleryStatuses[0].count += project.images.gallery.length + 1
})

export default function GalleryPage() {
  // State management
  const [filteredImages, setFilteredImages] = useState<Array<{
    id: string
    url: string
    title: string
    description: string
    projectName: string
    projectType: string
    status: string
    year: string
    location: string
    tags: string[]
  }>>([])
  
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilter, setActiveFilter] = useState({
    category: 'all',
    status: 'all',
    year: 'all'
  })
  
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(12) // Show 12 images per page

  // Prepare all images from projects
  const allImages = useMemo(() => {
    const images: Array<{
      id: string
      url: string
      title: string
      description: string
      projectName: string
      projectType: string
      status: string
      year: string
      location: string
      tags: string[]
      projectId: string
    }> = []

    projectsData.forEach(project => {
      // Add main image
      if (isValidImageUrl(project.images.main)) {
        images.push({
          id: `${project.id}-main`,
          url: cleanImageUrl(project.images.main),
          title: `${project.title} - Main`,
          description: project.description,
          projectName: project.title,
          projectType: project.type,
          status: project.status,
          year: project.completionDate.split('-')[0],
          location: project.location,
          tags: [...project.features, ...project.highlights],
          projectId: project.id
        })
      }

      // Add gallery images
      project.images.gallery.forEach((imgUrl, index) => {
        if (isValidImageUrl(imgUrl)) {
          images.push({
            id: `${project.id}-gallery-${index}`,
            url: cleanImageUrl(imgUrl),
            title: `${project.title} - Image ${index + 1}`,
            description: `View ${index + 1} of ${project.images.gallery.length} for ${project.title}`,
            projectName: project.title,
            projectType: project.type,
            status: project.status,
            year: project.completionDate.split('-')[0],
            location: project.location,
            tags: [...project.features.slice(0, 3), project.type],
            projectId: project.id
          })
        }
      })
    })

    return images
  }, [])

  // Parse URL parameters on initial load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const filters = {
        category: params.get('category') || 'all',
        status: params.get('status') || 'all',
        year: params.get('year') || 'all'
      }
      setActiveFilter(filters)
      setSearchTerm(params.get('search') || '')
      
      // Get page from URL
      const page = params.get('page')
      if (page) {
        setCurrentPage(parseInt(page))
      }
    }
  }, [])

  // Update URL when filters or page changes
  useEffect(() => {
    const params = new URLSearchParams()
    
    if (activeFilter.category !== 'all') params.set('category', activeFilter.category)
    if (activeFilter.status !== 'all') params.set('status', activeFilter.status)
    if (activeFilter.year !== 'all') params.set('year', activeFilter.year)
    if (searchTerm) params.set('search', searchTerm)
    if (currentPage > 1) params.set('page', currentPage.toString())
    
    const newUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ''}`
    window.history.replaceState({}, '', newUrl)
  }, [activeFilter, searchTerm, currentPage])

  // Filter images based on active filters and search term
  useEffect(() => {
    let results = [...allImages]

    // Apply category filter
    if (activeFilter.category !== 'all') {
      results = results.filter(img => img.projectType === activeFilter.category)
    }

    // Apply status filter
    if (activeFilter.status !== 'all') {
      results = results.filter(img => img.status === activeFilter.status)
    }

    // Apply year filter
    if (activeFilter.year !== 'all') {
      results = results.filter(img => img.year === activeFilter.year)
    }

    // Apply search term
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase()
      results = results.filter(img =>
        img.title.toLowerCase().includes(term) ||
        img.description.toLowerCase().includes(term) ||
        img.projectName.toLowerCase().includes(term) ||
        img.location.toLowerCase().includes(term) ||
        img.tags.some(tag => tag.toLowerCase().includes(term))
      )
    }

    setFilteredImages(results)
    // Reset to page 1 when filters change
    setCurrentPage(1)
  }, [activeFilter, searchTerm, allImages])

  // Calculate pagination
  const totalPages = Math.ceil(filteredImages.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentImages = filteredImages.slice(startIndex, endIndex)

  // Pagination handlers
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      // Scroll to top of gallery
      window.scrollTo({ top: 600, behavior: 'smooth' })
    }
  }

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1)
      window.scrollTo({ top: 600, behavior: 'smooth' })
    }
  }

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1)
      window.scrollTo({ top: 600, behavior: 'smooth' })
    }
  }

  // Handlers
  const handleFilterChange = (filterType: string, value: string) => {
    setActiveFilter(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleImageClick = (imageIndex: number) => {
    // Calculate actual index in allImages
    const actualIndex = startIndex + imageIndex
    setSelectedImageIndex(actualIndex)
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedImageIndex(null)
  }

  const handleModalIndexChange = (index: number) => {
    setSelectedImageIndex(index)
  }

  const clearFilters = () => {
    setActiveFilter({
      category: 'all',
      status: 'all',
      year: 'all'
    })
    setSearchTerm('')
    setCurrentPage(1)
  }

  const downloadAll = () => {
    // In production, this would trigger a batch download or provide a ZIP file
    alert('Batch download feature would be implemented here. For now, please download individual images.')
  }

  // Prepare years from projects
  const projectYears = useMemo(() => {
    const years = new Set<string>()
    allImages.forEach(img => years.add(img.year))
    return ['all', ...Array.from(years).sort((a, b) => b.localeCompare(a))]
  }, [allImages])

  // Prepare modal images
  const modalImages = useMemo(() => {
    return allImages.map(img => img.url).filter(isValidImageUrl)
  }, [allImages])

  return (
    <>
      {/* Hero Section */}
      <PageHeader
        title="Project Gallery"
        description="Explore our visual showcase of construction projects, workmanship quality, and project progress across residential, commercial, and industrial developments."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Gallery', href: '/gallery' }
        ]}
      />
      
      {/* Controls Section */}
      <Section padding="md" background="gray">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
            {/* Search Bar */}
            <div className="w-full lg:w-auto lg:flex-1">
              <div className="relative max-w-xl">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search projects, locations, features, or keywords..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                />
              </div>
            </div>
            
            {/* View Controls */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition ${
                    viewMode === 'grid' 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  aria-label="Grid view"
                >
                  <Grid3x3 size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition ${
                    viewMode === 'list' 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  aria-label="List view"
                >
                  <List size={20} />
                </button>
              </div>
              
              <button
                onClick={downloadAll}
                className="flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition"
              >
                <Download size={18} className="mr-2" />
                Download All
              </button>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-2xl font-bold text-primary-600">{allImages.length}</div>
              <div className="text-sm text-gray-600">Total Images</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-2xl font-bold text-primary-600">{projectsData.length}</div>
              <div className="text-sm text-gray-600">Projects</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-2xl font-bold text-primary-600">
                {new Set(allImages.map(img => img.projectType)).size}
              </div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-2xl font-bold text-primary-600">
                {new Set(allImages.map(img => img.location)).size}
              </div>
              <div className="text-sm text-gray-600">Locations</div>
            </div>
          </div>
        </Container>
      </Section>
      
      {/* Main Gallery Content */}
      <Section>
        <Container>
          {/* Filters Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              <Filter size={20} className="mr-2 text-gray-600" />
              <h2 className="text-xl font-semibold">Filter Gallery</h2>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600">
                Showing {filteredImages.length > 0 ? `${startIndex + 1}-${Math.min(endIndex, filteredImages.length)}` : '0'} of {filteredImages.length} images
                {totalPages > 1 && ` (Page ${currentPage} of ${totalPages})`}
              </span>
              {(activeFilter.category !== 'all' || activeFilter.status !== 'all' || activeFilter.year !== 'all' || searchTerm) && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-primary-600 hover:text-primary-700 underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>
          
          {/* Filters Component */}
          <GalleryFilters
            categories={galleryCategories}
            statuses={galleryStatuses}
            years={projectYears}
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
            onClearFilters={clearFilters}
          />
          
          {/* Gallery Content */}
          {currentImages.length > 0 ? (
            <>
              <GalleryGrid
                images={currentImages}
                viewMode={viewMode}
                onImageSelect={handleImageClick}
              />
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between">
                  <div className="mb-4 sm:mb-0 text-sm text-gray-600">
                    Page {currentPage} of {totalPages} • {filteredImages.length} images
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={goToPrevPage}
                      disabled={currentPage === 1}
                      className={`p-2 rounded-lg transition ${
                        currentPage === 1
                          ? 'text-gray-400 cursor-not-allowed'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      aria-label="Previous page"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    
                    {/* Page numbers */}
                    <div className="flex items-center space-x-2">
                      {/* Show first page */}
                      {currentPage > 3 && (
                        <>
                          <button
                            onClick={() => goToPage(1)}
                            className={`px-3 py-1 rounded ${
                              1 === currentPage
                                ? 'bg-primary-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            1
                          </button>
                          {currentPage > 4 && (
                            <span className="px-2 text-gray-400">...</span>
                          )}
                        </>
                      )}
                      
                      {/* Show pages around current page */}
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        let pageNum
                        if (totalPages <= 5) {
                          pageNum = i + 1
                        } else if (currentPage <= 3) {
                          pageNum = i + 1
                        } else if (currentPage >= totalPages - 2) {
                          pageNum = totalPages - 4 + i
                        } else {
                          pageNum = currentPage - 2 + i
                        }
                        
                        if (pageNum < 1 || pageNum > totalPages) return null
                        
                        return (
                          <button
                            key={pageNum}
                            onClick={() => goToPage(pageNum)}
                            className={`px-3 py-1 rounded transition ${
                              pageNum === currentPage
                                ? 'bg-primary-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {pageNum}
                          </button>
                        )
                      })}
                      
                      {/* Show last page */}
                      {currentPage < totalPages - 2 && totalPages > 5 && (
                        <>
                          {currentPage < totalPages - 3 && (
                            <span className="px-2 text-gray-400">...</span>
                          )}
                          <button
                            onClick={() => goToPage(totalPages)}
                            className={`px-3 py-1 rounded ${
                              totalPages === currentPage
                                ? 'bg-primary-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {totalPages}
                          </button>
                        </>
                      )}
                    </div>
                    
                    <button
                      onClick={goToNextPage}
                      disabled={currentPage === totalPages}
                      className={`p-2 rounded-lg transition ${
                        currentPage === totalPages
                          ? 'text-gray-400 cursor-not-allowed'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      aria-label="Next page"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">📷</div>
              <h3 className="text-2xl font-bold mb-4">No images found</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Try adjusting your filters or search terms. You can also browse all images by clearing filters.
              </p>
              <button
                onClick={clearFilters}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Browse All Images
              </button>
            </div>
          )}
        </Container>
      </Section>
      
      {/* CTA Section */}
      <Section>
        <Container>
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Specific Project Photos?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-100">
              Contact us for high-resolution images, project case studies, 
              or to schedule a site visit for your project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300"
              >
                Request Photos
              </a>
              <a
                href="/projects"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300"
              >
                View Project Details
              </a>
            </div>
          </div>
        </Container>
      </Section>
      
      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          images={modalImages}
          currentIndex={selectedImageIndex}
          onIndexChange={handleModalIndexChange}
        />
      )}
    </>
  )
}