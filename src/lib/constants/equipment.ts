import { Equipment, EquipmentCategory } from '@/lib/types/equipment'

export const equipmentData: Equipment[] = [
  {
    id: 'excavator-001',
    name: 'Crawler Excavator',
    model: 'CAT 320',
    category: 'earthmoving',
    description: 'Heavy-duty excavator for digging, trenching, and material handling with advanced hydraulic system.',
    year: 2022,
    capacity: 1.2,
    unit: 'cubic meters',
    count: 12,
    specifications: [
      'Engine: 164 HP',
      'Operating Weight: 21,500 kg',
      'Max Dig Depth: 7.2m',
      'Bucket Capacity: 1.2m³',
      'Fuel Capacity: 400L'
    ],
    status: 'Available',
    safetyRating: 4.8,
    operatorCount: 2,
    images: [
      'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg',
      'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg'
    ],
    rentalPrice: 1500,
    purchasePrice: 185000,
    location: 'Main Yard',
    maintenanceSchedule: {
      lastService: '2024-01-15',
      nextService: '2024-04-15',
      serviceHistory: ['2023-10-15', '2023-07-15', '2023-04-15']
    }
  },
  {
    id: 'crane-001',
    name: 'Tower Crane',
    model: 'Liebherr 125',
    category: 'lifting',
    description: 'High-capacity tower crane for tall building construction with 360-degree rotation.',
    year: 2021,
    capacity: 8,
    unit: 'tons',
    count: 4,
    specifications: [
      'Max Load: 8 tons',
      'Max Radius: 50m',
      'Height: 45m',
      'Power: 45 kW',
      'Rotation: 360°'
    ],
    status: 'In Use',
    safetyRating: 4.9,
    operatorCount: 3,
    images: [
      'https://images.pexels.com/photos/259071/pexels-photo-259071.jpeg',
      'https://images.pexels.com/photos/4508748/pexels-photo-4508748.jpeg'
    ],
    rentalPrice: 2800,
    purchasePrice: 320000,
    projectAssigned: 'Skyline Towers',
    maintenanceSchedule: {
      lastService: '2024-02-10',
      nextService: '2024-05-10',
      serviceHistory: ['2023-11-10', '2023-08-10', '2023-05-10']
    }
  },
  {
    id: 'bulldozer-001',
    name: 'Bulldozer',
    model: 'Komatsu D85',
    category: 'earthmoving',
    description: 'High-power bulldozer for grading and heavy material pushing.',
    year: 2020,
    capacity: 20,
    unit: 'tons',
    count: 6,
    specifications: [
      'Engine: 305 HP',
      'Blade Width: 4.1m',
      'Operating Weight: 20,000 kg'
    ],
    status: 'Maintenance',
    safetyRating: 4.6,
    operatorCount: 2,
    images: [
      'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg'
    ],
    rentalPrice: 1400,
    purchasePrice: 165000
  },
  {
    id: 'concrete-mixer-001',
    name: 'Concrete Mixer Truck',
    model: 'Schwing Stetter',
    category: 'concrete',
    description: 'Transit mixer for transporting ready-mix concrete.',
    year: 2023,
    capacity: 6,
    unit: 'cubic meters',
    count: 8,
    specifications: [
      'Drum Capacity: 6m³',
      'Engine: 210 HP',
      'Water Tank: 450L'
    ],
    status: 'Available',
    safetyRating: 4.5,
    operatorCount: 1,
    images: [
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
      'https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg',
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'
    ],
    rentalPrice: 900,
    purchasePrice: 98000,
    location: 'Central Depot'
  },
  {
    id: 'concrete-pump-001',
    name: 'Concrete Pump',
    model: 'Putzmeister 36',
    category: 'concrete',
    description: 'High-rise concrete pump for vertical concrete placement.',
    year: 2021,
    capacity: 90,
    unit: 'm³/hour',
    count: 3,
    specifications: [
      'Boom Length: 36m',
      'Output: 90m³/h',
      'Pressure: 85 bar'
    ],
    status: 'In Use',
    safetyRating: 4.8,
    operatorCount: 2,
    images: [
      'https://images.pexels.com/photos/4508754/pexels-photo-4508754.jpeg',
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg'
    ],
    rentalPrice: 2200,
    purchasePrice: 275000
  },
  {
    id: 'road-roller-001',
    name: 'Vibratory Road Roller',
    model: 'Bomag BW 120',
    category: 'road',
    description: 'Single drum roller for asphalt and soil compaction.',
    year: 2022,
    capacity: 12,
    unit: 'tons',
    count: 7,
    specifications: [
      'Drum Width: 1.7m',
      'Frequency: 40 Hz'
    ],
    status: 'Available',
    safetyRating: 4.5,
    operatorCount: 1,
    images: [
      'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg',
      'https://images.pexels.com/photos/159306/construction-site-machines-construction-work-159306.jpeg'
    ],
    rentalPrice: 950,
    purchasePrice: 110000
  },
  {
    id: 'forklift-001',
    name: 'Forklift',
    model: 'Toyota 8FG',
    category: 'material',
    description: 'Industrial forklift for warehouse and site material handling.',
    year: 2022,
    capacity: 3,
    unit: 'tons',
    count: 10,
    specifications: [
      'Lift Height: 6m',
      'Fuel Type: Diesel'
    ],
    status: 'Available',
    safetyRating: 4.7,
    operatorCount: 1,
    images: [
      'https://images.pexels.com/photos/4484079/pexels-photo-4484079.jpeg',
      'https://images.pexels.com/photos/2101137/pexels-photo-2101137.jpeg'
    ],
    rentalPrice: 650,
    purchasePrice: 72000,
    location: 'Main Yard'
  },
  {
    id: 'telehandler-001',
    name: 'Telehandler',
    model: 'JCB 540-170',
    category: 'material',
    description: 'Telescopic handler for high-reach material placement.',
    year: 2023,
    capacity: 4,
    unit: 'tons',
    count: 5,
    specifications: [
      'Max Reach: 17m',
      'Engine: 120 HP'
    ],
    status: 'Available',
    safetyRating: 4.8,
    operatorCount: 1,
    images: [
      'https://images.pexels.com/photos/4508746/pexels-photo-4508746.jpeg',
      'https://images.pexels.com/photos/4508747/pexels-photo-4508747.jpeg'
    ],
    rentalPrice: 780,
    purchasePrice: 88000
  },
  {
    id: 'power-drill-001',
    name: 'Rotary Hammer Drill',
    model: 'Hilti TE 70',
    category: 'tools',
    description: 'Heavy-duty drill for concrete and masonry work.',
    year: 2023,
    capacity: 45,
    unit: 'mm',
    count: 25,
    specifications: [
      'Impact Energy: 7.5 J',
      'Power: 1500W'
    ],
    status: 'Available',
    safetyRating: 4.4,
    operatorCount: 1,
    images: [
      'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg',
      'https://images.pexels.com/photos/162553/pexels-photo-162553.jpeg'
    ],
    rentalPrice: 90,
    purchasePrice: 1200
  },
  {
    id: 'cutting-machine-001',
    name: 'Concrete Cutting Machine',
    model: 'Bosch GCO 200',
    category: 'tools',
    description: 'Precision cutting machine for concrete and metal.',
    year: 2022,
    capacity: 355,
    unit: 'mm blade',
    count: 15,
    specifications: [
      'Blade Size: 355mm',
      'Power: 2000W'
    ],
    status: 'Available',
    safetyRating: 4.3,
    operatorCount: 1,
    images: [
      'https://images.pexels.com/photos/4792492/pexels-photo-4792492.jpeg',
      'https://images.pexels.com/photos/4792493/pexels-photo-4792493.jpeg'
    ],
    rentalPrice: 75,
    purchasePrice: 980
  }
]

export const equipmentCategories: EquipmentCategory[] = [
  { 
    id: 'earthmoving', 
    name: 'Earth Moving Equipment', 
    description: 'Excavators, bulldozers, loaders, and graders for site preparation',
    icon: '🚜'
  },
  { 
    id: 'lifting', 
    name: 'Lifting Equipment', 
    description: 'Tower cranes, mobile cranes, and hoists for heavy lifting',
    icon: '🏗️'
  },
  { 
    id: 'concrete', 
    name: 'Concrete Equipment', 
    description: 'Mixers, pumps, and pavers for concrete work',
    icon: '🚛'
  },
  { 
    id: 'road', 
    name: 'Road Construction', 
    description: 'Rollers, pavers, and compactors for road projects',
    icon: '🛣️'
  },
  { 
    id: 'material', 
    name: 'Material Handling', 
    description: 'Forklifts, telehandlers, and conveyors',
    icon: '📦'
  },
  { 
    id: 'tools', 
    name: 'Power Tools', 
    description: 'Electric and pneumatic tools for finishing work',
    icon: '⚡'
  },
  { 
    id: 'demolition', 
    name: 'Demolition Equipment', 
    description: 'Breakers, crushers, and demolition robots for dismantling structures',
    icon: '💥'
  },
  { 
    id: 'mining', 
    name: 'Mining Equipment', 
    description: 'Drilling rigs, dump trucks, and loaders for mining operations',
    icon: '⛏️'
  },
  { 
    id: 'utility', 
    name: 'Utility & Support Equipment', 
    description: 'Generators, compressors, lighting towers, and water pumps',
    icon: '🔌'
  },
  { 
    id: 'survey', 
    name: 'Survey & Measurement', 
    description: 'Total stations, GPS devices, and laser levels for site surveying',
    icon: '📐'
  },
  { 
    id: 'safety', 
    name: 'Safety Equipment', 
    description: 'Barriers, harnesses, scaffolding, and safety monitoring systems',
    icon: '🦺'
  },
  { 
    id: 'transport', 
    name: 'Transportation Equipment', 
    description: 'Dump trucks, trailers, and haulage vehicles for material transport',
    icon: '🚚'
  },
  { 
    id: 'foundation', 
    name: 'Foundation Equipment', 
    description: 'Pile drivers, drilling machines, and soil stabilization equipment',
    icon: '🏗️'
  },
  { 
    id: 'tunneling', 
    name: 'Tunneling Equipment', 
    description: 'Tunnel boring machines and underground excavation tools',
    icon: '🕳️'
  }
]

export function getEquipmentCountByCategory(categoryId: string): number {
  return equipmentData.filter(equipment => equipment.category === categoryId).length
}

export function getEquipmentByCategory(categoryId: string): Equipment[] {
  return equipmentData.filter(equipment => equipment.category === categoryId)
}

export function getCategoryById(categoryId: string): EquipmentCategory | undefined {
  return equipmentCategories.find(cat => cat.id === categoryId)
}