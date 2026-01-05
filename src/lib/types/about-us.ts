// src/lib/types/about-us.ts

export interface Stat {
    iconName: string;
    value: string;
    label: string;
}

export interface CompanyProfileData {
    name: string;
    badge: string;
    title: string;
    descriptionPrimary: string;
    descriptionSecondary: string;
    establishedOn: number;
    totalTeamMembers: string;
    image: string;
}

export interface LeaderMessage {
    id: string;
    badge: string;
    name: string;
    role: string;
    profile: string;
    experience: string;
    projectsLed: string;
    messageTitle: string;
    content: string[];
    quote: string;
    signatureRole: string;
}

export interface ValueCard {
    id: string;
    title: string;
    description: string;
    iconName: string;
    colorTheme: 'blue' | 'green' | 'purple';
    highlights: string[];
}

export interface VisionMissionData {
    title: string;
    description: string;
    vision: ValueCard;
    mission: ValueCard;
    values: ValueCard;
}

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    image: string;
    initials: string;
    socialLinks?: {
        linkedin?: string;
        twitter?: string;
    };
}

export interface CSRActivity {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
}
export interface CertificationAndAchievement {
    id: string;
    title: string;
    authority: string; // Issuing authority or achievement context
    description: string;
    image: string;
    year?: string;
    isFeatured: boolean;
}
