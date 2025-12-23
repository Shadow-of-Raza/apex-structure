import { Eye, Target, Heart, Star } from 'lucide-react'
import Container from '@/components/common/Layout/Container'
import Section from '@/components/common/Layout/Section'

export default function VisionMission() {
  return (
    <Section background="gray" id="vision-mission">
      <Container>
        <div className="text-center mb-12">
          <span className="text-primary-600 font-semibold">OUR PHILOSOPHY</span>
          <h2 className="text-4xl font-bold mt-2 mb-6">Vision, Mission & Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The guiding principles that drive every decision and project at Apex Structure
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision Card */}
          <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Eye className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-blue-700">Our Vision</h3>
            <p className="text-gray-700 mb-6">
              To be the most trusted and innovative real estate development company, 
              creating sustainable spaces that enhance lives and communities across 
              the nation.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-blue-500 mr-2" />
                <span className="text-sm">Industry leadership in innovation</span>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-blue-500 mr-2" />
                <span className="text-sm">Nationwide presence by 2030</span>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-blue-500 mr-2" />
                <span className="text-sm">Zero-carbon projects by 2025</span>
              </div>
            </div>
          </div>
          
          {/* Mission Card */}
          <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-green-700">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              To deliver exceptional construction projects through innovative design, 
              superior quality, timely execution, and unwavering commitment to client 
              satisfaction and environmental sustainability.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-sm">Excellence in execution</span>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-sm">Client-centric approach</span>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-sm">Sustainable practices</span>
              </div>
            </div>
          </div>
          
          {/* Values Card */}
          <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-purple-700">Our Values</h3>
            <p className="text-gray-700 mb-6">
              Integrity, innovation, quality, teamwork, and social responsibility form 
              the foundation of everything we do at Apex Structure.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-purple-600 font-bold">I</span>
                </div>
                <div>
                  <div className="font-medium">Integrity</div>
                  <div className="text-sm text-gray-600">Honest and ethical in all dealings</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-purple-600 font-bold">Q</span>
                </div>
                <div>
                  <div className="font-medium">Quality</div>
                  <div className="text-sm text-gray-600">Uncompromising standards</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-purple-600 font-bold">I</span>
                </div>
                <div>
                  <div className="font-medium">Innovation</div>
                  <div className="text-sm text-gray-600">Continuous improvement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}