'use client'

import { useState } from 'react'
import { Building2, CheckCircle, Award, Clock, Users, MapPin } from 'lucide-react'
import Container from '@/components/common/Layout/Container'
import Section from '@/components/common/Layout/Section'
import Image from 'next/image'

const milestones = [
  { year: '2005', title: 'Company Founded', description: 'Started with a vision to transform real estate' },
  { year: '2010', title: 'First Major Project', description: 'Completed landmark commercial complex' },
  { year: '2015', title: 'National Expansion', description: 'Expanded operations to 10+ cities' },
  { year: '2020', title: 'Sustainability Focus', description: 'Integrated green building practices' },
  { year: '2023', title: '500+ Projects', description: 'Milestone of successful completions' },
]

export default function CompanyProfile() {
  const [activeMilestone, setActiveMilestone] = useState(2)

  return (
    <Section id="company-profile">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <span className="text-primary-600 font-semibold">COMPANY PROFILE</span>
            <h2 className="text-4xl font-bold mt-2 mb-6">Our Journey of Excellence</h2>
            
            <p className="text-gray-600 mb-6 text-lg">
              Founded in 2005, <span className="font-semibold text-primary-700">Apex Structure</span> has grown 
              from a local construction firm to one of the most trusted real estate development companies 
              in the region. Our journey is marked by innovation, quality, and unwavering commitment to 
              client satisfaction.
            </p>
            
            <p className="text-gray-600 mb-8">
              With over 500 successful projects across residential, commercial, and industrial sectors, 
              we have consistently delivered spaces that inspire, function, and endure. Our team of 
              200+ professionals brings together expertise in architecture, engineering, project 
              management, and sustainable design.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <Building2 className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary-700">500+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <Clock className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary-700">18+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <Users className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary-700">200+</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Timeline/Milestones */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-8 text-center">Our Milestones</h3>
            
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-200"></div>
              
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`relative flex items-start mb-8 cursor-pointer transition-all duration-300 ${
                    activeMilestone === index ? 'scale-105' : ''
                  }`}
                  onMouseEnter={() => setActiveMilestone(index)}
                >
                  {/* Year Circle */}
                  <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                    activeMilestone === index 
                      ? 'bg-primary-600 text-white shadow-lg' 
                      : 'bg-white text-primary-600 border-2 border-primary-200'
                  }`}>
                    {milestone.year}
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-6 p-4 rounded-lg transition-all duration-300 ${
                    activeMilestone === index 
                      ? 'bg-primary-50 border-l-4 border-primary-500' 
                      : 'bg-white border border-gray-200'
                  }`}>
                    <h4 className={`font-bold text-lg mb-1 ${
                      activeMilestone === index ? 'text-primary-700' : 'text-gray-800'
                    }`}>
                      {milestone.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}