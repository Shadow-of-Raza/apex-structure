import Link from 'next/link'
import { ArrowRight, Calendar, User } from 'lucide-react'
import Container from '@/components/common/Layout/Container'
import Section from '@/components/common/Layout/Section'
import { recentPosts } from '@/lib/constants/blogs'
import { formatDate } from '@/lib/utils/format'

export default function BlogPreview() {
  return (
    <Section background="gray">
      <Container>
        <div className="text-center mb-12">
          <span className="text-primary-600 font-semibold">LATEST INSIGHTS</span>
          <h2 className="text-4xl font-bold mt-2 mb-4">From Our Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with expert advice, industry trends, and construction insights
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentPosts.map(post => (
            <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Link href={`/blogs/${post.slug}`} className="block">
                <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 relative">
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                      {post.category.name}
                    </span>
                  </div>
                </div>
              </Link>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={14} className="mr-2" />
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                </div>
                
                <h3 className="text-xl font-bold mb-3 hover:text-primary-600 transition-colors">
                  <Link href={`/blogs/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-sm font-bold mr-3">
                      {post.author.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="text-sm font-medium">{post.author.name}</div>
                  </div>
                  <Link 
                    href={`/blogs/${post.slug}`}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Read →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            href="/blogs"
            className="inline-flex items-center justify-center border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-lg font-semibold text-lg transition duration-300"
          >
            View All Articles
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </Container>
    </Section>
  )
}