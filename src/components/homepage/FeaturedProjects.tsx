// src/components/homepage/FeaturedProjects.tsx
'use client'

import { useState, useEffect, useCallback } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import { getOnlyFeaturedProjects, getTotalProjectsCount } from '@/lib/utils/projects'
import ProjectCard from '@/components/projects/ProjectCard'

export default function FeaturedProjects() {
  // Get ONLY featured projects (isFeatured = true)
  const featuredProjects = getOnlyFeaturedProjects()
  const totalProjects = getTotalProjectsCount()
  
  // Embla Carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    skipSnaps: false,
    duration: 20
  })
  
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    
    // Initialize
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    
    // Event listeners
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  // Auto-scroll effect
  useEffect(() => {
    if (!emblaApi || scrollSnaps.length <= 1) return
    
    const interval = setInterval(() => {
      if (emblaApi) {
        const nextIndex = (emblaApi.selectedScrollSnap() + 1) % scrollSnaps.length
        scrollTo(nextIndex)
      }
    }, 5000)
    
    return () => {
      clearInterval(interval)
    }
  }, [emblaApi, scrollSnaps.length, scrollTo])

  // Don't show the section if there are no featured projects
  if (featuredProjects.length === 0) {
    return null
  }

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* Header with View All Link */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Our <span className="text-primary-600">Featured</span> Projects
            </h2>
            <p className="text-gray-600 mt-1 max-w-2xl">
              Explore our handpicked featured projects that redefine urban living and commercial spaces
            </p>
          </div>
          
          {/* View All Projects Link */}
          <Link 
            href="/projects"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold whitespace-nowrap group"
          >
            View All {totalProjects} Projects
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {featuredProjects.map((project) => (
                <div key={project.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4">
                  <div className="h-full">
                    {/* Using the SAME grid view card from ProjectCard */}
                    <ProjectCard 
                      project={project} 
                      viewMode="grid"  // Changed from "featured" to "grid"
                      compact={true}
                      showFeatures={true}
                      showHighlights={false}
                      showDates={true}
                      showClient={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Only show if there are multiple featured projects */}
          {featuredProjects.length > 1 && (
            <>
              <button 
                onClick={scrollPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
                aria-label="Previous project"
              >
                <ChevronLeft size={20} className="text-gray-700" />
              </button>
              
              <button 
                onClick={scrollNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
                aria-label="Next project"
              >
                <ChevronRight size={20} className="text-gray-700" />
              </button>
            </>
          )}
        </div>

        {/* Dots Indicator - Only show if there are multiple featured projects */}
        {featuredProjects.length > 1 && (
          <div className="flex justify-center items-center mt-8 space-x-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex 
                    ? 'bg-primary-600 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === selectedIndex}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}