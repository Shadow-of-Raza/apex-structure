import { blogPosts, blogCategories } from '@/lib/constants/blog'
import { BLOG_IMAGES } from '@/lib/constants/page-header'
import PageHeader from '@/components/common/Layout/PageHeader'
import BlogList from '@/components/blogs/BlogList'

export default function BlogPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <PageHeader
        images={BLOG_IMAGES}
        imageTransitionInterval={6000}
        showOverlay={true}
        overlayOpacity={0.7}
      />

      {/* Blog List Section (Handles grid, logic, and pagination) */}
      <BlogList
        initialPosts={blogPosts}
        categories={blogCategories}
      />

      {/* Pre-footer Newsletter is already handled in the Layout or can be added if specific to this page */}
    </main>
  )
}