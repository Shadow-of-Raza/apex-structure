import { Target, Users, Shield, TrendingUp, DollarSign, Clock } from 'lucide-react'
import Container from '@/components/common/Layout/Container'
import Section from '@/components/common/Layout/Section'

const businessModel = [
  {
    icon: <Target size={32} />,
    title: "Client-Centric Approach",
    description: "Tailored solutions based on specific client requirements and market demands",
    details: "We prioritize client satisfaction through transparent communication and customized solutions"
  },
  {
    icon: <Users size={32} />,
    title: "Strategic Partnerships",
    description: "Collaboration with architects, contractors, and financial institutions",
    details: "Strong network of industry partners ensures comprehensive project delivery"
  },
  {
    icon: <Shield size={32} />,
    title: "Risk Management",
    description: "Comprehensive risk assessment and mitigation strategies",
    details: "Proactive risk management ensures project stability and investor confidence"
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Scalable Operations",
    description: "Flexible business model that adapts to market changes and growth opportunities",
    details: "Our scalable approach allows us to handle projects of all sizes efficiently"
  },
  {
    icon: <DollarSign size={32} />,
    title: "Diverse Revenue Streams",
    description: "Multiple income sources from development, consulting, and management services",
    details: "Diversified revenue ensures business stability and growth potential"
  },
  {
    icon: <Clock size={32} />,
    title: "Efficient Timeline",
    description: "Streamlined processes for faster project completion without compromising quality",
    details: "Optimized workflows and advanced project management tools ensure timely delivery"
  }
]

export default function BusinessModel() {
  return (
    <Section id="business-model">
      <Container>
        <div className="text-center mb-12">
          <span className="text-primary-600 font-semibold">BUSINESS MODEL</span>
          <h2 className="text-4xl font-bold mt-2 mb-6">Our Operational Framework</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive business model designed for sustainable growth, 
            client satisfaction, and operational excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {businessModel.map((item, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-primary-600">
                  {item.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-700 mb-4 font-medium">{item.description}</p>
              <p className="text-gray-600 text-sm">{item.details}</p>
            </div>
          ))}
        </div>
        
        {/* Revenue Breakdown */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">Revenue Model Breakdown</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="text-primary-200">Project Development</div>
              <p className="text-sm text-primary-300 mt-2">Direct development and construction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25%</div>
              <div className="text-primary-200">Consulting Services</div>
              <p className="text-sm text-primary-300 mt-2">Expert advice and project management</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10%</div>
              <div className="text-primary-200">Property Management</div>
              <p className="text-sm text-primary-300 mt-2">Post-construction management services</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5%</div>
              <div className="text-primary-200">Joint Ventures</div>
              <p className="text-sm text-primary-300 mt-2">Strategic partnerships and collaborations</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}