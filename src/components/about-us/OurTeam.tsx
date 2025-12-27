// src/components/about-us/OurTeam.tsx
'use client'

import { useState } from 'react'
import { Linkedin, Mail, Phone, Building2, Home, Warehouse, Wrench } from 'lucide-react'
import Container from '@/components/common/Layout/Container'
import Section from '@/components/common/Layout/Section'
import Image from 'next/image'

const teamMembers = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Founder & Managing Director',
    department: 'Leadership',
    experience: '25+ years',
    specialization: 'Strategic Planning',
    bio: 'Visionary leader with expertise in large-scale project management',
    linkedin: '#',
    email: 'rajesh@apexstructure.com',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Chief Operations Officer',
    department: 'Operations',
    experience: '18+ years',
    specialization: 'Project Execution',
    bio: 'Ensures seamless project delivery across all sites',
    linkedin: '#',
    email: 'priya@apexstructure.com',
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Head of Construction',
    department: 'Construction',
    experience: '20+ years',
    specialization: 'Quality Control',
    bio: 'Expert in construction methodologies and quality assurance',
    linkedin: '#',
    email: 'amit@apexstructure.com',
  },
  {
    id: 4,
    name: 'Sonia Verma',
    role: 'Chief Architect',
    department: 'Design',
    experience: '15+ years',
    specialization: 'Sustainable Design',
    bio: 'Award-winning architect focused on eco-friendly designs',
    linkedin: '#',
    email: 'sonia@apexstructure.com',
  },
  {
    id: 5,
    name: 'Rahul Mehta',
    role: 'Finance Director',
    department: 'Finance',
    experience: '22+ years',
    specialization: 'Investment Strategy',
    bio: 'Manages financial planning and investment portfolios',
    linkedin: '#',
    email: 'rahul@apexstructure.com',
  },
  {
    id: 6,
    name: 'Neha Gupta',
    role: 'Head of Business Development',
    department: 'Business',
    experience: '12+ years',
    specialization: 'Client Relations',
    bio: 'Builds strategic partnerships and client relationships',
    linkedin: '#',
    email: 'neha@apexstructure.com',
  },
]

const departments = [
  { id: 'all', name: 'All Team', icon: <Building2 size={20} />, count: 50 },
  { id: 'leadership', name: 'Leadership', icon: <Building2 size={20} />, count: 8 },
  { id: 'construction', name: 'Construction', icon: <Home size={20} />, count: 25 },
  { id: 'design', name: 'Design', icon: <Wrench size={20} />, count: 12 },
  { id: 'operations', name: 'Operations', icon: <Warehouse size={20} />, count: 5 },
]

export default function OurTeam() {
  const [activeDept, setActiveDept] = useState('all')
  const [selectedMember, setSelectedMember] = useState<number | null>(null)

  const filteredMembers = activeDept === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => 
        member.department.toLowerCase() === activeDept.toLowerCase()
      )

  return (
    <Section id="our-team">
      <Container>
        <div className="text-center mb-12">
          <span className="text-primary-600 font-semibold">MEET OUR TEAM</span>
          <h2 className="text-4xl font-bold mt-2 mb-6">Expert Professionals Driving Excellence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our diverse team of 200+ professionals brings together decades of experience 
            across architecture, engineering, project management, and construction.
          </p>
        </div>
        
        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActiveDept(dept.id)}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                activeDept === dept.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{dept.icon}</span>
              <span className="font-medium">{dept.name}</span>
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                activeDept === dept.id
                  ? 'bg-white/30'
                  : 'bg-gray-200'
              }`}>
                {dept.count}+
              </span>
            </button>
          ))}
        </div>
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredMembers.map((member) => (
            <div 
              key={member.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={() => setSelectedMember(member.id)}
              onMouseLeave={() => setSelectedMember(null)}
            >
              <div className="p-6">
                {/* Avatar */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-3xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                {/* Info */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-2">{member.role}</p>
                  <div className="inline-block px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-3">
                    {member.department}
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {member.experience} Experience | {member.specialization}
                  </p>
                  <p className="text-gray-700 text-sm">
                    {member.bio}
                  </p>
                </div>
                
                {/* Contact Links */}
                <div className={`flex justify-center space-x-4 transition-all duration-300 ${
                  selectedMember === member.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <a 
                    href={member.linkedin}
                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition"
                    aria-label={`Connect with ${member.name} on LinkedIn`}
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-600 hover:text-white transition"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Team Stats */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-primary-200">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-primary-200">National Awards</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-primary-200">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-primary-200">Expert Departments</div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}