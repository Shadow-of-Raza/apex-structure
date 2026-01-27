import { Calendar, User, ArrowRight, Clock } from 'lucide-react'
import { BlogPost } from '@/lib/types/blog'
import Link from 'next/link'
import ImageWithFallback from '@/components/common/UI/ImageWithFallback'
import { formatBlogDate } from '@/lib/utils/blog'

interface BlogCardProps {
    post: BlogPost
    viewMode?: 'grid' | 'list'
}

export default function BlogCard({ post, viewMode = 'grid' }: BlogCardProps) {
    if (viewMode === 'list') {
        return (
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-primary-200">
                <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="md:w-1/3 relative h-64 md:h-auto overflow-hidden">
                        <ImageWithFallback
                            src={post.featuredImage}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                            fallbackText={post.title}
                        />
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1.5 rounded-full text-sm font-semibold backdrop-blur-md bg-white/90 text-gray-800 border border-white/20 shadow-md">
                                {post.category.name}
                            </span>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:w-2/3 p-6 md:p-8 flex flex-col">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center text-gray-500 text-sm">
                                <Calendar size={16} className="mr-2 text-primary-600" />
                                {formatBlogDate(post.createdAt)}
                            </div>
                            <div className="flex items-center text-gray-500 text-sm">
                                <Clock size={16} className="mr-2 text-primary-600" />
                                5 min read
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-600 transition-colors">
                            {post.title}
                        </h3>

                        <p className="text-gray-600 mb-6 text-lg line-clamp-2">
                            {post.excerpt}
                        </p>

                        <div className="mt-auto flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300 shadow-2xl">
                                    <ImageWithFallback
                                        src={post.authorAvatar}
                                        alt={post.authorName}
                                        fill
                                        className="object-cover"
                                        fallbackText={post.authorName}
                                    />
                                </div>
                                <div>
                                    <p className="text-gray-800 font-bold text-lg leading-none mb-1">{post.authorName}</p>
                                    <p className="text-gray-800/60 text-[10px] font-black uppercase tracking-widest">{post.authorRole}</p>
                                </div>
                            </div>

                            <Link
                                href={`/blogs/${post.slug}`}
                                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-bold group"
                            >
                                Read Article
                                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 border border-gray-200 hover:border-primary-200 flex flex-col h-full">
            {/* Image */}
            <div className="h-64 relative overflow-hidden">
                <ImageWithFallback
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    fallbackText={post.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2 backdrop-blur-md bg-white/90 text-gray-800 border border-white/20 shadow-md">
                        {post.category.name}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-gray-500 text-xs">
                        <Calendar size={14} className="mr-1.5 text-primary-600" />
                        {formatBlogDate(post.createdAt)}
                    </div>
                    <div className="flex items-center text-gray-500 text-xs font-medium">
                        <Clock size={14} className="mr-1.5 text-primary-600" />
                        5 min read
                    </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors line-clamp-2 leading-tight">
                    {post.title}
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-3 text-sm flex-1">
                    {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300 shadow-2xl">
                            <ImageWithFallback
                                src={post.authorAvatar}
                                alt={post.authorName}
                                fill
                                className="object-cover"
                                fallbackText={post.authorName}
                            />
                        </div>
                        <div>
                            <p className="text-gray-800 font-bold text-lg leading-none mb-1">{post.authorName}</p>
                            <p className="text-gray-800/60 text-[10px] font-black uppercase tracking-widest">{post.authorRole}</p>
                        </div>
                    </div>
                    <Link
                        href={`/blogs/${post.slug}`}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-bold text-sm group"
                    >
                        Read
                        <ArrowRight size={16} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
