// src/components/homepage/HeroSection.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Pause, Play } from 'lucide-react'
import Link from 'next/link'
import { heroContent, heroImages, heroConfig, heroIcons  } from '@/lib/constants/hero'

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [progress, setProgress] = useState(0)
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const totalSlides = heroImages.length
  const currentImage = heroImages[currentSlide]

  // Progress bar animation
  useEffect(() => {
    if (!isAutoPlaying) {
      setProgress(0)
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
      }
      return
    }

    setProgress(0)
    
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current)
    }

    progressIntervalRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          return 100
        }
        return prev + (100 / (heroConfig.autoSlideInterval / 100))
      })
    }, 100)

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
      }
    }
  }, [currentSlide, isAutoPlaying])

  // Auto slide functionality with proper cleanup
  useEffect(() => {
    if (!isAutoPlaying) {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current)
      }
      return
    }

    const startAutoSlide = () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current)
      }
      
      slideIntervalRef.current = setInterval(() => {
        nextSlide()
      }, heroConfig.autoSlideInterval)
    }

    startAutoSlide()

    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current)
      }
    }
  }, [currentSlide, isAutoPlaying])

  const nextSlide = () => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setProgress(0)
    
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
      setIsTransitioning(false)
    }, 300)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setProgress(0)
    
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
      setIsTransitioning(false)
    }, 300)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return
    
    setIsTransitioning(true)
    setProgress(0)
    
    setTimeout(() => {
      setCurrentSlide(index)
      setIsTransitioning(false)
    }, 300)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  // Reset progress when slide changes
  useEffect(() => {
    setProgress(0)
  }, [currentSlide])

  return (
    <section className="relative text-white overflow-hidden h-[90vh] min-h-[700px]">
      {/* Background Images with Ken Burns Effect */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 z-10' 
                : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image with Ken Burns zoom effect */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${image.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                animation: index === currentSlide ? 'kenBurns 20s ease-out infinite' : 'none'
              }}
            >
              
              {/* Dark overlay at bottom for better contrast */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Top gradient overlay */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-black/50 to-transparent"></div>
              
              {/* Vignette effect for focus */}
              <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.7)]"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Auto-play Toggle */}
      <button
        onClick={toggleAutoPlay}
        className="absolute right-4 top-4 z-30 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-600 hover:scale-110 transition-all duration-300 border border-white/30"
        aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
      >
        {isAutoPlaying ? (
          <Pause className="w-5 h-5" />
        ) : (
          <Play className="w-5 h-5" />
        )}
      </button>

      {/* Content Container - Static Content for All Slides */}
      <div className="container mx-auto px-4 h-full relative z-20 flex items-center">
        <div className="max-w-5xl">
          {/* Title */}
          <div className="overflow-hidden">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="block text-white ">
                {heroContent.title}
              </span>
            </h1>
          </div>

          {/* Description */}
          <div className="overflow-hidden">
            <p className="text-base font-normal mb-8 max-w-2xl">
              {heroContent.description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link 
              href={heroContent.button1.href}
              className="inline-flex items-center justify-center bg-primary-700 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {heroContent.button1.text}
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {heroContent.stats.map((stat, index) => {
              // Get the icon component dynamically
              const IconComponent = heroIcons[stat.icon as keyof typeof heroIcons];
              
              return (
                <div key={index} className="flex items-center group bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    {IconComponent ? (
                      <IconComponent className="w-8 h-8 text-secondary-500" />
                    ) : (
                      <span>{stat.icon}</span> // Fallback to emoji if icon not found
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">{stat.value}</h3>
                    <p className="text-gray-300 text-sm">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Slide Indicators (Dots) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-secondary-500 w-8 shadow-lg'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-30">
        <div 
          className="h-full bg-secondary-500 transition-all duration-300 ease-linear"
          style={{
            width: `${progress}%`
          }}
        />
      </div>

      {/* Gradient Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent"></div>

      {/* Add CSS for Ken Burns animation */}
      <style jsx global>{`
        @keyframes kenBurns {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.065);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  )
}