'use client'

import { useState, useMemo } from 'react'
import { Search, Filter, Calendar, User, Eye, MessageCircle, ChevronRight, Tag } from 'lucide-react'
import Link from 'next/link'
import Container from '@/components/common/Layout/Container'
import PageHeader from '@/components/common/Layout/PageHeader'
import Section from '@/components/common/Layout/Section'
import Button from '@/components/common/UI/Button'
import { 
  blogPosts, 
  blogCategories, 
  blogTags, 
  recentPosts, 
  popularPosts,
  searchPosts,
  paginatePosts 
} from '@/lib/constants/blogs'
import { formatDate } from '@/lib/utils/format'

// Sort options
const sortOptions = [
  { id: 'newest', label: 'Newest First' },
  { id: 'popular', label: 'Most Popular' },
  { id: 'featured', label: 'Featured' }
]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedTag, setSelectedTag] = useState<string>('')
  const [sortBy, setSortBy] = useState('newest')
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 9

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let filtered = [...blogPosts]

    // Apply search
    if (searchQuery) {
      filtered = searchPosts(searchQuery)
    }

    // Apply category filter
    if (selectedCategory && selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category.slug === selectedCategory)
    }

    // Apply tag filter
    if (selectedTag) {
      filtered = filtered.filter(post => post.tags.includes(selectedTag))
    }

    // Apply sorting
    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
        break
      case 'popular':
        filtered.sort((a, b) => b.views - a.views)
        break
      case 'featured':
        filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0))
        break
    }

    return filtered
  }, [searchQuery, selectedCategory, selectedTag, sortBy])

  // Paginate posts
  const { posts, totalPages, totalPosts } = paginatePosts(filteredPosts, currentPage, postsPerPage)

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentPage(1) // Reset to first page on new search
  }

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCategory('all')
    setSelectedTag('')
    setSortBy('newest')
    setCurrentPage(1)
  }

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      let start = Math.max(1, currentPage - 2)
      let end = Math.min(totalPages, start + maxVisiblePages - 1)
      
      if (end - start + 1 < maxVisiblePages) {
        start = end - maxVisiblePages + 1
      }
      
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }
    }
    
    return pages
  }

  return (
    <>
      {/* Hero Section */}
      <PageHeader
        title="Blog & Insights"
        description="Expert insights, industry news, and construction tips from our team of professionals"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blogs' }
        ]}
      />
      
      <Section>
        <Container>
          {/* Search and Filters */}
          <div className="mb-12">
            {/* Search Bar */}
            <div className="mb-8">
              <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles, topics, or keywords..."
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  >
                    Search
                  </Button>
                </div>
              </form>
            </div>

            {/* Filters */}
            <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center mb-8">
              {/* Category Filter */}
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <Filter size={18} className="text-gray-600 mr-2" />
                  <h3 className="font-semibold text-gray-700">Filter by Category</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-4 py-2 rounded-lg transition ${
                      selectedCategory === 'all'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    All ({blogPosts.length})
                  </button>
                  {blogCategories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.slug)
                        setCurrentPage(1)
                      }}
                      className={`px-4 py-2 rounded-lg transition ${
                        selectedCategory === category.slug
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort Options */}
              <div>
                <div className="flex items-center mb-4">
                  <h3 className="font-semibold text-gray-700">Sort by</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sortOptions.map(option => (
                    <button
                      key={option.id}
                      onClick={() => setSortBy(option.id)}
                      className={`px-4 py-2 rounded-lg transition ${
                        sortBy === option.id
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Active Filters */}
            {(selectedCategory !== 'all' || selectedTag || searchQuery) && (
              <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex flex-wrap gap-2">
                  {selectedCategory !== 'all' && (
                    <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                      Category: {blogCategories.find(c => c.slug === selectedCategory)?.name}
                      <button 
                        onClick={() => setSelectedCategory('all')}
                        className="ml-2 text-primary-600 hover:text-primary-800"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {selectedTag && (
                    <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      Tag: {selectedTag}
                      <button 
                        onClick={() => setSelectedTag('')}
                        className="ml-2 text-blue-600 hover:text-blue-800"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {searchQuery && (
                    <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                      Search: "{searchQuery}"
                      <button 
                        onClick={() => setSearchQuery('')}
                        className="ml-2 text-green-600 hover:text-green-800"
                      >
                        ×
                      </button>
                    </span>
                  )}
                </div>
                <button
                  onClick={clearFilters}
                  className="text-sm text-gray-600 hover:text-gray-800 underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>

          {/* Blog Posts Grid */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">
                {selectedCategory === 'all' ? 'All Articles' : blogCategories.find(c => c.slug === selectedCategory)?.name}
              </h2>
              <div className="text-gray-600">
                Showing {posts.length} of {totalPosts} articles
              </div>
            </div>

            {posts.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-2xl font-bold mb-2">No articles found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search or filter to find what you're looking for
                </p>
                <Button onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map(post => (
                  <article key={post.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {/* Featured Image */}
                    <Link href={`/blogs/${post.slug}`} className="block">
                      <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 relative overflow-hidden">
                        {post.isFeatured && (
                          <div className="absolute top-4 left-4 z-10">
                            <span className="px-3 py-1 bg-secondary-500 text-white text-xs font-semibold rounded-full">
                              Featured
                            </span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center text-white opacity-80 group-hover:opacity-60 transition-opacity">
                          <div className="text-center">
                            <div className="text-4xl font-bold opacity-50">AS</div>
                            <p className="mt-2 opacity-70 text-sm">Blog Image</p>
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                            {post.category.name}
                          </span>
                        </div>
                      </div>
                    </Link>
                    
                    {/* Content */}
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
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map(tag => (
                          <button
                            key={tag}
                            onClick={() => {
                              setSelectedTag(tag)
                              setCurrentPage(1)
                            }}
                            className="inline-flex items-center text-xs text-primary-600 hover:text-primary-700"
                          >
                            <Tag size={12} className="mr-1" />
                            {tag}
                          </button>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="text-xs text-gray-500">
                            +{post.tags.length - 2} more
                          </span>
                        )}
                      </div>
                      
                      {/* Author and Stats */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-sm font-bold mr-3">
                            {post.author.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="font-medium text-sm">{post.author.name}</div>
                            <div className="text-xs text-gray-500">{post.author.role}</div>
                          </div>
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
                ))}
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mb-12">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                Previous
              </button>
              
              {getPageNumbers().map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg transition ${
                    currentPage === page
                      ? 'bg-primary-600 text-white'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                Next
              </button>
            </div>
          )}

          {/* Sidebar - Recent & Popular Posts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Popular Tags */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Popular Topics</h3>
                <div className="flex flex-wrap gap-3">
                  {blogTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => {
                        setSelectedTag(tag)
                        setCurrentPage(1)
                      }}
                      className={`px-4 py-2 rounded-full transition ${
                        selectedTag === tag
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Subscription */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-primary-100 mb-6">
                  Get the latest construction tips, industry insights, and project updates delivered to your inbox.
                </p>
                <form className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
                    />
                    <Button type="submit" variant="secondary" className="whitespace-nowrap">
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-sm text-primary-200">
                    By subscribing, you agree to our Privacy Policy
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Recent Posts */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-6 pb-4 border-b border-gray-100">Recent Articles</h3>
                <div className="space-y-4">
                  {recentPosts.map(post => (
                    <div key={post.id} className="flex items-start group">
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-xs font-bold mr-4">
                        {formatDate(post.publishedAt).split(' ')[0]}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1 group-hover:text-primary-600 transition-colors">
                          <Link href={`/blogs/${post.slug}`} className="hover:underline">
                            {post.title}
                          </Link>
                        </h4>
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar size={12} className="mr-1" />
                          {formatDate(post.publishedAt)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Posts */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-6 pb-4 border-b border-gray-100">Most Popular</h3>
                <div className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <div key={post.id} className="flex items-center group">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-sm font-bold mr-4">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm mb-1 group-hover:text-primary-600 transition-colors">
                          <Link href={`/blogs/${post.slug}`} className="hover:underline">
                            {post.title}
                          </Link>
                        </h4>
                        <div className="flex items-center text-xs text-gray-500">
                          <Eye size={12} className="mr-1" />
                          {post.views.toLocaleString()} views
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-6 pb-4 border-b border-gray-100">Categories</h3>
                <div className="space-y-3">
                  {blogCategories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.slug)
                        setCurrentPage(1)
                      }}
                      className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-50 transition group"
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center mr-4">
                          <span className="text-primary-600 font-bold">{category.name[0]}</span>
                        </div>
                        <span className={`font-medium ${
                          selectedCategory === category.slug ? 'text-primary-600' : 'text-gray-700'
                        }`}>
                          {category.name}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-500 mr-2">{category.count}</span>
                        <ChevronRight size={16} className="text-gray-400 group-hover:text-primary-600 transition-colors" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}