'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import { getOnlyFeaturedProjects } from '@/lib/utils/projects'
import ProjectCard from '@/components/projects/ProjectCard'
import { Project } from '@/lib/types'

export default function FeaturedProjects() {
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFeatured() {
      try {
        const data = await getOnlyFeaturedProjects()
        setFeaturedProjects(data)
      } catch (error) {
        console.error('Error loading featured projects:', error)
      } finally {
        setLoading(false)
      }
    }
    loadFeatured()
  }, [])

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

  // Don't show the section if loading or there are no featured projects
  if (loading || featuredProjects.length === 0) {
    return null
  }

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 leading-tight">
            Our <span className="text-primary-600">Featured</span> Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore our handpicked featured projects that redefine urban living and commercial spaces
          </p>
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
                      viewMode="grid"
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
        </div>

        {/* Dots Indicator - Only show if there are multiple featured projects */}
        {featuredProjects.length > 1 && (
          <div className="flex justify-center items-center mt-8 space-x-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === selectedIndex
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