// src/components/services/ServicesProcess.tsx
import { Search, ClipboardCheck, Users, Building2, CheckCircle } from 'lucide-react'
import { projectsData } from '@/lib/constants/projects'


const processSteps = [
  {
    step: '01',
    icon: <Search className="w-8 h-8" />,
    title: 'Consultation & Planning',
    description: 'Understanding your requirements, site evaluation, and project feasibility analysis',
    duration: '1-2 Weeks',
    deliverables: ['Requirement Analysis', 'Site Survey', 'Feasibility Report', 'Budget Estimation']
  },
  {
    step: '02',
    icon: <ClipboardCheck className="w-8 h-8" />,
    title: 'Design & Approval',
    description: 'Architectural design, engineering plans, and regulatory approvals',
    duration: '2-4 Weeks',
    deliverables: ['Architectural Drawings', 'Structural Design', 'MEP Plans', 'Approval Drawings']
  },
  {
    step: '03',
    icon: <Users className="w-8 h-8" />,
    title: 'Pre-Construction',
    description: 'Team mobilization, material procurement, and site preparation',
    duration: '1-2 Weeks',
    deliverables: ['Team Allocation', 'Material Procurement', 'Site Setup', 'Safety Measures']
  },
  {
    step: '04',
    icon: <Building2 className="w-8 h-8" />,
    title: 'Construction Phase',
    description: 'Execution of construction activities with quality control and monitoring',
    duration: 'Project Specific',
    deliverables: ['Foundation Work', 'Structural Work', 'Finishing Work', 'Quality Checks']
  },
  {
    step: '05',
    icon: <CheckCircle className="w-8 h-8" />,
    title: 'Handover & Support',
    description: 'Final inspection, documentation, and post-construction support',
    duration: '1-2 Weeks',
    deliverables: ['Final Inspection', 'Documentation', 'Training', 'Warranty Support']
  }
]

export default function ServicesProcess() {
  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <span className="text-primary-600 font-semibold">OUR PROCESS</span>
        <h2 className="text-4xl font-bold mt-2 mb-6">How We Work</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our structured approach ensures every project is delivered with precision, 
          quality, and within the agreed timeline.
        </p>
      </div>

      {/* Process Timeline */}
      <div className="relative">
        {/* Connecting Line */}
        <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-200 to-primary-400 hidden md:block"></div>

        <div className="space-y-12 md:space-y-0">
          {processSteps.map((step, index) => (
            <div
              key={step.step}
              className={`relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Step Circle */}
              <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 md:mb-0">
                {step.icon}
              </div>

              {/* Step Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-bold text-primary-600 mr-3">{step.step}</span>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Duration: {step.duration}</span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-700">Key Deliverables:</h4>
                    <ul className="space-y-1">
                      {step.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Timeline Dot - Mobile */}
              <div className="absolute left-8 top-8 w-3 h-3 bg-primary-500 rounded-full md:hidden"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}