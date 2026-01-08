// src/lib/constants/projects.ts
import { Project, ProjectStatus } from '@/lib/types'
import {
  Building2,
  CheckCircle,
  Clock,
  TrendingUp,
  Calendar,
  Layers
} from 'lucide-react'
import React from 'react'

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

export const PROJECT_STATUSES = [
  { id: 'ongoing', name: 'Ongoing' },
  { id: 'completed', name: 'Completed' },
  { id: 'upcoming', name: 'Upcoming' },
  { id: 'planning', name: 'Planning' }
] as const

// Status configuration for UI
export const STATUS_CONFIG = {
  all: {
    name: 'All Projects',
    icon: 'Building2',
  },
  ongoing: {
    name: 'Ongoing',
    icon: 'TrendingUp',
  },
  completed: {
    name: 'Completed',
    icon: 'CheckCircle',
  },
  upcoming: {
    name: 'Upcoming',
    icon: 'Calendar',
  },
  planning: {
    name: 'Planning',
    icon: 'Clock',
  }
} as const

// Project List Status Config (with React Elements)
export const PROJECT_LIST_STATUS_CONFIG = {
  all: {
    name: 'All Projects',
    icon: React.createElement(Building2, { size: 18 }),
  },
  ongoing: {
    name: 'Ongoing',
    icon: React.createElement(TrendingUp, { size: 18 }),
  },
  completed: {
    name: 'Completed',
    icon: React.createElement(CheckCircle, { size: 18 }),
  },
  upcoming: {
    name: 'Upcoming',
    icon: React.createElement(Calendar, { size: 18 }),
  },
  planning: {
    name: 'Planning',
    icon: React.createElement(Clock, { size: 18 }),
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
  },
  {
    id: '10',
    slug: 'corporate-park-management',
    title: 'Corporate Park Management',
    description: 'Comprehensive facility management services for business districts',
    fullDescription: 'Corporate Park Management provides end-to-end facility management solutions for business districts across multiple cities. Our services include maintenance, security, housekeeping, utility management, and tenant services for over 5 million square feet of commercial space. We implement smart building technologies and sustainable practices to optimize operations and reduce environmental impact.',
    type: 'management',
    status: 'ongoing',
    startDate: '2021-03-01',
    completionDate: '2025-12-31',
    area: '5,200,000',
    budget: '₹180 Crores',
    client: 'National Business Parks Association',
    architect: 'Facility Solutions Ltd.',
    features: [
      'IoT-Based Monitoring',
      'Predictive Maintenance Systems',
      'Centralized Command Center',
      'Automated Security Protocols',
      'Energy Management Systems'
    ],
    highlights: [
      'ISO 41001 Certified',
      '30% Reduction in Energy Consumption',
      '99.5% Tenant Satisfaction Rate',
      '24/7 Emergency Response Team'
    ],
    images: {
      main: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gallery: [
        'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ]
    },
    amenities: [
      'Central Monitoring Center',
      'On-site Technical Team',
      'Tenant Portal',
      'Waste Management Facility',
      'Security Operations Center',
      'Maintenance Workshops',
      'Training Facilities',
      'Visitor Management System'
    ],
    sustainabilityFeatures: [
      'Smart Metering',
      'Water Recycling Plants',
      'LED Lighting Conversion',
      'Green Procurement Policy',
      'Carbon Footprint Tracking'
    ],
    address: {
      street: '456 Management Boulevard',
      city: 'Delhi',
      state: 'Delhi',
      zipCode: '110001'
    },
    isFeatured: true,
    createdAt: '2021-02-15',
    updatedAt: '2023-11-30'
  },
  {
    id: '12',
    slug: 'urban-harmony-complex',
    title: 'Urban Harmony Complex',
    description: 'Comprehensive facility management services for business districts',
    fullDescription: 'Urban Harmony Complex is a pioneering mixed-use development that seamlessly integrates commercial, residential, and recreational spaces. The 25-acre complex features retail outlets, office towers, residential apartments, hotels, and entertainment zones connected by pedestrian-friendly walkways and green spaces. The development promotes live-work-play lifestyle with smart urban planning and sustainable design principles.',
    type: 'mixed-use',
    status: 'ongoing',
    startDate: '2023-06-01',
    completionDate: '2026-08-15',
    area: '1,800,000',
    budget: '₹450 Crores',
    client: 'Urban Developers Consortium',
    architect: 'Modern Architecture Group',
    features: [
      'Integrated Smart City Infrastructure',
      'Skywalk Connectivity',
      'Centralized Parking Management',
      'Mixed-Ventilation Systems',
      'Modular Construction Techniques'
    ],
    highlights: [
      'Mixed-Use Development Award 2024',
      'First IGBC Platinum Rated Mixed-Use Project',
      'Public-Private Partnership Model',
      'Community Engagement Programs'
    ],
    images: {
      main: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gallery: [
        'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ]
    },
    amenities: [
      'Shopping Mall',
      'Business Center',
      'Co-working Spaces',
      'Food Court & Restaurants',
      'Cinema Multiplex',
      'Fitness & Wellness Center',
      'Children\'s Activity Zone',
      'Outdoor Amphitheater'
    ],
    sustainabilityFeatures: [
      'District Cooling System',
      'Green Roofs & Vertical Gardens',
      'Waste-to-Energy Plant',
      'Pedestrian Priority Zones',
      'Bicycle Sharing System'
    ],
    address: {
      street: '789 Mixed-Use Square',
      city: 'Bengaluru',
      state: 'Karnataka',
      zipCode: '560001'
    },
    isFeatured: true,
    createdAt: '2023-05-20',
    updatedAt: '2024-01-15'
  }
]
