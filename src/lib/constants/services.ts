// src/lib/constants/services.ts
import { Service } from '@/lib/types/service'

export const servicesData: Service[] = [
  {
    id: 1,
    name: 'commercial',
    title: 'Commercial Construction',
    description: 'Complete construction solutions for office complexes, shopping malls, retail spaces, and commercial buildings.',
    shortDescription: 'Office complexes, malls, and retail spaces.',
    categoryLabel: 'Commercial',
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
    ],
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'residential',
    title: 'Residential Projects',
    description: 'Premium residential developments including apartments, villas, townships, and gated communities.',
    shortDescription: 'Luxury apartments, villas, and townships.',
    categoryLabel: 'Residential',
    icon: 'Home',
    features: [
      'Luxury Apartments & Condominiums',
      'Villas & Independent Houses',
      'Integrated Townships',
      'Gated Communities',
      'Affordable Housing'
    ],
    benefits: [
      'Modern Amenities & Facilities',
      'Sustainable Living Spaces',
      'Smart Home Automation',
      'Community-Centric Design'
    ],
    process: [
      'Site Selection & Planning',
      'Customized Architectural Design',
      'High-Quality Construction',
      'Interior Finishing',
      'Assisted Possession'
    ],
    faqs: [],
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'industrial',
    title: 'Industrial Construction',
    description: 'Specialized construction services for factories, warehouses, industrial parks, and manufacturing units.',
    shortDescription: 'Factories, warehouses, and industrial parks.',
    categoryLabel: 'Industrial',
    icon: 'Hammer',
    features: [
      'Manufacturing Plants',
      'Warehouses & Storage Facilities',
      'Industrial Parks',
      'Logistics Centers',
      'Special Economic Zones'
    ],
    benefits: [
      'Heavy-Duty Construction',
      'Material Handling Systems',
      'Utility Infrastructure',
      'Safety Compliance'
    ],
    process: [
      'Industrial Design & Engineering',
      'Permit Acquisition',
      'Specialized Foundation Work',
      'Steel Structure Assembly',
      'Facility Commissioning'
    ],
    faqs: [],
    image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'mixed-use',
    title: 'Mixed-Use Developments',
    description: 'Integrated developments combining residential, commercial, and cultural spaces for modern urban living.',
    shortDescription: 'Integrated residential and commercial hubs.',
    categoryLabel: 'Mixed-Use',
    icon: 'Layers',
    features: [
      'Integrated Living Spaces',
      'Commercial & Retail Zones',
      'Recreational Facilities',
      'Urban Planning Integration',
      'Smart City Features'
    ],
    benefits: [
      'Live-Work-Play Environment',
      'High ROI Potential',
      'Community Synergy',
      'Efficient Land Use'
    ],
    process: [
      'Master Planning',
      'Zoning & Regulatory Compliance',
      'Infrastructure Development',
      'Phased Construction',
      'Community Management Setup'
    ],
    faqs: [],
    image: 'https://images.pexels.com/photos/373893/pexels-photo-373893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    name: 'hospitality',
    title: 'Hospitality Projects',
    description: 'World-class hotels, resorts, and leisure facilities designed for exceptional guest experiences.',
    shortDescription: 'Hotels, resorts, and leisure facilities.',
    categoryLabel: 'Hospitality',
    icon: 'Coffee',
    features: [
      'Luxury Hotels & Resorts',
      'Boutique Properties',
      'Convention Centers',
      'Spa & Wellness Facilities',
      'Restaurants & Lounges'
    ],
    benefits: [
      'Guest-Centric Design',
      'Operational Efficiency',
      'Brand Identity Integration',
      'Sustainable Practices'
    ],
    process: [
      'Concept Development',
      'Interior & Landscape Design',
      'MEP Engineering for Hotels',
      'Construction & Fit-out',
      'Pre-opening Support'
    ],
    faqs: [],
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    name: 'renovation',
    title: 'Renovation & Interior',
    description: 'Complete renovation, remodeling, and interior design services for residential and commercial spaces.',
    shortDescription: 'Remodeling and interior design services.',
    categoryLabel: 'Renovation',
    icon: 'Settings',
    features: [
      'Home Renovation & Remodeling',
      'Commercial Space Refurbishment',
      'Interior Design & Decoration',
      'Structural Repairs',
      'Retrofit & Upgradation'
    ],
    benefits: [
      'Custom Design Solutions',
      'Premium Material Selection',
      'Timely Project Completion',
      'Minimal Disruption'
    ],
    process: [
      'Current Space Audit',
      'Redesign Concepts',
      'Dismantling & Modification',
      'Interior Execution',
      'Final Styling'
    ],
    faqs: [],
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 7,
    name: 'management',
    title: 'Project Management',
    description: 'End-to-end project management services ensuring quality, timeline, and budget adherence.',
    shortDescription: 'Ensuring quality, timeline, and budget.',
    categoryLabel: 'Management',
    icon: 'ShieldCheck',
    features: [
      'Project Planning & Scheduling',
      'Cost Estimation & Control',
      'Quality Assurance',
      'Contract Management',
      'Risk Assessment'
    ],
    benefits: [
      'Professional PM Team',
      'Advanced Project Tools',
      'Regular Progress Reports',
      'Stakeholder Coordination'
    ],
    process: [
      'Project Charter Initiation',
      'Resource & Budget Planning',
      'Daily Supervision',
      'Quality Audits',
      'Project Closure & Reports'
    ],
    faqs: [],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 8,
    name: 'consultation',
    title: 'Consultation Services',
    description: 'Expert consultation for real estate investment, project feasibility, and development strategies.',
    shortDescription: 'Investment and feasibility strategies.',
    categoryLabel: 'Consultation',
    icon: 'Zap',
    features: [
      'Feasibility Studies',
      'Site Selection & Evaluation',
      'Investment Advisory',
      'Regulatory Compliance',
      'Market Research'
    ],
    benefits: [
      'Industry Expertise',
      'Data-Driven Insights',
      'Customized Solutions',
      'Risk Mitigation'
    ],
    process: [
      'Initial Discovery Meeting',
      'Data Collection & Analysis',
      'Strategy Development',
      'Strategic Recommendation',
      'Implementation Support'
    ],
    faqs: [],
    image: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
]