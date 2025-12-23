export interface BlogAuthor {
  id: string
  name: string
  role: string
  avatar?: string
  bio?: string
  socialLinks?: {
    twitter?: string
    linkedin?: string
    website?: string
  }
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  count: number
  description?: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: BlogAuthor
  category: BlogCategory
  tags: string[]
  featuredImage: string
  images?: string[]
  readTime: string
  publishedAt: string
  updatedAt: string
  isFeatured: boolean
  views: number
  comments: number
  metaTitle?: string
  metaDescription?: string
  keywords?: string[]
}

export interface BlogComment {
  id: string
  postId: string
  author: {
    name: string
    email: string
    avatar?: string
  }
  content: string
  createdAt: string
  replies?: BlogComment[]
}

export interface BlogFilters {
  category?: string
  tag?: string
  search?: string
  sortBy?: 'newest' | 'popular' | 'featured'
  page?: number
  limit?: number
}