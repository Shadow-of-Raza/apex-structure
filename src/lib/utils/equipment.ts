// src/lib/utils/equipment.ts
import { Equipment } from '@/lib/types/equipment'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

/**
 * Get all active equipments from API
 */
export async function getAllEquipments(): Promise<Equipment[]> {
    try {
        console.log(`Fetching equipments from: ${API_BASE_URL}/equipments?active=true`);

        const response = await fetch(`${API_BASE_URL}/equipments?active=true`, {
            cache: 'no-store' // Disable caching for real-time data
        })

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to fetch equipments: ${response.status} ${response.statusText} - ${errorText}`);
        }

        const json = await response.json()
        return json.data || []
    } catch (error) {
        console.error('Error fetching equipments:', error)
        return []
    }
}

/**
 * Get a specific equipment by ID
 */
export async function getEquipmentById(id: number): Promise<Equipment | undefined> {
    try {
        const response = await fetch(`${API_BASE_URL}/equipments/${id}`, {
            cache: 'no-store'
        })
        if (!response.ok) return undefined
        const json = await response.json()
        return json.data
    } catch (error) {
        console.error(`Error fetching equipment by id ${id}:`, error)
        return undefined
    }
}
