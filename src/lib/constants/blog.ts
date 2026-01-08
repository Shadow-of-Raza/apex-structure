import { BlogPost, BlogCategory } from '@/lib/types/blog'

export const blogCategories: BlogCategory[] = [
  { id: 1, name: 'Construction Tips', slug: 'construction-tips' },
  { id: 2, name: 'Project Updates', slug: 'project-updates' },
  { id: 3, name: 'Industry News', slug: 'industry-news' },
  { id: 4, name: 'Design Trends', slug: 'design-trends' },
  { id: 5, name: 'Sustainability', slug: 'sustainability' }
]

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of Sustainable Construction in 2024',
    slug: 'future-sustainable-construction-2024',
    excerpt: 'Explore the latest trends in eco-friendly building materials and green construction techniques that are shaping the future of real estate.',
    content: `
      <h2 class="text-3xl font-black text-gray-900 mt-12 mb-6 leading-tight">The Shift Towards Sustainability</h2>
      <p class="mb-6 text-gray-600 leading-relaxed text-lg">As we move into 2024, the construction industry is undergoing a massive transformation. Sustainability is no longer just a buzzword; it's a core requirement for modern development.</p>
      
      <h3 class="text-2xl font-black text-gray-900 mt-10 mb-4 leading-tight">Key Trends to Watch</h3>
      <ul class="list-disc list-inside mb-8 space-y-3 pl-4">
        <li class="text-gray-600 leading-relaxed text-lg"><strong class="font-black text-gray-900">Carbon-Neutral Concrete:</strong> New formulations that absorb CO2 during the curing process.</li>
        <li class="text-gray-600 leading-relaxed text-lg"><strong class="font-black text-gray-900">Modular Construction:</strong> Reducing waste by building components in a controlled factory environment.</li>
        <li class="text-gray-600 leading-relaxed text-lg"><strong class="font-black text-gray-900">Renewable Energy Integration:</strong> Solar-ready roofs and geothermal heating are becoming standard.</li>
      </ul>
      
      <blockquote class="border-l-4 border-primary-500 pl-8 py-6 my-10 italic text-2xl font-bold text-gray-800 bg-gray-50 rounded-r-2xl shadow-sm">
        "True sustainability in construction means thinking about the entire lifecycle of a building, from the first brick to the final demolition."
      </blockquote>
      
      <h3 class="text-2xl font-black text-gray-900 mt-10 mb-4 leading-tight">Conclusion</h3>
      <p class="mb-6 text-gray-600 leading-relaxed text-lg">By embracing these green technologies, developers can not only reduce their environmental impact but also lower long-term operational costs for building owners.</p>
    `,
    authorName: 'Rajesh Kumar',
    authorRole: 'Founder & CEO',
    authorAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    categoryId: 5,
    category: blogCategories[4],
    tags: ['Green Building', 'Sustainability', 'Innovation'],
    featuredImage: 'https://images.pexels.com/photos/356043/pexels-photo-356043.jpeg',
    publishedAt: '2024-01-15T10:00:00Z',
    metaTitle: 'Sustainable Construction Trends 2024 | Apex Structure',
    metaDescription: 'Discover how eco-friendly materials and green building techniques are revolutionizing the construction industry in 2024.',
    keywords: ['sustainable construction', 'green building', 'eco-friendly materials', 'renewable energy']
  },
  {
    id: 2,
    title: '10 Essential Tips for First-Time Home Builders',
    slug: '10-tips-first-time-home-builders',
    excerpt: 'Building your first home? Here are crucial tips to avoid common pitfalls and ensure a smooth construction process.',
    content: `
      <h2 class="text-3xl font-black text-gray-900 mt-12 mb-6 leading-tight">Planning Your Dream Home</h2>
      <p class="mb-6 text-gray-600 leading-relaxed text-lg">Building your first home is an exciting journey, but it can also be overwhelming. Proper planning is the key to success.</p>
      
      <h3 class="text-2xl font-black text-gray-900 mt-10 mb-4 leading-tight">1. Establish a Realistic Budget</h3>
      <p class="mb-6 text-gray-600 leading-relaxed text-lg">Always include a 10-15% contingency fund for unexpected costs that inevitably arise during construction.</p>
      
      <h3 class="text-2xl font-black text-gray-900 mt-10 mb-4 leading-tight">2. Choose the Right Location</h3>
      <p class="mb-6 text-gray-600 leading-relaxed text-lg">Consider proximity to schools, hospitals, and your workplace. Check for soil quality and utility availability.</p>
      
      <div class="flex items-center justify-center my-12">
        <img src="https://images.pexels.com/photos/5439444/pexels-photo-5439444.jpeg" alt="Blueprint planning" class="rounded-2xl shadow-2xl w-full object-cover" />
      </div>
      
      <h3 class="text-2xl font-black text-gray-900 mt-10 my-6 leading-tight">3. Hire a Professional Team</h3>
      <p class="mb-6 text-gray-600 leading-relaxed text-lg">Don't cut corners on your architect or contractor. A skilled team will save you money in the long run by avoiding costly mistakes.</p>
    `,
    authorName: 'Priya Sharma',
    authorRole: 'Chief Architect',
    authorAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    categoryId: 1,
    category: blogCategories[0],
    tags: ['Residential', 'Budgeting', 'Tips'],
    featuredImage: 'https://images.pexels.com/photos/5439444/pexels-photo-5439444.jpeg',
    publishedAt: '2024-01-10T14:30:00Z',
    metaTitle: 'Tips for First-Time Home Builders | Comprehensive Guide',
    metaDescription: 'Avoid common mistakes when building your first home with our top 10 essential tips for new home owners.'
  },
  {
    id: 3,
    title: 'How Technology is Revolutionizing Construction Sites',
    slug: 'technology-revolutionizing-construction-sites',
    excerpt: 'Discover how drones, AI, and IoT are transforming construction site management and improving efficiency.',
    content: `

        <section class="container mx-auto px-4 relative z-10">
        <!-- Header -->
        <header class="mb-10 text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-blue-700 mb-4">Tech Insights</h1>
            <p class="text-lg text-gray-600">Exploring the latest in technology, web development, and digital trends</p>
            <div class="mt-6 flex justify-center space-x-4">
                <span class="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Web Development</span>
                <span class="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">Tech News</span>
                <span class="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Design</span>
            </div>
        </header>

        <!-- Blog Content -->
        <article class="overflow-hidden">
            <!-- Featured Image -->
            <div class="h-64 md:h-80 overflow-hidden">
                <img 
                    src="https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg" 
                    alt="Developer working on code"
                    class="w-full h-full object-cover"
                >
            </div>

            <!-- Article Content -->
            <div class="p-8">
                <!-- Blog Title -->
                <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Future of Web Development in 2023</h1>
                
                <!-- Meta Information -->
                <div class="flex items-center text-gray-500 mb-8">
                    <div class="flex items-center">
                        <i class="fas fa-user mr-2"></i>
                        <span>Alex Johnson</span>
                    </div>
                    <div class="flex items-center mx-6">
                        <i class="fas fa-calendar mr-2"></i>
                        <span>October 15, 2023</span>
                    </div>
                    <div class="flex items-center">
                        <i class="fas fa-clock mr-2"></i>
                        <span>5 min read</span>
                    </div>
                </div>

                <!-- Introduction Paragraph -->
                <p class="text-lg text-gray-700 leading-relaxed">
                    Web development continues to evolve at a rapid pace, with new frameworks, tools, and methodologies emerging regularly. In this article, we explore the key trends shaping the future of web development and how developers can stay ahead of the curve. From serverless architectures to AI-powered development tools, the landscape is changing in exciting ways.
                </p>

                <!-- Blockquote -->
                <blockquote class="border-l-4 border-blue-500 pl-6 my-10 italic text-gray-700 text-xl">
                    "The web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past."
                </blockquote>

                <!-- Subheading -->
                <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6 pb-2 border-b">Key Trends to Watch</h2>

                <!-- List -->
                <div class="mb-10">
                    <h3 class="text-xl font-semibold text-gray-800 mb-4">Most Important Technologies:</h3>
                    <ul class="space-y-3">
                        <li class="flex items-start">
                            <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                            <span class="text-gray-700"><strong class="font-semibold">React & Next.js:</strong> Continued dominance in frontend development with server-side rendering capabilities.</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                            <span class="text-gray-700"><strong class="font-semibold">TypeScript:</strong> Becoming the standard for large-scale JavaScript applications.</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                            <span class="text-gray-700"><strong class="font-semibold">Tailwind CSS:</strong> Utility-first CSS framework gaining massive adoption.</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                            <span class="text-gray-700"><strong class="font-semibold">WebAssembly:</strong> Enabling high-performance applications in the browser.</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                            <span class="text-gray-700"><strong class="font-semibold">Edge Computing:</strong> Moving computation closer to the user for faster experiences.</span>
                        </li>
                    </ul>
                </div>

                <!-- Subheading -->
                <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6 pb-2">Framework Comparison</h2>

                <!-- Table -->
                <div class="overflow-x-auto mb-10">
                    <table class="w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
                        <thead class="bg-gray-100">
                            <tr>
                                <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Framework</th>
                                <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Learning Curve</th>
                                <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Performance</th>
                                <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Community</th>
                                <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Best For</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="hover:bg-gray-50">
                                <td class="py-3 px-4 border-b font-medium">React</td>
                                <td class="py-3 px-4 border-b">Medium</td>
                                <td class="py-3 px-4 border-b">High</td>
                                <td class="py-3 px-4 border-b">Very Large</td>
                                <td class="py-3 px-4 border-b">SPAs, Large Applications</td>
                            </tr>
                            <tr class="hover:bg-gray-50">
                                <td class="py-3 px-4 border-b font-medium">Vue.js</td>
                                <td class="py-3 px-4 border-b">Low</td>
                                <td class="py-3 px-4 border-b">High</td>
                                <td class="py-3 px-4 border-b">Large</td>
                                <td class="py-3 px-4 border-b">Progressive Enhancement</td>
                            </tr>
                            <tr class="hover:bg-gray-50">
                                <td class="py-3 px-4 border-b font-medium">Svelte</td>
                                <td class="py-3 px-4 border-b">Low</td>
                                <td class="py-3 px-4 border-b">Very High</td>
                                <td class="py-3 px-4 border-b">Growing</td>
                                <td class="py-3 px-4 border-b">Performance-critical Apps</td>
                            </tr>
                            <tr class="hover:bg-gray-50">
                                <td class="py-3 px-4 border-b font-medium">Angular</td>
                                <td class="py-3 px-4 border-b">Steep</td>
                                <td class="py-3 px-4 border-b">Medium</td>
                                <td class="py-3 px-4 border-b">Large</td>
                                <td class="py-3 px-4 border-b">Enterprise Applications</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Additional Image -->
                <div class="mb-10">
                    <img 
                        src="https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg"
                        alt="Modern web development workspace"
                        class="w-full h-auto rounded-lg shadow-md"
                    >
                    <p class="text-center text-gray-500 text-sm mt-2">A modern web development workspace with multiple monitors</p>
                </div>

                <!-- Conclusion Paragraph -->
                <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6 pb-2 border-b">Looking Ahead</h2>
                <p class="text-lg text-gray-700 leading-relaxed mb-6">
                    As we move further into 2023, the pace of innovation in web development shows no signs of slowing down. Developers who embrace continuous learning and adapt to new paradigms will be best positioned to build the next generation of web experiences. The convergence of performance, accessibility, and developer experience will continue to drive progress in our field.
                </p>
                <p class="text-lg text-gray-700 leading-relaxed">
                    Ultimately, the goal remains the same: to create fast, accessible, and engaging experiences for users across the globe. The tools and frameworks may change, but this fundamental mission continues to guide the evolution of web development.
                </p>
            </div>
        </article>
    </section>

      `,
    authorName: 'Amit Patel',
    authorRole: 'Head of Technology',
    authorAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    categoryId: 3,
    category: blogCategories[2],
    tags: ['Technology', 'Innovation', 'Smart Homes'],
    featuredImage: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg',
    publishedAt: '2024-01-05T09:15:00Z',
    metaTitle: 'Tech in Construction: AI, Drones, and BIM | Apex Structure'
  }
]

// Helper functions for common data access
export const getPostBySlug = (slug: string) => blogPosts.find(post => post.slug === slug)
export const getPostsByCategory = (categoryId: number) => blogPosts.filter(post => post.categoryId === categoryId)
export const getRecentPosts = (limit: number = 4) => [...blogPosts].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, limit)
export const getPopularPosts = (limit: number = 4) => [...blogPosts].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, limit) // Fallback sorting by date if views not present

// Backward compatibility constants
export const recentPosts = getRecentPosts()
export const popularPosts = getPopularPosts()