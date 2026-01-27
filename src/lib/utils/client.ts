import { Client } from '../types/client'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

export const shuffleClients = (clients: Client[]): Client[] => {
    return [...clients].sort(() => Math.random() - 0.5)
}

/**
 * Get all active clients from API
 */
export async function getClients(): Promise<Client[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/clients?active=true`, {
            cache: 'no-store'
        })

        if (!response.ok) {
            throw new Error(`Failed to fetch clients: ${response.statusText}`)
        }

        const json = await response.json()

        // Map backend response fields to frontend Client interface if needed
        // Backend: logo_image, is_prime, is_active
        // Frontend: logoImage, isPrime, alt
        return (json.data || []).map((c: any) => ({
            id: c.id,
            name: c.name,
            logoImage: c.logo_image,
            alt: c.alt_text || `${c.name} Logo`,
            description: c.description,
            isPrime: c.is_prime
        }))
    } catch (error) {
        console.error('Error fetching clients:', error)
        return []
    }
}
