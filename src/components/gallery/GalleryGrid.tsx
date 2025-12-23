'use client'

import { useState } from 'react'
import { Eye, Download, Star, MapPin, Calendar, Building2 } from 'lucide-react'
import Image from 'next/image'
import { getFallbackImage, getImageAltText, cleanImageUrl, isValidImageUrl } from '@/lib/utils/images'
import { Card, CardContent } from '@/components/common/UI/Card'

interface GalleryImage {
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
}

interface GalleryGridProps {
  images: GalleryImage[]
  viewMode: 'grid' | 'list'
  onImageSelect: (imageIndex: number) => void
}

export default function GalleryGrid({ images, viewMode, onImageSelect }: GalleryGridProps) {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null)

  if (viewMode === 'list') {
    return (
      <div className="space-y-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden cursor-pointer"
            onClick={() => onImageSelect(index)}
            onMouseEnter={() => setHoveredImage(image.id)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <div className="flex flex-col md:flex-row">
              {/* Image Thumbnail */}
              <div className="md:w-64 h-48 md:h-auto relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                {isValidImageUrl(image.url) ? (
                  <Image
                    src={cleanImageUrl(image.url)}
                    alt={getImageAltText(image.url, image.title)}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="256px"
                  />
                ) : (
                  <div className={`w-full h-full flex items-center justify-center ${getFallbackImage().gradient}`}>
                    <div className="text-white text-center">
                      <Building2 size={32} />
                      <p className="mt-2 text-sm opacity-75">{image.projectName}</p>
                    </div>
                  </div>
                )}
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
                  hoveredImage === image.id ? 'opacity-100' : 'opacity-0'
                } flex items-center justify-center`}>
                  <div className="text-white text-center">
                    <Eye size={24} className="mx-auto mb-2" />
                    <p className="text-sm">Click to view</p>
                  </div>
                </div>
              </div>
              
              {/* Image Details */}
              <div className="flex-1 p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{image.title}</h3>
                    <p className="text-primary-600 font-semibold">{image.projectName}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    image.status === 'completed' ? 'bg-green-100 text-green-800' :
                    image.status === 'ongoing' ? 'bg-blue-100 text-blue-800' :
                    image.status === 'planning' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {image.status.charAt(0).toUpperCase() + image.status.slice(1)}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{image.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Building2 size={14} className="mr-2" />
                    <span>{image.projectType}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin size={14} className="mr-2" />
                    <span>{image.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar size={14} className="mr-2" />
                    <span>{image.year}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Star size={14} className="mr-2" />
                    <span>{image.tags.length} tags</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {image.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {image.tags.length > 4 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                      +{image.tags.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  // Grid View (default)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <Card
          key={image.id}
          className="overflow-hidden cursor-pointer group"
          hover
          onClick={() => onImageSelect(index)}
          onMouseEnter={() => setHoveredImage(image.id)}
          onMouseLeave={() => setHoveredImage(null)}
        >
          {/* Image Container */}
          <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
            {isValidImageUrl(image.url) ? (
              <Image
                src={cleanImageUrl(image.url)}
                alt={getImageAltText(image.url, image.title)}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className={`w-full h-full flex items-center justify-center ${getFallbackImage().gradient}`}>
                <div className="text-white text-center">
                  <Building2 size={48} className="mx-auto opacity-75" />
                  <p className="mt-2 text-sm opacity-75">{image.projectName}</p>
                </div>
              </div>
            )}
            
            {/* Hover Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${
              hoveredImage === image.id ? 'opacity-100' : 'opacity-0'
            } flex flex-col justify-end p-4`}>
              <div className="text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm opacity-90">{image.projectType}</span>
                  <span className="text-sm">{image.year}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs opacity-75">
                    {image.location}
                  </span>
                  <span className="text-xs opacity-75">
                    {image.status}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Status Badge */}
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                image.status === 'completed' ? 'bg-green-600/90 text-white' :
                image.status === 'ongoing' ? 'bg-blue-600/90 text-white' :
                image.status === 'planning' ? 'bg-yellow-600/90 text-white' :
                'bg-gray-600/90 text-white'
              }`}>
                {image.status.charAt(0).toUpperCase() + image.status.slice(1)}
              </span>
            </div>
          </div>
          
          {/* Content */}
          <CardContent className="p-4">
            <div className="mb-3">
              <h3 className="font-bold text-gray-900 mb-1 line-clamp-1">{image.title}</h3>
              <p className="text-sm text-primary-600 font-medium">{image.projectName}</p>
            </div>
            
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{image.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {image.tags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
              {image.tags.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                  +{image.tags.length - 3}
                </span>
              )}
            </div>
            
            <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
              <div className="flex items-center">
                <MapPin size={12} className="mr-1" />
                <span>{image.location.split(',')[0] || 'Location'}</span>
              </div>
              <div className="flex items-center">
                <Building2 size={12} className="mr-1" />
                <span>{image.projectType}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}