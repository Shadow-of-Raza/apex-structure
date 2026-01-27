'use client'

import { useState } from 'react'
import {
    Calendar, ArrowLeft, Share2, ChevronLeft,
    ChevronRight, Bookmark, Building2, BookOpen,
    Clock, CheckCircle, Award
} from 'lucide-react'
import { BlogPost } from '@/lib/types/blog'
import Link from 'next/link'
import ImageWithFallback from '@/components/common/UI/ImageWithFallback'
import Notification from '@/components/common/UI/Notification'
import { formatBlogDate } from '@/lib/utils/blog'
import 'react-quill-new/dist/quill.snow.css'

interface BlogDetailProps {
    post: BlogPost
}

export default function BlogDetail({ post }: BlogDetailProps) {
    const [showNotification, setShowNotification] = useState(false)

    const handleShareClick = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href)
            setShowNotification(true)
            setTimeout(() => setShowNotification(false), 3000)
        } catch (error) {
            console.error('Failed to copy URL:', error)
        }
    }

    return (
        <div className="container mx-auto px-4 py-10">
            {/* Notification */}
            {showNotification && (
                <Notification
                    message="Article link copied to clipboard!"
                    type="success"
                    duration={3000}
                    onClose={() => setShowNotification(false)}
                />
            )}

            {/* Back Navigation & Actions */}
            <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <Link
                    href="/blogs"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-bold group"
                >
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Insights
                </Link>

                <div className="flex gap-3">
                    <button
                        onClick={handleShareClick}
                        className="inline-flex items-center px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold transition-all shadow-lg active:scale-95"
                    >
                        <Share2 size={20} className="mr-2" />
                        Share
                    </button>
                </div>
            </div>

            {/* Hero Header Section */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-10 group">
                <div className="h-[400px] md:h-[600px] relative">
                    <ImageWithFallback
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        priority
                        className="object-cover"
                        fallbackText={post.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>

                    {/* Header Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                        <div className="max-w-4xl">
                            <span className="inline-flex items-center px-4 py-2 rounded-full font-bold bg-white/90 text-primary-700 backdrop-blur-md shadow-lg mb-6 text-sm uppercase tracking-widest ring-1 ring-white/20">
                                {post.category.name}
                            </span>

                            <h1 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight tracking-tight">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-8">
                                <div className="flex items-center gap-4">
                                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/30 shadow-2xl">
                                        <ImageWithFallback
                                            src={post.authorAvatar}
                                            alt={post.authorName}
                                            fill
                                            className="object-cover"
                                            fallbackText={post.authorName}
                                        />
                                    </div>
                                    <div>
                                        <p className="text-white font-black text-xl leading-none mb-1.5">{post.authorName}</p>
                                        <p className="text-white/60 text-[10px] font-black uppercase tracking-widest">{post.authorRole}</p>
                                    </div>
                                </div>

                                <div className="hidden md:block w-px h-10 bg-white/20" />

                                <div className="flex items-center gap-2 text-white font-bold text-sm">
                                    <Calendar size={18} className="text-secondary-500" />
                                    {formatBlogDate(post.createdAt)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Layout Grid */}
            <div className="relative rounded-2xl overflow-hidden mb-10 group">
                {/* Main Article Content */}
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-14 border border-gray-100">
                    <div className="flex items-center mb-10">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mr-5 shadow-xl text-white">
                            <BookOpen size={28} />
                        </div>
                        <div>
                            <h2 className="text-3xl font-black text-gray-900 leading-tight">Technical Paper</h2>
                            <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Article Overview</p>
                        </div>
                    </div>

                    <div className="blog-content">
                        {post.excerpt && (
                            <div className="mb-12">
                                <p className="text-2xl font-bold text-gray-800 leading-relaxed border-l-4 border-primary-500 pl-8 italic bg-gray-50/50 py-6 rounded-r-2xl">
                                    {post.excerpt}
                                </p>
                            </div>
                        )}

                        <div
                            className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-primary-600 hover:prose-a:text-primary-700 prose-img:rounded-xl prose-img:shadow-lg"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>

                    {/* Structured Tags Section */}
                    <div className="mt-16 pt-12 border-t border-gray-100">
                        <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-6 flex items-center">
                            <CheckCircle size={16} className="mr-2 text-green-500" />
                            Key Topics Covered
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {post.tags.map(tag => (
                                <span key={tag} className="px-5 py-2.5 bg-gray-50 text-gray-700 rounded-xl text-sm font-bold border border-gray-100 hover:border-primary-200 transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
