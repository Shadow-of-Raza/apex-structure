// src/lib/utils/projects.ts
import { projectsData } from '@/lib/constants/projects'
import { Project } from '@/lib/types'

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find(project => project.slug === slug)
}

export function getProjectsByStatus(status: 'planning' | 'ongoing' | 'completed' | 'upcoming'): Project[] {
  return projectsData.filter(project => project.status === status)
}

export function getProjectsByType(type: Project['type']): Project[] {
  return projectsData.filter(project => project.type === type)
}

export function getFeaturedProjects(count: number = 3): Project[] {
  // Return first 'count' projects
  return projectsData.slice(0, count)
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map(project => project.slug)
}

// Helper function to get project by ID (for backward compatibility)
export function getProjectById(id: string): Project | undefined {
  return projectsData.find(project => project.id === id)
}