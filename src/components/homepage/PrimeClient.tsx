'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Plus, X } from 'lucide-react'
import { CLIENTS } from '@/lib/constants/client'
import { Client } from '@/lib/types/client'

export default function PrimeClient() {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Filter prime clients
  const primeClients = CLIENTS.filter(client => client.isPrime)

  // Staggered circular rows with starting indices: 1, 7, 13, 19
  const rotateArr = (arr: Client[], start: number) => [...arr.slice(start - 1), ...arr.slice(0, start - 1)]

  const row1 = rotateArr(CLIENTS, 1)
  const row2 = rotateArr(CLIENTS, 1).reverse()

  useEffect(() => {
    if (selectedClient) {
      setIsModalOpen(true)
      document.body.style.overflow = 'hidden'
    } else {
      setIsModalOpen(false)
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedClient])

  const MarqueeRow = ({ clients, speed, reverse = false }: { clients: Client[], speed: string, reverse?: boolean }) => (
    <div className="container mx-auto px-4 relative flex overflow-x-hidden group w-full">
      <div className={`py-2 whitespace-nowrap flex gap-4 px-4 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`} style={{ animationDuration: speed }}>
        {clients.map((client, index) => (
          <div
            key={`${client.id}-${index}`}
            onClick={() => setSelectedClient(client)}
            className="relative flex-none w-[180px] h-[120px] md:w-[240px] md:h-[160px] overflow-hidden rounded-xl bg-gray-100 cursor-pointer group/card transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-200"
          >
            <Image
              src={client.logoImage}
              alt={client.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover/card:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/20 transition-colors duration-300" />
          </div>
        ))}
      </div>
      {/* Duplicate for seamless loop */}
      <div className={`py-2 whitespace-nowrap flex gap-4 px-4 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`} style={{ animationDuration: speed }}>
        {clients.map((client, index) => (
          <div
            key={`loop-${client.id}-${index}`}
            onClick={() => setSelectedClient(client)}
            className="relative flex-none w-[180px] h-[120px] md:w-[240px] md:h-[160px] overflow-hidden rounded-xl bg-gray-100 cursor-pointer group/card transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-200"
          >
            <Image
              src={client.logoImage}
              alt={client.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover/card:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/20 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="text-center mb-6">
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 leading-tight">
          Our <span className="text-primary-600">Clients</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Partnering with industry leaders across the globe to build the future of infrastructure and design.
        </p>
      </div>

      <div className="flex flex-col gap-0">
        <MarqueeRow clients={row1} speed="120s" />
        <MarqueeRow clients={row2} speed="120s" reverse />
      </div>

      {/* Detail Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${isModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedClient(null)}
        />

        <div
          className={`relative w-full max-w-4xl bg-white rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] z-10 transition-all duration-500 transform ${isModalOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-8 opacity-0'}`}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedClient(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-gray-100/80 hover:bg-gray-200 text-gray-900 transition-all z-20 shadow-sm border border-gray-200 group"
            aria-label="Close modal"
          >
            <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>


          {selectedClient && (
            <div className="flex flex-col md:flex-row h-full min-h-[500px]">
              {/* Image Section */}
              <div className="relative w-full md:w-1/2 h-[350px] md:h-auto overflow-hidden bg-gray-50/50 flex items-center justify-center p-8">
                <div className="relative w-full h-full">
                  <Image
                    src={selectedClient.logoImage}
                    alt={selectedClient.alt}
                    fill
                    className="object-contain transition-opacity duration-700"
                  />
                </div>
              </div>


              {/* Content Section */}
              <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-between bg-white relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-[5rem] -z-10 opacity-50" />

                <div className="space-y-8">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
                      {selectedClient.name}
                    </h3>
                    <div className="w-20 h-1.5 bg-primary-600 rounded-full" />
                  </div>

                  <div className="space-y-6">
                    <p className="text-gray-600 text-lg leading-relaxed font-light">
                      {selectedClient.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse linear infinite;
        }
        .group:hover .animate-marquee,
        .group:hover .animate-marquee-reverse {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}
