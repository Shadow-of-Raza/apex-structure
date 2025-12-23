// src/lib/types/project.ts
export interface Project {
  id: string
  slug: string
  title: string
  description: string
  fullDescription: string
  location: string
  type: 'residential' | 'commercial' | 'industrial' | 'mixed-use' | 'hospitality'
  status: 'planning' | 'ongoing' | 'completed' | 'upcoming'
  startDate: string
  completionDate: string
  area: string // in square feet
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
  coordinates?: {
    lat: number
    lng: number
  }
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
  location?: string[]
  minArea?: number
  maxArea?: number
}