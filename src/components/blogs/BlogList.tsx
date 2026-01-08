'use client'

import React, { useState, useMemo, useEffect } from 'react'
import {
    Building2,
    TrendingUp,
    Filter,
    ChevronLeft,
    ChevronRight,
    Sparkles,
    Search,
    Grid,
    List,
    Layers,
    BookOpen
} from 'lucide-react'
import { BlogPost, BlogCategory } from '@/lib/types/blog'
import BlogCard from './BlogCard'
import { useRouter, useSearchParams } from 'next/navigation'

interface BlogListProps {
    initialPosts: BlogPost[]
    categories: BlogCategory[]
    title?: string
    description?: string
    itemsPerPage?: number
}

export default function BlogList({
    initialPosts,
    categories,
    title = "Our Technical Insights",
    description = "Explore our collection of industry expertise and project breakthroughs",
    itemsPerPage = 6
}: BlogListProps) {
    const searchParams = useSearchParams()
    const router = useRouter()

    const [activeCategory, setActiveCategory] = useState<string>(searchParams.get('category') || 'all')
    const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '')
    const [currentPage, setCurrentPage] = useState<number>(Number(searchParams.get('page')) || 1)
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

    // Update URL filter params
    useEffect(() => {
        const params = new URLSearchParams()
        if (activeCategory !== 'all') params.set('category', activeCategory)
        if (searchQuery) params.set('search', searchQuery)
        if (currentPage > 1) params.set('page', currentPage.toString())

        const query = params.toString()
        router.replace(query ? `/blogs?${query}` : '/blogs', { scroll: false })
    }, [activeCategory, searchQuery, currentPage, router])

    // Filter logic
    const filteredPosts = useMemo(() => {
        let filtered = [...initialPosts]

        if (activeCategory !== 'all') {
            filtered = filtered.filter(post => post.category.slug === activeCategory)
        }

        if (searchQuery) {
            const q = searchQuery.toLowerCase()
            filtered = filtered.filter(post =>
                post.title.toLowerCase().includes(q) ||
                post.excerpt.toLowerCase().includes(q) ||
                post.tags.some(t => t.toLowerCase().includes(q))
            )
        }

        return filtered
    }, [activeCategory, searchQuery, initialPosts])

    // Pagination
    const totalPages = Math.ceil(filteredPosts.length / itemsPerPage)
    const paginatedPosts = filteredPosts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        window.scrollTo({ top: 400, behavior: 'smooth' })
    }

    const clearFilters = () => {
        setActiveCategory('all')
        setSearchQuery('')
        setCurrentPage(1)
    }

    return (
        <div className="py-12 bg-white">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                            {title}
                        </h2>
                        <p className="text-gray-600 max-w-2xl text-lg">{description}</p>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="relative hidden lg:block">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                className="pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 w-72 transition-all shadow-sm"
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value)
                                    setCurrentPage(1)
                                }}
                            />
                        </div>

                        <div className="flex bg-gray-100 p-1.5 rounded-2xl shadow-inner">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`px-4 py-2 rounded-xl flex items-center transition-all duration-300 ${viewMode === 'grid' ? 'bg-white text-primary-600 shadow-md scale-[1.02]' : 'text-gray-500'}`}
                            >
                                <Grid size={18} className="mr-2" />
                                <span className="font-bold text-sm">Grid</span>
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`px-4 py-2 rounded-xl flex items-center transition-all duration-300 ${viewMode === 'list' ? 'bg-white text-primary-600 shadow-md scale-[1.02]' : 'text-gray-500'}`}
                            >
                                <List size={18} className="mr-2" />
                                <span className="font-bold text-sm">List</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Categories Section */}
                <div className="mb-12">
                    <h4 className="text-sm font-black text-gray-400 uppercase tracking-[0.2em] mb-6 flex items-center">
                        <Layers size={16} className="mr-3 text-secondary-600" />
                        Browse by Category
                    </h4>
                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={() => {
                                setActiveCategory('all')
                                setCurrentPage(1)
                            }}
                            className={`flex items-center px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${activeCategory === 'all'
                                ? 'bg-primary-600 text-white shadow-xl scale-[1.02]'
                                : 'bg-white text-gray-600 border border-gray-100 hover:bg-gray-50'
                                }`}
                        >
                            All Publications
                            <span className={`ml-3 text-[10px] px-2 py-0.5 rounded-full ${activeCategory === 'all' ? 'bg-white/20' : 'bg-gray-100'}`}>
                                {initialPosts.length}
                            </span>
                        </button>
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => {
                                    setActiveCategory(cat.slug)
                                    setCurrentPage(1)
                                }}
                                className={`flex items-center px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${activeCategory === cat.slug
                                    ? 'bg-primary-600 text-white shadow-xl scale-[1.02]'
                                    : 'bg-white text-gray-600 border border-gray-100 hover:bg-gray-50'
                                    }`}
                            >
                                {cat.name}
                                <span className={`ml-3 text-[10px] px-2 py-0.5 rounded-full ${activeCategory === cat.slug ? 'bg-white/20' : 'bg-gray-100'}`}>
                                    {initialPosts.filter(p => p.categoryId === cat.id).length}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="h-px bg-gray-100 mb-12" />

                {/* Results Info */}
                <div className="flex items-center justify-between mb-8 px-2">
                    <div className="flex items-center gap-3 text-secondary-600 font-bold text-sm">
                        <Filter size={18} />
                        Showing {filteredPosts.length} results
                    </div>
                    {searchQuery && (
                        <button onClick={clearFilters} className="text-primary-600 font-bold text-sm hover:underline">
                            Clear all filters
                        </button>
                    )}
                </div>

                {/* Grid/List Display */}
                {paginatedPosts.length > 0 ? (
                    <>
                        <div className={viewMode === 'grid'
                            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            : "flex flex-col gap-8"
                        }>
                            {paginatedPosts.map((post) => (
                                <BlogCard key={post.id} post={post} viewMode={viewMode} />
                            ))}
                        </div>

                        {/* Pagination Controls */}
                        {totalPages > 1 && (
                            <div className="mt-20 flex flex-col items-center space-y-6">
                                <div className="px-5 py-2 bg-gray-50 border border-gray-100 rounded-full text-xs font-bold text-gray-500 uppercase tracking-widest">
                                    Page {currentPage} of {totalPages}
                                </div>

                                <nav className="flex items-center gap-2 p-2 bg-white border border-gray-100 rounded-2xl shadow-xl">
                                    <button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className="w-12 h-12 flex items-center justify-center rounded-xl text-gray-600 hover:bg-primary-50 disabled:opacity-30 transition-all"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>

                                    {[...Array(totalPages)].map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handlePageChange(i + 1)}
                                            className={`w-12 h-12 rounded-xl font-bold transition-all ${currentPage === i + 1
                                                ? 'bg-primary-600 text-white shadow-lg shadow-primary-200'
                                                : 'text-gray-500 hover:bg-primary-50 hover:text-primary-600'}`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}

                                    <button
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className="w-12 h-12 flex items-center justify-center rounded-xl text-gray-600 hover:bg-primary-50 disabled:opacity-30 transition-all"
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                </nav>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="text-center py-24 bg-gradient-to-br from-gray-50 to-white rounded-[3rem] border-2 border-dashed border-gray-200">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl text-primary-600">
                            <BookOpen size={32} />
                        </div>
                        <h3 className="text-3xl font-bold mb-4">No Articles Found</h3>
                        <p className="text-gray-500 max-w-md mx-auto mb-10 leading-relaxed font-medium">
                            We couldn't find any papers matching your criteria. Try adjusting your filters or search terms.
                        </p>
                        <button
                            onClick={clearFilters}
                            className="px-8 py-4 bg-primary-600 text-white rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-xl shadow-primary-200"
                        >
                            View All Publications
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
