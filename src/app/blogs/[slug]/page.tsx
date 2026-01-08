import { notFound } from 'next/navigation'
import { blogPosts } from '@/lib/constants/blog'
import { getPostBySlug } from '@/lib/utils/blog'
import BlogDetail from '@/components/blogs/BlogDetail'

interface PageProps {
    params: Promise<{ slug: string }>
}

// Generate static params for SSG
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params
    const post = getPostBySlug(blogPosts, slug)

    if (!post) {
        return {
            title: 'Post Not Found',
        }
    }

    return {
        title: post.metaTitle || post.title,
        description: post.metaDescription || post.excerpt,
        keywords: post.keywords?.join(', ') || post.tags.join(', '),
    }
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params
    const post = getPostBySlug(blogPosts, slug)

    if (!post) {
        notFound()
    }

    return <BlogDetail post={post} />
}
