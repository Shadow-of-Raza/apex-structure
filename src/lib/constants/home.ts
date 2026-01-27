// src/lib/constants/home.ts
import { HeroContent, ServiceState } from '@/lib/types/home';
import { Building2, MapPin, Clock, Sparkles, Trophy, Users } from 'lucide-react'

// Default stats structure - Single Source of Truth
export const DEFAULT_HERO_STATS = [
  {
    label: 'Successfully Completed',
    value: '0+',
    icon: 'Building2'
  },
  {
    label: 'Nationwide Presence',
    value: '0+ Cities',
    icon: 'MapPin'
  },
  {
    label: 'Years of Experience',
    value: '0+',
    icon: 'Clock'
  }
];

// Initial state for the component before data load
export const INITIAL_HERO_CONTENT: HeroContent = {
  id: 0,
  title: '',
  description: '',
  button1: {
    text: '',
    href: ''
  },
  stats: DEFAULT_HERO_STATS
};

// Create an icon mapping object
export const heroIcons = {
  Building2: Building2,
  MapPin: MapPin,
  Clock: Clock,
  Trophy: Trophy,
  Users: Users,
  Sparkles: Sparkles
};



export const heroConfig = {
  autoSlideInterval: 6000, // 5 seconds
  transitionDuration: 1000, // 1 second
  pauseOnHover: false,
};



export const serviceState: ServiceState[] = [
  {
    id: 1,
    icon: 'Trophy',
    count: '0+', // Updated dynamically
    label: 'Successful Completed Projects',
    desc: 'Setting new benchmarks in construction with timely delivery and superior quality standards.',
    color: 'blue'
  },
  {
    id: 2,
    icon: 'Clock',
    count: '0+', // Updated dynamically
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