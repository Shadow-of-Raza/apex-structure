export interface PageHeaderImage {
  id: number;
  url: string;
  alt: string;
  title?: string;
  description?: string;
}

export interface PageHeaderProps {
  images: PageHeaderImage[]; // Required
  imageTransitionInterval?: number; // in milliseconds
  showOverlay?: boolean;
  overlayOpacity?: number;
}

export interface PageHeaderConfig {
  defaultTransitionInterval: number;
  defaultOverlayOpacity: number;
}

export interface HeroImage {
  id: number;
  imageUrl: string;
  alt: string;
}