// src/components/equipment/EquipmentCard.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Plus, Maximize2, Hash, PenTool as Tool, Calendar } from 'lucide-react'
import { Equipment } from '@/lib/types/equipment'

interface EquipmentCardProps {
  equipment: Equipment
  isFlipped: boolean
  onToggleFlip: () => void
  onViewImage: (images: string[]) => void
}

export default function EquipmentCard({ equipment, isFlipped, onToggleFlip, onViewImage }: EquipmentCardProps) {

  return (
    <div
      className="relative h-[450px] w-full perspective-1000 cursor-pointer group"
      onClick={onToggleFlip}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''
          }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-lg border border-platinum bg-white">
          <div className="relative h-full w-full">
            <Image
              src={equipment.images[0]}
              alt={equipment.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay Name */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black-200/90 via-black-200/40 to-transparent p-6 pt-12">
              <h3 className="text-white text-xl font-black uppercase leading-tight">
                {equipment.name}
              </h3>
            </div>

            {/* Flip Indicator */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Plus size={20} className="transform group-hover:rotate-45 transition-transform duration-500" />
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl shadow-2xl border border-primary-500/20 bg-black-200 p-8 flex flex-col justify-between overflow-hidden">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary-600/10 rounded-bl-[100px] -mr-8 -mt-8" />

          <div className="relative z-10 space-y-6">
            <div>
              <span className="text-primary-500 text-xs font-black uppercase tracking-widest mb-1 block">
                Technical Specifications
              </span>
              <h3 className="text-white text-2xl font-black uppercase italic leading-none">
                {equipment.name}
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-primary-500">
                  <Tool size={16} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-tighter text-gray-500">Brand / Model</p>
                  <p className="text-sm font-bold text-white">{equipment.brand}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-primary-500">
                  <Hash size={16} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-tighter text-gray-500">Availability</p>
                  <p className="text-sm font-bold text-white">{equipment.count} Units</p>
                </div>
              </div>

              {equipment.year && (
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-primary-500">
                    <Calendar size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-tighter text-gray-500">Manufactured</p>
                    <p className="text-sm font-bold text-white">{equipment.year}</p>
                  </div>
                </div>
              )}
            </div>

            <p className="text-gray-400 text-xs leading-relaxed line-clamp-4 italic border-l-2 border-primary-600 pl-4">
              "{equipment.description}"
            </p>
          </div>

          <div className="relative z-10 flex gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onViewImage(equipment.images);
              }}
              className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2"
            >
              <Maximize2 size={14} />
              View Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}