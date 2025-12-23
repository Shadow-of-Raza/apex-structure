export interface GalleryImage {
  id: string
  title: string
  description: string
  imageUrl: string
  thumbnailUrl: string
  category: 'progress' | 'completed' | 'quality' | 'team' | 'equipment'
  projectType: 'residential' | 'commercial' | 'industrial' | 'mixed-use'
  projectName: string
  year: number
  tags: string[]
  views: number
  likes: number
  downloads: number
  resolution: string
  fileSize: string
  uploadedAt: string
  location?: string
  photographer?: string
}

export interface GalleryCategory {
  id: string
  name: string
  description: string
  count: number
  icon: string
}

export interface GalleryFilter {
  category: string
  projectType: string
  year: string
}

export interface GalleryStats {
  totalImages: number
  totalProjects: number
  totalViews: number
  totalDownloads: number
  categories: Record<string, number>
}