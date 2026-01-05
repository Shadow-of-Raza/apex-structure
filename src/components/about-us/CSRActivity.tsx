// src/components/about-us/CSRActivity.tsx
import { Heart, ArrowUpRight } from 'lucide-react'
import { CSR_ACTIVITIES } from '@/lib/constants/about-us'
import Container from '@/components/common/Layout/Container'
import Section from '@/components/common/Layout/Section'
import Image from 'next/image'

export default function CSRActivity() {
  const activities = CSR_ACTIVITIES

  return (
      <div id="csr" className="container mx-auto px-4 py-20"> 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-secondary-600 font-bold uppercase tracking-widest text-sm">
              <Heart className="w-5 h-5 fill-secondary-500" />
              Corporate Social Responsibility
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black-200 leading-tight">
              Building Beyond Structures: Our Social Impact
            </h2>
          </div>
          <div className="text-gray-600 text-lg leading-relaxed">
            <p>
              At Apex Structure, we believe our responsibility extends beyond construction
              to making a positive impact on society and the environment. We invest in
              sustainable practices, community growth, and educational empowerment.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-platinum"
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black-200/30 group-hover:bg-black-200/10 transition-colors duration-500"></div>

                {/* Badge Overlay */}
                <div className="absolute bottom-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-black-200 uppercase tracking-widest">
                  {activity.category}
                </div>
              </div>

              {/* Body */}
              <div className="p-10 space-y-6">
                <h3 className="text-2xl font-bold text-black-200 group-hover:text-primary-700 transition-colors duration-300">
                  {activity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm font-medium">
                  {activity.description}
                </p>

                <div className="pt-6 border-t border-platinum flex justify-between items-center group/btn">
                  <span className="text-primary-600 font-bold text-sm tracking-tight">Learn more about initiatives</span>
                  <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 transition-all duration-300 group-hover/btn:bg-primary-600 group-hover/btn:text-white group-hover/btn:rotate-45">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}