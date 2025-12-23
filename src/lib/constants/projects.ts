// src/lib/constants/projects.ts
import { Project, ProjectCategory } from '@/lib/types'

export const projectCategories: ProjectCategory[] = [
  { id: '1', name: 'Residential', slug: 'residential', description: 'Apartments, Villas, Townships', projectCount: 250 },
  { id: '2', name: 'Commercial', slug: 'commercial', description: 'Office Spaces, Malls, Retail', projectCount: 150 },
  { id: '3', name: 'Industrial', slug: 'industrial', description: 'Factories, Warehouses, Parks', projectCount: 75 },
  { id: '4', name: 'Mixed-Use', slug: 'mixed-use', description: 'Integrated Developments', projectCount: 25 },
  { id: '5', name: 'Hospitality', slug: 'hospitality', description: 'Hotels, Resorts, Clubs', projectCount: 15 },
]

export const projectStatuses = [
  { id: 'ongoing', name: 'Ongoing Projects', count: 45 },
  { id: 'completed', name: 'Completed Projects', count: 455 },
  { id: 'upcoming', name: 'Upcoming Projects', count: 12 },
  { id: 'planning', name: 'Planning Phase', count: 8 },
]

export const projectsData: Project[] = [
  {
    id: '1',
    slug: 'skyline-towers',
    title: 'Skyline Towers',
    description: 'Premium residential towers with luxury amenities in downtown',
    fullDescription: 'Skyline Towers is a landmark residential development featuring three 40-story towers with panoramic city views. The project includes luxury apartments, penthouses, and world-class amenities including a sky lounge, infinity pool, fitness center, and 24/7 concierge services.',
    location: 'Downtown Business District',
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
    createdAt: '2022-01-10',
    updatedAt: '2023-12-25'
  },
  {
    id: '2',
    slug: 'tech-park-one',
    title: 'Tech Park One',
    description: 'Modern IT park with smart office solutions and green spaces',
    fullDescription: 'Tech Park One is a state-of-the-art IT park spread across 25 acres, designed to foster innovation and collaboration. The campus features Grade-A office spaces, conference facilities, food courts, recreational areas, and extensive green spaces with sustainable design principles.',
    location: 'IT Corridor',
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
    createdAt: '2023-02-15',
    updatedAt: '2023-12-01'
  },
  {
    id: '3',
    slug: 'green-valley-residency',
    title: 'Green Valley Residency',
    description: 'Eco-friendly township with sustainable living spaces',
    fullDescription: 'Green Valley Residency is a sustainable township project featuring 500 eco-friendly homes spread across 50 acres. The project emphasizes green living with organic farming zones, solar-powered homes, waste recycling systems, and extensive community spaces.',
    location: 'Suburban Area',
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
    createdAt: '2021-05-15',
    updatedAt: '2023-08-20'
  },
  {
    id: '4',
    slug: 'metro-mall',
    title: 'Metro Mall',
    description: 'Modern shopping mall with entertainment and dining options',
    fullDescription: 'Metro Mall is a premier shopping and entertainment destination spanning 1.2 million square feet. The mall features 300+ retail stores, food court, multiplex cinema, gaming zone, and family entertainment center with innovative architectural design and efficient space planning.',
    location: 'Central Business District',
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
    createdAt: '2023-07-20',
    updatedAt: '2023-12-01'
  },
  {
    id: '5',
    slug: 'industrial-park-alpha',
    title: 'Industrial Park Alpha',
    description: 'Advanced manufacturing and warehousing facility',
    fullDescription: 'Industrial Park Alpha is a state-of-the-art manufacturing and warehousing complex designed for efficiency and sustainability. The park features modular factory spaces, warehouses with automated systems, quality control labs, and worker facilities with a focus on operational excellence.',
    location: 'Industrial Zone',
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
    createdAt: '2020-08-15',
    updatedAt: '2022-12-10'
  }
]