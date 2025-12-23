// src/app/gallery/components/ImageModal.tsx
'use client'

import { X, ChevronLeft, ChevronRight, Grid3x3, Download } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  images: string[]
  currentIndex: number
  onIndexChange: (index: number) => void
}

export default function ImageModal({
  isOpen,
  onClose,
  images,
  currentIndex,
  onIndexChange,
}: ImageModalProps) {
  const [showThumbnails, setShowThumbnails] = useState(true)
  const [downloading, setDownloading] = useState(false)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onIndexChange((currentIndex - 1 + images.length) % images.length)
      if (e.key === 'ArrowRight') onIndexChange((currentIndex + 1) % images.length)
      if (e.key === ' ') {
        e.preventDefault()
        setShowThumbnails(prev => !prev)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, currentIndex, images.length, onClose, onIndexChange])

  const downloadImage = async () => {
    if (downloading) return
    
    setDownloading(true)
    try {
      const imageUrl = images[currentIndex]
      const response = await fetch(imageUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `image-${currentIndex + 1}.jpg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Download failed:', error)
      alert('Failed to download image. Please try again.')
    } finally {
      setDownloading(false)
    }
  }

  if (!isOpen) return null

  const nextImage = () => onIndexChange((currentIndex + 1) % images.length)
  const prevImage = () => onIndexChange((currentIndex - 1 + images.length) % images.length)

  const currentImage = images[currentIndex]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
      {/* Top Controls */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 bg-gradient-to-b from-black/80 to-transparent z-20">
        <div className="flex items-center space-x-4">
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
          <span className="text-white text-lg">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowThumbnails(!showThumbnails)}
            className="text-white hover:text-gray-300 transition"
            aria-label="Toggle thumbnails"
          >
            <Grid3x3 size={24} />
          </button>
          
          <button
            onClick={downloadImage}
            disabled={downloading}
            className={`flex items-center space-x-2 text-white hover:text-gray-300 transition ${downloading ? 'opacity-50' : ''}`}
            aria-label="Download image"
          >
            <Download size={20} />
            {downloading && (
              <span className="text-sm">Downloading...</span>
            )}
          </button>
        </div>
      </div>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/30 hover:bg-black/50 p-3 rounded-full transition"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/30 hover:bg-black/50 p-3 rounded-full transition"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        </>
      )}

      {/* Main image */}
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="relative max-w-7xl max-h-[85vh] w-full h-full">
          <div className="relative w-full h-full">
            <Image
              src={currentImage}
              alt={`Gallery image ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
                target.parentElement!.innerHTML = `
                  <div class="w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                    <div class="text-white text-center">
                      <div class="text-6xl font-bold opacity-20">AS</div>
                      <p class="mt-4 opacity-50">Image ${currentIndex + 1} / ${images.length}</p>
                    </div>
                  </div>
                `
              }}
            />
          </div>
        </div>
      </div>

      {/* Thumbnail strip */}
      {showThumbnails && images.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 z-20">
          <div className="overflow-x-auto">
            <div className="flex space-x-2 justify-center min-w-max px-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => onIndexChange(index)}
                  className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 relative transition-transform ${
                    index === currentIndex 
                      ? 'border-white scale-110' 
                      : 'border-transparent hover:scale-105'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="64px"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      target.parentElement!.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                          <span class="text-white text-xs">${index + 1}</span>
                        </div>
                      `
                    }}
                  />
                  
                  {/* Active indicator */}
                  {index === currentIndex && (
                    <div className="absolute inset-0 border-2 border-white"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* Thumbnail navigation info */}
          <div className="text-center mt-2 text-white/70 text-sm">
            <span className="hidden sm:inline">
              Press spacebar to toggle thumbnails • Use arrow keys to navigate
            </span>
            <span className="sm:hidden">
              Tap images to navigate • Pinch to zoom
            </span>
          </div>
        </div>
      )}
    </div>
  )
}