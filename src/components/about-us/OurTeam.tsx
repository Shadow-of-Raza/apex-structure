// src/components/about-us/OurTeam.tsx
'use client'

import { Linkedin, ArrowRight } from 'lucide-react'
import { TEAM_MEMBERS } from '@/lib/constants/about-us'
import Image from 'next/image'

export default function OurTeam() {
  const team = TEAM_MEMBERS

  return (
    <div id="our-team" className="relative py-12 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-platinum-800/30 -skew-x-12 translate-x-1/2 -z-10"></div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-10 gap-x-12 gap-y-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-primary-600 font-bold uppercase tracking-[0.2em] text-sm mb-6">
              <span className="w-12 h-px bg-primary-600"></span>
              Expertise Behind Apex
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-black-200 leading-[0.95]">
              Leadership <span className="text-secondary-500">&</span> Excellence
            </h2>
          </div>
          <div className="max-w-xl">
            <p className="text-gray-500 text-xl leading-relaxed">
              A collective of visionaries, engineers, and strategists dedicated to
              redefining the architectural landscape through precision and innovation.
            </p>
          </div>
        </div>

        {/*Main Team*/ }
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {team.map((member, idx) => (
            <div key={member.id} className="group relative">
              {/* Image Aspect Box */}
              <div className="relative aspect-[1] rounded-2xl overflow-hidden mb-[-4rem] shadow-2xl transition-transform duration-700 group-hover:-translate-y-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-1000 grayscale group-hover:grayscale-0"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black-200/60 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Info Card - Floating */}
              <div className="relative z-10 mx-6 p-8 bg-white rounded-2xl shadow-2xl border border-platinum transition-all duration-500 group-hover:shadow-primary-500/10 group-hover:border-primary-100">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="text-2xl font-black text-black-200 mb-1 leading-none group-hover:text-primary-700 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-secondary-500 font-bold text-[8px] uppercase tracking-widest">
                      {member.role}
                    </p>
                  </div>
                  {member.socialLinks?.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      className="w-10 h-10 rounded-xl bg-platinum-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-300"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                </div>

                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 italic">
                  &quot;{member.bio}&quot;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Recruitment CTA - Redesigned */}
        <div className="mt-12 relative">
          <div className="absolute inset-0 bg-primary-900 rounded-2xl -rotate-1 scale-[1.02]"></div>
          <div className="relative bg-darkbg rounded-2xl p-12 md:p-20 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 border border-white/5 shadow-2xl">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Architect Your Future <br />
                <span className="text-secondary-500">With Apex Structure</span>
              </h3>
              <p className="text-gray-400 text-lg font-medium leading-relaxed mb-0">
                Join a dynamic environment where innovation meets legacy. We are
                continuously seeking visionary talent to help shape the world's skylines.
              </p>
            </div>

            <a
              href="/career"
              className="group flex items-center gap-4 px-10 py-5 bg-white text-black-200 font-black rounded-2xl transition-all duration-500 hover:bg-secondary-500 hover:text-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:shadow-secondary-500/30"
            >
              EXPLORE OPPORTUNITIES
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}