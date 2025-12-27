// src/lib/constants/hero.ts
import { HeroContent, HeroImage } from '@/lib/types/hero';
import { getHeroStats } from '@/lib/utils/projects';
import { Building2, MapPin } from 'lucide-react'

// Get stats from projects data
const heroStats = getHeroStats();

// Single content object for all slides
export const heroContent: HeroContent = {
  id: '1',
  title: 'Building Excellence in Construction & Development',
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
    }
  ]
};

// Create an icon mapping object
export const heroIcons = {
  Building2: Building2,
  MapPin: MapPin,
};

// Multiple images for slideshow
// export const heroImages: HeroImage[] = [
//   {
//     id: '1',
//     imageUrl: 'https://images.pexels.com/photos/1254133/pexels-photo-1254133.jpeg',
//     alt: 'Modern construction site with cranes'
//   },
//   {
//     id: '2',
//     imageUrl: 'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg',
//     alt: 'Architectural blueprint and tools'
//   },
//   {
//     id: '3',
//     imageUrl: 'https://images.pexels.com/photos/1402923/pexels-photo-1402923.jpeg',
//     alt: 'Construction workers on site'
//   },
//   {
//     id: '4',
//     imageUrl: 'https://images.pexels.com/photos/2391/dirty-industry-stack-factory.jpg',
//     alt: 'Industrial construction project'
//   },
//   {
//     id: '5',
//     imageUrl: 'https://images.pexels.com/photos/1872165/pexels-photo-1872165.jpeg',
//     alt: 'Sustainable green building'
//   },
//   {
//     id: '6',
//     imageUrl: 'https://images.pexels.com/photos/438968/pexels-photo-438968.jpeg',
//     alt: 'Modern architecture exterior'
//   },
//   {
//     id: '7',
//     imageUrl: 'https://images.pexels.com/photos/1337285/pexels-photo-1337285.jpeg',
//     alt: 'Luxury interior design'
//   }
// ];

export const heroImages: HeroImage[] = [
  {
    id: '1',
    imageUrl: 'https://images.pexels.com/photos/9111632/pexels-photo-9111632.jpeg',
    alt: 'Modern construction site with cranes'
  },
  {
    id: '2',
    imageUrl: 'https://images.pexels.com/photos/27828758/pexels-photo-27828758.jpeg',
    alt: 'Architectural blueprint and tools'
  },
  {
    id: '3',
    imageUrl: 'https://images.pexels.com/photos/1826602/pexels-photo-1826602.jpeg',
    alt: 'Construction workers on site'
  },
  {
    id: '4',
    imageUrl: 'https://images.pexels.com/photos/209272/pexels-photo-209272.jpeg',
    alt: 'Industrial construction project'
  },
  {
    id: '5',
    imageUrl: 'https://images.pexels.com/photos/14754470/pexels-photo-14754470.jpeg',
    alt: 'Sustainable green building'
  },
  {
    id: '6',
    imageUrl: 'https://images.pexels.com/photos/9958947/pexels-photo-9958947.jpeg',
    alt: 'Modern architecture exterior'
  },
  {
    id: '7',
    imageUrl: 'https://images.pexels.com/photos/10637254/pexels-photo-10637254.jpeg',
    alt: 'Luxury interior design'
  }
];




export const heroConfig = {
  autoSlideInterval: 6000, // 5 seconds
  transitionDuration: 1000, // 1 second
  pauseOnHover: true,
};