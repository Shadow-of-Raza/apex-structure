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
  content: string
  authorName: string
  authorRole: string
  authorAvatar: string
  categoryId: number
  category: BlogCategory
  tags: string[]
  featuredImage: string
  images?: string[]
  createdAt: string
  metaTitle?: string
  metaDescription?: string
  keywords?: string[]
  isActive: boolean
  isFeatured: boolean
}
