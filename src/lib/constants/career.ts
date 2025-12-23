export interface JobOpening {
  id: string
  title: string
  department: string
  location: string
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship'
  experience: string
  salary: string
  description: string
  responsibilities: string[]
  requirements: string[]
  benefits: string[]
  postedDate: string
  deadline: string
  urgent: boolean
  remote: boolean
  slug: string
}

export interface Department {
  id: string
  name: string
  icon: string
  description: string
  openings: number
}

export interface EmployeeTestimonial {
  id: string
  name: string
  role: string
  department: string
  tenure: string
  avatar: string
  quote: string
  rating: number
  projects: number
}

export interface Benefit {
  id: string
  title: string
  description: string
  icon: string
  category: 'health' | 'financial' | 'work-life' | 'development' | 'other'
}

export const departments: Department[] = [
  {
    id: 'engineering',
    name: 'Engineering & Construction',
    icon: '🏗️',
    description: 'Civil, structural, and construction engineering roles',
    openings: 8
  },
  {
    id: 'architecture',
    name: 'Architecture & Design',
    icon: '📐',
    description: 'Architectural design and planning positions',
    openings: 5
  },
  {
    id: 'project-management',
    name: 'Project Management',
    icon: '📊',
    description: 'Project coordination and management roles',
    openings: 6
  },
  {
    id: 'business-development',
    name: 'Business Development',
    icon: '🤝',
    description: 'Sales, marketing, and partnership roles',
    openings: 4
  },
  {
    id: 'operations',
    name: 'Operations',
    icon: '⚙️',
    description: 'Site operations and logistics positions',
    openings: 7
  },
  {
    id: 'finance',
    name: 'Finance & Accounts',
    icon: '💰',
    description: 'Financial planning and accounting roles',
    openings: 3
  },
  {
    id: 'hr',
    name: 'Human Resources',
    icon: '👥',
    description: 'Recruitment and employee relations',
    openings: 2
  },
  {
    id: 'it',
    name: 'Information Technology',
    icon: '💻',
    description: 'Software development and IT support',
    openings: 5
  }
]

export const jobOpenings: JobOpening[] = [
  {
    id: '1',
    title: 'Senior Civil Engineer',
    department: 'Engineering & Construction',
    location: 'Mumbai, India',
    type: 'Full-time',
    experience: '8+ years',
    salary: '₹15-25 LPA',
    description: 'Lead civil engineering projects from conception to completion, ensuring quality and safety standards.',
    responsibilities: [
      'Design and oversee construction projects',
      'Conduct site investigations and analysis',
      'Prepare project specifications and cost estimates',
      'Supervise construction teams and subcontractors',
      'Ensure compliance with building codes and regulations'
    ],
    requirements: [
      'Bachelor\'s degree in Civil Engineering',
      'Professional Engineer (PE) license preferred',
      'Experience with AutoCAD and Revit',
      'Strong project management skills',
      'Excellent communication abilities'
    ],
    benefits: [
      'Health insurance for family',
      'Performance bonuses',
      'Professional development allowance',
      'Flexible work hours',
      'On-site accommodation'
    ],
    postedDate: '2024-01-15',
    deadline: '2024-02-28',
    urgent: true,
    remote: false,
    slug: 'senior-civil-engineer'
  },
  {
    id: '2',
    title: 'Project Architect',
    department: 'Architecture & Design',
    location: 'Delhi, India',
    type: 'Full-time',
    experience: '6+ years',
    salary: '₹12-18 LPA',
    description: 'Design innovative architectural solutions for residential and commercial projects.',
    responsibilities: [
      'Create architectural designs and concepts',
      'Develop detailed construction drawings',
      'Coordinate with engineering teams',
      'Present designs to clients and stakeholders',
      'Oversee project documentation'
    ],
    requirements: [
      'Bachelor\'s in Architecture (B.Arch)',
      'Proficiency in Revit, SketchUp, and Adobe Creative Suite',
      'Experience in sustainable design practices',
      'Knowledge of building codes and regulations',
      'Portfolio of completed projects'
    ],
    benefits: [
      'Creative work environment',
      'Annual design conference allowance',
      'Health and wellness programs',
      'Paid time off for volunteering',
      'Team building retreats'
    ],
    postedDate: '2024-01-20',
    deadline: '2024-03-15',
    urgent: false,
    remote: true,
    slug: 'project-architect'
  },
  {
    id: '3',
    title: 'Construction Project Manager',
    department: 'Project Management',
    location: 'Bangalore, India',
    type: 'Full-time',
    experience: '10+ years',
    salary: '₹18-30 LPA',
    description: 'Manage large-scale construction projects ensuring timely delivery within budget.',
    responsibilities: [
      'Plan and execute construction projects',
      'Manage project budgets and timelines',
      'Coordinate with contractors and vendors',
      'Ensure quality control and safety compliance',
      'Prepare progress reports for stakeholders'
    ],
    requirements: [
      'Degree in Construction Management or related field',
      'PMP certification preferred',
      'Experience managing projects over ₹50 crore',
      'Strong leadership and negotiation skills',
      'Knowledge of construction software'
    ],
    benefits: [
      'Performance-linked bonuses',
      'Comprehensive health coverage',
      'Retirement benefits',
      'Company vehicle allowance',
      'International training opportunities'
    ],
    postedDate: '2024-01-10',
    deadline: '2024-02-20',
    urgent: true,
    remote: false,
    slug: 'construction-project-manager'
  },
  {
    id: '4',
    title: 'Business Development Executive',
    department: 'Business Development',
    location: 'Hyderabad, India',
    type: 'Full-time',
    experience: '4+ years',
    salary: '₹8-12 LPA + Commission',
    description: 'Drive business growth through client acquisition and relationship management.',
    responsibilities: [
      'Identify new business opportunities',
      'Build and maintain client relationships',
      'Prepare proposals and presentations',
      'Negotiate contracts and agreements',
      'Achieve sales targets'
    ],
    requirements: [
      'MBA in Marketing or related field',
      'Proven sales track record in construction/real estate',
      'Excellent communication and presentation skills',
      'Strong networking abilities',
      'Self-motivated and target-driven'
    ],
    benefits: [
      'Uncapped commission structure',
      'Client entertainment allowance',
      'Mobile and internet reimbursement',
      'Quarterly performance incentives',
      'Career progression opportunities'
    ],
    postedDate: '2024-01-25',
    deadline: '2024-03-10',
    urgent: false,
    remote: true,
    slug: 'business-development-executive'
  },
  {
    id: '5',
    title: 'Site Supervisor',
    department: 'Operations',
    location: 'Chennai, India',
    type: 'Full-time',
    experience: '5+ years',
    salary: '₹6-9 LPA',
    description: 'Oversee daily construction site operations and ensure work quality.',
    responsibilities: [
      'Supervise construction site activities',
      'Monitor worker productivity and safety',
      'Coordinate material deliveries',
      'Maintain site records and reports',
      'Implement quality control measures'
    ],
    requirements: [
      'Diploma in Civil Engineering or related',
      'Experience in construction site supervision',
      'Knowledge of safety regulations',
      'Ability to read construction drawings',
      'Strong problem-solving skills'
    ],
    benefits: [
      'Site allowance and overtime pay',
      'Accident insurance coverage',
      'Annual health checkups',
      'Skill development programs',
      'Festival bonuses'
    ],
    postedDate: '2024-01-18',
    deadline: '2024-02-25',
    urgent: true,
    remote: false,
    slug: 'site-supervisor'
  },
  {
    id: '6',
    title: 'Construction Intern',
    department: 'Engineering & Construction',
    location: 'Pune, India',
    type: 'Internship',
    experience: '0-1 years',
    salary: 'Stipend: ₹20,000/month',
    description: 'Gain hands-on experience in construction project management and engineering.',
    responsibilities: [
      'Assist in project documentation',
      'Support site surveys and measurements',
      'Help prepare progress reports',
      'Learn construction software tools',
      'Participate in team meetings'
    ],
    requirements: [
      'Pursuing degree in Civil Engineering',
      'Basic knowledge of AutoCAD',
      'Strong willingness to learn',
      'Good communication skills',
      'Available for 6-month internship'
    ],
    benefits: [
      'Mentorship from senior engineers',
      'Certificate of completion',
      'Potential for full-time employment',
      'Learning materials provided',
      'Networking opportunities'
    ],
    postedDate: '2024-01-30',
    deadline: '2024-02-15',
    urgent: false,
    remote: false,
    slug: 'construction-intern'
  }
]

export const employeeTestimonials: EmployeeTestimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    role: 'Senior Project Manager',
    department: 'Project Management',
    tenure: '7 years',
    avatar: 'PS',
    quote: 'Working at Apex Structure has been incredibly rewarding. The opportunities for growth and the supportive work culture have helped me advance my career while working on landmark projects.',
    rating: 5,
    projects: 24
  },
  {
    id: '2',
    name: 'Rahul Mehta',
    role: 'Lead Architect',
    department: 'Architecture & Design',
    tenure: '5 years',
    avatar: 'RM',
    quote: 'The creative freedom and resources provided here allow us to push architectural boundaries. I\'ve worked on some of the most innovative projects of my career at Apex Structure.',
    rating: 5,
    projects: 18
  },
  {
    id: '3',
    name: 'Anjali Patel',
    role: 'Civil Engineer',
    department: 'Engineering & Construction',
    tenure: '3 years',
    avatar: 'AP',
    quote: 'As a fresh graduate, the mentorship and training I received were invaluable. Now I lead my own projects with confidence. The company truly invests in its employees.',
    rating: 5,
    projects: 12
  },
  {
    id: '4',
    name: 'Vikram Singh',
    role: 'Business Development Head',
    department: 'Business Development',
    tenure: '4 years',
    avatar: 'VS',
    quote: 'The collaborative environment and clear growth trajectory make this an exceptional workplace. I\'ve doubled my income while contributing to company growth.',
    rating: 4,
    projects: 35
  }
]

export const benefits: Benefit[] = [
  {
    id: '1',
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance for you and your family, annual health checkups, and wellness programs',
    icon: '❤️',
    category: 'health'
  },
  {
    id: '2',
    title: 'Competitive Salary',
    description: 'Above-industry compensation with performance bonuses and annual increments',
    icon: '💰',
    category: 'financial'
  },
  {
    id: '3',
    title: 'Flexible Work',
    description: 'Hybrid work options, flexible hours, and remote work possibilities for eligible roles',
    icon: '🏡',
    category: 'work-life'
  },
  {
    id: '4',
    title: 'Learning & Development',
    description: 'Sponsored certifications, training programs, and conference attendance opportunities',
    icon: '🎓',
    category: 'development'
  },
  {
    id: '5',
    title: 'Work-Life Balance',
    description: 'Generous paid time off, parental leave, and mental health support programs',
    icon: '⚖️',
    category: 'work-life'
  },
  {
    id: '6',
    title: 'Career Growth',
    description: 'Clear promotion paths, mentorship programs, and leadership development initiatives',
    icon: '📈',
    category: 'development'
  },
  {
    id: '7',
    title: 'Retirement Benefits',
    description: 'Provident fund contributions, pension plans, and retirement planning assistance',
    icon: '🏦',
    category: 'financial'
  },
  {
    id: '8',
    title: 'Team Culture',
    description: 'Regular team events, company retreats, and a supportive, collaborative work environment',
    icon: '👥',
    category: 'other'
  }
]

export const careerStats = {
  totalEmployees: '200+',
  averageTenure: '4.2 years',
  employeeSatisfaction: '94%',
  openPositions: '25+',
  promotionRate: '25%',
  trainingHours: '50+ hours/year'
}