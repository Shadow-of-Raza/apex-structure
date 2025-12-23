// src/app/equipment/page.tsx
import Container from '@/components/common/Layout/Container'
import PageHeader from '@/components/common/Layout/PageHeader'
import EquipmentGrid from '@/components/equipment/EquipmentGrid'
import EquipmentCategories from '@/components/equipment/EquipmentCategories'
import EquipmentStats from '@/components/equipment/EquipmentStats'
import TechnologyShowcase from '@/components/equipment/TechnologyShowcase'
import MaintenanceSection from '@/components/equipment/MaintenanceSection'
import EquipmentCTA from '@/components/equipment/EquipmentCTA'
import Section from '@/components/common/Layout/Section'

export default function EquipmentPage() {
  return (
    <>
      <PageHeader
        title="Equipment & Machinery"
        description="State-of-the-art construction equipment and technology infrastructure powering our projects with precision, safety, and efficiency."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Equipment', href: '/equipment' }
        ]}
      />
      
      {/* Featured Equipment Grid */}
      <Section background="gray">
        <Container>
          <EquipmentGrid />
        </Container>
      </Section>
      
      {/* Equipment Categories */}
      <Section id="categories">
        <Container>
          <EquipmentCategories />
        </Container>
      </Section>

      {/* Technology Showcase */}
      <Section>
        <Container>
          <TechnologyShowcase />
        </Container>
      </Section>
      
      {/* Equipment Stats */}
      <Section background="primary">
        <Container>
          <EquipmentStats />
        </Container>
      </Section>
      
      {/* Maintenance Section */}
      <Section background="gray">
        <Container>
          <MaintenanceSection />
        </Container>
      </Section>
      
      {/* CTA Section */}
      <Section>
        <Container>
          <EquipmentCTA />
        </Container>
      </Section>
    </>
  )
}