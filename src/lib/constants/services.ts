export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  benefits: string[]
  process: string[]
  faqs: Array<{
    question: string
    answer: string
  }>
}

export const servicesData: Service[] = [
  {
    id: 'commercial',
    title: 'Commercial Construction',
    description: 'Complete construction solutions for office complexes, shopping malls, retail spaces, and commercial buildings.',
    icon: 'Building2',
    features: [
      'Office Buildings & Corporate Parks',
      'Shopping Malls & Retail Centers',
      'Hotels & Hospitality Projects',
      'Educational Institutions',
      'Healthcare Facilities'
    ],
    benefits: [
      'LEED & IGBC Certified Projects',
      'Modern Architectural Designs',
      'Smart Building Solutions',
      'Energy Efficient Systems'
    ],
    process: [
      'Consultation & Requirement Analysis',
      'Architectural Design & Planning',
      'Structural Engineering',
      'Construction Execution',
      'Quality Control & Handover'
    ],
    faqs: [
      {
        question: 'What is the typical timeline for commercial projects?',
        answer: 'Timelines vary based on project size and complexity. Typically, small projects take 6-12 months, while large complexes may take 18-36 months.'
      },
      {
        question: 'Do you handle regulatory approvals?',
        answer: 'Yes, we manage all necessary regulatory approvals including building permits, environmental clearances, and fire safety certifications.'
      }
    ]
  },
 ]

export const serviceBenefits = [
  {
    title: 'Expert Team',
    description: '200+ professionals with specialized expertise',
    icon: 'Users'
  },
  {
    title: 'Quality Assurance',
    description: 'ISO 9001:2015 certified processes',
    icon: 'Award'
  },
  {
    title: 'Timely Delivery',
    description: '98% on-time project completion rate',
    icon: 'Clock'
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden costs with detailed breakdown',
    icon: 'DollarSign'
  }
]