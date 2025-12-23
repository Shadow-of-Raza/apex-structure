// Simpler version - Uses CSS aspect-ratio with max dimensions
'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface ResponsiveCenteredImageCarouselProps {
  images: string[]
  alt: string
  className?: string
  maxHeight?: string
}

export default function ResponsiveCenteredImageCarousel({ 
  images, 
  alt, 
  className = '',
  maxHeight = '800px'
}: ResponsiveCenteredImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!images || images.length === 0) {
    return (
      <div className={`relative w-full bg-gray-200 rounded-lg ${className}`}>
        <div className="aspect-[16/9] flex items-center justify-center">
          <div className="text-gray-400">No image available</div>
        </div>
      </div>
    )
  }

  const goToPrevious = () => {
    setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1)
  }

  const goToNext = () => {
    setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1)
  }

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      {/* Container with max height but flexible width */}
      <div 
        className="relative bg-gray-100"
        style={{ 
          maxHeight: maxHeight,
          minHeight: '500px',
          width: '100%',
          position: 'relative'
        }}
      >
        {/* Image container that maintains natural ratio */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-full max-h-full">
            <Image
              src={images[currentIndex]}
              alt={`${alt} - Image ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              priority
            />
          </div>
        </div>
        
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute bottom-4 right-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full z-10">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  )
}