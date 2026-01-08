import { Client } from '../types/client'

export const shuffleClients = (clients: Client[]): Client[] => {
    return [...clients].sort(() => Math.random() - 0.5)
}

export const getClientsByCategory = (clients: Client[], category: string): Client[] => {
    return clients.filter(client => client.category === category)
}
