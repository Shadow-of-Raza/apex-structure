import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Calendar, 
  User, 
  Clock, 
  Eye, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Mail,
  ChevronLeft,
  Tag
} from 'lucide-react'
import Container from '@/components/common/Layout/Container'
import Section from '@/components/common/Layout/Section'
import Button from '@/components/common/UI/Button'
import { blogPosts, getRelatedPosts } from '@/lib/constants/blogs'
import { formatDate } from '@/lib/utils/format'
import BlogComments from '@/components/blogs/BlogComments'
import BlogAuthorBio from '@/components/blogs/BlogAuthorBio'
import RelatedPosts from '@/components/blogs/RelatedPosts'

// Generate static params for SSG
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }
  
  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    keywords: post.keywords?.join(', ') || post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug)
  
  if (!post) {
    notFound()
  }
  
  const relatedPosts = getRelatedPosts(post.id, 3)
  
  // Share URL
  const shareUrl = typeof window !== 'undefined' 
    ? window.location.href 
    : `https://apex-structure.com/blogs/${post.slug}`
  
  const shareText = `Check out this article: ${post.title}`
  
  return (
    <>
      {/* Hero Section */}
      <Section padding="none" className="relative">
        <div className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-primary-700 to-primary-900">
          <div className="absolute inset-0 bg-black/40" />
          <Container className="relative h-full flex flex-col justify-center text-white">
            <div className="max-w-4xl">
              <Link 
                href="/blogs" 
                className="inline-flex items-center text-white/80 hover:text-white mb-6 group"
              >
                <ChevronLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                  {post.category.name}
                </span>
                {post.isFeatured && (
                  <span className="px-4 py-2 bg-secondary-500 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center">
                  <User size={18} className="mr-2" />
                  <span className="font-medium">{post.author.name}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={18} className="mr-2" />
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                </div>
                <div className="flex items-center">
                  <Clock size={18} className="mr-2" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center">
                  <Eye size={18} className="mr-2" />
                  <span>{post.views.toLocaleString()} views</span>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Section>
      
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Image */}
              <div className="mb-8 rounded-2xl overflow-hidden">
                <div className="h-[400px] bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-8xl font-bold opacity-20">AS</div>
                    <p className="mt-4 opacity-70 text-lg">Featured Blog Image</p>
                  </div>
                </div>
              </div>
              
              {/* Article Content */}
              <article className="prose prose-lg max-w-none mb-12">
                {/* This would be your actual blog content in production */}
                <div className="space-y-6">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <h2 className="text-3xl font-bold mt-12 mb-6">Introduction</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Welcome to our deep dive into {post.title.toLowerCase()}. In this comprehensive guide, 
                    we'll explore the key aspects, benefits, and practical applications of this important topic 
                    in the construction and real estate industry.
                  </p>
                  
                  <h2 className="text-3xl font-bold mt-12 mb-6">Key Insights</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Based on our 18+ years of experience in the industry, we've identified several crucial 
                    factors that contribute to successful implementation. These insights are drawn from 
                    real-world projects and proven methodologies.
                  </p>
                  
                  <div className="bg-primary-50 border-l-4 border-primary-500 p-6 my-8 rounded-r-lg">
                    <p className="text-primary-800 font-semibold italic">
                      "Success in construction isn't just about building structures; it's about building 
                      relationships, trust, and communities that last for generations."
                    </p>
                    <div className="flex items-center mt-4">
                      <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold mr-3">
                        {post.author.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-bold text-primary-800">{post.author.name}</div>
                        <div className="text-sm text-primary-600">{post.author.role}</div>
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold mt-12 mb-6">Practical Applications</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Implementing these strategies requires careful planning and execution. Here are some 
                    practical steps you can take:
                  </p>
                  
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        ✓
                      </div>
                      <span>Start with thorough research and planning</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        ✓
                      </div>
                      <span>Consult with industry experts and professionals</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        ✓
                      </div>
                      <span>Implement in phases to monitor progress and adjust as needed</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        ✓
                      </div>
                      <span>Regular review and continuous improvement</span>
                    </li>
                  </ul>
                  
                  <h2 className="text-3xl font-bold mt-12 mb-6">Conclusion</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {post.title} represents a significant opportunity for growth and improvement in the 
                    construction industry. By embracing these principles and approaches, organizations 
                    can achieve better results, higher efficiency, and greater client satisfaction.
                  </p>
                </div>
              </article>
              
              {/* Tags */}
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <Tag size={20} className="text-gray-600 mr-2" />
                  <h3 className="text-lg font-semibold">Tags</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {post.tags.map(tag => (
                    <Link
                      key={tag}
                      href={`/blogs?tag=${tag}`}
                      className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full text-sm font-medium transition"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Share and Actions */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-6 bg-gray-50 rounded-2xl mb-12">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Share this article</h4>
                  <div className="flex space-x-3">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition"
                      aria-label="Share on Facebook"
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center text-white transition"
                      aria-label="Share on Twitter"
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center text-white transition"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Check out this article: ${shareUrl}`)}`}
                      className="w-10 h-10 bg-gray-600 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition"
                      aria-label="Share via Email"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-gray-600 hover:text-primary-600 transition">
                    <Bookmark size={20} className="mr-2" />
                    Save for later
                  </button>
                  <Button variant="outline">
                    <Share2 size={20} className="mr-2" />
                    Copy Link
                  </Button>
                </div>
              </div>
              
              {/* Author Bio */}
              <BlogAuthorBio author={post.author} />
              
              {/* Comments */}
              <BlogComments postId={post.id} />
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Related Posts */}
              <RelatedPosts posts={relatedPosts} currentPostId={post.id} />
              
              {/* Newsletter */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Never Miss an Update</h3>
                <p className="text-primary-100 mb-6 text-sm">
                  Subscribe to our newsletter for the latest insights, tips, and industry news.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
                  />
                  <Button type="submit" variant="secondary" fullWidth>
                    Subscribe Now
                  </Button>
                </form>
                <p className="text-xs text-primary-200 mt-4">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
              
              {/* Table of Contents */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-6">Table of Contents</h3>
                <nav className="space-y-2">
                  <a href="#introduction" className="block py-2 text-gray-600 hover:text-primary-600 transition">
                    Introduction
                  </a>
                  <a href="#key-insights" className="block py-2 text-gray-600 hover:text-primary-600 transition">
                    Key Insights
                  </a>
                  <a href="#practical-applications" className="block py-2 text-gray-600 hover:text-primary-600 transition">
                    Practical Applications
                  </a>
                  <a href="#conclusion" className="block py-2 text-gray-600 hover:text-primary-600 transition">
                    Conclusion
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}