'use client'

import { useState } from 'react'
import { 
  MapPin, 
  Briefcase, 
  Clock, 
  DollarSign, 
  Calendar, 
  ChevronDown, 
  ChevronUp,
  ExternalLink,
  AlertCircle
} from 'lucide-react'
import { JobOpening as JobOpeningType } from '@/lib/constants/career'
import { formatDate } from '@/lib/utils/format'

interface JobOpeningProps {
  job: JobOpeningType
}

export default function JobOpening({ job }: JobOpeningProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const daysLeft = Math.ceil(
    (new Date(job.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  )

  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
      isExpanded ? 'shadow-xl' : 'hover:shadow-md'
    }`}>
      {/* Job Summary */}
      <div className="p-6 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <h3 className="text-xl font-bold mr-3">{job.title}</h3>
              {job.urgent && (
                <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded">
                  Urgent Hiring
                </span>
              )}
              {job.remote && (
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded ml-2">
                  Remote Available
                </span>
              )}
            </div>
            
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center text-gray-600">
                <Briefcase className="w-4 h-4 mr-2" />
                <span className="text-sm">{job.department}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">{job.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm">{job.type}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <DollarSign className="w-4 h-4 mr-2" />
                <span className="text-sm">{job.salary}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm">{job.experience}</span>
              </div>
            </div>
            
            <p className="text-gray-700">{job.description}</p>
          </div>
          
          <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col items-end">
            <button className="mb-4 flex items-center text-primary-600 hover:text-primary-700 font-medium">
              {isExpanded ? (
                <>
                  Show Less
                  <ChevronUp className="w-4 h-4 ml-2" />
                </>
              ) : (
                <>
                  View Details
                  <ChevronDown className="w-4 h-4 ml-2" />
                </>
              )}
            </button>
            
            <div className="text-right">
              <div className="text-sm text-gray-600 mb-1">
                Posted: {formatDate(job.postedDate)}
              </div>
              <div className={`text-sm font-medium ${
                daysLeft <= 7 ? 'text-red-600' : 'text-gray-600'
              }`}>
                <AlertCircle className="inline w-4 h-4 mr-1" />
                Apply by: {formatDate(job.deadline)} ({daysLeft} days left)
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Expanded Details */}
      {isExpanded && (
        <div className="border-t border-gray-200 p-6 bg-gray-50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Responsibilities */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-primary-700">Key Responsibilities</h4>
              <ul className="space-y-2">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Requirements */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-primary-700">Requirements</h4>
              <ul className="space-y-2">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Benefits */}
          <div className="mt-8">
            <h4 className="text-lg font-bold mb-4 text-primary-700">Benefits & Perks</h4>
            <div className="flex flex-wrap gap-3">
              {job.benefits.map((benefit, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white border border-primary-200 text-primary-700 rounded-lg text-sm font-medium hover:bg-primary-50 transition"
                >
                  {benefit}
                </span>
              ))}
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
            <a
              href={`/career/apply/${job.slug}`}
              className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition duration-300 flex items-center justify-center"
            >
              Apply Now
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
            <button className="flex-1 border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg font-semibold transition duration-300">
              Save for Later
            </button>
            <button className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition duration-300">
              Share Position
            </button>
          </div>
          
          {/* Quick Stats */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary-700">48h</div>
              <div className="text-sm text-gray-600">Avg. Response Time</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary-700">3</div>
              <div className="text-sm text-gray-600">Interview Rounds</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary-700">85%</div>
              <div className="text-sm text-gray-600">Offer Acceptance Rate</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary-700">5</div>
              <div className="text-sm text-gray-600">Days to Offer</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}