// src/lib/utils/projects.ts
import { Project, ProjectCategory } from '@/lib/types'
import { STATUS_CONFIG } from '@/lib/constants/projects'
import { servicesData } from '@/lib/constants/services'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

// Data access functions (Async)
export async function getAllProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`, {
      cache: 'no-store'
    })
    if (!response.ok) throw new Error('Failed to fetch projects')
    const json = await response.json()
    // Backend returns { success: true, data: [...], pagination: {...} }
    return json.data || []
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  try {
    // Backend uses GET /api/projects/:slug (NOT /slug/:slug)
    const response = await fetch(`${API_BASE_URL}/projects/${slug}`, {
      cache: 'no-store'
    })
    if (!response.ok) return undefined
    const json = await response.json()
    return json.data
  } catch (error) {
    console.error(`Error fetching project by slug ${slug}:`, error)
    return undefined
  }
}

export async function getProjectById(id: number): Promise<Project | undefined> {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/id/${id}`, {
      cache: 'no-store'
    })
    if (!response.ok) return undefined
    const json = await response.json()
    return json.data
  } catch (error) {
    console.error(`Error fetching project by id ${id}:`, error)
    return undefined
  }
}

export async function getAllProjectSlugs(): Promise<string[]> {
  const projects = await getAllProjects()
  return projects.map(project => project.slug)
}

import { getAllServices } from './services'

// Stats & Metadata calculation functions
export async function getProjectCategoriesWithCounts(): Promise<ProjectCategory[]> {
  const [projects, services] = await Promise.all([
    getAllProjects(),
    getAllServices()
  ])

  return services.map(service => ({
    id: service.name,
    name: service.category_label || service.title,
    slug: service.name,
    description: service.short_description || service.description,
    projectCount: projects.filter(project => project.type === service.name).length
  }))
    .filter(cat => cat.projectCount > 0)
}

export async function getUniqueCities(): Promise<string[]> {
  const projects = await getAllProjects()
  const cities = projects.map(project => project.address.city)
  return [...new Set(cities)].sort()
}

export async function getCompletedProjectsCount(): Promise<number> {
  const stats = await getHeroStats()
  return stats.completedProjects || 0
}

export async function getTotalProjectsCount(): Promise<number> {
  return getCompletedProjectsCount()
}

export async function getFeaturedProjectsCount(): Promise<number> {
  const stats = await getHeroStats()
  return stats.featuredProjects || 0
}

export async function getFeaturedProjects(count: number = 6): Promise<Project[]> {
  const projects = await getAllProjects()
  const featured = projects.filter(project => project.isFeatured)

  if (featured.length >= count) {
    return featured.slice(0, count)
  }

  const remainingCount = count - featured.length
  const nonFeatured = projects
    .filter(project => !project.isFeatured)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, remainingCount)

  return [...featured, ...nonFeatured]
}

export async function getOnlyFeaturedProjects(): Promise<Project[]> {
  const projects = await getAllProjects()
  return projects.filter(project => project.isFeatured)
}

export async function getHeroStats() {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/stats`, {
      cache: 'no-store'
    })
    if (!response.ok) throw new Error('Failed to fetch stats')
    const json = await response.json()
    return json.data || {
      completedProjects: 0,
      citiesCovered: 0,
      featuredProjects: 0,
      formattedProjects: '0+',
      formattedCities: '0+ Cities'
    }
  } catch (error) {
    console.error('Error fetching hero stats:', error)
    return {
      completedProjects: 0,
      citiesCovered: 0,
      featuredProjects: 0,
      formattedProjects: '0+',
      formattedCities: '0+ Cities'
    }
  }
}

export async function getSimilarProjects(project: Project, limit: number = 2): Promise<Project[]> {
  const projects = await getAllProjects()
  return projects
    .filter(p => p.type === project.type && p.slug !== project.slug)
    .slice(0, limit)
}

// Synchronous helpers
export function getFormattedAddress(project: Project): string {
  return `${project.address.street}, ${project.address.city}, ${project.address.state} ${project.address.zipCode}`
}

export function getFormattedLocation(project: Project): string {
  return `${project.address.city}, ${project.address.state}`
}

export function getStatusConfig(status: string) {
  return STATUS_CONFIG[status as keyof typeof STATUS_CONFIG] || STATUS_CONFIG.all
}
