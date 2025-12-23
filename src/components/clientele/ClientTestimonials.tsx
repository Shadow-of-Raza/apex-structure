'use client'

import { useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight, Building2, Award } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Mehta',
    position: 'CEO, TechCorp Solutions',
    company: 'Corporate',
    rating: 5,
    content: 'Apex Structure delivered our new headquarters 3 months ahead of schedule. Their attention to detail and project management excellence was outstanding.',
    project: 'TechCorp Headquarters',
    duration: '12 months',
    category: 'corporate',
    image: 'RM'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    position: 'Director, Green Valley Residency',
    company: 'Residential',
    rating: 5,
    content: 'Our residential project was completed with exceptional quality. Homeowners are delighted with the finish and amenities provided.',
    project: 'Green Valley Luxury Apartments',
    duration: '24 months',
    category: 'residential',
    image: 'PS'
  },
  {
    id: 3,
    name: 'Amit Patel',
    position: 'Managing Director, Global Industries',
    company: 'Industrial',
    rating: 5,
    content: 'The factory complex built by Apex Structure has increased our production efficiency by 40%. Their understanding of industrial requirements is remarkable.',
    project: 'Global Industries Factory',
    duration: '18 months',
    category: 'industrial',
    image: 'AP'
  },
  {
    id: 4,
    name: 'Dr. Sunita Verma',
    position: 'Chairperson, Metro Hospital',
    company: 'Healthcare',
    rating: 5,
    content: 'Building a hospital requires special expertise. Apex Structure managed all medical facility requirements perfectly while maintaining strict timelines.',
    project: 'Metro Hospital Expansion',
    duration: '20 months',
    category: 'healthcare',
    image: 'SV'
  },
]

const categories = [
  { id: 'all', name: 'All Testimonials' },
  { id: 'corporate', name: 'Corporate' },
  { id: 'residential', name: 'Residential' },
  { id: 'industrial', name: 'Industrial' },
  { id: 'healthcare', name: 'Healthcare' },
]

export default function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredTestimonials = selectedCategory === 'all'
    ? testimonials
    : testimonials.filter(t => t.category === selectedCategory)

  const currentTestimonial = filteredTestimonials[currentIndex] || filteredTestimonials[0]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length)
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Real feedback from our satisfied clients across different industries
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setSelectedCategory(category.id)
              setCurrentIndex(0)
            }}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Testimonial Card */}
      {currentTestimonial && (
        <div className="relative">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 md:p-12">
            <Quote className="w-12 h-12 text-primary-200 mb-6" />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                <p className="text-xl text-gray-700 italic mb-6">
                  "{currentTestimonial.content}"
                </p>
                
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className="fill-yellow-400 text-yellow-400 mr-1" 
                    />
                  ))}
                  <span className="ml-2 text-gray-600">Perfect 5/5</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-xl font-bold mr-4">
                    {currentTestimonial.image}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{currentTestimonial.name}</h4>
                    <p className="text-gray-600">{currentTestimonial.position}</p>
                    <div className="flex items-center mt-2">
                      <Building2 size={16} className="text-gray-400 mr-2" />
                      <span className="text-sm text-gray-500">{currentTestimonial.company}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="bg-primary-50 rounded-xl p-6">
                <h5 className="font-bold text-lg mb-4 text-primary-700">Project Details</h5>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500">Project Name</div>
                    <div className="font-medium">{currentTestimonial.project}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-medium">{currentTestimonial.duration}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Category</div>
                    <div className="font-medium capitalize">{currentTestimonial.category}</div>
                  </div>
                  <div className="flex items-center">
                    <Award size={16} className="text-yellow-500 mr-2" />
                    <span className="text-sm">Completed ahead of schedule</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
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
        </div>
      )}

      {/* Testimonial Dots */}
      <div className="flex justify-center space-x-3">
        {filteredTestimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-primary-600 w-8' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}