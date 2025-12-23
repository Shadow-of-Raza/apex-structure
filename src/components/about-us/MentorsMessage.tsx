import { Award, Lightbulb, Target } from 'lucide-react'
import Container from '@/components/common/Layout/Container'
import Section from '@/components/common/Layout/Section'

export default function MentorsMessage() {
  return (
    <Section id="mentors-message">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold">MENTOR&apos;S INSIGHTS</span>
            <h2 className="text-4xl font-bold mt-2 mb-6">Wisdom from Our Advisory Board</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guidance from industry veterans shapes our strategic direction and commitment to excellence
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation Focus</h3>
                <p className="text-gray-600">
                  Embracing cutting-edge construction technologies and sustainable practices
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                  <Target className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Strategic Growth</h3>
                <p className="text-gray-600">
                  Balanced expansion while maintaining quality standards and client relationships
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                  <Award className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Excellence Commitment</h3>
                <p className="text-gray-600">
                  Uncompromising dedication to quality, safety, and customer satisfaction
                </p>
              </div>
            </div>
            
            <div className="border-l-4 border-primary-500 pl-6 py-2">
              <blockquote className="text-xl italic text-gray-700 mb-4">
                &quot;The construction industry&apos;s future belongs to those who can balance 
                technological advancement with human-centric design. Apex Structure&apos;s 
                approach to integrating smart solutions with timeless craftsmanship sets 
                them apart.&quot;
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  SS
                </div>
                <div>
                  <div className="font-bold">Dr. Sunil Sharma</div>
                  <div className="text-sm text-gray-600">
                    Industry Veteran & Strategic Advisor | 40+ Years Experience
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