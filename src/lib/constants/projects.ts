// src/lib/constants/projects.ts
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

// projectsData has been moved to the database and is now fetched via API
