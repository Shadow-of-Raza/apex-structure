export interface ServiceFAQ {
    id: number
    question: string
    answer: string
    display_order: number
}

export interface ServiceBenefit {
    id: number
    benefit: string
    display_order: number
}

export interface ServiceFeature {
    id: number
    feature: string
    display_order: number
}

export interface Service {
    id: number
    name: string // Slug
    title: string
    description: string
    short_description?: string
    category_label?: string
    icon_name: string
    image_url?: string
    display_order: number
    is_active: boolean
    features: ServiceFeature[]
    benefits: ServiceBenefit[]
    faqs: ServiceFAQ[]
    createdAt?: string
    updatedAt?: string
}