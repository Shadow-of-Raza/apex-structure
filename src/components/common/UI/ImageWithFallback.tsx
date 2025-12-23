// src/components/common/UI/ImageWithFallback.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Building2 } from 'lucide-react'
import { isValidImageUrl, cleanImageUrl } from '@/lib/utils/images'

interface ImageWithFallbackProps {
  src: string
  alt: string
  fallbackText?: string
  className?: string
  fill?: boolean
  width?: number
  height?: number
  sizes?: string
  priority?: boolean
  quality?: number
  aspectRatio?: 'square' | 'landscape' | 'portrait'
  onError?: () => void
}

export default function ImageWithFallback({
  src,
  alt,
  fallbackText = 'Image',
  className = '',
  fill = false,
  width = 400,
  height = 300,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false,
  quality = 85,
  aspectRatio = 'landscape',
  onError
}: ImageWithFallbackProps) {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  
  const cleanSrc = cleanImageUrl(src)
  const isValid = isValidImageUrl(cleanSrc) && !imageError
  
  const aspectClasses = {
    square: 'aspect-square',
    landscape: 'aspect-video',
    portrait: 'aspect-[3/4]'
  }

  // Calculate dimensions based on aspect ratio
  const getDimensions = () => {
    if (fill) return { fill: true as const, width: undefined, height: undefined }
    
    if (aspectRatio === 'square') {
      return { width: width, height: width, fill: false as const }
    } else if (aspectRatio === 'portrait') {
      return { width: width, height: Math.floor(width * 4/3), fill: false as const }
    } else {
      // landscape (default)
      return { width: width, height: Math.floor(width * 2/3), fill: false as const }
    }
  }

  const dimensions = getDimensions()

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  const handleImageError = () => {
    setImageError(true)
    setIsLoading(false)
    onError?.()
  }

  return (
    <div className={`relative overflow-hidden ${aspectClasses[aspectRatio]} ${className} ${fill ? 'w-full h-full' : ''}`}>
      {isValid ? (
        <>
          {isLoading && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse z-10"></div>
          )}
          
          {dimensions.fill ? (
            // When using fill prop
            <div className="relative w-full h-full">
              <Image
                src={cleanSrc}
                alt={alt}
                fill
                sizes={sizes}
                priority={priority}
                quality={quality}
                className={`object-cover transition-opacity duration-300 ${
                  isLoading ? 'opacity-0' : 'opacity-100'
                }`}
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
            </div>
          ) : (
            // When using width/height props
            <Image
              src={cleanSrc}
              alt={alt}
              width={dimensions.width}
              height={dimensions.height}
              sizes={sizes}
              priority={priority}
              quality={quality}
              className={`w-full h-auto object-cover transition-opacity duration-300 ${
                isLoading ? 'opacity-0' : 'opacity-100'
              }`}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          )}
        </>
      ) : (
        // Fallback UI
        <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 flex flex-col items-center justify-center p-4">
          <Building2 className="w-12 h-12 text-white/70 mb-3" />
          <div className="text-4xl font-bold text-white/30 mb-2">AS</div>
          <p className="text-white/60 text-sm text-center">{fallbackText}</p>
          <p className="text-white/40 text-xs mt-2">Image preview</p>
        </div>
      )}
      
      {/* Loading indicator */}
      {isLoading && isValid && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  )
}