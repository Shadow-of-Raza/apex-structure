import { Client } from '../types/client'

export const shuffleClients = (clients: Client[]): Client[] => {
    return [...clients].sort(() => Math.random() - 0.5)
}
