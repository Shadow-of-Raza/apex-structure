import { BlogPost, BlogCategory } from '../types/blog'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'


export function formatBlogDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })
}

export function getRelatedPosts(posts: BlogPost[], currentPost: BlogPost, limit: number = 3): BlogPost[] {
    return posts
        .filter(post => post.id !== currentPost.id)
        .filter(post =>
            post.categoryId === currentPost.categoryId ||
            post.tags.some(tag => currentPost.tags.includes(tag))
        )
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, limit)
}

export function generateSlug(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-')
}

// Data Fetching Helpers
export async function getActiveBlogPosts(options: { page?: number; limit?: number; category?: string } = {}) {
    const params = new URLSearchParams()
    if (options.page) params.append('page', options.page.toString())
    if (options.limit) params.append('limit', options.limit.toString())
    if (options.category) params.append('category', options.category)

    const res = await fetch(`${API_URL}/blog/active?${params.toString()}`, {
        next: { revalidate: 60 },
    })

    if (!res.ok) throw new Error('Failed to fetch active blog posts')
    return res.json()
}

export async function getFeaturedBlogPosts(limit: number = 3) {
    const res = await fetch(`${API_URL}/blog/featured?limit=${limit}`, {
        next: { revalidate: 60 },
    })

    if (!res.ok) throw new Error('Failed to fetch featured blog posts')
    return res.json()
}

export async function getBlogPosts(options: {
    page?: number;
    limit?: number;
    category?: string;
    tag?: string;
    featured?: boolean;
    all?: boolean;
} = {}) {
    const params = new URLSearchParams()
    if (options.page) params.append('page', options.page.toString())
    if (options.limit) params.append('limit', options.limit.toString())
    if (options.category) params.append('category', options.category)
    if (options.tag) params.append('tag', options.tag)
    if (options.featured) params.append('featured', 'true')
    if (options.all) params.append('all', 'true')

    const res = await fetch(`${API_URL}/blog/posts?${params.toString()}`, {
        next: { revalidate: 60 }, // Cache for 1 minute
    })

    if (!res.ok) throw new Error('Failed to fetch blog posts')
    return res.json()
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    const res = await fetch(`${API_URL}/blog/posts/${slug}`, {
        next: { revalidate: 60 },
    })

    if (!res.ok) {
        if (res.status === 404) return null
        throw new Error('Failed to fetch blog post')
    }
    const result = await res.json()
    return result.data
}

export async function getBlogCategories(): Promise<BlogCategory[]> {
    const res = await fetch(`${API_URL}/blog/categories`, {
        next: { revalidate: 86400 }, // Cache for 24 hours
    })

    if (!res.ok) throw new Error('Failed to fetch blog categories')
    const result = await res.json()
    return result.data
}

// Local Utility for Filtered Data
export function getPostsByCategory(posts: BlogPost[], categoryId: number): BlogPost[] {
    return posts.filter(post => post.categoryId === categoryId)
}

export function getRecentPosts(posts: BlogPost[], limit: number = 4): BlogPost[] {
    return [...posts].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, limit)
}
