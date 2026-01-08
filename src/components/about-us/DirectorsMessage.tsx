// src/components/about-us/DirectorsMessage.tsx
import { Quote, Award, Briefcase } from 'lucide-react'
import { DIRECTORS_MESSAGE } from '@/lib/constants/about-us'
import Image from 'next/image'


export default function DirectorsMessage() {
  const data = DIRECTORS_MESSAGE

  return (
    <div id="directors-message" className="container mx-auto px-4 pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Visual Column */}
        <div className="lg:col-span-5">
          <div className="relative">
            {/* Profile Card Overlay */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black-100/90 via-black-100/20 to-transparent z-10"></div>
              <div className="absolute inset-0">
                <Image
                  src={data.profile}
                  alt={data.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-10 z-20 text-white">
                <h3 className="text-3xl font-bold mb-2">{data.name}</h3>
                <p className="text-primary-200 font-medium mb-6">{data.role}</p>

                <div className="flex gap-8 border-t border-white/20 pt-6">
                  <div>
                    <div className="text-2xl font-bold">{data.experience}+</div>
                    <div className="text-xs text-white/60 uppercase tracking-widest">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{data.projectsLed}+</div>
                    <div className="text-xs text-white/60 uppercase tracking-widest">Projects Led</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>

        {/* Text Column */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center gap-4 text-primary-600 font-bold uppercase tracking-widest text-sm">
            <span className="h-px w-8 bg-primary-600"></span>
            {data.badge}
          </div>

          <h2 className="text-4xl font-bold text-black-200 leading-tight">
            {data.messageTitle}
          </h2>

          <div className="relative">
            <Quote className="absolute -top-4 -left-8 w-16 h-16 text-primary-500/10 -z-10" />
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed italic">
              {data.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Featured Quote */}
          <div className="pt-8 border-t border-platinum">
            <blockquote className="text-xl font-medium text-black-300 italic mb-4">
              &quot;{data.quote}&quot;
            </blockquote>
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-secondary-500"></div>
            <div className="text-secondary-500 font-bold tracking-widest uppercase text-xs">
              {data.signatureRole}
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}