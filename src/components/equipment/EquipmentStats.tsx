// src/components/equipment/EquipmentStats.tsx
'use client'

import { useEffect, useState } from 'react'
import { Truck, Clock, Shield, Zap, TrendingUp, Award } from 'lucide-react'

const stats = [
  { icon: <Truck size={40} />, value: 150, suffix: '+', label: 'Equipment Units', color: 'text-blue-300' },
  { icon: <Clock size={40} />, value: 98, suffix: '%', label: 'Uptime Rate', color: 'text-green-300' },
  { icon: <Shield size={40} />, value: 5, suffix: '', label: 'Safety Rating', color: 'text-yellow-300' },
  { icon: <Zap size={40} />, value: 40, suffix: '%', label: 'Fuel Efficiency', color: 'text-purple-300' },
  { icon: <TrendingUp size={40} />, value: 30, suffix: '%', label: 'Productivity Increase', color: 'text-red-300' },
  { icon: <Award size={40} />, value: 15, suffix: '', label: 'Industry Awards', color: 'text-pink-300' }
]

export default function EquipmentStats() {
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0))

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    const intervals = stats.map((stat, index) => {
      let currentStep = 0
      const targetValue = stat.value
      const stepValue = targetValue / steps

      const interval = setInterval(() => {
        currentStep++
        setAnimatedStats(prev => {
          const newStats = [...prev]
          newStats[index] = Math.min(
            Math.floor(stepValue * currentStep),
            targetValue
          )
          return newStats
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
    <div className="text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Equipment Performance</h2>
        <p className="text-primary-200 max-w-2xl mx-auto">
          Our commitment to maintaining a modern, efficient, and safe equipment fleet
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className={`inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 ${stat.color}`}>
              {stat.icon}
            </div>
            <div className="text-4xl font-bold mb-2">
              {animatedStats[index].toLocaleString()}{stat.suffix}
            </div>
            <div className="text-primary-200 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}