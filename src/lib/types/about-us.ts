// src/lib/types/about-us.ts

export interface Stat {
    iconName: string;
    value: string;
    label: string;
}

export interface CompanyProfileData {
    id?: number;
    name: string;
    badge: string;
    title: string;
    description_primary: string;
    description_secondary: string;
    established_year: number;
    team_size_label: string;
    image_url: string;
    is_active?: number;
}

export interface LeaderMessage {
    id: number;
    type: 'director' | 'mentor';
    badge: string;
    name: string;
    role: string;
    profile_image: string;
    experience_years: string;
    projects_led: string;
    message_title: string;
    message_content: string[];
    quote: string;
    signature_role: string;
    is_active?: number;
}

export interface ValueCard {
    id: number;
    title: string;
    description: string;
    iconName: string;
    colorTheme: 'blue' | 'green' | 'purple';
    highlights: string[];
}

export interface VisionMissionData {
    id?: number;
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
    image_url: string;
    linkedin_url?: string;
    display_order: number;
    is_active: boolean;
}

export interface CSRActivity {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
}
export interface CertificationAndAchievement {
    id: number;
    title: string;
    authority: string;
    description: string;
    image_url: string;
    certificate_year?: string;
    is_featured: boolean | number;
    display_order: number;
    is_active: boolean | number;
}
