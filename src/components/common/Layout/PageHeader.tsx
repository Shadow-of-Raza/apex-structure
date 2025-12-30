'use client';

import { Pause, Play } from 'lucide-react';
import { useState, useEffect, useCallback, useRef } from 'react';
import { PageHeaderProps } from '@/lib/types/page-header';
import { PAGE_HEADER_CONFIG } from '@/lib/constants/page-header';
import { preloadImages, getOptimizedImageUrl } from '@/lib/utils/page-header';

export default function PageHeader({
  images,
  imageTransitionInterval = PAGE_HEADER_CONFIG.defaultTransitionInterval,
  showOverlay = true,
  overlayOpacity = PAGE_HEADER_CONFIG.defaultOverlayOpacity,
}: PageHeaderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const zoomIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const totalSlides = images.length;
  const currentImage = images[currentImageIndex];

  // Smooth zoom animation for active image
  useEffect(() => {
    if (images.length === 0 || !isAutoPlaying) {
      setZoomLevel(1);
      if (zoomIntervalRef.current) {
        clearInterval(zoomIntervalRef.current);
      }
      return;
    }

    setZoomLevel(1);
    
    if (zoomIntervalRef.current) {
      clearInterval(zoomIntervalRef.current);
    }

    // Create smooth zoom effect (1.0 to 1.1 over the transition interval)
    const zoomDuration = imageTransitionInterval;
    const zoomSteps = 100;
    const zoomIncrement = 0.1 / zoomSteps;
    let step = 0;

    zoomIntervalRef.current = setInterval(() => {
      setZoomLevel(prev => {
        if (step >= zoomSteps) {
          return 1.1;
        }
        step++;
        return 1 + (step * zoomIncrement);
      });
    }, zoomDuration / zoomSteps);

    return () => {
      if (zoomIntervalRef.current) {
        clearInterval(zoomIntervalRef.current);
      }
    };
  }, [currentImageIndex, isAutoPlaying, imageTransitionInterval, images.length]);

  // Progress bar animation
  useEffect(() => {
    if (!isAutoPlaying || totalSlides <= 1) {
      setProgress(0);
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      return;
    }

    setProgress(0);
    
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    progressIntervalRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          return 100;
        }
        return prev + (100 / (imageTransitionInterval / 50));
      });
    }, 50);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [currentImageIndex, isAutoPlaying, imageTransitionInterval, totalSlides]);

  // Auto slide functionality with proper cleanup
  useEffect(() => {
    if (!isAutoPlaying || totalSlides <= 1) {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
      return;
    }

    const startAutoSlide = () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
      
      slideIntervalRef.current = setInterval(() => {
        nextSlide();
      }, imageTransitionInterval);
    };

    startAutoSlide();

    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, [currentImageIndex, isAutoPlaying, imageTransitionInterval, totalSlides]);

  // Preload images and set mounted state
  useEffect(() => {
    const initialize = async () => {
      if (images.length > 0) {
        await preloadImages(images);
      }
      setIsMounted(true);
    };
    
    initialize();

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
      if (zoomIntervalRef.current) {
        clearInterval(zoomIntervalRef.current);
      }
    };
  }, [images]);

  const nextSlide = useCallback(() => {
    if (isTransitioning || totalSlides <= 1) return;
    
    setIsTransitioning(true);
    setProgress(0);
    setZoomLevel(1);
    
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % totalSlides);
      setIsTransitioning(false);
    }, 400);
  }, [isTransitioning, totalSlides]);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentImageIndex || totalSlides <= 1) return;
    
    setIsTransitioning(true);
    setProgress(0);
    setZoomLevel(1);
    
    setTimeout(() => {
      setCurrentImageIndex(index);
      setIsTransitioning(false);
    }, 400);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Reset progress and zoom when slide changes
  useEffect(() => {
    setProgress(0);
    setZoomLevel(1);
  }, [currentImageIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (totalSlides <= 1) return;
      
      switch(e.key) {
        case 'ArrowLeft':
          goToSlide((currentImageIndex - 1 + totalSlides) % totalSlides);
          break;
        case 'ArrowRight':
          nextSlide();
          break;
        case ' ':
          toggleAutoPlay();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentImageIndex, totalSlides, nextSlide]);

  return (
    <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Images with Smooth Transition and Zoom */}
      <div className="absolute inset-0">
        {images.length === 0 ? (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600" />
        ) : (
          <>
            {/* Stacked Images for Smooth Transition with Zoom Effect */}
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentImageIndex
                    ? 'opacity-100 z-10'
                    : 'opacity-0 z-0'
                }`}
                style={{
                  backgroundImage: `url(${getOptimizedImageUrl(image.url, { width: 1920, height: 600, quality: 90 })})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  transform: index === currentImageIndex ? `scale(${zoomLevel})` : 'scale(1)',
                  transition: index === currentImageIndex ? 'transform 20s ease-out' : 'none',
                  filter: 'brightness(0.95)',
                }}
                aria-hidden={index !== currentImageIndex}
              />
            ))}
            
            {/* Enhanced Vignette Effect Layers */}
            {images.length > 0 && (
              <>
                {/* Primary Vignette */}
                <div 
                  className="absolute inset-0 z-15 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 80%)',
                  }}
                />
                
                {/* Corner Vignette */}
                <div 
                  className="absolute inset-0 z-16 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 20% 20%, transparent 10%, rgba(0,0,0,0.5) 60%), radial-gradient(circle at 80% 20%, transparent 10%, rgba(0,0,0,0.5) 60%), radial-gradient(circle at 20% 80%, transparent 10%, rgba(0,0,0,0.5) 60%), radial-gradient(circle at 80% 80%, transparent 10%, rgba(0,0,0,0.5) 60%)',
                  }}
                />
                
                {/* Edge Vignette */}
                <div 
                  className="absolute inset-0 z-17 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to right, rgba(0,0,0,0.4) 0%, transparent 15%, transparent 85%, rgba(0,0,0,0.4) 100%), linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 15%, transparent 85%, rgba(0,0,0,0.4) 100%)',
                  }}
                />
              </>
            )}
          </>
        )}
        
        {/* Gradient Overlay with Dynamic Opacity */}
        {showOverlay && images.length > 0 && (
          <>
            {/* Main Overlay with Gradient */}
            <div 
              className="absolute inset-0 z-20 transition-opacity duration-1000"
              style={{ 
                opacity: overlayOpacity,
                background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%)',
              }}
            />
            
            {/* Highlight Gradient for Depth */}
            <div 
              className="absolute inset-0 z-21 pointer-events-none transition-all duration-1000"
              style={{
                background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.2) 100%)',
                mixBlendMode: 'overlay',
              }}
            />
          </>
        )}
        
        {/* Subtle Texture Overlay */}
        {images.length > 0 && (
          <div 
            className="absolute inset-0 z-18 pointer-events-none opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 2px, transparent 2px)',
              backgroundSize: '60px 60px',
            }}
          />
        )}
      </div>

      {/* Image Info Panel */}
      {currentImage?.title && (
        <div className="absolute bottom-8 left-8 max-w-md z-30 animate-slideUp delay-300">
          <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-xl p-5 text-white border border-white/20 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-2 text-white drop-shadow-lg">
                  {currentImage.title}
                </h3>
                {currentImage.description && (
                  <p className="text-base text-gray-100 drop-shadow-md leading-relaxed">
                    {currentImage.description}
                  </p>
                )}
              </div>
              {images.length > 1 && (
                <div className="flex flex-col items-end gap-2">
                  <div className="text-sm bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 rounded-full font-medium">
                    {currentImageIndex + 1}/{images.length}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Progress Bar - Original Design */}
      {images.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-30">
          <div 
            className="h-full bg-secondary-500 transition-all duration-100 ease-linear"
            style={{
              width: `${progress}%`,
              boxShadow: '0 0 10px rgba(234, 179, 8, 0.3)'
            }}
          />
        </div>
      )}

      {/* Enhanced Gradient Fades with Vignette */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/50 via-black/20 to-transparent z-25 pointer-events-none" />
      
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-25 pointer-events-none" />
      
      {/* Side Gradient Fades */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-black/40 to-transparent z-25 pointer-events-none" />
      
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-black/40 to-transparent z-25 pointer-events-none" />

      {/* Add Custom CSS */}
      <style jsx global>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
}