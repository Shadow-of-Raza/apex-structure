// src/app/equipment/[id]/page.tsx
import { notFound } from 'next/navigation'
import Container from '@/components/common/Layout/Container'
import PageHeader from '@/components/common/Layout/PageHeader'
import EquipmentDetail from '@/components/equipment/EquipmentDetail'
import RelatedEquipment from '@/components/equipment/RelatedEquipment'
import { equipmentData } from '@/lib/constants/equipment'

interface EquipmentPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function EquipmentDetailPage({ params }: EquipmentPageProps) {
  const { id } = await params
  const equipment = equipmentData.find(item => item.id === id)
  
  if (!equipment) {
    notFound()
  }

  return (
    <>
      <PageHeader
        title={equipment.name}
        description={equipment.description}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Equipment', href: '/equipment' },
          { name: equipment.name, href: `/equipment/${equipment.id}` }
        ]}
      />
      
      <Container>
        <div className="py-12">
          <EquipmentDetail equipment={equipment} />
          <RelatedEquipment currentEquipmentId={equipment.id} category={equipment.category} />
        </div>
      </Container>
    </>
  )
}