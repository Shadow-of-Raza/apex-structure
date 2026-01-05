// src/lib/utils/services.ts
import { servicesData } from '@/lib/constants/services'
import { getTotalProjectsCount } from './projects'
import { Service } from '@/lib/types/service'
import {
    LucideIcon,
    Building2,
    Users,
    Award,
    Clock,
    DollarSign,
    Home,
    Hammer,
    Settings,
    ShieldCheck,
    Zap,
    Layers,
    Coffee,
} from 'lucide-react'

export function getAllServices(): Service[] {
    return servicesData
}

export function getServiceById(id: number): Service | undefined {
    return servicesData.find(service => service.id === id)
}

export function getServiceByName(name: string): Service | undefined {
    return servicesData.find(service => service.name === name)
}

export function getServiceBySlug(slug: string): Service | undefined {
    return getServiceByName(slug)
}

// Icon mapping to convert string names to components
export const SERVICE_ICON_MAP: Record<string, LucideIcon> = {
    Building2,
    Users,
    Award,
    Clock,
    DollarSign,
    Home,
    Hammer,
    Settings,
    ShieldCheck,
    Zap,
    Layers,
    Coffee,
}


export function getServiceIcon(iconName: string) {
    return SERVICE_ICON_MAP[iconName] || Building2
}

export function getServiceStats() {
    const totalProjects = getTotalProjectsCount()

    return [
        { label: 'Total Projects', value: `${totalProjects}+` },
        { label: 'Client Satisfaction', value: '98%' },
    ]
}
