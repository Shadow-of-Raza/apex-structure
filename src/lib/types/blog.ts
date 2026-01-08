export interface BlogCategory {
  id: number
  name: string
  slug: string
}

export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string // Main content as HTML/Markdown string
  authorName: string
  authorRole: string
  authorAvatar: string
  categoryId: number // Reference to category
  category: BlogCategory
  tags: string[]
  featuredImage: string
  images?: string[] // Additional gallery images
  publishedAt: string
  metaTitle?: string
  metaDescription?: string
  keywords?: string[]
}
