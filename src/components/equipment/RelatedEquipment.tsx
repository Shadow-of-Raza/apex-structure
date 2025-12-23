// src/components/equipment/RelatedEquipment.tsx
'use client'
import { equipmentData } from '@/lib/constants/equipment'
import EquipmentCard from './EquipmentCard'

interface RelatedEquipmentProps {
  currentEquipmentId: string
  category: string
}

export default function RelatedEquipment({ currentEquipmentId, category }: RelatedEquipmentProps) {
  const relatedEquipment = equipmentData
    .filter(equipment => equipment.id !== currentEquipmentId && equipment.category === category)
    .slice(0, 3)

  if (relatedEquipment.length === 0) return null

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold mb-8">Related Equipment</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedEquipment.map(equipment => (
          <EquipmentCard key={equipment.id} equipment={equipment} />
        ))}
      </div>
    </div>
  )
}