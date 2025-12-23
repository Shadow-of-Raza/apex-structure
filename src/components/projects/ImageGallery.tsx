'use client'

import { useState, useMemo, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Grid3x3, Play, Pause } from 'lucide-react'
import ImageWithFallback from '@/components/common/UI/ImageWithFallback'
import { cleanImageUrl, isDirectImageUrl } from '@/lib/utils/images'

interface ImageGalleryProps {
  images: string[]
  altText: string
  autoPlay?: boolean
  showThumbnails?: boolean
  aspectRatio?: 'square' | 'landscape' | 'portrait'
}

export default function ImageGallery({
  images,
  altText,
  autoPlay = true,
  showThumbnails = true,
  aspectRatio = 'landscape'
}: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [currentPage, setCurrentPage] = useState(0)

  // Process images
  const processedImages = useMemo(() => {
    return images
      .map(cleanImageUrl)
      .filter(isDirectImageUrl)
      .filter(Boolean)
  }, [images])

  // Pagination settings
  const thumbnailsPerPage = 8
  const totalPages = Math.ceil(processedImages.length / thumbnailsPerPage)

  // Get current page thumbnails
  const currentThumbnails = useMemo(() => {
    const startIndex = currentPage * thumbnailsPerPage
    const endIndex = startIndex + thumbnailsPerPage
    return processedImages.slice(startIndex, endIndex)
  }, [processedImages, currentPage, thumbnailsPerPage])

  const nextImage = useCallback(() => {
    setActiveIndex(prev => (prev + 1) % processedImages.length)
  }, [processedImages.length])

  const prevImage = useCallback(() => {
    setActiveIndex(prev => (prev - 1 + processedImages.length) % processedImages.length)
  }, [processedImages.length])

  // Auto-play functionality
  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying)
  }

  // Auto-play interval
  useState(() => {
    if (!autoPlay || processedImages.length <= 1) return
    
    const interval = setInterval(() => {
      if (isPlaying) {
        nextImage()
      }
    }, 5000)
    
    return () => clearInterval(interval)
  })

  const handleThumbnailClick = (index: number) => {
    const globalIndex = (currentPage * thumbnailsPerPage) + index
    setActiveIndex(globalIndex)
  }

  const nextThumbnailPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1)
    }
  }

  const prevThumbnailPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1)
    }
  }

  if (processedImages.length === 0) {
    return (
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
        <div className="text-center">
          <Grid3x3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">No images available</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Main Image Display */}
      <div className="relative rounded-2xl overflow-hidden bg-gray-100 group">
        <div className="aspect-video relative">
          <ImageWithFallback
            src={processedImages[activeIndex]}
            alt={`${altText} - Image ${activeIndex + 1}`}
            fill
            sizes="100vw"
            priority={activeIndex === 0}
            quality={90}
            className="object-cover"
            fallbackText={`Image ${activeIndex + 1}`}
          />
          
          {/* Navigation Arrows */}
          {processedImages.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
          
          {/* Auto-play Controls */}
          {processedImages.length > 1 && autoPlay && (
            <button
              onClick={toggleAutoPlay}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>
          )}
          
          {/* Image Counter */}
          {processedImages.length > 1 && (
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1.5 rounded-full text-sm backdrop-blur-sm">
              {activeIndex + 1} / {processedImages.length}
            </div>
          )}
        </div>
      </div>

      {/* Thumbnail Gallery */}
      {showThumbnails && processedImages.length > 1 && (
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="font-bold text-gray-900">Gallery</h4>
              <p className="text-sm text-gray-600">
                {processedImages.length} photos • Page {currentPage + 1} of {totalPages}
              </p>
            </div>
            
            {totalPages > 1 && (
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevThumbnailPage}
                  disabled={currentPage === 0}
                  className={`p-2 rounded-lg ${currentPage === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                  aria-label="Previous thumbnails"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextThumbnailPage}
                  disabled={currentPage === totalPages - 1}
                  className={`p-2 rounded-lg ${currentPage === totalPages - 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                  aria-label="Next thumbnails"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
            {currentThumbnails.map((image, index) => {
              const globalIndex = (currentPage * thumbnailsPerPage) + index
              const isActive = activeIndex === globalIndex
              
              return (
                <button
                  key={globalIndex}
                  onClick={() => handleThumbnailClick(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all relative group ${
                    isActive 
                      ? 'border-primary-500 ring-2 ring-primary-300 scale-[1.02]' 
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${altText} - Thumbnail ${globalIndex + 1}`}
                    fill
                    sizes="(max-width: 640px) 25vw, (max-width: 768px) 16.66vw, 12.5vw"
                    quality={60}
                    className="object-cover"
                    fallbackText={`${globalIndex + 1}`}
                  />
                  
                  {/* Hover overlay */}
                  <div className={`absolute inset-0 transition-colors ${
                    isActive ? 'bg-primary-500/10' : 'bg-black/0 group-hover:bg-black/10'
                  }`}></div>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute top-2 right-2 w-2 h-2 bg-primary-500 rounded-full border-2 border-white"></div>
                  )}
                  
                  {/* Thumbnail number */}
                  <div className={`absolute bottom-1 left-1 text-xs px-1.5 py-0.5 rounded backdrop-blur-sm ${
                    isActive ? 'bg-primary-500 text-white' : 'bg-black/50 text-white'
                  }`}>
                    {globalIndex + 1}
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}