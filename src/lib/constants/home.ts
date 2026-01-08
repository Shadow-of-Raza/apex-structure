// src/lib/constants/home.ts
import { HeroContent, HeroImage, ServiceState } from '@/lib/types/home';
import { getHeroStats } from '@/lib/utils/projects';
import { calculateYearsOfExperience } from '@/lib/utils/about-us';
import { Building2, MapPin, Clock, Sparkles, Trophy, Users } from 'lucide-react'
import { COMPANY_PROFILE } from '@/lib/constants/about-us'
import { getCompletedProjectsCount } from '@/lib/utils/projects'

// Get stats from projects data
const heroStats = getHeroStats();
const data = COMPANY_PROFILE;
const heroExperience = calculateYearsOfExperience(data.establishedOn);

// Single content object for all slides
export const heroContent: HeroContent = {
  id: 1,
  title: `Building Excellence in Construction & Development`,
  description: 'Apex Structure stands at the forefront of construction excellence, delivering premium residential and commercial projects nationwide. We transform architectural visions into reality through innovative design, superior craftsmanship, and unwavering commitment to quality and timely execution.',
  button1: {
    text: 'View Our Projects',
    href: '/projects'
  },
  stats: [
    {
      label: 'Successfully Completed',
      value: heroStats.formattedProjects,
      icon: 'Building2'
    },
    {
      label: 'Nationwide Presence',
      value: heroStats.formattedCities,
      icon: 'MapPin'
    },
    {
      label: 'Years of Experience',
      value: `${heroExperience}+`,
      icon: 'Clock'
    }
  ]
};

// Create an icon mapping object
export const heroIcons = {
  Building2: Building2,
  MapPin: MapPin,
  Clock: Clock,
};

export const heroImages: HeroImage[] = [
  {
    id: 1,
    imageUrl: 'https://images.pexels.com/photos/9111632/pexels-photo-9111632.jpeg',
    alt: 'Modern construction site with cranes'
  },
  {
    id: 2,
    imageUrl: 'https://images.pexels.com/photos/27828758/pexels-photo-27828758.jpeg',
    alt: 'Architectural blueprint and tools'
  },
  {
    id: 3,
    imageUrl: 'https://images.pexels.com/photos/1826602/pexels-photo-1826602.jpeg',
    alt: 'Construction workers on site'
  },
  {
    id: 4,
    imageUrl: 'https://images.pexels.com/photos/209272/pexels-photo-209272.jpeg',
    alt: 'Industrial construction project'
  },
  {
    id: 5,
    imageUrl: 'https://images.pexels.com/photos/14754470/pexels-photo-14754470.jpeg',
    alt: 'Sustainable green building'
  },
  {
    id: 6,
    imageUrl: 'https://images.pexels.com/photos/9958947/pexels-photo-9958947.jpeg',
    alt: 'Modern architecture exterior'
  },
  {
    id: 7,
    imageUrl: 'https://images.pexels.com/photos/10637254/pexels-photo-10637254.jpeg',
    alt: 'Luxury interior design'
  }
];

export const heroConfig = {
  autoSlideInterval: 6000, // 5 seconds
  transitionDuration: 1000, // 1 second
  pauseOnHover: false,
};

export const serviceState: ServiceState[] = [
  {
    id: 1,
    icon: 'Trophy',
    count: `${getCompletedProjectsCount()}+`,
    label: 'Successful Completed Projects',
    desc: 'Setting new benchmarks in construction with timely delivery and superior quality standards.',
    color: 'blue'
  },
  {
    id: 2,
    icon: 'Clock',
    count: `${heroExperience}+`,
    label: 'Years of Excellence',
    desc: 'Decades of industry expertise delivering complex infrastructure and luxury residential projects.',
    color: 'green'
  },
  {
    id: 3,
    icon: 'Users',
    count: '98%',
    label: 'Client Satisfaction',
    desc: 'Our commitment to transparency and excellence builds lasting relationships with our clients.',
    color: 'orange'
  },
  {
    id: 4,
    icon: 'Sparkles',
    count: '24/7',
    label: 'Project Support',
    desc: 'Continuous monitoring and dedicated support ensuring smooth execution from start to finish.',
    color: 'purple'
  }
];