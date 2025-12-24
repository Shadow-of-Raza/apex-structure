// src/lib/types/seo.ts
export interface SeoConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  noindex?: boolean;
  structuredData?: Record<string, any>;
  type?: 'website' | 'article' | 'profile' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

export interface PageSeoConfig {
  [key: string]: SeoConfig;
}