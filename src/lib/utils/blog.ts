import { BlogPost } from '../types/blog'

export function calculateReadTime(content: string): string {
    const wordsPerMinute = 200
    const words = content.trim().split(/\s+/).length
    const time = Math.ceil(words / wordsPerMinute)
    return `${time} min read`
}

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
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
        .slice(0, limit)
}

export function generateSlug(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-')
}

// Data Fetching Helpers
export function getPostBySlug(posts: BlogPost[], slug: string): BlogPost | undefined {
    return posts.find(post => post.slug === slug)
}

export function getPostsByCategory(posts: BlogPost[], categoryId: number): BlogPost[] {
    return posts.filter(post => post.categoryId === categoryId)
}

export function getRecentPosts(posts: BlogPost[], limit: number = 4): BlogPost[] {
    return [...posts].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, limit)
}
