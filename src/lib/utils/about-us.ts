// src/lib/utils/about-us.ts
import {
    Building2,
    Clock,
    Users,
    Eye,
    Target,
    Heart,
    Award,
    Lightbulb,
    Medal,
    Trophy,
    LucideIcon
} from 'lucide-react';

export const ABOUT_US_ICON_MAP: Record<string, LucideIcon> = {
    Building2,
    Clock,
    Users,
    Eye,
    Target,
    Heart,
    Award,
    Lightbulb,
    Medal,
    Trophy,
};

export function getAboutUsIcon(iconName: string): LucideIcon {
    return ABOUT_US_ICON_MAP[iconName] || Building2;
}

export function calculateYearsOfExperience(establishedOn: number): number {
    const currentYear = new Date().getFullYear();
    return currentYear - establishedOn;
}
