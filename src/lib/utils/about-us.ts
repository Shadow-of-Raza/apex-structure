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
    Shield,
    Zap,
    Globe,
    Rocket,
    Star,
    Smile,
    Briefcase,
    LucideIcon
} from 'lucide-react';
import { CompanyProfileData, LeaderMessage, CertificationAndAchievement } from '../types/about-us';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function getCompanyProfile(): Promise<CompanyProfileData | null> {
    try {
        const response = await fetch(`${API_BASE_URL}/about/company-profile`, {
            cache: 'no-store'
        });
        if (!response.ok) throw new Error('Failed to fetch company profile');
        const json = await response.json();
        return json.data;
    } catch (error) {
        console.error('Error fetching company profile:', error);
        return null;
    }
}

export async function getLeaders(): Promise<LeaderMessage[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/about/leaders?activeOnly=true`, {
            cache: 'no-store'
        });
        if (!response.ok) throw new Error('Failed to fetch leaders');
        const json = await response.json();
        return json.data;
    } catch (error) {
        console.error('Error fetching leaders:', error);
        return [];
    }
}

export async function getTeamMembers(): Promise<any[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/about/team-members?activeOnly=true`, {
            cache: 'no-store'
        });
        if (!response.ok) throw new Error('Failed to fetch team members');
        const json = await response.json();
        return json.data;
    } catch (error) {
        console.error('Error fetching team members:', error);
        return [];
    }
}

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
    Shield,
    Zap,
    Globe,
    Rocket,
    Star,
    Smile,
    Briefcase,
};

export function getAboutUsIcon(iconName: string): LucideIcon {
    return ABOUT_US_ICON_MAP[iconName] || Building2;
}

export function calculateYearsOfExperience(establishedOn: number): number {
    const currentYear = new Date().getFullYear();
    return currentYear - establishedOn;
}

export const getCertifications = async (activeOnly = true): Promise<CertificationAndAchievement[]> => {
    try {
        const response = await fetch(`${API_BASE_URL}/about/certifications${activeOnly ? '?activeOnly=true' : ''}`, {
            cache: 'no-store'
        });
        if (!response.ok) throw new Error('Failed to fetch certifications');
        const json = await response.json();
        return json.success ? json.data : [];
    } catch (error) {
        console.error('Error fetching certifications:', error);
        return [];
    }
};
