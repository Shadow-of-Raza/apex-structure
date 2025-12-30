export interface PageHeaderImage {
  id: string;
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