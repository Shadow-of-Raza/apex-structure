import { BlogPost, BlogCategory } from '@/lib/types/blog'

export const blogCategories: BlogCategory[] = [
  { id: '1', name: 'Construction Tips', slug: 'construction-tips', count: 12 },
  { id: '2', name: 'Project Updates', slug: 'project-updates', count: 8 },
  { id: '3', name: 'Industry News', slug: 'industry-news', count: 15 },
  { id: '4', name: 'Design Trends', slug: 'design-trends', count: 10 },
  { id: '5', name: 'Sustainability', slug: 'sustainability', count: 7 },
  { id: '6', name: 'Technology', slug: 'technology', count: 9 },
  { id: '7', name: 'Interior Design', slug: 'interior-design', count: 6 },
  { id: '8', name: 'Materials', slug: 'materials', count: 11 }
]

export const blogTags = [
  'Green Building', 'Smart Homes', 'Concrete', 'Steel', 'Architecture',
  'Renovation', 'Budgeting', 'Timeline', 'Safety', 'Innovation',
  'Luxury', 'Affordable', 'Commercial', 'Residential', 'Industrial'
]

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Sustainable Construction in 2024',
    slug: 'future-sustainable-construction-2024',
    excerpt: 'Explore the latest trends in eco-friendly building materials and green construction techniques that are shaping the future of real estate.',
    content: 'Full article content goes here...',
    author: {
      id: '1',
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      avatar: '/images/team/rajesh.jpg'
    },
    category: blogCategories[4],
    tags: ['Green Building', 'Sustainability', 'Innovation'],
    featuredImage: '/images/blogs/sustainable-construction.jpg',
    readTime: '5 min read',
    publishedAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    isFeatured: true,
    views: 1245,
    comments: 23
  },
  {
    id: '2',
    title: '10 Essential Tips for First-Time Home Builders',
    slug: '10-tips-first-time-home-builders',
    excerpt: 'Building your first home? Here are crucial tips to avoid common pitfalls and ensure a smooth construction process.',
    content: 'Full article content goes here...',
    author: {
      id: '2',
      name: 'Priya Sharma',
      role: 'Chief Architect',
      avatar: '/images/team/priya.jpg'
    },
    category: blogCategories[0],
    tags: ['Residential', 'Budgeting', 'Tips'],
    featuredImage: '/images/blogs/first-time-builders.jpg',
    readTime: '8 min read',
    publishedAt: '2024-01-10T14:30:00Z',
    updatedAt: '2024-01-10T14:30:00Z',
    isFeatured: true,
    views: 892,
    comments: 15
  },
  {
    id: '3',
    title: 'How Technology is Revolutionizing Construction Sites',
    slug: 'technology-revolutionizing-construction-sites',
    excerpt: 'Discover how drones, AI, and IoT are transforming construction site management and improving efficiency.',
    content: 'Full article content goes here...',
    author: {
      id: '3',
      name: 'Amit Patel',
      role: 'Head of Technology',
      avatar: '/images/team/amit.jpg'
    },
    category: blogCategories[5],
    tags: ['Technology', 'Innovation', 'Smart Homes'],
    featuredImage: '/images/blogs/construction-tech.jpg',
    readTime: '6 min read',
    publishedAt: '2024-01-05T09:15:00Z',
    updatedAt: '2024-01-05T09:15:00Z',
    isFeatured: false,
    views: 1567,
    comments: 31
  },
  {
    id: '4',
    title: 'Latest Trends in Commercial Office Design',
    slug: 'latest-trends-commercial-office-design',
    excerpt: 'Modern offices are evolving. Learn about the latest trends in commercial space design for productivity and wellness.',
    content: 'Full article content goes here...',
    author: {
      id: '4',
      name: 'Sonia Verma',
      role: 'Lead Designer',
      avatar: '/images/team/sonia.jpg'
    },
    category: blogCategories[3],
    tags: ['Commercial', 'Design Trends', 'Office'],
    featuredImage: '/images/blogs/office-design.jpg',
    readTime: '7 min read',
    publishedAt: '2023-12-28T11:45:00Z',
    updatedAt: '2023-12-28T11:45:00Z',
    isFeatured: true,
    views: 987,
    comments: 18
  },
  {
    id: '5',
    title: 'The Art of Renovation: Transforming Old Spaces',
    slug: 'art-renovation-transforming-old-spaces',
    excerpt: 'Learn how to breathe new life into old buildings while preserving their character and structural integrity.',
    content: 'Full article content goes here...',
    author: {
      id: '2',
      name: 'Priya Sharma',
      role: 'Chief Architect',
      avatar: '/images/team/priya.jpg'
    },
    category: blogCategories[0],
    tags: ['Renovation', 'Design', 'Transformation'],
    featuredImage: '/images/blogs/renovation.jpg',
    readTime: '9 min read',
    publishedAt: '2023-12-20T16:20:00Z',
    updatedAt: '2023-12-20T16:20:00Z',
    isFeatured: false,
    views: 743,
    comments: 12
  },
  {
    id: '6',
    title: 'Choosing the Right Materials for Your Project',
    slug: 'choosing-right-materials-for-project',
    excerpt: 'A comprehensive guide to selecting construction materials based on durability, cost, and aesthetic appeal.',
    content: 'Full article content goes here...',
    author: {
      id: '1',
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      avatar: '/images/team/rajesh.jpg'
    },
    category: blogCategories[7],
    tags: ['Materials', 'Concrete', 'Steel', 'Quality'],
    featuredImage: '/images/blogs/construction-materials.jpg',
    readTime: '10 min read',
    publishedAt: '2023-12-15T13:10:00Z',
    updatedAt: '2023-12-15T13:10:00Z',
    isFeatured: false,
    views: 1123,
    comments: 27
  },
  {
    id: '7',
    title: 'Smart Home Integration in Modern Construction',
    slug: 'smart-home-integration-modern-construction',
    excerpt: 'How to seamlessly integrate smart home technology during construction for maximum efficiency and convenience.',
    content: 'Full article content goes here...',
    author: {
      id: '3',
      name: 'Amit Patel',
      role: 'Head of Technology',
      avatar: '/images/team/amit.jpg'
    },
    category: blogCategories[5],
    tags: ['Smart Homes', 'Technology', 'Innovation'],
    featuredImage: '/images/blogs/smart-home.jpg',
    readTime: '6 min read',
    publishedAt: '2023-12-10T10:30:00Z',
    updatedAt: '2023-12-10T10:30:00Z',
    isFeatured: false,
    views: 1345,
    comments: 19
  },
  {
    id: '8',
    title: 'Budget Management Strategies for Large Projects',
    slug: 'budget-management-strategies-large-projects',
    excerpt: 'Expert tips on managing budgets effectively for large-scale construction projects without compromising quality.',
    content: 'Full article content goes here...',
    author: {
      id: '5',
      name: 'Rahul Mehta',
      role: 'Finance Director',
      avatar: '/images/team/rahul.jpg'
    },
    category: blogCategories[0],
    tags: ['Budgeting', 'Project Management', 'Finance'],
    featuredImage: '/images/blogs/budget-management.jpg',
    readTime: '8 min read',
    publishedAt: '2023-12-05T15:45:00Z',
    updatedAt: '2023-12-05T15:45:00Z',
    isFeatured: false,
    views: 876,
    comments: 14
  },
  {
    id: '9',
    title: 'Sustainable Building Certifications Explained',
    slug: 'sustainable-building-certifications-explained',
    excerpt: 'Understanding LEED, IGBC, and other green building certifications and their benefits for your project.',
    content: 'Full article content goes here...',
    author: {
      id: '4',
      name: 'Sonia Verma',
      role: 'Lead Designer',
      avatar: '/images/team/sonia.jpg'
    },
    category: blogCategories[4],
    tags: ['Green Building', 'Certifications', 'Sustainability'],
    featuredImage: '/images/blogs/green-certifications.jpg',
    readTime: '7 min read',
    publishedAt: '2023-11-28T12:00:00Z',
    updatedAt: '2023-11-28T12:00:00Z',
    isFeatured: false,
    views: 1023,
    comments: 21
  },
  {
    id: '10',
    title: 'The Rise of Prefabricated Construction',
    slug: 'rise-prefabricated-construction',
    excerpt: 'How prefabricated components are changing the construction industry with faster timelines and reduced waste.',
    content: 'Full article content goes here...',
    author: {
      id: '1',
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      avatar: '/images/team/rajesh.jpg'
    },
    category: blogCategories[5],
    tags: ['Innovation', 'Technology', 'Efficiency'],
    featuredImage: '/images/blogs/prefabricated.jpg',
    readTime: '6 min read',
    publishedAt: '2023-11-20T09:30:00Z',
    updatedAt: '2023-11-20T09:30:00Z',
    isFeatured: false,
    views: 945,
    comments: 16
  },
  {
    id: '11',
    title: 'Creating Outdoor Living Spaces: Design Ideas',
    slug: 'creating-outdoor-living-spaces-design-ideas',
    excerpt: 'Transform your outdoor areas into functional and beautiful living spaces with these innovative design ideas.',
    content: 'Full article content goes here...',
    author: {
      id: '2',
      name: 'Priya Sharma',
      role: 'Chief Architect',
      avatar: '/images/team/priya.jpg'
    },
    category: blogCategories[3],
    tags: ['Design Trends', 'Outdoor', 'Landscaping'],
    featuredImage: '/images/blogs/outdoor-spaces.jpg',
    readTime: '5 min read',
    publishedAt: '2023-11-15T14:15:00Z',
    updatedAt: '2023-11-15T14:15:00Z',
    isFeatured: false,
    views: 789,
    comments: 11
  },
  {
    id: '12',
    title: 'Construction Safety Protocols Every Worker Should Know',
    slug: 'construction-safety-protocols-every-worker-should-know',
    excerpt: 'Essential safety measures and protocols to ensure a secure working environment on construction sites.',
    content: 'Full article content goes here...',
    author: {
      id: '3',
      name: 'Amit Patel',
      role: 'Head of Technology',
      avatar: '/images/team/amit.jpg'
    },
    category: blogCategories[0],
    tags: ['Safety', 'Workplace', 'Regulations'],
    featuredImage: '/images/blogs/safety-protocols.jpg',
    readTime: '8 min read',
    publishedAt: '2023-11-10T11:00:00Z',
    updatedAt: '2023-11-10T11:00:00Z',
    isFeatured: false,
    views: 1120,
    comments: 25
  }
]

// Featured posts (for homepage)
export const featuredPosts = blogPosts.filter(post => post.isFeatured)

// Recent posts (last 4)
export const recentPosts = [...blogPosts]
  .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  .slice(0, 4)

// Most popular posts
export const popularPosts = [...blogPosts]
  .sort((a, b) => b.views - a.views)
  .slice(0, 4)

// Get posts by category
export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return blogPosts.filter(post => post.category.slug === categorySlug)
}

// Get posts by tag
export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag))
}

// Get related posts
export function getRelatedPosts(currentPostId: string, limit: number = 3): BlogPost[] {
  const currentPost = blogPosts.find(post => post.id === currentPostId)
  if (!currentPost) return []
  
  return blogPosts
    .filter(post => 
      post.id !== currentPostId && 
      (post.category.id === currentPost.category.id || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, limit)
}

// Search posts
export function searchPosts(query: string): BlogPost[] {
  const searchTerm = query.toLowerCase()
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.excerpt.toLowerCase().includes(searchTerm) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    post.category.name.toLowerCase().includes(searchTerm)
  )
}

// Paginate posts
export function paginatePosts(posts: BlogPost[], page: number = 1, limit: number = 6) {
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedPosts = posts.slice(startIndex, endIndex)
  
  return {
    posts: paginatedPosts,
    currentPage: page,
    totalPages: Math.ceil(posts.length / limit),
    totalPosts: posts.length,
    hasNextPage: endIndex < posts.length,
    hasPrevPage: startIndex > 0
  }
}