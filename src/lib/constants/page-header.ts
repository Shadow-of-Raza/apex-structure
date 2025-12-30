import { PageHeaderImage, PageHeaderConfig } from '@/lib/types/page-header';

// Configuration
export const PAGE_HEADER_CONFIG: PageHeaderConfig = {
  defaultTransitionInterval: 5000, // 5 seconds
  defaultOverlayOpacity: 0.6,
};

// Page-specific image collections
export const ABOUT_US_IMAGES: PageHeaderImage[] = [
  {
    id: '1',
    url: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Apex Structure team meeting',
    title: 'Our Team',
    description: 'Dedicated professionals working together'
  },
  {
    id: '2',
    url: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Company building exterior',
    title: 'Our Headquarters',
    description: 'Where innovation meets execution'
  },
  {
    id: '3',
    url: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Award ceremony',
    title: 'Industry Recognition',
    description: 'Award-winning excellence'
  }
];

export const SERVICES_IMAGES: PageHeaderImage[] = [
  {
    id: '1',
    url: 'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Construction planning',
    title: 'Consultation',
    description: 'Strategic planning and advice'
  },
  {
    id: '2',
    url: 'https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Building design',
    title: 'Design Services',
    description: 'Architectural excellence'
  }
];

export const PROJECTS_IMAGES: PageHeaderImage[] = [
  {
    id: '1',
    url: 'https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Completed residential project',
    title: 'Residential Projects',
    description: 'Beautiful homes, happy families'
  },
  {
    id: '2',
    url: 'https://images.pexels.com/photos/534229/pexels-photo-534229.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Commercial building',
    title: 'Commercial Projects',
    description: 'Business spaces that inspire'
  }
];

export const EQUIPMENT_IMAGES: PageHeaderImage[] = [
  {
    id: '1',
    url: 'https://images.pexels.com/photos/792034/pexels-photo-792034.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Modern construction equipment',
    title: 'Advanced Machinery',
    description: 'State-of-the-art technology'
  },
  {
    id: '2',
    url: 'https://images.pexels.com/photos/162553/keys-workshop-mechanical-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Precision tools',
    title: 'Quality Tools',
    description: 'Precision in every detail'
  }
];

export const OURBUSINESS_IMAGES: PageHeaderImage[] = [
  {
    id: '1',
    url: 'https://images.pexels.com/photos/792034/pexels-photo-792034.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Modern construction equipment',
    title: 'Advanced Machinery',
    description: 'State-of-the-art technology'
  },
  {
    id: '2',
    url: 'https://images.pexels.com/photos/162553/keys-workshop-mechanical-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Precision tools',
    title: 'Quality Tools',
    description: 'Precision in every detail'
  }
];

export const CLIENTELE_IMAGES: PageHeaderImage[] = [
  {
    id: '1',
    url: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Client meeting',
    title: 'Our Partners',
    description: 'Building lasting relationships'
  },
  {
    id: '2',
    url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Handshake with client',
    title: 'Trusted by Many',
    description: 'Delivering excellence consistently'
  }
];

export const CONTACT_IMAGES: PageHeaderImage[] = [
  {
    id: '1',
    url: 'https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Team collaboration',
    title: 'Join Our Team',
    description: 'Grow with industry leaders'
  },
  {
    id: '2',
    url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Handshake with client',
    title: 'Trusted by Many',
    description: 'Delivering excellence consistently'
  }
];

export const BLOG_IMAGES: PageHeaderImage[] = [
  {
    id: '1',
    url: 'https://images.pexels.com/photos/792034/pexels-photo-792034.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Modern construction equipment',
    title: 'Advanced Machinery',
    description: 'State-of-the-art technology'
  },
  {
    id: '2',
    url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Precision tools',
    title: 'Quality Tools',
    description: 'Precision in every detail'
  }
];

export const CAREER_IMAGES: PageHeaderImage[] = [
  {
    id: '1',
    url: 'https://images.pexels.com/photos/792034/pexels-photo-792034.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Modern construction equipment',
    title: 'Advanced Machinery',
    description: 'State-of-the-art technology'
  },
  {
    id: '2',
    url: 'https://images.pexels.com/photos/162553/keys-workshop-mechanical-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Precision tools',
    title: 'Quality Tools',
    description: 'Precision in every detail'
  }
];

// Helper function to get images for a specific page
export function getPageHeaderImages(page: string): PageHeaderImage[] {
  switch (page) {
    case 'about-us':
      return ABOUT_US_IMAGES;
    case 'services':
      return SERVICES_IMAGES;
    case 'projects':
      return PROJECTS_IMAGES;
    case 'equipment':
      return EQUIPMENT_IMAGES;
    case 'our-business':
      return OURBUSINESS_IMAGES;
    case 'clientele':
      return CLIENTELE_IMAGES;
    case 'career':
      return CAREER_IMAGES;
    case 'contact-us':
      return CONTACT_IMAGES;
    case 'blog':
      return BLOG_IMAGES;
    default:
      // For unknown pages, return an empty array
      // This ensures the component knows to handle single image/no images case
      return [];
  }
}