// src/components/homepage/HeroSection.tsx
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary-700 to-primary-800 text-white">
      {/* Background Image - Add your own image */}
      <div className="absolute inset-0 bg-black opacity-30 z-0">
        {/* Replace with your hero image */}
        <div className="w-full h-full bg-gradient-to-r from-primary-900/50 to-primary-800/50" />
      </div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-2 bg-secondary-500 rounded-full text-sm font-semibold mb-4">
            Building Dreams Since 2005
          </span>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Building Excellence in 
            <span className="text-secondary-500"> Real Estate</span>
          </h1>
          
          <p className="text-xl mb-8 text-gray-200 max-w-2xl">
            Apex Structure delivers premium residential and commercial projects with innovative design, 
            superior quality, and timely execution across the nation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link 
              href="/projects" 
              className="inline-flex items-center justify-center bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300"
            >
              View Our Projects
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link 
              href="/contact-us" 
              className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300"
            >
              Get Free Consultation
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <CheckCircle className="text-secondary-500 mr-3" size={24} />
              <div>
                <h3 className="font-bold text-lg">500+ Projects</h3>
                <p className="text-gray-300">Successfully Completed</p>
              </div>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-secondary-500 mr-3" size={24} />
              <div>
                <h3 className="font-bold text-lg">18+ Years</h3>
                <p className="text-gray-300">Industry Experience</p>
              </div>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-secondary-500 mr-3" size={24} />
              <div>
                <h3 className="font-bold text-lg">50+ Cities</h3>
                <p className="text-gray-300">Nationwide Presence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}