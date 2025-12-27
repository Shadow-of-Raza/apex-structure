'use client'

import { useState, useMemo, useEffect } from 'react'
import { 
  MapPin, Calendar, Building2, Award, CheckCircle, 
  ArrowLeft, Share2, Download, Maximize2, ChevronLeft, 
  ChevronRight, Navigation, Phone, Globe, ImageIcon
} from 'lucide-react'
import { Project } from '@/lib/types'
import Link from 'next/link'
import ImageWithFallback from '@/components/common/UI/ImageWithFallback'
import ImageModal from '@/app/gallery/components/ImageModal'
import { cleanImageUrl, isDirectImageUrl, getImageAltText } from '@/lib/utils/images'
import Notification from '@/components/common/UI/Notification'

// Import utility functions
import {
  getFormattedAddress,
  getFormattedLocation,
  getStatusConfig,
  getSimilarProjects,
  getProjectTypeColor
} from '@/lib/utils/projects'

// Import constants
import { 
  GALLERY_CONFIG, 
  NAVIGATION_LINKS 
} from '@/lib/constants/projects'

interface ProjectDetailsProps {
  project: Project
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const [activeImage, setActiveImage] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [showNotification, setShowNotification] = useState(false)

  // Get dynamic data
  const statusConfig = getStatusConfig(project.status)
  const formattedAddress = getFormattedAddress(project)
  const similarProjects = getSimilarProjects(project, 2)
  
  // Process images
  const processedImages = useMemo(() => {
    const mainImage = cleanImageUrl(project.images.main)
    const galleryImages = project.images.gallery
      .map(cleanImageUrl)
      .filter(isDirectImageUrl)
    
    return [mainImage, ...galleryImages].filter(Boolean)
  }, [project])

  // Pagination
  const imagesPerPage = GALLERY_CONFIG.imagesPerPage
  const totalPages = Math.ceil(processedImages.length / imagesPerPage)

  const currentPageImages = useMemo(() => {
    const startIndex = currentPage * imagesPerPage
    const endIndex = startIndex + imagesPerPage
    return processedImages.slice(startIndex, endIndex)
  }, [processedImages, currentPage, imagesPerPage])

  // Helper functions
  const formatDate = (dateString: string | Date) => {
    const date = new Date(dateString)
    const day = date.getDate()
    const month = date.toLocaleString('en-US', { month: 'short' })
    const year = date.getFullYear()
    return `${day} ${month} ${year}`
  }

  const handleThumbnailClick = (index: number) => {
    const globalIndex = (currentPage * imagesPerPage) + index
    setActiveImage(globalIndex)
  }

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1)
    }
  }

  const handleShareClick = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 3000)
    } catch (error) {
      console.error('Failed to copy URL:', error)
    }
  }

  // Auto-rotate images
  useEffect(() => {
    if (processedImages.length <= 1) return
    
    const interval = setInterval(() => {
      setActiveImage(prev => (prev + 1) % processedImages.length)
    }, GALLERY_CONFIG.autoRotateInterval)
    
    return () => clearInterval(interval)
  }, [processedImages.length])

  return (
    <div className="container max-w-7xl mx-auto my-4">
      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={processedImages}
        currentIndex={activeImage}
        onIndexChange={setActiveImage}
      />
      
      {/* Notification */}
      {showNotification && (
        <Notification 
          message="Project link copied to clipboard!" 
          type="success"
          duration={3000}
          onClose={() => setShowNotification(false)}
        />
      )}
      
      {/* Back Navigation with Share Button */}
      <div className="mb-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Link 
          href={NAVIGATION_LINKS.backToProjects.href}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          {NAVIGATION_LINKS.backToProjects.label}
        </Link>
        
        <button
          onClick={handleShareClick}
          className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
          aria-label="Share project"
        >
          <Share2 size={20} className="mr-2" />
          Share Project
        </button>
      </div>

      {/* Project Header with Hero Image */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8 group">
        {/* Hero Image */}
        <div className="h-96 md:h-[500px] relative">
          <ImageWithFallback
            src={processedImages[activeImage] || project.images.main}
            alt={getImageAltText(processedImages[activeImage] || '', project.title)}
            fill
            sizes="100vw"
            priority
            quality={90}
            className="object-cover"
            fallbackText={project.title}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          
          {/* Image Navigation */}
          {processedImages.length > 1 && (
            <>
              <button
                onClick={() => setActiveImage(prev => (prev - 1 + processedImages.length) % processedImages.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => setActiveImage(prev => (prev + 1) % processedImages.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
          
          {/* Fullscreen Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="View fullscreen"
          >
            <Maximize2 size={20} />
          </button>
          
          {/* Image Counter */}
          {processedImages.length > 1 && (
            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
              {activeImage + 1} / {processedImages.length}
            </div>
          )}
        </div>
        
        {/* Project Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              {/* Project Badges */}
              <div className="flex flex-wrap gap-3 mb-4">
                {statusConfig && (
                  <span className={`px-4 py-2 rounded-full font-semibold flex items-center gap-2 border backdrop-blur-sm ${statusConfig.color}`}>
                    {statusConfig.name}
                  </span>
                )}
                <span className="px-4 py-2 rounded-full font-medium bg-white/10 text-white backdrop-blur-sm border border-white/20">
                  <span className={`bg-gradient-to-r bg-clip-text text-transparent font-bold ${getProjectTypeColor(project.type)}`}>
                    {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                  </span>
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                {project.title}
              </h1>
              
              {/* Display address under title */}
              <div className="flex items-center text-white/90 mb-2">
                <MapPin size={22} className="mr-2 flex-shrink-0" />
                <span className="text-lg">{formattedAddress}</span>
              </div>

            </div>
            
            {/* Quick Stats */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-1 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{project.area} sq.ft.</div>
                <div className="text-sm text-white/80">Built-up Area</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{project.budget}</div>
                <div className="text-sm text-white/80">Project Budget</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Main Content (2/3 width) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Project Overview */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mr-4">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-semibold">Project Overview</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {project.title}
                </p>
              </div>
            </div>
            
            <div className="prose max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {project.fullDescription}
              </p>
              
              {/* Key Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-4 bg-gray-50 rounded-xl">
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-1">Start Date</div>
                  <div className="font-bold text-gray-900">
                    {formatDate(project.startDate)}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-1">Completion</div>
                  <div className="font-bold text-gray-900">
                    {formatDate(project.completionDate)}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-1">Client</div>
                  <div className="font-bold text-gray-900 truncate">{project.client}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-1">Architect</div>
                  <div className="font-bold text-gray-900 truncate">{project.architect}</div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 mt-8">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start p-3 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-100 hover:border-primary-200 transition-colors group">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4">Project Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="bg-gradient-to-r from-primary-50 via-primary-50/50 to-primary-50 rounded-xl p-6 border border-primary-100 hover:border-primary-200 transition-colors">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                        <Award className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary-700">Achievement #{index + 1}</h4>
                        <p className="text-sm text-gray-600">Award-winning feature</p>
                      </div>
                    </div>
                    <p className="text-gray-700">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar (1/3 width) */}
        <div className="space-y-8">

          {/* Quick Actions Card */}
          {/* <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                <Download size={20} />
              </div>
              Quick Actions
            </h3>
            
            <div className="space-y-3">
              <button className="w-full flex items-center p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                <Calendar size={18} className="mr-3" />
                <span>Schedule Site Visit</span>
              </button>
              
              <button className="w-full flex items-center p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                <Phone size={18} className="mr-3" />
                <span>Contact Project Manager</span>
              </button>
              
              <Link 
                href="/contact-us"
                className="block w-full mt-4 bg-white text-primary-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-center transition"
              >
                Get Free Consultation
              </Link>
            </div>
          </div> */}

          {/* Amenities & Facilities */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <CheckCircle className="w-5 h-5 text-blue-600" />
              </div>
              Amenities & Facilities
            </h3>
            
            <div className="space-y-3">
              {project.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group">
                  <div className="w-8 h-8 bg-primary-100 rounded-md flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sustainability Features */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <Globe className="w-5 h-5 text-green-600" />
              </div>
              Sustainability Features
            </h3>
            
            <div className="space-y-3">
              {project.sustainabilityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start p-3 bg-green-50/50 hover:bg-green-50 rounded-lg transition-colors group">
                  <div className="w-8 h-8 bg-green-100 rounded-md flex items-center justify-center mr-3 mt-0.5 group-hover:scale-110 transition-transform">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location Card */}
          {/* <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                <MapPin className="w-5 h-5 text-red-600" />
              </div>
              Project Location
            </h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">{formattedAddress}</p>
              </div>
              
              <div className="flex space-x-3">
                <button className="flex-1 flex items-center justify-center p-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium transition-colors">
                  <Navigation size={18} className="mr-2" />
                  View on Map
                </button>
                <button className="flex-1 flex items-center justify-center p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium transition-colors">
                  <MapPin size={18} className="mr-2" />
                  Get Directions
                </button>
              </div>
            </div>
          </div> */}

          {/* Similar Projects */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-6">Similar Projects</h3>
            
            <div className="space-y-4">
              {similarProjects.map((similarProject) => {
                const similarStatus = getStatusConfig(similarProject.status)
                return (
                  <Link 
                    key={similarProject.slug}
                    href={`/projects/${similarProject.slug}`}
                    className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group"
                  >
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 mr-4">
                      <ImageWithFallback
                        src={similarProject.images.main}
                        alt={similarProject.title}
                        width={64}
                        height={64}
                        className="object-cover"
                        fallbackText={similarProject.title}
                      />
                    </div>
                    <div>
                      <div className="font-semibold group-hover:text-primary-600 transition-colors">
                        {similarProject.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {similarProject.type.charAt(0).toUpperCase() + similarProject.type.slice(1)} • 
                        {similarStatus && (
                          <span className={`ml-1 ${similarStatus.color.split(' ')[1]}`}>
                            {similarStatus.name}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {getFormattedLocation(similarProject)}
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
            
            <Link 
              href="/projects" 
              className="block text-center mt-6 text-primary-600 hover:text-primary-700 font-medium"
            >
              {NAVIGATION_LINKS.viewAllProjects.label} →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}