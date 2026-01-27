// src/lib/utils/services.ts
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
    HardHat, Construction, Hammer as HammerIcon, Building,
    Factory, Warehouse, Truck, Map, PenTool, Box, Wrench
} from 'lucide-react'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

// Icon mapping to convert string names to components
export const SERVICE_ICON_MAP: Record<string, LucideIcon> = {
    HardHat,
    Construction,
    Hammer: HammerIcon,
    Building,
    Building2,
    Factory,
    Warehouse,
    Home,
    Truck,
    ShieldCheck,
    Layers,
    Zap,
    Map,
    PenTool,
    Box,
    Wrench,
    // Legacy / Fallbacks
    Settings,
    Coffee,
    Award,
    Clock,
    DollarSign,
    Users
}

export function getServiceIcon(iconName: string): LucideIcon {
    return SERVICE_ICON_MAP[iconName] || Wrench
}

/**
 * Get all active services from API
 */
export async function getAllServices(): Promise<Service[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/services?include=true`, {
            cache: 'no-store'
        })
        if (!response.ok) throw new Error('Failed to fetch services')
        const json = await response.json()
        // Backend returns { success: true, data: [...] }
        return (json.data || []).filter((s: Service) => s.is_active)
            .sort((a: Service, b: Service) => (a.display_order || 0) - (b.display_order || 0))
    } catch (error) {
        console.error('Error fetching services:', error)
        return []
    }
}

/**
 * Get a specific service by ID
 */
export async function getServiceById(id: number): Promise<Service | undefined> {
    try {
        const response = await fetch(`${API_BASE_URL}/services/${id}`, {
            cache: 'no-store'
        })
        if (!response.ok) return undefined
        const json = await response.json()
        return json.data
    } catch (error) {
        console.error(`Error fetching service by id ${id}:`, error)
        return undefined
    }
}

/**
 * Get a specific service by slug (name)
 */
export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
    try {
        const response = await fetch(`${API_BASE_URL}/services/slug/${slug}`, {
            cache: 'no-store'
        })
        if (!response.ok) return undefined
        const json = await response.json()
        return json.data
    } catch (error) {
        console.error(`Error fetching service by slug ${slug}:`, error)
        return undefined
    }
}

/**
 * Get service performance stats (Dynamic if possible, otherwise hardcoded for now)
 */
export async function getServiceStats() {
    try {
        const response = await fetch(`${API_BASE_URL}/projects/stats`, {
            cache: 'no-store'
        })
        const json = await response.json()
        const totalProjects = json.data?.completedProjects || 0

        return [
            { label: 'Total Projects', value: `${totalProjects}+` },
            { label: 'Client Satisfaction', value: '98%' },
        ]
    } catch (error) {
        return [
            { label: 'Total Projects', value: '250+' },
            { label: 'Client Satisfaction', value: '98%' },
        ]
    }
}
