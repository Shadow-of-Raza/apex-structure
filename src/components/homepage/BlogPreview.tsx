import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'
import Container from '@/components/common/Layout/Container'
import Section from '@/components/common/Layout/Section'
import { getFeaturedBlogPosts } from '@/lib/utils/blog'
import { BlogPost } from '@/lib/types/blog'
import BlogCard from '@/components/blogs/BlogCard'
import Button from '@/components/common/UI/Button'

export default async function BlogPreview() {
  const { posts: recentPosts } = await getFeaturedBlogPosts(3)

  if (!recentPosts || recentPosts.length === 0) {
    return null
  }

  return (
    <section className="py-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-50 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">

        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 leading-tight">
            Engineering the <span className="text-primary-600">Future</span> of Infrastructure
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Dive into our latest technical papers, industry breakthroughs, and architectural innovations from the field.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-20">
          {recentPosts.map((post: BlogPost) => (
            <div key={post.id} className="h-full">
              <BlogCard post={post} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center justify-center px-6 py-2 bg-gray-900 text-white rounded-full font-bold hover:bg-primary-600 transition-all duration-300 shadow-xl hover:shadow-primary-600/30 transform hover:-translate-y-1"
          >
            View All Technical Publication
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}