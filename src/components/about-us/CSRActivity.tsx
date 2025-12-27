// src/components/about-us/CSRActivity.tsx
import { Heart, TreePine, Users, BookOpen, Award } from 'lucide-react'
import Container from '@/components/common/Layout/Container'
import Section from '@/components/common/Layout/Section'

const csrActivities = [
  {
    icon: <TreePine size={32} />,
    title: "Environmental Sustainability",
    description: "Planting 10,000+ trees annually and implementing rainwater harvesting in all projects",
    initiatives: [
      "Green building certification for all new projects",
      "Solar panel installations in residential complexes",
      "Waste management and recycling programs"
    ]
  },
  {
    icon: <Heart size={32} />,
    title: "Community Development",
    description: "Supporting local communities through infrastructure and educational initiatives",
    initiatives: [
      "Building schools and community centers",
      "Skill development programs for local youth",
      "Healthcare camps in project areas"
    ]
  },
  {
    icon: <Users size={32} />,
    title: "Employee Welfare",
    description: "Creating a safe, inclusive, and growth-oriented work environment",
    initiatives: [
      "Comprehensive health insurance for all employees",
      "Regular training and skill upgradation",
      "Equal opportunity and diversity policies"
    ]
  },
  {
    icon: <BookOpen size={32} />,
    title: "Education Support",
    description: "Promoting education through scholarships and infrastructure support",
    initiatives: [
      "Annual scholarships for engineering students",
      "Adoption of government schools",
      "Digital learning labs in rural areas"
    ]
  }
]

export default function CSRActivity() {
  return (
    <Section background="gray" id="csr">
      <Container>
        <div className="text-center mb-12">
          <span className="text-primary-600 font-semibold">CORPORATE RESPONSIBILITY</span>
          <h2 className="text-4xl font-bold mt-2 mb-6">Building Better Communities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Apex Structure, we believe our responsibility extends beyond construction 
            to making a positive impact on society and the environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {csrActivities.map((activity, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <div className="text-green-600">
                    {activity.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-6">
                <h4 className="font-semibold text-gray-700 mb-3">Key Initiatives:</h4>
                <ul className="space-y-2">
                  {activity.initiatives.map((initiative, idx) => (
                    <li key={idx} className="flex items-start">
                      <Award className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{initiative}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Impact Stats */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">Our CSR Impact (2023)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-green-200">Trees Planted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-green-200">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">₹50L+</div>
              <div className="text-green-200">CSR Investment</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-green-200">Community Projects</div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}