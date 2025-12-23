'use client'

import { useState } from 'react'
import { Search, FileText, PenTool, Building2, CheckCircle, Home } from 'lucide-react'
import Container from '@/components/common/Layout/Container'
import Section from '@/components/common/Layout/Section'

const stages = [
  {
    id: 1,
    title: 'Concept & Feasibility',
    description: 'Initial project conceptualization and viability assessment',
    icon: <Search size={24} />,
    duration: '2-4 Weeks',
    deliverables: ['Market Analysis', 'Feasibility Report', 'Budget Estimation'],
    color: 'bg-blue-100 text-blue-700'
  },
  {
    id: 2,
    title: 'Design & Planning',
    description: 'Architectural design and detailed project planning',
    icon: <PenTool size={24} />,
    duration: '4-8 Weeks',
    deliverables: ['Architectural Drawings', '3D Visualizations', 'Engineering Plans'],
    color: 'bg-green-100 text-green-700'
  },
  {
    id: 3,
    title: 'Approvals & Documentation',
    description: 'Regulatory approvals and legal documentation',
    icon: <FileText size={24} />,
    duration: '6-12 Weeks',
    deliverables: ['Government Approvals', 'Legal Documents', 'Environmental Clearances'],
    color: 'bg-purple-100 text-purple-700'
  },
  {
    id: 4,
    title: 'Construction',
    description: 'Actual construction and development work',
    icon: <Building2 size={24} />,
    duration: '12-36 Months',
    deliverables: ['Quality Construction', 'Regular Updates', 'Safety Compliance'],
    color: 'bg-orange-100 text-orange-700'
  },
  {
    id: 5,
    title: 'Completion & Handover',
    description: 'Final inspections and project handover to clients',
    icon: <CheckCircle size={24} />,
    duration: '2-4 Weeks',
    deliverables: ['Final Inspection', 'Documentation Handover', 'Client Training'],
    color: 'bg-teal-100 text-teal-700'
  },
  {
    id: 6,
    title: 'Post-Completion',
    description: 'Warranty period and after-sales support',
    icon: <Home size={24} />,
    duration: '12-60 Months',
    deliverables: ['Warranty Services', 'Maintenance Support', 'Customer Service'],
    color: 'bg-indigo-100 text-indigo-700'
  }
]

export default function ProjectLifecycle() {
  const [activeStage, setActiveStage] = useState(1)

  const activeStageData = stages.find(stage => stage.id === activeStage)

  return (
    <Section background="gray" id="project-lifecycle">
      <Container>
        <div className="text-center mb-12">
          <span className="text-primary-600 font-semibold">PROJECT LIFECYCLE</span>
          <h2 className="text-4xl font-bold mt-2 mb-6">End-to-End Project Management</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive project lifecycle ensures every phase is meticulously 
            planned and executed for successful project delivery
          </p>
        </div>
        
        {/* Stage Navigation */}
        <div className="mb-12">
          <div className="flex overflow-x-auto pb-4 space-x-4">
            {stages.map((stage) => (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`flex-shrink-0 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeStage === stage.id
                    ? `${stage.color} shadow-lg`
                    : 'bg-white text-gray-700 shadow hover:shadow-md'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                    activeStage === stage.id ? 'bg-white' : stage.color
                  }`}>
                    <div className={activeStage === stage.id ? stage.color.replace('100', '600') : ''}>
                      {stage.icon}
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="font-bold">Stage {stage.id}</div>
                    <div className="text-sm">{stage.title}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Active Stage Details */}
        {activeStageData && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-xl ${activeStageData.color} flex items-center justify-center mr-4`}>
                    {activeStageData.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Stage {activeStageData.id}</div>
                    <h3 className="text-xl font-bold">{activeStageData.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 text-lg">
                  {activeStageData.description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-bold">{activeStageData.duration}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">Phase</span>
                    <span className="font-bold">
                      {activeStageData.id} of {stages.length}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <h4 className="text-xl font-bold mb-4">Key Deliverables</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {activeStageData.deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className={`w-8 h-8 rounded-full ${activeStageData.color} flex items-center justify-center mr-3`}>
                        <span className="font-bold">✓</span>
                      </div>
                      <span className="font-medium">{deliverable}</span>
                    </div>
                  ))}
                </div>
                
                {/* Process Flow */}
                <div>
                  <h4 className="text-xl font-bold mb-4">Process Flow</h4>
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                    {[
                      { step: 'Initiation', desc: 'Project kickoff and team formation' },
                      { step: 'Planning', desc: 'Detailed planning and resource allocation' },
                      { step: 'Execution', desc: 'Implementation of planned activities' },
                      { step: 'Monitoring', desc: 'Continuous quality and progress checks' },
                      { step: 'Completion', desc: 'Final review and phase closure' }
                    ].map((process, index) => (
                      <div key={index} className="relative flex items-start mb-6 ml-8">
                        <div className={`absolute left-[-28px] top-2 w-8 h-8 rounded-full ${activeStageData.color} flex items-center justify-center`}>
                          <span className="font-bold">{index + 1}</span>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg flex-1">
                          <div className="font-bold mb-1">{process.step}</div>
                          <div className="text-sm text-gray-600">{process.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Timeline Visualization */}
        <div className="mt-12">
          <div className="relative">
            <div className="absolute left-0 right-0 h-2 bg-gray-200 top-1/2 transform -translate-y-1/2"></div>
            <div className="relative flex justify-between">
              {stages.map((stage, index) => (
                <div key={stage.id} className="flex flex-col items-center relative">
                  <button
                    onClick={() => setActiveStage(stage.id)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                      activeStage === stage.id
                        ? `${stage.color} shadow-lg scale-110`
                        : 'bg-white border-4 border-gray-300 shadow'
                    }`}
                  >
                    {stage.icon}
                  </button>
                  <div className="text-center">
                    <div className="font-bold text-sm">{stage.title}</div>
                    <div className="text-xs text-gray-500 mt-1">{stage.duration}</div>
                  </div>
                  {index < stages.length - 1 && (
                    <div className="absolute top-6 left-1/2 w-full h-0.5 bg-gray-300 -z-10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}