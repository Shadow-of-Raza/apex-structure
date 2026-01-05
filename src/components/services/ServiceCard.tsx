// src/components/services/ServiceCard.tsx
'use client'

import { useState, useMemo, useCallback, useEffect } from 'react'
import { ChevronRight, ChevronLeft, Award, Sparkles, ArrowRight, LucideIcon } from 'lucide-react'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import ImageWithFallback from '@/components/common/UI/ImageWithFallback'
import { getAllServices, SERVICE_ICON_MAP, getServiceStats } from '@/lib/utils/services'
import { Building2 } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

export default function ServiceCard() {
  const services = useMemo(() => getAllServices(), [])
  // Initialize with first service ID
  const [activeServiceId, setActiveServiceId] = useState<number>(services[0]?.id)

  // Handle URL params
  const searchParams = useSearchParams()
  useEffect(() => {
    const idParam = searchParams.get('id')
    if (idParam) {
      // Find service by name (slug) from URL
      const service = services.find(s => s.name === idParam)
      if (service) {
        setActiveServiceId(service.id)
      }
    }
  }, [searchParams, services])

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true
  })

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const activeService = useMemo(() =>
    services.find(s => s.id === activeServiceId) || services[0],
    [services, activeServiceId])

  const serviceStats = useMemo(() => getServiceStats(), [])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  if (!activeService) return null

  return (
    <div className="container mx-auto px-4 md:px-0">
      <div className="bg-white rounded-2xl p-6 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden group/main">
        {/* Background Accent */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-50 pointer-events-none group-hover/main:scale-110 transition-transform duration-1000"></div>

        {/* Service Selection Carousel */}
        <div className="mb-8 relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4 text-secondary-600 font-bold uppercase tracking-widest text-sm">
              <span className="h-px w-8 bg-secondary-600"></span>
              Select a Service
            </div>

            <div className="flex gap-2">
              <button
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${prevBtnEnabled
                  ? 'bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 hover:border-primary-300 shadow-sm'
                  : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                  }`}
                aria-label="Previous services"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${nextBtnEnabled
                  ? 'bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 hover:border-primary-300 shadow-sm'
                  : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                  }`}
                aria-label="Next services"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {services.map(service => {
                const ServiceIcon = SERVICE_ICON_MAP[service.icon] || Building2
                const isActive = activeServiceId === service.id

                return (
                  <div key={service.id} className="flex-[0_0_auto] min-w-[200px] md:min-w-[240px]">
                    <button
                      onClick={() => setActiveServiceId(service.id)}
                      className={`flex items-center mx-1 px-5 py-2 rounded-2xl transition-all duration-300 ${isActive
                        ? 'bg-primary-600 text-white shadow-xl scale-[1.02] border border-transparent'
                        : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                        }`}
                    >
                      <div className={`mr-4 p-2 rounded-xl transition-all duration-500 ${isActive ? 'bg-white/20' : 'bg-white group-hover:bg-primary-50'
                        }`}>
                        <ServiceIcon size={16} className={isActive ? 'text-white' : 'text-secondary-600'} />
                      </div>
                      <div>
                        <span className="font-bold text-sm mr-3 capitalize">{service.title}</span>
                      </div>
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Active Service Showcase - Modern Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch relative z-10">
          {/* Left Side: Visuals and Quick Facts */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group flex-grow min-h-[400px]">
              <ImageWithFallback
                src={activeService.image || ''}
                alt={activeService.title}
                fallbackText={activeService.title}
                fill={true}
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-600 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-4 shadow-lg">
                  <Sparkles size={12} className="mr-2" />
                  Premium Solution
                </div>
                <h3 className="text-3xl font-black text-white mb-3 tracking-tight">{activeService.title}</h3>
                <div className={`w-16 h-1.5 rounded-full mb-4 bg-white/50`}></div>
              </div>
            </div>

            {/* Performance Stats Overlay */}
            <div className="grid grid-cols-2 gap-4">
              {serviceStats.slice(0, 2).map((stat, i) => (
                <div key={i} className={`rounded-2xl p-6 border ${i === 0 ? 'bg-gray-900 border-gray-800 text-white' : 'bg-primary-50 border-primary-100'
                  }`}>
                  <div className={`text-3xl font-black mb-1 ${i === 0 ? 'text-white' : 'text-primary-700'
                    }`}>{stat.value}</div>
                  <div className={`text-[10px] font-bold uppercase tracking-widest ${i === 0 ? 'text-gray-400' : 'text-primary-600/60'
                    }`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Detailed Content */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-gray-800 text-xs font-black uppercase tracking-widest mb-6">
                Service Overview
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tight">
                Excellence in <span className="text-gray-900">{activeService.title}</span>
              </h2>

              <p className="text-gray-600 text-xl leading-relaxed mb-12 font-medium">
                {activeService.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                {/* Capabilities */}
                <div>
                  <h4 className="text-lg font-black text-gray-900 mb-6 flex items-center">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3 bg-primary-50">
                      <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                    </div>
                    Core Capabilities
                  </h4>
                  <ul className="space-y-4">
                    {activeService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start group/li cursor-default">
                        <div className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-200 group-hover/li:bg-primary-600 transition-colors"></div>
                        <span className="text-gray-600 font-bold group-hover/li:text-gray-900 transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-lg font-black text-gray-900 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                      <Award size={16} className="text-yellow-600" />
                    </div>
                    Value Proposition
                  </h4>
                  <div className="space-y-3">
                    {activeService.benefits.map((benefit, idx) => (
                      <div key={idx} className="h-12 flex items-center px-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary-200 hover:bg-white transition-all duration-300">
                        <span className="text-gray-800 font-bold text-sm tracking-tight">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex">
              <Link
                href={`/projects?type=${activeService.name}`}
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-gray-900 text-white rounded-2xl font-black text-lg transition-all overflow-hidden hover:shadow-2xl hover:shadow-primary-200 hover:-translate-y-1 active:translate-y-0"
              >
                <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-strong bg-primary-600"></div>
                <span className="relative z-10 flex items-center">
                  Explore {activeService.title} Projects
                  <ArrowRight size={22} className="ml-3 group-hover:translate-x-2 transition-transform duration-500" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
