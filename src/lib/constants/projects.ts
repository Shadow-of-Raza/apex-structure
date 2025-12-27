// src/lib/constants/projects.ts
import { Project, ProjectCategory, ProjectStatus, ProjectTypeColor } from '@/lib/types'
import { 
  Building2, 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  Calendar, 
  Layers
} from 'lucide-react'

// Static category definitions (without counts)
export const PROJECT_CATEGORIES: Omit<ProjectCategory, 'projectCount'>[] = [
  { 
    id: '1', 
    name: 'Residential', 
    slug: 'residential', 
    description: 'Apartments, Villas, Townships'
  },
  { 
    id: '2', 
    name: 'Commercial', 
    slug: 'commercial', 
    description: 'Office Spaces, Malls, Retail'
  },
  { 
    id: '3', 
    name: 'Industrial', 
    slug: 'industrial', 
    description: 'Factories, Warehouses, Parks'
  },
  { 
    id: '4', 
    name: 'Mixed-Use', 
    slug: 'mixed-use', 
    description: 'Integrated Developments'
  },
  { 
    id: '5', 
    name: 'Hospitality', 
    slug: 'hospitality', 
    description: 'Hotels, Resorts, Clubs'
  },
]

// Static status definitions (without counts)
export const PROJECT_STATUSES: Omit<ProjectStatus, 'count'>[] = [
  { 
    id: 'ongoing', 
    name: 'Ongoing Projects', 
    color: 'bg-yellow-100 text-yellow-800 border-yellow-200'
  },
  { 
    id: 'completed', 
    name: 'Completed Projects', 
    color: 'bg-green-100 text-green-800 border-green-200'
  },
  { 
    id: 'upcoming', 
    name: 'Upcoming Projects', 
    color: 'bg-purple-100 text-purple-800 border-purple-200'
  },
  { 
    id: 'planning', 
    name: 'Planning Phase', 
    color: 'bg-blue-100 text-blue-800 border-blue-200'
  },
]

// Project type colors for UI
export const PROJECT_TYPE_COLORS: ProjectTypeColor = {
  residential: 'from-indigo-500 to-indigo-700',
  commercial: 'from-cyan-500 to-cyan-700',
  industrial: 'from-orange-500 to-orange-700',
  'mixed-use': 'from-pink-500 to-pink-700',
  hospitality: 'from-teal-500 to-teal-700'
}

// Gallery configuration
export const GALLERY_CONFIG = {
  imagesPerPage: 8,
  autoRotateInterval: 5000, // 5 seconds
  thumbnailColumns: {
    sm: 2,
    md: 3,
    lg: 4
  }
}

// Navigation constants
export const NAVIGATION_LINKS = {
  backToProjects: {
    label: 'Back to Projects',
    href: '/projects',
  },
  viewAllProjects: {
    label: 'View All Projects',
    href: '/projects',
  }
} as const

// Category configuration for UI
export const CATEGORY_CONFIG = {
  all: {
    name: 'All Types',
    icon: 'Layers',
    color: 'bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700',
    activeColor: 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-200',
    border: 'border border-gray-200',
    activeBorder: 'border border-primary-300'
  },
  residential: {
    name: 'Residential',
    icon: 'Building2',
    color: 'bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-700',
    activeColor: 'bg-gradient-to-r from-indigo-500 to-indigo-400 text-white shadow-lg shadow-indigo-200',
    border: 'border border-indigo-200',
    activeBorder: 'border border-indigo-300'
  },
  commercial: {
    name: 'Commercial',
    icon: 'Building2',
    color: 'bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700',
    activeColor: 'bg-gradient-to-r from-cyan-500 to-cyan-400 text-white shadow-lg shadow-cyan-200',
    border: 'border border-cyan-200',
    activeBorder: 'border border-cyan-300'
  },
  industrial: {
    name: 'Industrial',
    icon: 'Building2',
    color: 'bg-gradient-to-r from-orange-50 to-orange-100 text-orange-700',
    activeColor: 'bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-lg shadow-orange-200',
    border: 'border border-orange-200',
    activeBorder: 'border border-orange-300'
  },
  'mixed-use': {
    name: 'Mixed-Use',
    icon: 'Building2',
    color: 'bg-gradient-to-r from-pink-50 to-pink-100 text-pink-700',
    activeColor: 'bg-gradient-to-r from-pink-500 to-pink-400 text-white shadow-lg shadow-pink-200',
    border: 'border border-pink-200',
    activeBorder: 'border border-pink-300'
  },
  hospitality: {
    name: 'Hospitality',
    icon: 'Building2',
    color: 'bg-gradient-to-r from-teal-50 to-teal-100 text-teal-700',
    activeColor: 'bg-gradient-to-r from-teal-500 to-teal-400 text-white shadow-lg shadow-teal-200',
    border: 'border border-teal-200',
    activeBorder: 'border border-teal-300'
  }
} as const

// Status configuration for UI
export const STATUS_CONFIG = {
  all: {
    name: 'All Projects',
    icon: 'Building2',
    color: 'bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700',
    activeColor: 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-200',
    border: 'border border-gray-200',
    activeBorder: 'border border-primary-300',
    glow: 'shadow-primary-100'
  },
  ongoing: {
    name: 'Ongoing',
    icon: 'TrendingUp',
    color: 'bg-gradient-to-r from-yellow-50 to-yellow-100 text-yellow-700',
    activeColor: 'bg-gradient-to-r from-yellow-500 to-yellow-400 text-white shadow-lg shadow-yellow-200',
    border: 'border border-yellow-200',
    activeBorder: 'border border-yellow-300',
    glow: 'shadow-yellow-100'
  },
  completed: {
    name: 'Completed',
    icon: 'CheckCircle',
    color: 'bg-gradient-to-r from-green-50 to-green-100 text-green-700',
    activeColor: 'bg-gradient-to-r from-green-500 to-green-400 text-white shadow-lg shadow-green-200',
    border: 'border border-green-200',
    activeBorder: 'border border-green-300',
    glow: 'shadow-green-100'
  },
  upcoming: {
    name: 'Upcoming',
    icon: 'Calendar',
    color: 'bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700',
    activeColor: 'bg-gradient-to-r from-purple-500 to-purple-400 text-white shadow-lg shadow-purple-200',
    border: 'border border-purple-200',
    activeBorder: 'border border-purple-300',
    glow: 'shadow-purple-100'
  },
  planning: {
    name: 'Planning',
    icon: 'Clock',
    color: 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700',
    activeColor: 'bg-gradient-to-r from-blue-500 to-blue-400 text-white shadow-lg shadow-blue-200',
    border: 'border border-blue-200',
    activeBorder: 'border border-blue-300',
    glow: 'shadow-blue-100'
  }
} as const

// Export icon mapping for dynamic import
export const ICON_MAPPING = {
  Building2,
  TrendingUp,
  CheckCircle,
  Calendar,
  Clock,
  Layers
} as const

export const projectsData: Project[] = [
  {
    id: '1',
    slug: 'skyline-towers',
    title: 'Skyline Towers',
    description: 'Premium residential towers with luxury amenities in downtown',
    fullDescription: 'Skyline Towers is a landmark residential development featuring three 40-story towers with panoramic city views. The project includes luxury apartments, penthouses, and world-class amenities including a sky lounge, infinity pool, fitness center, and 24/7 concierge services.',
    type: 'residential',
    status: 'completed',
    startDate: '2022-01-15',
    completionDate: '2023-12-20',
    area: '450,000',
    budget: '₹250 Crores',
    client: 'Metro Living Developers',
    architect: 'Design Innovations Studio',
    features: [
      'Smart Home Automation',
      'Centralized AC System',
      'Double-Glazed Windows',
      'German Kitchen Fixtures',
      'Italian Marble Flooring'
    ],
    highlights: [
      'LEED Gold Certified',
      'Best Residential Project 2023 Award',
      '100% Solar Powered Common Areas',
      'Earthquake Resistant Structure'
    ],
    images: {
      main: 'https://images.pexels.com/photos/1102846/pexels-photo-1102846.jpeg?_gl=1*1lg13l0*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDY4NzMkajQ4JGwwJGgw',
      gallery: [
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
      ]
    },
    amenities: [
      'Infinity Pool',
      'Sky Lounge',
      'Fitness Center',
      'Yoga Studio',
      'Children\'s Play Area',
      'Multi-purpose Hall',
      'Indoor Games Room',
      'Visitor Parking'
    ],
    sustainabilityFeatures: [
      'Rainwater Harvesting',
      'Solar Panels',
      'Waste Water Treatment',
      'Electric Vehicle Charging',
      'Green Terraces'
    ],
    address: {
      street: '123 Business Avenue',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400001'
    },
    isFeatured: true,
    createdAt: '2022-01-10',
    updatedAt: '2023-12-25'
  },
  {
    id: '2',
    slug: 'tech-park-one',
    title: 'Tech Park One',
    description: 'Modern IT park with smart office solutions and green spaces',
    fullDescription: 'Tech Park One is a state-of-the-art IT park spread across 25 acres, designed to foster innovation and collaboration. The campus features Grade-A office spaces, conference facilities, food courts, recreational areas, and extensive green spaces with sustainable design principles.',
    type: 'commercial',
    status: 'ongoing',
    startDate: '2023-03-01',
    completionDate: '2024-06-30',
    area: '800,000',
    budget: '₹500 Crores',
    client: 'Global Tech Parks Ltd.',
    architect: 'Future Spaces Architects',
    features: [
      'Smart Building Management',
      'Fiber Optic Connectivity',
      'Video Conference Facilities',
      'Modular Office Spaces',
      'Advanced Security Systems'
    ],
    highlights: [
      'IGBC Platinum Pre-certified',
      'Largest IT Park in Region',
      '50% Green Cover',
      'Zero Water Discharge Campus'
    ],
    images: {
      main: 'https://images.pexels.com/photos/1102846/pexels-photo-1102846.jpeg?_gl=1*1lg13l0*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDY4NzMkajQ4JGwwJGgw',
      gallery: [
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
      ],
    },
    amenities: [
      'Food Court',
      'Fitness Center',
      'Conference Rooms',
      'Amphitheater',
      'Walking Trails',
      'Daycare Center',
      'Medical Facility',
      'Bank & ATM'
    ],
    sustainabilityFeatures: [
      'Solar Farm',
      'Grey Water Recycling',
      'Native Landscaping',
      'EV Charging Stations',
      'Natural Ventilation'
    ],
    address: {
      street: 'Tech Valley Road',
      city: 'Bangalore',
      state: 'Karnataka',
      zipCode: '560066'
    },
    isFeatured: false,
    createdAt: '2023-02-15',
    updatedAt: '2023-12-01'
  },
  {
    id: '3',
    slug: 'green-valley-residency',
    title: 'Green Valley Residency',
    description: 'Eco-friendly township with sustainable living spaces',
    fullDescription: 'Green Valley Residency is a sustainable township project featuring 500 eco-friendly homes spread across 50 acres. The project emphasizes green living with organic farming zones, solar-powered homes, waste recycling systems, and extensive community spaces.',
    type: 'residential',
    status: 'completed',
    startDate: '2021-06-01',
    completionDate: '2023-08-15',
    area: '600,000',
    budget: '₹180 Crores',
    client: 'Green Earth Developers',
    architect: 'Eco Design Associates',
    features: [
      'Solar Panel Installation',
      'Rainwater Harvesting',
      'Organic Waste Composting',
      'Permeable Pavements',
      'Low-VOC Materials'
    ],
    highlights: [
      'India\'s First Net-Zero Township',
      'Best Green Project Award 2023',
      '90% Waste Recycled On-site',
      'Community Farming Initiative'
    ],
    images: {
      main: 'https://images.pexels.com/photos/1102846/pexels-photo-1102846.jpeg?_gl=1*1lg13l0*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDY4NzMkajQ4JGwwJGgw',
      gallery: [
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
      ],
    },
    amenities: [
      'Organic Farm',
      'Community Center',
      'Swimming Pool',
      'Jogging Track',
      'Playgrounds',
      'Yoga Pavilion',
      'Library',
      'Co-working Space'
    ],
    sustainabilityFeatures: [
      'Solar Street Lights',
      'Vermicomposting Units',
      'Native Plant Nursery',
      'Electric Vehicle Charging',
      'Greywater Treatment'
    ],
    address: {
      street: 'Eco Valley Road',
      city: 'Pune',
      state: 'Maharashtra',
      zipCode: '411045'
    },
    isFeatured: true,
    createdAt: '2021-05-15',
    updatedAt: '2023-08-20'
  },
  {
    id: '4',
    slug: 'metro-mall',
    title: 'Metro Mall',
    description: 'Modern shopping mall with entertainment and dining options',
    fullDescription: 'Metro Mall is a premier shopping and entertainment destination spanning 1.2 million square feet. The mall features 300+ retail stores, food court, multiplex cinema, gaming zone, and family entertainment center with innovative architectural design and efficient space planning.',
    type: 'commercial',
    status: 'ongoing',
    startDate: '2023-08-01',
    completionDate: '2024-12-31',
    area: '1,200,000',
    budget: '₹650 Crores',
    client: 'Metro Retail Ventures',
    architect: 'Urban Design Studio',
    features: [
      'Glass Façade Design',
      'Central Atrium',
      'Automated Parking',
      'LED Lighting System',
      'Digital Signage'
    ],
    highlights: [
      'Largest Mall in the State',
      'Architectural Excellence Award',
      'Smart Parking System',
      'Dedicated Entertainment Zone'
    ],
    images: {
      main: 'https://images.pexels.com/photos/1102846/pexels-photo-1102846.jpeg?_gl=1*1lg13l0*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDY4NzMkajQ4JGwwJGgw',
      gallery: [
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
      ],
    },
    amenities: [
      'Multiplex Cinema',
      'Food Court',
      'Gaming Zone',
      'Kids Play Area',
      'Valet Parking',
      'VIP Lounge',
      'Customer Service Center'
    ],
    sustainabilityFeatures: [
      'Energy Efficient HVAC',
      'Water Recycling Plant',
      'Waste Segregation System',
      'Natural Light Optimization'
    ],
    address: {
      street: 'Central Avenue',
      city: 'Delhi',
      state: 'Delhi',
      zipCode: '110001'
    },
    isFeatured: false,
    createdAt: '2023-07-20',
    updatedAt: '2023-12-01'
  },
  {
    id: '5',
    slug: 'industrial-park-alpha',
    title: 'Industrial Park Alpha',
    description: 'Advanced manufacturing and warehousing facility',
    fullDescription: 'Industrial Park Alpha is a state-of-the-art manufacturing and warehousing complex designed for efficiency and sustainability. The park features modular factory spaces, warehouses with automated systems, quality control labs, and worker facilities with a focus on operational excellence.',
    type: 'industrial',
    status: 'completed',
    startDate: '2020-09-01',
    completionDate: '2022-11-30',
    area: '1,500,000',
    budget: '₹320 Crores',
    client: 'Manufacturing Solutions Inc.',
    architect: 'Industrial Design Group',
    features: [
      'Automated Material Handling',
      'Climate Controlled Storage',
      'Quality Control Labs',
      'Fire Safety Systems',
      'Heavy Load Floors'
    ],
    highlights: [
      'Zero Accident Site',
      '30% Energy Savings',
      'Fastest Project Delivery',
      'Industry 4.0 Ready'
    ],
    images: {
      main: 'https://images.pexels.com/photos/1102846/pexels-photo-1102846.jpeg?_gl=1*1lg13l0*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDY4NzMkajQ4JGwwJGgw',
      gallery: [
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
      ],
    },
    amenities: [
      'Cafeteria',
      'Medical Center',
      'Training Rooms',
      'Rest Areas',
      'Prayer Room',
      'Sports Facilities'
    ],
    sustainabilityFeatures: [
      'Heat Recovery Systems',
      'LED Lighting',
      'Water Conservation',
      'Noise Reduction Measures'
    ],
    address: {
      street: 'Industrial Estate Road',
      city: 'Chennai',
      state: 'Tamil Nadu',
      zipCode: '600032'
    },
    isFeatured: true,
    createdAt: '2020-08-15',
    updatedAt: '2022-12-10'
  },
    {
    id: '6',
    slug: 'industrial-park-Bete',
    title: 'Industrial Park Bete',
    description: 'Advanced manufacturing and warehousing facility',
    fullDescription: 'Industrial Park Bete is a state-of-the-art manufacturing and warehousing complex designed for efficiency and sustainability. The park features modular factory spaces, warehouses with automated systems, quality control labs, and worker facilities with a focus on operational excellence.',
    type: 'industrial',
    status: 'planning',
    startDate: '2020-09-01',
    completionDate: '2022-11-30',
    area: '1,500,000',
    budget: '₹520 Crores',
    client: 'Industrial Solutions Inc.',
    architect: 'Industrial Design Group',
    features: [
      'Automated Material Handling',
      'Climate Controlled Storage',
      'Quality Control Labs',
      'Fire Safety Systems',
      'Heavy Load Floors'
    ],
    highlights: [
      'Zero Accident Site',
      '30% Energy Savings',
      'Fastest Project Delivery',
      'Industry 4.0 Ready'
    ],
    images: {
      main: 'https://images.pexels.com/photos/1102846/pexels-photo-1102846.jpeg?_gl=1*1lg13l0*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDY4NzMkajQ4JGwwJGgw',
      gallery: [
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
      ],
    },
    amenities: [
      'Cafeteria',
      'Medical Center',
      'Training Rooms',
      'Rest Areas',
      'Prayer Room',
      'Sports Facilities'
    ],
    sustainabilityFeatures: [
      'Heat Recovery Systems',
      'LED Lighting',
      'Water Conservation',
      'Noise Reduction Measures'
    ],
    address: {
      street: 'Industrial Estate Road',
      city: 'Chennai',
      state: 'Tamil Nadu',
      zipCode: '600032'
    },
    isFeatured: false,
    createdAt: '2020-08-15',
    updatedAt: '2022-12-10'
  },
  {
  id: '7',
  slug: 'riverfront-heights',
  title: 'Riverfront Heights',
  description: 'Advanced manufacturing and warehousing facility',
  fullDescription: 'Riverfront Heights is an upscale residential project located along the city riverfront, offering breathtaking views and serene living. The development includes premium apartments, landscaped podium gardens, wellness zones, and exclusive recreational facilities designed for modern urban families.',
  type: 'residential',
  status: 'ongoing',
  startDate: '2023-01-10',
  completionDate: '2025-03-31',
  area: '520,000',
  budget: '₹300 Crores',
  client: 'Riverfront Realty Pvt. Ltd.',
  architect: 'Aqua Urban Architects',
  features: [
    'River View Balconies',
    'Smart Access Control',
    'Energy Efficient Elevators',
    'Premium Modular Kitchens',
    'High-speed Internet Ready'
  ],
  highlights: [
    'Prime Riverfront Location',
    'Award-winning Landscape Design',
    'Low-density Development',
    'Panoramic Skyline Views'
  ],
  images: {
      main: 'https://images.pexels.com/photos/1102846/pexels-photo-1102846.jpeg?_gl=1*1lg13l0*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDY4NzMkajQ4JGwwJGgw',
      gallery: [
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
      ],
    },
  amenities: [
    'Clubhouse',
    'Infinity Pool',
    'River Walkway',
    'Meditation Deck',
    'Gymnasium',
    'Indoor Games Room'
  ],
  sustainabilityFeatures: [
    'Solar Power for Common Areas',
    'Rainwater Harvesting',
    'Energy Efficient Lighting',
    'Water Efficient Fixtures'
  ],
  address: {
    street: 'Riverfront Drive',
    city: 'Ahmedabad',
    state: 'Gujarat',
    zipCode: '380001'
  },
  isFeatured: true,
  createdAt: '2022-12-15',
  updatedAt: '2024-01-05'
},
{
  id: '8',
  slug: 'aero-logistics-hub',
  title: 'Aero Logistics Hub',
  description: 'Integrated logistics and warehousing park near international airport',
  fullDescription: 'Aero Logistics Hub is a strategically located logistics park designed to support air cargo, cold storage, and large-scale warehousing operations. The project includes automated warehouses, logistics offices, customs support zones, and truck terminals optimized for fast turnaround.',
  type: 'industrial',
  status: 'ongoing',
  startDate: '2022-11-01',
  completionDate: '2024-09-30',
  area: '2,000,000',
  budget: '₹750 Crores',
  client: 'Aero Infra Logistics Ltd.',
  architect: 'Transit Infrastructure Consultants',
  features: [
    'Automated Warehousing',
    'Cold Storage Facilities',
    'Dock Levelers',
    '24x7 Security Surveillance',
    'Customs-ready Infrastructure'
  ],
  highlights: [
    'Adjacent to International Airport',
    'High-speed Cargo Handling',
    'Multi-modal Connectivity',
    'Designed for Global Logistics Operators'
  ],
  images: {
      main: 'https://images.pexels.com/photos/1102846/pexels-photo-1102846.jpeg?_gl=1*1lg13l0*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDY4NzMkajQ4JGwwJGgw',
      gallery: [
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
      ],
    },
  amenities: [
    'Driver Rest Zones',
    'Cafeteria',
    'Operations Control Center',
    'Maintenance Bays',
    'Administrative Offices'
  ],
  sustainabilityFeatures: [
    'Solar Rooftop Systems',
    'Energy Efficient Ventilation',
    'Water Recycling Systems',
    'Low-emission Transport Planning'
  ],
  address: {
    street: 'Airport Peripheral Road',
    city: 'Hyderabad',
    state: 'Telangana',
    zipCode: '500108'
  },
  isFeatured: false,
  createdAt: '2022-10-05',
  updatedAt: '2024-01-10'
},
{
  id: '9',
  slug: 'heritage-business-center',
  title: 'Heritage Business Center',
  description: 'Boutique commercial office space blending heritage and modern design',
  fullDescription: 'Heritage Business Center is a premium commercial office development that combines restored heritage architecture with modern office infrastructure. The project caters to startups, consulting firms, and boutique enterprises seeking a prestigious business address.',
  type: 'commercial',
  status: 'completed',
  startDate: '2021-04-01',
  completionDate: '2023-03-15',
  area: '280,000',
  budget: '₹140 Crores',
  client: 'Heritage Estates LLP',
  architect: 'Contextual Design Atelier',
  features: [
    'Restored Heritage Façade',
    'Modern Office Interiors',
    'High-speed Elevators',
    'Advanced Fire Safety Systems',
    'Dedicated IT Infrastructure'
  ],
  highlights: [
    'Adaptive Reuse Project',
    'Prime CBD Location',
    'Award for Conservation Architecture',
    'High Rental Demand'
  ],
  images: {
      main: 'https://images.pexels.com/photos/1102846/pexels-photo-1102846.jpeg?_gl=1*1lg13l0*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDY4NzMkajQ4JGwwJGgw',
      gallery: [
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?_gl=1*7zalzh*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwMzAkajU4JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?_gl=1*13z3g80*_ga*MTY2NjMzMTI0Ny4xNzY1OTYzNjU3*_ga_8JE65Q40S6*czE3NjYxNDY3MzkkbzIkZzEkdDE3NjYxNDcwNDQkajQ0JGwwJGgw',
      ],
    },
  amenities: [
    'Business Lounge',
    'Conference Facilities',
    'Café',
    'Visitor Parking',
    'Reception Services'
  ],
  sustainabilityFeatures: [
    'Adaptive Building Reuse',
    'LED Lighting',
    'Natural Ventilation Design',
    'Low Energy HVAC Systems'
  ],
  address: {
    street: 'Heritage Square',
    city: 'Kolkata',
    state: 'West Bengal',
    zipCode: '700001'
  },
  isFeatured: false,
  createdAt: '2021-03-10',
  updatedAt: '2023-04-01'
}
]