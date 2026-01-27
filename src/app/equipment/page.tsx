// src/app/equipment/page.tsx
import PageHeader from '@/components/common/Layout/PageHeader'
import EquipmentGrid from '@/components/equipment/EquipmentGrid'
import { EQUIPMENT_IMAGES } from '@/lib/constants/page-header'
import { getAllEquipments } from '@/lib/utils/equipment'

export default async function EquipmentPage() {
  const equipments = await getAllEquipments()

  return (
    <>
      <PageHeader
        images={EQUIPMENT_IMAGES}
        imageTransitionInterval={6000}
        showOverlay={true}
        overlayOpacity={0.7}
      />

      <EquipmentGrid equipments={equipments} />
    </>
  )
}