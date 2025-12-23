// src/components/projects/ProjectDetails.tsx
// src/components/projects/ProjectDetails.tsx
'use client'

import { useState, useMemo, useEffect } from 'react'
import { MapPin, Calendar, Building2, Users, Award, CheckCircle, ArrowLeft, Share2, Download, Maximize2, ChevronLeft, ChevronRight, Heart, Bookmark, Printer, Mail, Facebook, Twitter, Linkedin, Globe, Navigation, Phone, Clock } from 'lucide-react'
import { Project } from '@/lib/types'
import Link from 'next/link'
import ImageWithFallback from '@/components/common/UI/ImageWithFallback'
import ImageModal from '@/app/gallery/components/ImageModal'
import { cleanImageUrl, isDirectImageUrl, getImageAltText } from '@/lib/utils/images'

interface ProjectDetailsProps {
  project: Project
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const [activeImage, setActiveImage] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [showShareOptions, setShowShareOptions] = useState(false)

  // Process all images
  const processedImages = useMemo(() => {
    const mainImage = cleanImageUrl(project.images.main)
    const galleryImages = project.images.gallery
      .map(cleanImageUrl)
      .filter(isDirectImageUrl)
    
    return [mainImage, ...galleryImages].filter(Boolean)
  }, [project])

  // Pagination settings for thumbnails
  const imagesPerPage = 8
  const totalPages = Math.ceil(processedImages.length / imagesPerPage)

  // Add this helper function at the top of the ProjectDetails component, before the return statement
  const formatDate = (dateString: string | Date) => {
    const date = new Date(dateString)
    const day = date.getDate()
    const month = date.toLocaleString('en-US', { month: 'short' })
    const year = date.getFullYear()
    return `${day} ${month} ${year}`
  }

  // Get current page images
  const currentPageImages = useMemo(() => {
    const startIndex = currentPage * imagesPerPage
    const endIndex = startIndex + imagesPerPage
    return processedImages.slice(startIndex, endIndex)
  }, [processedImages, currentPage, imagesPerPage])

  // Status colors and icons
  const statusConfig = {
    planning: {
      color: 'bg-blue-100 text-blue-800 border-blue-200',
      icon: <Clock className="w-4 h-4" />,
      text: 'Planning Phase'
    },
    ongoing: {
      color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      icon: <Building2 className="w-4 h-4" />,
      text: 'Under Construction'
    },
    completed: {
      color: 'bg-green-100 text-green-800 border-green-200',
      icon: <CheckCircle className="w-4 h-4" />,
      text: 'Completed'
    },
    upcoming: {
      color: 'bg-purple-100 text-purple-800 border-purple-200',
      icon: <Calendar className="w-4 h-4" />,
      text: 'Upcoming'
    }
  }

  const projectTypeColors = {
    residential: 'from-indigo-500 to-indigo-700',
    commercial: 'from-cyan-500 to-cyan-700',
    industrial: 'from-orange-500 to-orange-700',
    'mixed-use': 'from-pink-500 to-pink-700',
    hospitality: 'from-teal-500 to-teal-700'
  }

  const shareProject = (platform?: string) => {
    const shareUrl = window.location.href
    const shareTitle = project.title
    const shareText = project.description
    
    if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`, '_blank')
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank')
    } else if (platform === 'mail') {
      window.location.href = `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(`${shareText}\n\nView more: ${shareUrl}`)}`
    } else if (platform === 'print') {
      window.print()
    } else if (navigator.share) {
      navigator.share({
        title: shareTitle,
        text: shareText,
        url: shareUrl,
      })
    } else {
      navigator.clipboard.writeText(shareUrl)
      alert('Link copied to clipboard!')
    }
    setShowShareOptions(false)
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

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    if (processedImages.length <= 1) return
    
    const interval = setInterval(() => {
      setActiveImage(prev => (prev + 1) % processedImages.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [processedImages.length])

  return (
    <div className="max-w-7xl mx-auto">
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={processedImages}
        currentIndex={activeImage}
        onIndexChange={setActiveImage}
      />
      
      {/* Back Navigation with Actions */}
      <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Link 
          href="/projects" 
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>
        
        <div className="flex items-center space-x-3">
          {/* Like Button */}
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 rounded-lg transition-colors ${isLiked ? 'bg-red-50 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            aria-label={isLiked ? 'Unlike project' : 'Like project'}
          >
            <Heart size={20} className={isLiked ? 'fill-current' : ''} />
          </button>
          
          {/* Bookmark Button */}
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`p-2 rounded-lg transition-colors ${isBookmarked ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark project'}
          >
            <Bookmark size={20} className={isBookmarked ? 'fill-current' : ''} />
          </button>
          
          {/* Share Button with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowShareOptions(!showShareOptions)}
              className="p-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"
              aria-label="Share project"
            >
              <Share2 size={20} />
            </button>
            
            {showShareOptions && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="p-2">
                  <button
                    onClick={() => shareProject('facebook')}
                    className="w-full flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    <Facebook size={18} className="mr-3 text-blue-600" />
                    Share on Facebook
                  </button>
                  <button
                    onClick={() => shareProject('twitter')}
                    className="w-full flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    <Twitter size={18} className="mr-3 text-blue-400" />
                    Share on Twitter
                  </button>
                  <button
                    onClick={() => shareProject('linkedin')}
                    className="w-full flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    <Linkedin size={18} className="mr-3 text-blue-700" />
                    Share on LinkedIn
                  </button>
                  <button
                    onClick={() => shareProject('mail')}
                    className="w-full flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    <Mail size={18} className="mr-3 text-gray-600" />
                    Share via Email
                  </button>
                  <button
                    onClick={() => shareProject('print')}
                    className="w-full flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    <Printer size={18} className="mr-3 text-gray-600" />
                    Print Details
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
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
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
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
                <span className={`px-4 py-2 rounded-full font-semibold flex items-center gap-2 border backdrop-blur-sm ${statusConfig[project.status].color}`}>
                  {statusConfig[project.status].icon}
                  {statusConfig[project.status].text}
                </span>
                <span className="px-4 py-2 rounded-full font-medium bg-white/10 text-white backdrop-blur-sm border border-white/20">
                  <span className={`bg-gradient-to-r bg-clip-text text-transparent font-bold ${projectTypeColors[project.type] || 'from-primary-500 to-primary-700'}`}>
                    {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                  </span>
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                {project.title}
              </h1>
              
              <div className="flex items-center text-white/90 mb-4">
                <MapPin size={22} className="mr-2" />
                <span className="text-lg">{project.location}</span>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
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
                <h2 className="text-2xl font-bold">Project Overview</h2>
                <p className="text-gray-600">Complete details about this development</p>
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

          {/* Gallery Section */}
          {processedImages.length > 1 && (
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Project Gallery</h3>
                  <p className="text-gray-600">{processedImages.length} photos available</p>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  View All
                  <Maximize2 size={18} className="ml-2" />
                </button>
              </div>

              {/* Thumbnail Grid with Pagination */}
              <div className="mb-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {currentPageImages.map((image, index) => {
                    const globalIndex = (currentPage * imagesPerPage) + index
                    return (
                      <button
                        key={globalIndex}
                        onClick={() => handleThumbnailClick(index)}
                        className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all group ${
                          activeImage === globalIndex 
                            ? 'border-primary-500 ring-2 ring-primary-300 scale-[1.02]' 
                            : 'border-transparent hover:border-primary-300'
                        }`}
                      >
                        <ImageWithFallback
                          src={image}
                          alt={`${project.title} - View ${globalIndex + 1}`}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                          quality={75}
                          className="object-cover"
                          fallbackText={`Image ${globalIndex + 1}`}
                        />
                        
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white text-xs px-2 py-1 rounded">
                            View
                          </div>
                        </div>
                        
                        {/* Active indicator */}
                        {activeImage === globalIndex && (
                          <div className="absolute top-2 right-2 w-3 h-3 bg-primary-500 rounded-full border-2 border-white"></div>
                        )}
                        
                        {/* Image number */}
                        <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                          {globalIndex + 1}
                        </div>
                      </button>
                    )
                  })}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
                    <button
                      onClick={prevPage}
                      disabled={currentPage === 0}
                      className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                        currentPage === 0 
                          ? 'text-gray-400 cursor-not-allowed' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      aria-label="Previous page"
                    >
                      <ChevronLeft size={20} className="mr-2" />
                      Previous
                    </button>
                    
                    <div className="flex items-center space-x-2">
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        let pageNum = i
                        if (totalPages > 5) {
                          if (currentPage < 3) pageNum = i
                          else if (currentPage > totalPages - 4) pageNum = totalPages - 5 + i
                          else pageNum = currentPage - 2 + i
                        }
                        return (
                          <button
                            key={pageNum}
                            onClick={() => setCurrentPage(pageNum)}
                            className={`w-10 h-10 rounded-lg transition-colors ${
                              currentPage === pageNum 
                                ? 'bg-primary-600 text-white' 
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {pageNum + 1}
                          </button>
                        )
                      })}
                    </div>
                    
                    <button
                      onClick={nextPage}
                      disabled={currentPage === totalPages - 1}
                      className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                        currentPage === totalPages - 1 
                          ? 'text-gray-400 cursor-not-allowed' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      aria-label="Next page"
                    >
                      Next
                      <ChevronRight size={20} className="ml-2" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Sidebar (1/3 width) */}
        <div className="space-y-8">
          {/* Quick Actions Card */}
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                <Download size={20} />
              </div>
              Quick Actions
            </h3>
            
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                <div className="flex items-center">
                  <Download size={18} className="mr-3" />
                  <span>Download Brochure</span>
                </div>
                <span className="text-xs bg-white/20 px-2 py-1 rounded">PDF</span>
              </button>
              
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
          </div>

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
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                <MapPin className="w-5 h-5 text-red-600" />
              </div>
              Project Location
            </h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700 font-medium">{project.address.street}</p>
                <p className="text-gray-600">{project.address.city}, {project.address.state}</p>
                <p className="text-gray-500 text-sm">PIN: {project.address.zipCode}</p>
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
          </div>

          {/* Similar Projects */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-6">Similar Projects</h3>
            
            <div className="space-y-4">
              <Link 
                href="/projects/skyline-towers"
                className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 mr-4">
                  <ImageWithFallback
                    src="https://images.pexels.com/photos/1102846/pexels-photo-1102846.jpeg"
                    alt="Skyline Towers"
                    width={64}
                    height={64}
                    className="object-cover"
                    fallbackText="Skyline"
                  />
                </div>
                <div>
                  <div className="font-semibold group-hover:text-primary-600 transition-colors">
                    Skyline Towers
                  </div>
                  <div className="text-sm text-gray-600">Residential • Completed</div>
                  <div className="text-xs text-gray-500 mt-1">Downtown Business District</div>
                </div>
              </Link>
              
              <Link 
                href="/projects/tech-park-one"
                className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 mr-4">
                  <ImageWithFallback
                    src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg"
                    alt="Tech Park One"
                    width={64}
                    height={64}
                    className="object-cover"
                    fallbackText="Tech Park"
                  />
                </div>
                <div>
                  <div className="font-semibold group-hover:text-primary-600 transition-colors">
                    Tech Park One
                  </div>
                  <div className="text-sm text-gray-600">Commercial • Ongoing</div>
                  <div className="text-xs text-gray-500 mt-1">IT Corridor</div>
                </div>
              </Link>
            </div>
            
            <Link 
              href="/projects" 
              className="block text-center mt-6 text-primary-600 hover:text-primary-700 font-medium"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}