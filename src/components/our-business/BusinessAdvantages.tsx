import { Award, Shield, Zap, Users, Clock, DollarSign } from 'lucide-react'
import Container from '@/components/common/Layout/Container'
import Section from '@/components/common/Layout/Section'

const advantages = [
  {
    icon: <Award size={32} />,
    title: "Industry Recognition",
    description: "Multiple awards for excellence in construction and design",
    details: ["15+ National Awards", "ISO 9001 Certified", "Green Building Awards"]
  },
  {
    icon: <Shield size={32} />,
    title: "Financial Stability",
    description: "Strong financial position with AA+ credit rating",
    details: ["20+ Years Profitability", "Low Debt Ratio", "Strong Reserves"]
  },
  {
    icon: <Zap size={32} />,
    title: "Technological Edge",
    description: "Advanced construction technologies and digital tools",
    details: ["BIM Implementation", "IoT Integration", "Drone Surveillance"]
  },
  {
    icon: <Users size={32} />,
    title: "Expert Team",
    description: "Highly skilled professionals with decades of experience",
    details: ["200+ Engineers", "50+ Architects", "Certified Project Managers"]
  },
  {
    icon: <Clock size={32} />,
    title: "Timely Delivery",
    description: "Proven track record of on-time project completion",
    details: ["95% On-Time Delivery", "Advanced Planning", "Risk Mitigation"]
  },
  {
    icon: <DollarSign size={32} />,
    title: "Cost Efficiency",
    description: "Optimized processes for cost-effective solutions",
    details: ["Bulk Material Sourcing", "Efficient Logistics", "Waste Reduction"]
  }
]

export default function BusinessAdvantages() {
  return (
    <Section background="gray" id="business-advantages">
      <Container>
        <div className="text-center mb-12">
          <span className="text-primary-600 font-semibold">COMPETITIVE ADVANTAGES</span>
          <h2 className="text-4xl font-bold mt-2 mb-6">Why Choose Apex Structure</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our unique strengths and capabilities set us apart in the competitive 
            real estate development industry
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {advantages.map((advantage, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <div className="text-primary-600">
                  {advantage.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
              <p className="text-gray-700 mb-6">{advantage.description}</p>
              
              <div className="space-y-2">
                {advantage.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-600">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Industry Comparison</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-4 px-6 text-left font-bold">Feature</th>
                    <th className="py-4 px-6 text-left font-bold text-primary-700">Apex Structure</th>
                    <th className="py-4 px-6 text-left font-bold text-gray-500">Industry Average</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Project Completion Time', apex: '12-18 months', industry: '18-24 months' },
                    { feature: 'Quality Standards', apex: 'Premium Grade A', industry: 'Standard Grade B' },
                    { feature: 'Customer Satisfaction', apex: '98%', industry: '85%' },
                    { feature: 'Technology Adoption', apex: 'Advanced', industry: 'Moderate' },
                    { feature: 'Safety Record', apex: 'Zero Accidents', industry: '2-5% Incident Rate' },
                    { feature: 'Cost Efficiency', apex: '15-20% Better', industry: 'Baseline' },
                    { feature: 'Sustainability Focus', apex: 'High Priority', industry: 'Moderate Priority' }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-4 px-6 font-medium">{row.feature}</td>
                      <td className="py-4 px-6 font-bold text-primary-700">{row.apex}</td>
                      <td className="py-4 px-6 text-gray-600">{row.industry}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-primary-50 p-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-700 mb-2">18+</div>
                <div className="text-gray-600">Years in Business</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-700 mb-2">500+</div>
                <div className="text-gray-600">Successful Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-700 mb-2">98%</div>
                <div className="text-gray-600">Client Retention Rate</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}