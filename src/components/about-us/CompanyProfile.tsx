// src/components/about-us/CompanyProfile.tsx
'use client'

import { COMPANY_PROFILE } from '@/lib/constants/about-us'
import { getAboutUsIcon, calculateYearsOfExperience } from '@/lib/utils/about-us'
import { getTotalProjectsCount } from '@/lib/utils/projects'
import Image from 'next/image'

export default function CompanyProfile() {
  const data = COMPANY_PROFILE
  const yearsOfExperience = calculateYearsOfExperience(data.establishedOn)
  const completedProjects = getTotalProjectsCount()

  const dynamicStats = [
    { iconName: 'Building2', value: `${completedProjects}+`, label: 'Total Projects' },
    { iconName: 'Clock', value: `${yearsOfExperience}+`, label: 'Years Experience' },
    { iconName: 'Users', value: data.totalTeamMembers, label: 'Team Members' },
  ]

  return (
    <div id="company-profile" className="container mx-auto px-4 pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Content */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-3 text-primary-600 font-bold uppercase tracking-[0.2em] text-sm mb-6">
              <span className="w-12 h-px bg-primary-600"></span>
              {data.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black-200 leading-tight">
              {data.title}
            </h2>
          </div>

          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p className="font-medium text-black-400">
              {data.descriptionPrimary}
            </p>
            <p>
              {data.descriptionSecondary}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {dynamicStats.map((stat, idx) => {
              const Icon = getAboutUsIcon(stat.iconName)
              return (
                <div key={idx} className="p-6 bg-platinum-800 rounded-2xl border border-white transition-all duration-300 hover:shadow-md hover:border-primary-200 group">
                  <Icon className="w-8 h-8 text-secondary-500 mb-4 transition-transform duration-300 group-hover:scale-110" />
                  <div className="text-3xl font-bold text-black-200">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary-500/10 rounded-2xl blur-2xl group-hover:bg-primary-500/20 transition-colors duration-500"></div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-platinum">
            <Image
              src={data.image}
              alt="Company Profile"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Visual Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black-100/40 via-transparent to-transparent"></div>

            {/* Establishing Year Badge */}
            {/* <div className="absolute bottom-8 left-8 bg-transparent backdrop-blur-md rounded-2xl p-4 shadow-xl border border-platinum">
              <div className="text-secondary-500 font-black text-xl leading-none">ESTABLISHED ON</div>
              <div className="text-white font-bold text-md">{data.establishedOn}</div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}