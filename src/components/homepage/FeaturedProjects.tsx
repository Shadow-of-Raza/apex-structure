'use client'

import { MapPin, Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { getFeaturedProjects } from '@/lib/utils/projects'

export default function FeaturedProjects() {
  // Get featured projects (first 3 from our data)
  const featuredProjects = getFeaturedProjects(3)

  // Clean image URL by removing query parameters
  const cleanImageUrl = (url: string) => {
    return url.split('?')[0] || url;
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary-600 font-semibold">FEATURED PROJECTS</span>
          <h2 className="text-4xl font-bold mt-2 mb-4">Our Premium Developments</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our landmark projects that redefine urban living and commercial spaces
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => {
            const statusColors = {
              planning: 'bg-blue-100 text-blue-800',
              ongoing: 'bg-secondary-100 text-secondary-800',
              completed: 'bg-green-100 text-green-800',
              upcoming: 'bg-purple-100 text-purple-800',
            }
            
            const statusText = {
              planning: 'Planning',
              ongoing: 'Ongoing',
              completed: 'Completed',
              upcoming: 'Upcoming',
            }

            const mainImage = cleanImageUrl(project.images.main)

            return (
              <div key={project.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-56 relative overflow-hidden">
                  {/* Real Project Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={mainImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={(e) => {
                        // Fallback if image fails to load
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        target.parentElement!.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                            <div class="text-white text-center">
                              <div class="text-4xl font-bold opacity-20">AS</div>
                              <p class="mt-2 opacity-70">${project.title}</p>
                            </div>
                          </div>
                        `
                      }}
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center ${statusColors[project.status]}`}>
                      <div className={`w-2 h-2 rounded-full mr-2 ${project.status === 'ongoing' ? 'bg-secondary-800' : project.status === 'completed' ? 'bg-green-800' : 'bg-blue-800'}`}></div>
                      {statusText[project.status]}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                    </span>
                    <div className="flex items-center text-gray-500">
                      <Calendar size={16} className="mr-1" />
                      <span className="text-sm">
                        {new Date(project.completionDate).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin size={16} className="mr-2 flex-shrink-0" />
                    <span className="text-sm truncate">{project.location}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      {project.area} sq.ft.
                    </span>
                    <Link 
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
                    >
                      View Details
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="text-center">
          <Link 
            href="/projects"
            className="inline-flex items-center justify-center border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-lg font-semibold text-lg transition duration-300"
          >
            View All Projects
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}