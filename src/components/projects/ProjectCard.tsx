// src/components/projects/ProjectCard.tsx
import { MapPin, Calendar, ArrowRight, CheckCircle, Clock, TrendingUp, Users } from 'lucide-react'
import { Project } from '@/lib/types'
import Link from 'next/link'
import ImageWithFallback from '@/components/common/UI/ImageWithFallback'
import { cleanImageUrl } from '@/lib/utils/images'
import { 
  getFormattedLocation,
  getStatusConfig,
  getProjectTypeColor
} from '@/lib/utils/projects'

interface ProjectCardProps {
  project: Project
  viewMode?: 'grid' | 'list' | 'featured'
  compact?: boolean
  showFeatures?: boolean
  showHighlights?: boolean
  showDates?: boolean
  showClient?: boolean
}

export default function ProjectCard({ 
  project, 
  viewMode = 'grid',
  compact = false,
  showFeatures = true,
  showHighlights = true,
  showDates = true,
  showClient = false
}: ProjectCardProps) {
  // Get status configuration
  const statusConfig = getStatusConfig(project.status) || {
    color: 'bg-gray-100 text-gray-800',
    name: project.status.charAt(0).toUpperCase() + project.status.slice(1)
  }

  // Get type color
  const typeColorClass = getProjectTypeColor(project.type)
  
  // Format location
  const formattedLocation = getFormattedLocation(project)

  // Format dates
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })
  }

  const mainImage = cleanImageUrl(project.images.main)

  // Helper function for status icon
  const getStatusIcon = () => {
    switch (project.status) {
      case 'completed': return <CheckCircle size={14} />
      case 'ongoing': return <TrendingUp size={14} />
      case 'upcoming': return <Calendar size={14} />
      case 'planning': return <Clock size={14} />
      default: return null
    }
  }

  // Featured View (simplified grid)
  if (viewMode === 'featured') {
    return (
      <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 hover:border-primary-200">
        {/* Image */}
        <div className="h-56 relative overflow-hidden">
          <ImageWithFallback
            src={mainImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={85}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            fallbackText={project.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2 backdrop-blur-sm ${statusConfig.color}`}>
              {getStatusIcon()}
              <span className="capitalize">{statusConfig.name}</span>
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className={`px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium`}>
              {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
            </span>
            {showDates && (
              <div className="flex items-center text-gray-500">
                <Calendar size={14} className="mr-1" />
                <span className="text-xs">
                  {formatDate(project.completionDate)}
                </span>
              </div>
            )}
          </div>

          <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors line-clamp-1">
            {project.title}
          </h3>

          <div className="flex items-center text-gray-600 mb-3">
            <MapPin size={16} className="mr-2 flex-shrink-0" />
            <span className="text-sm truncate">{formattedLocation}</span>
          </div>

          <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
            {project.description}
          </p>

          <div className="flex items-center justify-between mt-4">
            <span className="text-sm font-medium text-gray-700">
              {project.area} sq.ft.
            </span>
            <Link 
              href={`/projects/${project.slug}`}
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm group"
            >
              View Details
              <ArrowRight size={16} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // List View (original)
  if (viewMode === 'list') {
    return (
      <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-primary-200">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-2/5 relative h-64 md:h-auto">
            <ImageWithFallback
              src={mainImage}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              quality={85}
              className="object-cover"
              fallbackText={project.title}
            />
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2 backdrop-blur-sm ${statusConfig.color}`}>
                {getStatusIcon()}
                <span className="capitalize">{statusConfig.name}</span>
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-3/5 p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`px-3 py-1.5 rounded-full text-sm font-medium ${typeColorClass}`}>
                {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
              </span>
              <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                {project.area} sq.ft.
              </span>
              <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                {project.budget}
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
              {project.title}
            </h3>

            <div className="flex items-center text-gray-600 mb-4">
              <MapPin size={18} className="mr-2 flex-shrink-0" />
              <span className="text-lg">{formattedLocation}</span>
            </div>

            <p className="text-gray-600 mb-6 text-lg">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center">
                <Calendar size={18} className="text-gray-400 mr-3" />
                <div>
                  <div className="text-sm text-gray-500">Start Date</div>
                  <div className="font-medium text-gray-900">
                    {formatDate(project.startDate)}
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <CheckCircle size={18} className="text-gray-400 mr-3" />
                <div>
                  <div className="text-sm text-gray-500">Completion</div>
                  <div className="font-medium text-gray-900">
                    {formatDate(project.completionDate)}
                  </div>
                </div>
              </div>
              {showClient && (
                <div className="flex items-center">
                  <Users size={18} className="text-gray-400 mr-3" />
                  <div>
                    <div className="text-sm text-gray-500">Client</div>
                    <div className="font-medium text-gray-900 truncate max-w-[150px]">{project.client}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Features */}
            {showFeatures && (
              <div className="flex flex-wrap gap-2 mb-6">
                {project.features.slice(0, 3).map((feature, index) => (
                  <span key={index} className="px-3 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm border border-gray-200">
                    {feature}
                  </span>
                ))}
                {project.features.length > 3 && (
                  <span className="px-3 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm border border-gray-200">
                    +{project.features.length - 3} more
                  </span>
                )}
              </div>
            )}

            {/* Highlights */}
            {showHighlights && (
              <div className="flex items-center space-x-4 mb-6">
                {project.highlights.slice(0, 2).map((highlight, index) => (
                  <span key={index} className="flex items-center text-sm text-green-600 font-medium">
                    <CheckCircle size={14} className="mr-1.5" />
                    {highlight}
                  </span>
                ))}
              </div>
            )}

            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                Client: {project.client}
              </div>
              <Link 
                href={`/projects/${project.slug}`}
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group"
              >
                View Details
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Grid View (original)
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 border border-gray-200 hover:border-primary-200">
      {/* Image */}
      <div className="h-64 relative overflow-hidden">
        <ImageWithFallback
          src={mainImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={85}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          fallbackText={project.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2 backdrop-blur-sm ${statusConfig.color}`}>
            {getStatusIcon()}
            <span className="capitalize">{statusConfig.name}</span>
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm ${typeColorClass}`}>
            {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
          </span>
        </div>
        
        {/* Hover overlay with quick view */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Link 
            href={`/projects/${project.slug}`}
            className="px-6 py-3 bg-white text-primary-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg"
          >
            Quick View
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          {showDates && (
            <div className="flex items-center text-gray-500">
              <Calendar size={14} className="mr-1.5" />
              <span className="text-xs">
                {formatDate(project.completionDate)}
              </span>
            </div>
          )}
          <div className="text-sm font-bold text-gray-900">
            {project.area} sq.ft.
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors line-clamp-1">
          {project.title}
        </h3>

        <div className="flex items-center text-gray-600 mb-3">
          <MapPin size={16} className="mr-2 flex-shrink-0" />
          <span className="text-sm truncate">{formattedLocation}</span>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
          {project.description}
        </p>

        {/* Features */}
        {showFeatures && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.features.slice(0, 2).map((feature, index) => (
              <span key={index} className="px-2.5 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-xs border border-gray-200">
                {feature}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-bold text-gray-900">{project.budget}</span>
            <span className="text-xs text-gray-500">Budget</span>
          </div>
          <Link 
            href={`/projects/${project.slug}`}
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm group"
          >
            View Details
            <ArrowRight size={16} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}