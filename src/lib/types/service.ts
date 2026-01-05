export interface ServiceFAQ {
    question: string
    answer: string
}

export interface Service {
    id: number // Numeric ID
    name: string // Logical ID / Slug (e.g. "commercial"), formerly 'id'
    title: string
    description: string
    icon: string // Lucide icon name string
    features: string[]
    benefits: string[]
    process: string[]
    faqs: ServiceFAQ[]
    image?: string // Potential for future use

    // UI/CMS Fields
    shortDescription?: string // Shorter description for cards/previews
    categoryLabel?: string // Short label for filters (e.g., "Commercial" for "Commercial Construction")
}

export interface ServiceBenefit {
    title: string
    description: string
    icon: string // Lucide icon name string
}

export interface ServiceProcessStep {
    title: string
    description: string
    step: number
}
