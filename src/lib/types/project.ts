// src/lib/types/project.ts
export interface Project {
  id: string
  slug: string
  title: string
  description: string
  fullDescription: string
  type: 'residential' | 'commercial' | 'industrial' | 'mixed-use' | 'hospitality'
  status: 'planning' | 'ongoing' | 'completed' | 'upcoming'
  startDate: string
  completionDate: string
  area: string
  budget: string
  client: string
  architect: string
  features: string[]
  highlights: string[]
  images: {
    main: string
    gallery: string[]
  }
  amenities: string[]
  sustainabilityFeatures: string[]
  address: {
    street: string
    city: string
    state: string
    zipCode: string
  }
  isFeatured: boolean
  createdAt: string
  updatedAt: string
}

export interface ProjectCategory {
  id: string
  name: string
  slug: string
  description: string
  projectCount: number
}

export interface ProjectFilter {
  type?: string[]
  status?: string[]
  city?: string[] // city names
  minArea?: number
  maxArea?: number
}

// Status with color configuration
export interface ProjectStatus {
  id: 'planning' | 'ongoing' | 'completed' | 'upcoming'
  name: string
  color: string
  count: number
}

// For consistent type colors across the app
export type ProjectTypeColor = {
  [key in Project['type']]: string
}