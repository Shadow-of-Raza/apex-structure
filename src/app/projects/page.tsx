// src/app/projects/page.tsx
import { Suspense } from 'react'
import PageHeader from '@/components/common/Layout/PageHeader'
import ProjectList from '@/components/projects/ProjectList'
import {
  getAllProjects,
  getHeroStats
} from '@/lib/utils/projects'
import { PROJECTS_IMAGES } from '@/lib/constants/page-header'

export const revalidate = 0 // Ensure fresh data on every request

export default async function ProjectsPage() {
  // Fetch data on the server
  const allProjects = await getAllProjects()
  const stats = await getHeroStats()

  const citiesCovered = stats?.formattedCities || '0+ Cities'

  return (
    <>
      {/* Hero Section */}
      <PageHeader
        images={PROJECTS_IMAGES}
        imageTransitionInterval={6000}
        showOverlay={true}
        overlayOpacity={0.7}
      />

      {/* Main Content Section */}
      <div>
        <Suspense fallback={
          <div className="container mx-auto px-4 py-20 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading projects...</p>
          </div>
        }>
          <ProjectList
            projects={allProjects}
            title="Our Project Portfolio"
            description={`${allProjects.length} projects across ${citiesCovered}`}
            showFilters={true}
            showSearch={true}
            showViewAll={false}
            showViewToggle={true}
            defaultViewMode="grid"
            itemsPerPage={6}
            showPagination={true}
            showCategoryFilter={true}
            showStatusFilter={true}
            showLocationFilter={true}
            syncWithURL={true}
          />
        </Suspense>
      </div>
    </>
  )
}