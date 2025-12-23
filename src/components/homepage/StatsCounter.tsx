// src/components/homepage/StatsCounter.tsx
'use client'

import { useEffect, useState } from 'react'
import { Building2, Users, Award, MapPin } from 'lucide-react'

const stats = [
  { icon: <Building2 size={40} />, value: 500, suffix: '+', label: 'Projects Completed' },
  { icon: <Users size={40} />, value: 250, suffix: '+', label: 'Happy Clients' },
  { icon: <Award size={40} />, value: 50, suffix: '+', label: 'Industry Awards' },
  { icon: <MapPin size={40} />, value: 25, suffix: '+', label: 'Cities Presence' }
]

export default function StatsCounter() {
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    const intervals = stats.map((stat, index) => {
      let currentStep = 0
      const targetValue = stat.value
      const stepValue = targetValue / steps

      const interval = setInterval(() => {
        currentStep++
        setCounts(prev => {
          const newCounts = [...prev]
          newCounts[index] = Math.min(
            Math.floor(stepValue * currentStep),
            targetValue
          )
          return newCounts
        })

        if (currentStep >= steps) {
          clearInterval(interval)
        }
      }, stepDuration)

      return interval
    })

    return () => intervals.forEach(interval => clearInterval(interval))
  }, [])

  return (
    <section className="py-20 bg-gradient-to-r from-primary-800 to-primary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-primary-200 max-w-2xl mx-auto">
            Our track record speaks for our commitment to excellence and customer satisfaction
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
                <div className="text-primary-200">
                  {stat.icon}
                </div>
              </div>
              <div className="text-5xl font-bold mb-2">
                {counts[index].toLocaleString()}{stat.suffix}
              </div>
              <div className="text-primary-200 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}