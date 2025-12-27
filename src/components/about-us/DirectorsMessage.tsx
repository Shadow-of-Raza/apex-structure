// src/components/about-us/DirectorsMessage.tsx
import { Signature, Quote } from 'lucide-react'
import Container from '@/components/common/Layout/Container'
import Section from '@/components/common/Layout/Section'
import Image from 'next/image'

export default function DirectorsMessage() {
  return (
    <Section background="gray" id="directors-message">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Director's Photo and Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-6xl font-bold">
                RK
              </div>
              <h3 className="text-2xl font-bold mb-2">Rajesh Kumar</h3>
              <p className="text-primary-600 font-semibold mb-4">Founder & Managing Director</p>
              <p className="text-gray-600 text-sm mb-4">
                With 25+ years in real estate development, Rajesh leads Apex Structure with vision and integrity.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">25+</div>
                  <div className="text-xs text-gray-500">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">150+</div>
                  <div className="text-xs text-gray-500">Projects Led</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Message Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Quote className="w-12 h-12 text-primary-200 mr-4" />
                <span className="text-primary-600 font-semibold">DIRECTOR&apos;S MESSAGE</span>
              </div>
              
              <h2 className="text-3xl font-bold mb-6">
                Building a Legacy of Excellence
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Welcome to Apex Structure, where we don&apos;t just build structures, we build 
                  dreams, communities, and lasting relationships.
                </p>
                
                <p>
                  When I founded this company in 2005, I had a simple vision: to create spaces 
                  that inspire, function flawlessly, and stand the test of time. Today, as we 
                  celebrate our journey, I&apos;m proud to see that vision realized in every 
                  project we undertake.
                </p>
                
                <p>
                  Our success isn&apos;t measured just in square feet constructed, but in the 
                  trust our clients place in us, the satisfaction of homeowners moving into 
                  their dream spaces, and the thriving businesses operating from our commercial 
                  developments.
                </p>
                
                <p className="font-medium italic">
                  &quot;At Apex Structure, we believe that quality is never an accident; 
                  it is always the result of intelligent effort, sincere direction, 
                  and skillful execution.&quot;
                </p>
                
                <p>
                  As we move forward, our commitment remains unchanged: to deliver excellence 
                  in every project, embrace innovation, and contribute positively to the 
                  communities we serve.
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center">
                  <Signature className="w-6 h-6 text-primary-600 mr-2" />
                  <div>
                    <div className="font-bold">Rajesh Kumar</div>
                    <div className="text-sm text-gray-600">Founder & Managing Director</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}