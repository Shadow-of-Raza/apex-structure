// src/components/homepage/Testimonials.tsx
'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    company: 'Kumar Enterprises',
    role: 'CEO',
    content: 'Apex Structure delivered our corporate office project ahead of schedule with exceptional quality. Their attention to detail and professional approach is commendable.',
    rating: 5,
    image: '/images/testimonials/1.jpg'
  },
  {
    name: 'Priya Sharma',
    company: 'Sharma Residency',
    role: 'Property Owner',
    content: 'Our dream home was built exactly as we envisioned. The team was responsive, transparent, and delivered high-quality work. Highly recommended!',
    rating: 5,
    image: '/images/testimonials/2.jpg'
  },
  {
    name: 'Amit Patel',
    company: 'Patel Industries',
    role: 'Director',
    content: 'Working with Apex Structure on our factory construction was a smooth experience. They handled all regulatory approvals and delivered a world-class facility.',
    rating: 5,
    image: '/images/testimonials/3.jpg'
  }
]

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary-600 font-semibold">CLIENT TESTIMONIALS</span>
          <h2 className="text-4xl font-bold mt-2 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real feedback from our satisfied clients across various projects
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 md:p-12">
            <Quote className="w-12 h-12 text-primary-200 mb-6" />
            
            <div className="mb-8">
              <p className="text-xl text-gray-700 italic mb-6">
                "{testimonials[currentSlide].content}"
              </p>
              
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className="fill-yellow-400 text-yellow-400 mr-1" 
                  />
                ))}
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-xl mr-4">
                {testimonials[currentSlide].name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h4 className="text-xl font-bold">{testimonials[currentSlide].name}</h4>
                <p className="text-gray-600">{testimonials[currentSlide].role}, {testimonials[currentSlide].company}</p>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-primary-600 w-8' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}