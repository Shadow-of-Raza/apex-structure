import { BlogPost, BlogCategory } from '@/lib/types/blog'

export const blogCategories: BlogCategory[] = []
export const blogPosts: BlogPost[] = []

export const getPostBySlug = (slug: string) => blogPosts.find(post => post.slug === slug)
export const getPostsByCategory = (categoryId: number) => blogPosts.filter(post => post.categoryId === categoryId)
export const getRecentPosts = (limit: number = 4) => [...blogPosts].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, limit)
export const getPopularPosts = (limit: number = 4) => [...blogPosts].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, limit)

export const recentPosts = getRecentPosts()
export const popularPosts = getPopularPosts()