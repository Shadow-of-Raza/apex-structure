// src/components/services/ServicesProcess.tsx
import { Search, ClipboardCheck, Users, Building2, CheckCircle } from 'lucide-react'

const processSteps = [
  {
    step: '01',
    icon: Search,
    title: 'Consultation & Planning',
    description: 'Understanding your requirements, site evaluation, and project feasibility analysis',
    duration: '1-2 Weeks',
    deliverables: ['Requirement Analysis', 'Site Survey', 'Feasibility Report', 'Budget Estimation']
  },
  {
    step: '02',
    icon: ClipboardCheck,
    title: 'Design & Approval',
    description: 'Architectural design, engineering plans, and regulatory approvals',
    duration: '2-4 Weeks',
    deliverables: ['Architectural Drawings', 'Structural Design', 'MEP Plans', 'Approval Drawings']
  },
  {
    step: '03',
    icon: Users,
    title: 'Pre-Construction',
    description: 'Team mobilization, material procurement, and site preparation',
    duration: '1-2 Weeks',
    deliverables: ['Team Allocation', 'Material Procurement', 'Site Setup', 'Safety Measures']
  },
  {
    step: '04',
    icon: Building2,
    title: 'Construction Phase',
    description: 'Execution of construction activities with quality control and monitoring',
    duration: 'Project Specific',
    deliverables: ['Foundation Work', 'Structural Work', 'Finishing Work', 'Quality Checks']
  },
  {
    step: '05',
    icon: CheckCircle,
    title: 'Handover & Support',
    description: 'Final inspection, documentation, and post-construction support',
    duration: '1-2 Weeks',
    deliverables: ['Final Inspection', 'Documentation', 'Training', 'Warranty Support']
  }
]

export default function ServicesProcess() {
  return (
    <div className=" container mx-auto relative overflow-hidden py-10">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-secondary-50 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-bold uppercase tracking-widest mb-2">
            <span className="w-2 h-2 bg-primary-600 rounded-full mr-2 animate-pulse"></span>
            Workflow
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-3 text-gray-900 leading-tight">
            Our Perfectionist <span className="text-primary-600">Process</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We&apos;ve refined our execution model over two decades to ensure flawless delivery
            from the first consultation to the final handover.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Vertical Center Line for Desktop */}
          <div className="absolute left-[31px] md:left-1/2 md:-translate-x-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-primary-100 via-primary-300 to-primary-100 hidden md:block"></div>

          <div className="space-y-20 relative">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={step.step}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''
                    }`}
                >
                  {/* Step Connector Label for Desktop */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center pointer-events-none">
                    <div className="bg-white px-4 py-1 rounded-full border border-primary-200 shadow-sm text-[10px] font-black text-primary-500 uppercase tracking-tighter z-20">
                      Phase {step.step}
                    </div>
                  </div>

                  {/* Icon Node */}
                  <div className="relative z-20 flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-white rounded-3xl shadow-2xl border border-gray-50 flex items-center justify-center mb-6 md:mb-0 group hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-2 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Icon size={32} className="text-primary-600 relative z-10 group-hover:text-white transition-colors duration-500" />

                    {/* Ring for Active Phase Look */}
                    <div className="absolute inset-0 border-2 border-primary-100 rounded-3xl animate-ping opacity-20"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-100 border border-gray-50 group hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                      {/* Decorative Background Number */}
                      {/* <span className="absolute -right-4 -top-8 text-9xl font-black text-gray-100 select-none group-hover:text-primary-50/50 transition-colors duration-500">
                        {step.step}
                      </span> */}

                      <div className={`relative z-10 flex flex-col ${isEven ? 'md:items-end' : ''}`}>
                        <h3 className="text-2xl font-black text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-gray-600 mb-6 font-medium max-w-md">
                          {step.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {step.deliverables.map((item, idx) => (
                            <span key={idx} className="bg-gray-50 text-gray-500 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-gray-100 group-hover:bg-primary-50 group-hover:text-primary-600 group-hover:border-primary-100 transition-all">
                              {item}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2 text-primary-600 font-black text-sm uppercase tracking-tighter">
                          <div className="w-8 h-px bg-primary-200"></div>
                          <span>Duration: {step.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connecting Arrow for Mobile */}
                  <div className="absolute left-8 -bottom-12 w-0.5 h-12 bg-primary-100 md:hidden"></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
