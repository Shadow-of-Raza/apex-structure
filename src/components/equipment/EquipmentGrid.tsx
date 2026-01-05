// src/components/equipment/EquipmentGrid.tsx
'use client'

import { useState } from 'react'
import { equipmentData } from '@/lib/constants/equipment'
import EquipmentCard from './EquipmentCard'
import ImageModal from '@/app/gallery/components/ImageModal'

export default function EquipmentGrid() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    images: string[];
    index: number;
  }>({
    isOpen: false,
    images: [],
    index: 0
  })

  const [flippedCardId, setFlippedCardId] = useState<number | null>(null)

  const openModal = (images: string[]) => {
    setModalState({
      isOpen: true,
      images,
      index: 0
    })
  }

  const handleToggleFlip = (id: number) => {
    setFlippedCardId(prev => prev === id ? null : id)
  }

  return (
    <>
      <div className="container mx-auto px-4 py-10">
        {/* Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-primary-600 font-bold uppercase tracking-[0.2em] text-sm mb-6">
              <span className="w-12 h-px bg-primary-600"></span>
              Our Industrial Arsenal
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-black-200 leading-[0.95] mb-6">
              Capital Equipment <span className="text-secondary-500">&</span> Construction Machinery
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Explore our comprehensive fleet of state-of-the-art construction machinery. Each unit is maintained to the highest safety and performance standards.
            </p>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipmentData.map((item) => (
            <EquipmentCard
              key={item.id}
              equipment={item}
              isFlipped={flippedCardId === item.id}
              onToggleFlip={() => handleToggleFlip(item.id)}
              onViewImage={openModal}
            />
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState(prev => ({ ...prev, isOpen: false }))}
        images={modalState.images}
        currentIndex={modalState.index}
        onIndexChange={(index) => setModalState(prev => ({ ...prev, index }))}
      />

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </>
  )
}