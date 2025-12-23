'use client'

import { useEffect, useState } from 'react'
import { Users, Handshake, Award, Repeat, TrendingUp, Clock, Star, CheckCircle } from 'lucide-react'

const stats = [
  { icon: <Users size={40} />, value: 250, suffix: '+', label: 'Satisfied Clients', color: 'bg-blue-100 text-blue-600' },
  { icon: <Handshake size={40} />, value: 15, suffix: '+', label: 'Years Average Partnership', color: 'bg-green-100 text-green-600' },
  { icon: <Award size={40} />, value: 98, suffix: '%', label: 'Client Retention Rate', color: 'bg-yellow-100 text-yellow-600' },
  { icon: <Repeat size={40} />, value: 75, suffix: '%', label: 'Repeat Business', color: 'bg-purple-100 text-purple-600' },
]

const growthMetrics = [
  { year: '2020', clients: 180, growth: '15%' },
  { year: '2021', clients: 200, growth: '11%' },
  { year: '2022', clients: 225, growth: '12.5%' },
  { year: '2023', clients: 250, growth: '11.1%' },
]

export default function ClientStats() {
  const [counts, setCounts] = useState(stats.map(() => 0))
  const [hoveredMetric, setHoveredMetric] = useState<number | null>(null)

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
    <div className="space-y-12">
      {/* Main Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${stat.color} mb-6`}>
              {stat.icon}
            </div>
            <div className="text-4xl font-bold mb-2">
              {counts[index].toLocaleString()}{stat.suffix}
            </div>
            <div className="text-gray-600 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>


      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Clock className="w-8 h-8 text-blue-600 mr-3" />
            <h4 className="text-lg font-bold">Response Time</h4>
          </div>
          <div className="text-3xl font-bold mb-2">2 Hours</div>
          <p className="text-blue-700">Average response time to client inquiries</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Star className="w-8 h-8 text-green-600 mr-3" />
            <h4 className="text-lg font-bold">Client Satisfaction</h4>
          </div>
          <div className="text-3xl font-bold mb-2">4.9/5.0</div>
          <p className="text-green-700">Average client satisfaction rating</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <CheckCircle className="w-8 h-8 text-purple-600 mr-3" />
            <h4 className="text-lg font-bold">On-Time Delivery</h4>
          </div>
          <div className="text-3xl font-bold mb-2">96%</div>
          <p className="text-purple-700">Projects completed on or before schedule</p>
        </div>
      </div>
    </div>
  )
}