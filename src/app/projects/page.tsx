// src/app/projects/page.tsx - Fix potential infinite loop issue
'use client'

import { useState, useMemo, useCallback, Suspense } from 'react'
import PageHeader from '@/components/common/Layout/PageHeader'
import ProjectList, { ProjectListFilter } from '@/components/projects/ProjectList'
import { ProjectFilter } from '@/lib/types'
import {
  getAllProjects,
  getHeroStats
} from '@/lib/utils/projects'
import { PROJECTS_IMAGES } from '@/lib/constants/page-header'


export default function ProjectsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  // const [activeFilter, setActiveFilter] = useState<ProjectFilter>({})

  // Get ALL projects (not filtered)
  const allProjects = useMemo(() => getAllProjects(), [])

  // Get stats including featured projects
  const stats = useMemo(() => getHeroStats(), [])

  // Stats - using the new stats object
  // const totalArea = useMemo(() => allProjects.reduce((sum, project) => {
  //   const areaNum = parseInt(project.area.replace(/,/g, '')) || 0
  //   return sum + areaNum
  // }, 0), [allProjects])

  const citiesCovered = stats.formattedCities


  // Handle filter change from ProjectList - FIXED to prevent infinite loops
  // const handleFilterChange = useCallback((filters: ProjectListFilter) => {
  //   const newFilter: ProjectFilter = {}

  //   if (filters.status) {
  //     newFilter.status = [filters.status]
  //   }

  //   if (filters.category) {
  //     newFilter.type = [filters.category]
  //   }

  //   if (filters.location) {
  //     newFilter.city = [filters.location]
  //   }

  //   // Only update if the filter has actually changed
  //   setActiveFilter(prev => {
  //     // Deep compare to avoid unnecessary updates
  //     const isSame = JSON.stringify(prev) === JSON.stringify(newFilter)
  //     return isSame ? prev : newFilter
  //   })
  // }, [])

  return (
    <>
      {/* Hero Section - Updated with more stats */}
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
            description={`${allProjects.length} projects across ${citiesCovered} cities`}
            showFilters={true}
            showSearch={true}
            showViewAll={false}
            showViewToggle={true}
            defaultViewMode={viewMode}
            itemsPerPage={6}
            showPagination={true}
            showCategoryFilter={true}
            showStatusFilter={true}
            showLocationFilter={true}
            syncWithURL={true}
            onViewModeChange={setViewMode}
            // onFilterChange={handleFilterChange}
          // onPageChange removed to prevent infinite loop
          />
        </Suspense>
      </div>
    </>
  )
}