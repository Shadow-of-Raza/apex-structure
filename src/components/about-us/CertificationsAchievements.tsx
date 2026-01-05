// src/components/about-us/CertificationsAchievements.tsx
'use client'

import { useState, useEffect, useCallback } from 'react'
import { Trophy, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { CERTIFICATIONS_ACHIEVEMENTS } from '@/lib/constants/about-us'

export default function CertificationsAchievements() {
    // Only display featured items in this sub-section
    const featuredItems = CERTIFICATIONS_ACHIEVEMENTS.filter(item => item.isFeatured)

    // Embla Carousel setup
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
        skipSnaps: false,
        duration: 30
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
        if (!emblaApi) return

        const interval = setInterval(() => {
            if (emblaApi.canScrollNext()) {
                emblaApi.scrollNext()
            } else {
                emblaApi.scrollTo(0)
            }
        }, 5000)

        return () => clearInterval(interval)
    }, [emblaApi])

    if (featuredItems.length === 0) return null

    return (
        <section id="awards-certifications" className="bg-pearl-50 py-10 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header with View All Link */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-20">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 text-primary-600 font-bold uppercase tracking-[0.2em] text-sm mb-6">
                            <span className="w-12 h-px bg-primary-600"></span>
                            Excellence & Recognition
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-black-200 leading-[0.95]">
                            Featured Awards <span className="text-secondary-500">&</span> Certifications
                        </h2>
                    </div>
                    <div className="flex flex-col items-start lg:items-end space-y-6">
                        <Link
                            href="/awards-certifications"
                            className="group inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors shrink-0"
                        >
                            View All Recognition
                            <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-md lg:text-right">
                            Highlights of our prestigious recognitions and industry-standard certifications. Scroll to view more milestones.
                        </p>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-8">
                            {featuredItems.map((item) => (
                                <div key={item.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-8">
                                    <div className="group relative h-[600px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                                        {/* Background Image */}
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />

                                        {/* Permanent Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black-200 via-black-200/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

                                        {/* Content Overlay */}
                                        <div className="absolute inset-0 p-10 flex flex-col justify-end space-y-4 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                            {/* Authority & Year */}
                                            <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                                {item.year && (
                                                    <span className="bg-primary-600 text-white text-[12px] px-3 py-1 rounded-full px-2">
                                                        {item.year}
                                                    </span>
                                                )}
                                                <span className="bg-primary-600 text-white text-[12px] px-3 py-1 rounded-full px-2">
                                                    {item.authority}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-white text-3xl font-black leading-none uppercase italic transform -skew-x-6 group-hover:skew-x-0 transition-transform duration-500">
                                                {item.title}
                                            </h3>

                                            {/* Description - Reveal on hover */}
                                            <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-700 ease-in-out">
                                                <p className="text-gray-300 text-sm leading-relaxed font-medium pt-2 border-l-2 border-primary-500 pl-4">
                                                    {item.description}
                                                </p>
                                            </div>

                                            {/* Decorative Line */}
                                            <div className="w-12 h-1 bg-primary-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Custom Navigation */}
                    <div className="flex justify-center items-center mt-12 gap-6">
                        <button
                            onClick={scrollPrev}
                            className="w-12 h-12 rounded-full border border-platinum flex items-center justify-center text-gray-400 hover:text-primary-600 hover:border-primary-600 transition-all group"
                        >
                            <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
                        </button>

                        {/* Dots */}
                        <div className="flex items-center gap-2">
                            {scrollSnaps.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollTo(index)}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${index === selectedIndex
                                        ? 'bg-primary-600 w-8'
                                        : 'bg-platinum w-1.5 hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={scrollNext}
                            className="w-12 h-12 rounded-full border border-platinum flex items-center justify-center text-gray-400 hover:text-primary-600 hover:border-primary-600 transition-all group"
                        >
                            <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
