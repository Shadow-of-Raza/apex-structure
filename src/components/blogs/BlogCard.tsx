import Link from 'next/link'
import { Calendar, User, Clock, Eye, MessageCircle } from 'lucide-react'
import { BlogPost } from '@/lib/types/blog'
import { formatDate } from '@/lib/utils/format'

interface BlogCardProps {
  post: BlogPost
  variant?: 'default' | 'compact' | 'featured'
}

export default function BlogCard({ post, variant = 'default' }: BlogCardProps) {
  if (variant === 'compact') {
    return (
      <Link href={`/blogs/${post.slug}`} className="group block">
        <div className="flex items-start">
          <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-xs font-bold mr-4">
            {formatDate(post.publishedAt).split(' ')[0]}
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-1 group-hover:text-primary-600 transition-colors line-clamp-2">
              {post.title}
            </h4>
            <div className="flex items-center text-xs text-gray-500">
              <Calendar size={12} className="mr-1" />
              {formatDate(post.publishedAt)}
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <article className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <Link href={`/blogs/${post.slug}`} className="block">
        <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 relative overflow-hidden">
          {post.isFeatured && (
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 bg-secondary-500 text-white text-xs font-semibold rounded-full">
                Featured
              </span>
            </div>
          )}
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
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
          <Link href={`/blogs/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-sm font-bold mr-3">
              {post.author.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="text-sm font-medium">{post.author.name}</div>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span className="flex items-center">
              <Eye size={14} className="mr-1" />
              {post.views.toLocaleString()}
            </span>
            <span className="flex items-center">
              <MessageCircle size={14} className="mr-1" />
              {post.comments}
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}