// src/components/equipment/EquipmentCard.tsx
'use client'

import { useState } from 'react'
import { Calendar, Users, Zap, Shield, Maximize2, ExternalLink } from 'lucide-react'
import { Equipment } from '@/lib/types/equipment'
import ImageCarousel from '@/components/common/UI/ImageCarousel'
import Link from 'next/link'

interface EquipmentCardProps {
  equipment: Equipment
}

export default function EquipmentCard({ equipment }: EquipmentCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image Carousel */}
      <div className="relative">
        <ImageCarousel 
          images={equipment.images} 
          alt={equipment.name}
          className="h-48"
        />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
            equipment.status === 'Available' 
              ? 'bg-green-100 text-green-800' 
              : equipment.status === 'In Use'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {equipment.status}
          </span>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 bg-black/70 backdrop-blur-sm text-white rounded-full text-sm font-medium">
            {equipment.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors">
              {equipment.name}
            </h3>
            <p className="text-gray-600 text-sm">{equipment.model}</p>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
            aria-label={isExpanded ? 'Show less' : 'Show more'}
          >
            <Maximize2 size={20} className="text-gray-500" />
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center">
            <Calendar size={16} className="text-gray-400 mr-2" />
            <div>
              <div className="text-sm text-gray-500">Year</div>
              <div className="font-semibold">{equipment.year}</div>
            </div>
          </div>
          <div className="flex items-center">
            <Zap size={16} className="text-gray-400 mr-2" />
            <div>
              <div className="text-sm text-gray-500">Capacity</div>
              <div className="font-semibold">{equipment.capacity} {equipment.unit}</div>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {equipment.description}
        </p>
        
        {equipment.count && (
          <div className="mb-3">
            <span className="inline-flex items-center px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">
              <Users size={12} className="mr-1" />
              {equipment.count} units available
            </span>
          </div>
        )}
        
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <h4 className="font-semibold mb-2 text-gray-700">Specifications:</h4>
            <ul className="space-y-1 mb-4">
              {equipment.specifications.slice(0, 3).map((spec, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{spec}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500">
                <Shield size={14} className="mr-1" />
                <span>Safety Level: {equipment.safetyRating}/5</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Users size={14} className="mr-1" />
                <span>Operators: {equipment.operatorCount}</span>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-6 flex justify-between items-center">
          <Link
            href={`/equipment/${equipment.id}`}
            className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center"
          >
            View Details
            <ExternalLink size={14} className="ml-1" />
          </Link>
          <button className="px-4 py-2 bg-primary-50 text-primary-700 hover:bg-primary-100 rounded-lg font-medium text-sm transition">
            Request Quote
          </button>
        </div>
      </div>
    </div>
  )
}