export interface Equipment {
  id: string
  name: string
  model: string
  category: string
  description: string
  year: number
  capacity: number
  unit: string
  count?: number
  specifications: string[]
  status: 'Available' | 'In Use' | 'Maintenance'
  safetyRating: number
  operatorCount: number
  images: string[]
  rentalPrice?: number
  purchasePrice?: number
  maintenanceSchedule?: {
    lastService: string
    nextService: string
    serviceHistory: string[]
  }
  location?: string
  projectAssigned?: string
}

export interface EquipmentCategory {
  id: string
  name: string
  description: string
  icon?: string
}