// src/components/about-us/VisionMission.tsx
'use client'

import { CheckCircle2 } from 'lucide-react'
import { VISION_MISSION } from '@/lib/constants/about-us'
import { getAboutUsIcon } from '@/lib/utils/about-us'

export default function VisionMission() {
  const data = VISION_MISSION

  const themeConfig = {
    blue: {
      card: 'bg-blue-50/50 border-blue-100 b-glow-blue',
      iconBg: 'bg-blue-600',
      iconGlow: 'shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)]',
      accent: 'text-blue-700',
      check: 'text-blue-500',
      outline: 'text-blue-100',
      number: '01'
    },
    green: {
      card: 'bg-green-50/50 border-green-100 b-glow-green',
      iconBg: 'bg-green-600',
      iconGlow: 'shadow-[0_0_30px_-5px_rgba(22,163,74,0.4)]',
      accent: 'text-green-700',
      check: 'text-green-500',
      outline: 'text-green-100',
      number: '02'
    },
    purple: {
      card: 'bg-purple-50/50 border-purple-100 b-glow-purple',
      iconBg: 'bg-purple-600',
      iconGlow: 'shadow-[0_0_30px_-5px_rgba(147,51,234,0.4)]',
      accent: 'text-purple-700',
      check: 'text-purple-500',
      outline: 'text-purple-100',
      number: '03'
    }
  }

  const sections = [
    { ...data.vision, ...themeConfig.blue },
    { ...data.mission, ...themeConfig.green },
    { ...data.values, ...themeConfig.purple }
  ]

  return (
    <div id="vision-mission" className="relative py-12 overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-10 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-black-200 leading-[1.1]">
              {data.title}
            </h2>
          </div>
          <p className="max-w-md text-gray-500 text-lg font-medium leading-relaxed">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sections.map((item) => {
            const Icon = getAboutUsIcon(item.iconName)
            return (
              <div
                key={item.id}
                className={`group relative flex flex-col p-10 rounded-2xl border backdrop-blur-sm transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl ${item.card}`}
              >
                {/* Decorative Number */}
                <span className={`absolute top-10 right-10 text-8xl font-black opacity-10 transition-all duration-700 group-hover:scale-125 group-hover:opacity-20 ${item.outline}`}>
                  {item.number}
                </span>

                {/* Icon Circle */}
                <div className={`relative w-24 h-24 rounded-3xl ${item.iconBg} ${item.iconGlow} flex items-center justify-center mb-10 transition-transform duration-700 group-hover:rotate-[10deg]`}>
                  <Icon className="w-12 h-12 text-white" />
                  {/* Internal Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className={`text-3xl font-black mb-6 uppercase tracking-tight ${item.accent}`}>
                    {item.title}
                  </h3>
                  <p className="text-black-400 font-medium text-lg leading-relaxed mb-10 opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.description}
                  </p>
                </div>

                {/* Pillar Points */}
                <div className="space-y-5 pt-8 border-t border-black/5">
                  {item.highlights.map((point, idx) => (
                    <div key={idx} className="flex gap-4 items-start group/point">
                      <div className={`mt-1.5 w-5 h-5 rounded-full flex items-center justify-center bg-white shadow-sm border border-platinum transition-colors duration-300 group-hover/point:border-current ${item.check}`}>
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                      <span className="text-gray-600 font-bold text-sm leading-tight transition-colors duration-300 group-hover/point:text-black-200">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .b-glow-blue:hover { border-color: rgba(37, 99, 235, 0.2); }
        .b-glow-green:hover { border-color: rgba(22, 163, 74, 0.2); }
        .b-glow-purple:hover { border-color: rgba(147, 51, 234, 0.2); }
      `}</style>
    </div>
  )
}