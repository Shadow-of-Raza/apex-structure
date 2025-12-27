// src/lib/utils/projects.ts
import { Project, ProjectCategory, ProjectStatus, ProjectFilter } from '@/lib/types'
import { projectsData, PROJECT_CATEGORIES, PROJECT_STATUSES, PROJECT_TYPE_COLORS } from '@/lib/constants/projects'
import { CATEGORY_CONFIG, STATUS_CONFIG } from '@/lib/constants/projects'

// Data access functions
export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find(project => project.slug === slug)
}

export function getProjectById(id: string): Project | undefined {
  return projectsData.find(project => project.id === id)
}

export function getAllProjects(): Project[] {
  return projectsData
}

export function getProjectsByStatus(status: Project['status']): Project[] {
  return projectsData.filter(project => project.status === status)
}

export function getProjectsByType(type: Project['type']): Project[] {
  return projectsData.filter(project => project.type === type)
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map(project => project.slug)
}

// Dynamic calculation functions
export function getProjectCategoriesWithCounts(): ProjectCategory[] {
  return PROJECT_CATEGORIES.map(category => ({
    ...category,
    projectCount: projectsData.filter(project => project.type === category.slug).length
  }))
}

export function getProjectStatusesWithCounts(): ProjectStatus[] {
  return PROJECT_STATUSES.map(status => ({
    ...status,
    count: projectsData.filter(project => project.status === status.id).length
  }))
}

// Location helper functions
export function getFormattedAddress(project: Project): string {
  return `${project.address.street}, ${project.address.city}, ${project.address.state} ${project.address.zipCode}`
}

export function getFormattedLocation(project: Project): string {
  return `${project.address.city}, ${project.address.state}`
}

// Similar projects function
export function getSimilarProjects(currentProject: Project, limit: number = 2): Project[] {
  const similar = projectsData
    .filter(p => p.type === currentProject.type && p.id !== currentProject.id)
    .slice(0, limit)

  if (similar.length < limit) {
    const additional = projectsData
      .filter(p => p.id !== currentProject.id && !similar.some(s => s.id === p.id))
      .slice(0, limit - similar.length)
    return [...similar, ...additional]
  }

  return similar
}

// Get unique locations (cities) from all projects
export function getUniqueLocations(): string[] {
  const cities = projectsData.map(project => project.address.city)
  return [...new Set(cities)].sort()
}

// Get project type color
export function getProjectTypeColor(type: Project['type']): string {
  return PROJECT_TYPE_COLORS[type] || 'from-primary-500 to-primary-700'
}

// Export projectsData for convenience
export { projectsData }

// Add this function to get unique cities
export function getUniqueCities(): string[] {
  return getUniqueLocations() // Using existing function
}


// Get category config
export function getCategoryConfig(category: string) {
  return CATEGORY_CONFIG[category as keyof typeof CATEGORY_CONFIG] || CATEGORY_CONFIG.all
}

// Get status config
export function getStatusConfig(status: string) {
  return STATUS_CONFIG[status as keyof typeof STATUS_CONFIG] || STATUS_CONFIG.all
}

// Get total projects count
export function getTotalProjectsCount(): number {
  return projectsData.length
}

// Get total cities count
export function getTotalCitiesCount(): number {
  const uniqueCities = new Set<string>()
  projectsData.forEach(project => {
    uniqueCities.add(project.address.city)
  })
  return uniqueCities.size
}



// Update getFeaturedProjects function to use isFeatured field
export function getFeaturedProjects(count: number = 6): Project[] {
  // Get all featured projects first
  const featured = projectsData.filter(project => project.isFeatured)
  
  // If we have enough featured projects, return them (limited by count)
  if (featured.length >= count) {
    return featured.slice(0, count)
  }
  
  // If not enough featured projects, add recent non-featured projects
  const remainingCount = count - featured.length
  const nonFeatured = projectsData
    .filter(project => !project.isFeatured)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, remainingCount)
  
  return [...featured, ...nonFeatured]
}

// Add a new function to get only featured projects
export function getOnlyFeaturedProjects(): Project[] {
  return projectsData.filter(project => project.isFeatured)
}

// Add function to get featured projects count
export function getFeaturedProjectsCount(): number {
  return projectsData.filter(project => project.isFeatured).length
}

// Update getHeroStats to include featured projects count
export function getHeroStats() {
  return {
    totalProjects: getTotalProjectsCount(),
    totalCities: getTotalCitiesCount(),
    featuredProjects: getFeaturedProjectsCount(), // NEW STAT
    formattedProjects: `${getTotalProjectsCount()}+ Projects`,
    formattedCities: `${getTotalCitiesCount()}+ Cities`,
    formattedFeatured: `${getFeaturedProjectsCount()} Featured Projects`
  }
}

export function getFilteredProjects(filters: ProjectFilter): Project[] {
  return projectsData.filter(project => {
    if (filters.type?.length && !filters.type.includes(project.type)) return false
    if (filters.status?.length && !filters.status.includes(project.status)) return false
    if (filters.city?.length && !filters.city.includes(project.address.city)) return false
    
    if (filters.minArea || filters.maxArea) {
      const areaNumber = parseInt(project.area.replace(/,/g, ''))
      if (filters.minArea && areaNumber < filters.minArea) return false
      if (filters.maxArea && areaNumber > filters.maxArea) return false
    }

    // Note: We could add isFeatured filter here if needed in future
    // if (filters.isFeatured !== undefined && project.isFeatured !== filters.isFeatured) return false
    
    return true
  })
}

export function toggleFeaturedStatus(projectId: string): boolean {
  const projectIndex = projectsData.findIndex(p => p.id === projectId)
  if (projectIndex === -1) return false
  
  projectsData[projectIndex].isFeatured = !projectsData[projectIndex].isFeatured
  return projectsData[projectIndex].isFeatured
}