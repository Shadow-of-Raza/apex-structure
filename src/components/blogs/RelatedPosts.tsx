import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'
import { BlogPost } from '@/lib/types/blog'
import { formatDate } from '@/lib/utils/format'

interface RelatedPostsProps {
  posts: BlogPost[]
  currentPostId: string
}

export default function RelatedPosts({ posts, currentPostId }: RelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-bold mb-6">Related Articles</h3>
      <div className="space-y-6">
        {posts.map(post => (
          <div key={post.id} className="group">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-20 h-20 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-xs font-bold mr-4">
                {formatDate(post.publishedAt).split(' ')[0]}
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2 group-hover:text-primary-600 transition-colors">
                  <Link href={`/blogs/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h4>
                <div className="flex items-center text-xs text-gray-500">
                  <Calendar size={12} className="mr-1" />
                  {formatDate(post.publishedAt)}
                  <span className="mx-2">•</span>
                  <Clock size={12} className="mr-1" />
                  {post.readTime}
                </div>
              </div>
            </div>
            {post.id !== posts[posts.length - 1].id && (
              <div className="border-t border-gray-100 mt-6 pt-6"></div>
            )}
          </div>
        ))}
      </div>
      
      <Link
        href="/blogs"
        className="inline-flex items-center justify-center w-full mt-6 px-4 py-3 bg-gray-50 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition text-center"
      >
        View All Articles
      </Link>
    </div>
  )
}