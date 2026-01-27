'use client'

import { useEffect, useState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { getAboutUsIcon } from '@/lib/utils/about-us'

export default function VisionMission() {
  const [data, setData] = useState<{ title: string; description: string; sections: any[] }>({
    title: 'Rooted in Integrity, Building for the Future',
    description: 'Our guiding principles are not just words on a wall; they are the blueprint for every landmark we construct and every relationship we build.',
    sections: []
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'
        const response = await fetch(`${baseUrl}/about/values?activeOnly=true`)
        const result = await response.json()

        if (result.success && result.data?.length > 0) {
          const values = result.data;
          const themeConfig: any = {
            blue: {
              card: 'bg-blue-50/50 border-blue-100 b-glow-blue',
              iconBg: 'bg-blue-600',
              iconGlow: 'shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)]',
              accent: 'text-blue-700',
              check: 'text-blue-500',
              outline: 'text-blue-100'
            },
            green: {
              card: 'bg-green-50/50 border-green-100 b-glow-green',
              iconBg: 'bg-green-600',
              iconGlow: 'shadow-[0_0_30px_-5px_rgba(22,163,74,0.4)]',
              accent: 'text-green-700',
              check: 'text-green-500',
              outline: 'text-green-100'
            },
            purple: {
              card: 'bg-purple-50/50 border-purple-100 b-glow-purple',
              iconBg: 'bg-purple-600',
              iconGlow: 'shadow-[0_0_30px_-5px_rgba(147,51,134,0.4)]',
              accent: 'text-purple-700',
              check: 'text-purple-500',
              outline: 'text-purple-100'
            },
            orange: {
              card: 'bg-orange-50/50 border-orange-100 b-glow-orange',
              iconBg: 'bg-orange-600',
              iconGlow: 'shadow-[0_0_30px_-5px_rgba(249,115,22,0.4)]',
              accent: 'text-orange-700',
              check: 'text-orange-500',
              outline: 'text-orange-100'
            },
            amber: {
              card: 'bg-amber-50/50 border-amber-100 b-glow-amber',
              iconBg: 'bg-amber-600',
              iconGlow: 'shadow-[0_0_30px_-5px_rgba(245,158,11,0.4)]',
              accent: 'text-amber-700',
              check: 'text-amber-500',
              outline: 'text-amber-100'
            },
            rose: {
              card: 'bg-rose-50/50 border-rose-100 b-glow-rose',
              iconBg: 'bg-rose-600',
              iconGlow: 'shadow-[0_0_30px_-5px_rgba(225,29,72,0.4)]',
              accent: 'text-rose-700',
              check: 'text-rose-500',
              outline: 'text-rose-100'
            },
            emerald: {
              card: 'bg-emerald-50/50 border-emerald-100 b-glow-emerald',
              iconBg: 'bg-emerald-600',
              iconGlow: 'shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)]',
              accent: 'text-emerald-700',
              check: 'text-emerald-500',
              outline: 'text-emerald-100'
            },
            cyan: {
              card: 'bg-cyan-50/50 border-cyan-100 b-glow-cyan',
              iconBg: 'bg-cyan-600',
              iconGlow: 'shadow-[0_0_30px_-5px_rgba(6,182,212,0.4)]',
              accent: 'text-cyan-700',
              check: 'text-cyan-500',
              outline: 'text-cyan-100'
            },
            indigo: {
              card: 'bg-indigo-50/50 border-indigo-100 b-glow-indigo',
              iconBg: 'bg-indigo-600',
              iconGlow: 'shadow-[0_0_30px_-5px_rgba(79,70,229,0.4)]',
              accent: 'text-indigo-700',
              check: 'text-indigo-500',
              outline: 'text-indigo-100'
            }
          }

          const dynamicSections = values.map((val: any, idx: number) => ({
            ...val,
            ...(themeConfig[val.color_theme] || themeConfig.blue),
            number: `0${idx + 1}`.slice(-2)
          }))

          setData(prev => ({ ...prev, sections: dynamicSections }))
        } else {
          console.warn('Vision & Mission API returned empty data or failed. Check DB seeding.')
        }
      } catch (error) {
        console.error('Failed to fetch vision & mission:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-blue-600 opacity-20" />
      </div>
    )
  }

  // If no sections after loading, still show the header but with a "check back" message or just the header
  const hasSections = data.sections.length > 0;

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
          {data.sections.map((item: any) => {
            const Icon = getAboutUsIcon(item.icon_name || item.iconName)
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
                  {(item.highlights || []).map((point: string, idx: number) => (
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

        {data.sections.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-gray-100 rounded-3xl bg-gray-50/50">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-4">
              <Loader2 className="w-8 h-8 text-blue-600 opacity-40" />
            </div>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Awaiting architectural foundations...</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .b-glow-blue:hover { border-color: rgba(37, 99, 235, 0.2); }
        .b-glow-green:hover { border-color: rgba(22, 163, 74, 0.2); }
        .b-glow-purple:hover { border-color: rgba(147, 51, 134, 0.2); }
        .b-glow-orange:hover { border-color: rgba(249, 115, 22, 0.2); }
        .b-glow-amber:hover { border-color: rgba(245, 158, 11, 0.2); }
        .b-glow-rose:hover { border-color: rgba(225, 29, 72, 0.2); }
        .b-glow-emerald:hover { border-color: rgba(16, 185, 129, 0.2); }
        .b-glow-cyan:hover { border-color: rgba(6, 182, 212, 0.2); }
        .b-glow-indigo:hover { border-color: rgba(79, 70, 229, 0.2); }
      `}</style>
    </div>
  )
}
