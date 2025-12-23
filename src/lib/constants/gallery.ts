import { GalleryImage, GalleryCategory } from '@/lib/types/gallery'

// Using Pexels.com images for testing
// Replace these with your actual AWS Cloud/CDN URLs later
const BASE_PEXELS_URL = 'https://images.pexels.com/photos'

// Gallery Categories
export const galleryCategories: GalleryCategory[] = [
  { id: 'all', name: 'All Photos', description: 'All gallery images', count: 150, icon: '📸' },
  { id: 'progress', name: 'Progress', description: 'Construction progress photos', count: 45, icon: '🏗️' },
  { id: 'completed', name: 'Completed', description: 'Finished project photos', count: 60, icon: '✅' },
  { id: 'quality', name: 'Quality', description: 'Quality and detail shots', count: 25, icon: '⭐' },
  { id: 'team', name: 'Team', description: 'Team and site operations', count: 15, icon: '👷' },
  { id: 'equipment', name: 'Equipment', description: 'Machinery and technology', count: 5, icon: '🔧' },
]

// Project Types
export const projectTypes = [
  { id: 'all', name: 'All Types' },
  { id: 'residential', name: 'Residential' },
  { id: 'commercial', name: 'Commercial' },
  { id: 'industrial', name: 'Industrial' },
  { id: 'mixed-use', name: 'Mixed Use' },
]

// Years
export const galleryYears = [0, 2024, 2023, 2022, 2021, 2020]

// Sample Gallery Images (Replace with actual data)
export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    title: 'Skyline Towers Foundation',
    description: 'Initial foundation work for Skyline Towers commercial complex with advanced piling techniques',
    imageUrl: `${BASE_PEXELS_URL}/323780/pexels-photo-323780.jpeg`,
    thumbnailUrl: `${BASE_PEXELS_URL}/323780/pexels-photo-323780.jpeg`,
    category: 'progress',
    projectType: 'commercial',
    projectName: 'Skyline Towers',
    year: 2024,
    tags: ['foundation', 'piling', 'structural', 'commercial', 'Mumbai'],
    views: 1250,
    likes: 89,
    downloads: 45,
    resolution: '4000x3000',
    fileSize: '4.2 MB',
    uploadedAt: '2024-01-15',
    location: 'Mumbai, India',
    photographer: 'Apex Structure Media Team'
  },
  {
    id: '2',
    title: 'Green Valley Apartment Interior',
    description: 'Premium interior finishing for Green Valley Residency showing luxury bathroom fittings',
    imageUrl: `${BASE_PEXELS_URL}/323705/pexels-photo-323705.jpeg`,
    thumbnailUrl: `${BASE_PEXELS_URL}/323705/pexels-photo-323705.jpeg`,
    category: 'completed',
    projectType: 'residential',
    projectName: 'Green Valley Residency',
    year: 2023,
    tags: ['interior', 'bathroom', 'finishing', 'luxury', 'apartment'],
    views: 2340,
    likes: 156,
    downloads: 78,
    resolution: '3840x2160',
    fileSize: '3.8 MB',
    uploadedAt: '2023-11-20',
    location: 'Bangalore, India'
  },
  {
    id: '3',
    title: 'Tech Park Structural Framework',
    description: 'Steel framework installation for Tech Park One showing precision engineering',
    imageUrl: `${BASE_PEXELS_URL}/323776/pexels-photo-323776.jpeg`,
    thumbnailUrl: `${BASE_PEXELS_URL}/323776/pexels-photo-323776.jpeg`,
    category: 'progress',
    projectType: 'industrial',
    projectName: 'Tech Park One',
    year: 2024,
    tags: ['steel', 'framework', 'structure', 'industrial', 'engineering'],
    views: 1870,
    likes: 112,
    downloads: 56,
    resolution: '4000x3000',
    fileSize: '4.5 MB',
    uploadedAt: '2024-02-10'
  },
  {
    id: '4',
    title: 'Commercial Complex Exterior',
    description: 'Completed exterior facade of premium commercial building with modern architecture',
    imageUrl: `${BASE_PEXELS_URL}/323775/pexels-photo-323775.jpeg`,
    thumbnailUrl: `${BASE_PEXELS_URL}/323775/pexels-photo-323775.jpeg`,
    category: 'completed',
    projectType: 'commercial',
    projectName: 'Business Hub One',
    year: 2023,
    tags: ['exterior', 'facade', 'commercial', 'modern', 'architecture'],
    views: 3120,
    likes: 234,
    downloads: 123,
    resolution: '4096x3072',
    fileSize: '5.1 MB',
    uploadedAt: '2023-09-15'
  },
  {
    id: '5',
    title: 'Quality Concrete Work',
    description: 'High-quality concrete pouring and finishing work with proper curing techniques',
    imageUrl: `${BASE_PEXELS_URL}/323779/pexels-photo-323779.jpeg`,
    thumbnailUrl: `${BASE_PEXELS_URL}/323779/pexels-photo-323779.jpeg`,
    category: 'quality',
    projectType: 'residential',
    projectName: 'Luxury Towers',
    year: 2024,
    tags: ['concrete', 'quality', 'finishing', 'construction', 'residential'],
    views: 1560,
    likes: 98,
    downloads: 45,
    resolution: '3840x2160',
    fileSize: '3.9 MB',
    uploadedAt: '2024-01-28'
  },
  {
    id: '6',
    title: 'Team Safety Meeting',
    description: 'Daily safety briefing and coordination meeting with construction team on site',
    imageUrl: `${BASE_PEXELS_URL}/323774/pexels-photo-323774.jpeg`,
    thumbnailUrl: `${BASE_PEXELS_URL}/323774/pexels-photo-323774.jpeg`,
    category: 'team',
    projectType: 'mixed-use',
    projectName: 'City Center Project',
    year: 2023,
    tags: ['team', 'safety', 'meeting', 'coordination', 'onsite'],
    views: 890,
    likes: 67,
    downloads: 23,
    resolution: '4000x3000',
    fileSize: '4.3 MB',
    uploadedAt: '2023-08-12'
  },
  {
    id: '7',
    title: 'Heavy Crane Operation',
    description: 'Advanced crane operations for material handling at high-rise construction site',
    imageUrl: `${BASE_PEXELS_URL}/323777/pexels-photo-323777.jpeg`,
    thumbnailUrl: `${BASE_PEXELS_URL}/323777/pexels-photo-323777.jpeg`,
    category: 'equipment',
    projectType: 'commercial',
    projectName: 'Skyline Towers',
    year: 2024,
    tags: ['crane', 'equipment', 'machinery', 'heavy', 'operation'],
    views: 1340,
    likes: 89,
    downloads: 34,
    resolution: '3840x2160',
    fileSize: '4.0 MB',
    uploadedAt: '2024-02-05'
  },
  {
    id: '8',
    title: 'Landscaping Completion',
    description: 'Final landscaping and outdoor area development for residential complex',
    imageUrl: `${BASE_PEXELS_URL}/323781/pexels-photo-323781.jpeg`,
    thumbnailUrl: `${BASE_PEXELS_URL}/323781/pexels-photo-323781.jpeg`,
    category: 'completed',
    projectType: 'residential',
    projectName: 'Green Valley Residency',
    year: 2023,
    tags: ['landscaping', 'garden', 'outdoor', 'completion', 'residential'],
    views: 2780,
    likes: 201,
    downloads: 89,
    resolution: '4000x3000',
    fileSize: '4.7 MB',
    uploadedAt: '2023-10-20'
  },
  {
    id: '9',
    title: 'Electrical Installation',
    description: 'Precision electrical wiring and conduit installation with quality checks',
    imageUrl: `${BASE_PEXELS_URL}/323782/pexels-photo-323782.jpeg`,
    thumbnailUrl: `${BASE_PEXELS_URL}/323782/pexels-photo-323782.jpeg`,
    category: 'quality',
    projectType: 'industrial',
    projectName: 'Tech Park One',
    year: 2024,
    tags: ['electrical', 'wiring', 'conduit', 'quality', 'installation'],
    views: 1670,
    likes: 112,
    downloads: 56,
    resolution: '3840x2160',
    fileSize: '4.1 MB',
    uploadedAt: '2024-02-15'
  },
  {
    id: '10',
    title: 'Site Supervision',
    description: 'Project managers conducting site inspection and quality supervision',
    imageUrl: `${BASE_PEXELS_URL}/323783/pexels-photo-323783.jpeg`,
    thumbnailUrl: `${BASE_PEXELS_URL}/323783/pexels-photo-323783.jpeg`,
    category: 'team',
    projectType: 'mixed-use',
    projectName: 'City Center Project',
    year: 2023,
    tags: ['supervision', 'management', 'inspection', 'team', 'quality'],
    views: 1120,
    likes: 78,
    downloads: 34,
    resolution: '4000x3000',
    fileSize: '4.4 MB',
    uploadedAt: '2023-07-18'
  }
]

// Gallery Statistics
export const galleryStats = {
  totalImages: 150,
  totalProjects: 25,
  totalViews: 125000,
  totalDownloads: 4500,
  categories: {
    progress: 45,
    completed: 60,
    quality: 25,
    team: 15,
    equipment: 5
  }
}