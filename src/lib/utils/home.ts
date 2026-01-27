import { HeroContent } from '@/lib/types/home';
import { DEFAULT_HERO_STATS } from '@/lib/constants/home';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function getHeroContent(): Promise<HeroContent | null> {
    try {
        const res = await fetch(`${API_BASE_URL}/home/hero`, {
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch hero content: ${res.status}`);
        }

        const json = await res.json();
        const data = json.data;

        if (!data) return null;

        // Map DB structure (flat) to Frontend structure (nested button)
        // DB: button_text, button_url
        // FE: button1: { text, href }
        return {
            id: data.id,
            title: data.title,
            description: data.description,
            button1: {
                text: data.button_text || '',
                href: data.button_url || ''
            },
            // Stats placeholders (updated by getHeroStats in component)
            stats: DEFAULT_HERO_STATS
        };
    } catch (error) {
        console.error('Error fetching hero content:', error);
        return null;
    }
}
