// src/app/projects/page.tsx - Fix potential infinite loop issue
'use client'

import { useState, useMemo, useCallback } from 'react'
import { Building2 } from 'lucide-react'
import Container from '@/components/common/Layout/Container'
import Section from '@/components/common/Layout/Section'
import PageHeader from '@/components/common/Layout/PageHeader'
import ProjectList from '@/components/projects/ProjectList'
import { ProjectFilter } from '@/lib/types'
import Link from 'next/link'
import { 
  getAllProjects,
  getUniqueCities,
  getHeroStats // Import hero stats
} from '@/lib/utils/projects'

export default function ProjectsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>({})

  // Get ALL projects (not filtered)
  const allProjects = useMemo(() => getAllProjects(), [])
  const uniqueCities = useMemo(() => getUniqueCities(), [])
  
  // Get stats including featured projects
  const stats = useMemo(() => getHeroStats(), [])

  // Stats - using the new stats object
  const totalProjects = stats.totalProjects
  const totalArea = useMemo(() => allProjects.reduce((sum, project) => {
    const areaNum = parseInt(project.area.replace(/,/g, '')) || 0
    return sum + areaNum
  }, 0), [allProjects])
  const citiesCovered = stats.totalCities
  const featuredProjects = stats.featuredProjects

  // Handle filter change from ProjectList - FIXED to prevent infinite loops
  const handleFilterChange = useCallback((filters: any) => {
    const newFilter: ProjectFilter = {}
    
    if (filters.status && filters.status !== 'all') {
      newFilter.status = [filters.status]
    }
    
    if (filters.category && filters.category !== 'all') {
      newFilter.type = [filters.category]
    }
    
    if (filters.location && filters.location !== 'all') {
      newFilter.city = [filters.location]
    }
    
    // Only update if the filter has actually changed
    setActiveFilter(prev => {
      // Deep compare to avoid unnecessary updates
      const isSame = JSON.stringify(prev) === JSON.stringify(newFilter)
      return isSame ? prev : newFilter
    })
  }, [])

  return (
    <>
      {/* Hero Section - Updated with more stats */}
      <PageHeader
        title="Our Projects Portfolio"
        description={`Explore ${totalProjects} successful projects across ${citiesCovered} cities, featuring ${featuredProjects} premium developments delivered with excellence`}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Projects', href: '/projects' }
        ]}
      />

      {/* Main Content Section */}
          <div>
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
              onFilterChange={handleFilterChange}
              // onPageChange removed to prevent infinite loop
            />
          </div>

          {/* CTA Section - Updated text */}
          <div className="bg-primary-700 p-8 md:p-12 text-white mt-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-bold mb-2">Have a Project in Mind?</h3>
                <p className="text-primary-200">
                  Join our {allProjects.length}+ satisfied clients. Contact us to discuss your construction requirements and get a customized proposal
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact-us"
                  className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300 whitespace-nowrap text-center"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  href="/services"
                  className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300 whitespace-nowrap text-center"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
    </>
  )
}