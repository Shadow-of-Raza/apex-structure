import { PageHeaderImage, PageHeaderConfig } from '@/lib/types/page-header';
import { PAGE_HEADER_CONFIG, getPageHeaderImages } from '@/lib/constants/page-header';

/**
 * Preload images to ensure smooth transitions
 */
export function preloadImages(images: PageHeaderImage[]): Promise<void[]> {
  return Promise.all(
    images.map((image) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = image.url;
        img.onload = () => resolve();
        img.onerror = () => resolve(); // Even if image fails, continue
      });
    })
  );
}

/**
 * Generate a unique key for image caching
 */
export function getImageCacheKey(image: PageHeaderImage): string {
  return `${image.id}-${image.url.split('/').pop()?.split('?')[0]}`;
}

/**
 * Validate image URL
 */
export function isValidImageUrl(url: string): boolean {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:';
  } catch {
    return false;
  }
}

/**
 * Get configuration for a specific page
 */
export function getPageHeaderConfig(page: string): PageHeaderConfig & { images: PageHeaderImage[] } {
  const images = getPageHeaderImages(page);

  return {
    ...PAGE_HEADER_CONFIG,
    images
  };
}

export function getOptimizedImageUrl(
  url: string,
  options?: { width?: number; height?: number; quality?: number }
): string {
  // For Pexels URLs, we can add specific optimization parameters
  if (url.includes('pexels.com')) {
    const urlObj = new URL(url);

    // Remove existing query params and replace with optimized ones
    urlObj.search = '';

    // Set optimized parameters
    urlObj.searchParams.set('auto', 'compress');
    urlObj.searchParams.set('cs', 'tinysrgb');

    if (options?.width) {
      urlObj.searchParams.set('w', options.width.toString());
    } else {
      urlObj.searchParams.set('w', '1920');
    }

    // Add height and fit=crop for consistent sizing
    if (options?.height) {
      urlObj.searchParams.set('h', options.height.toString());
      urlObj.searchParams.set('fit', 'crop');
    }

    if (options?.quality) {
      urlObj.searchParams.set('q', options.quality.toString());
    } else {
      urlObj.searchParams.set('q', '85'); // Default to 85% quality
    }

    return urlObj.toString();
  }

  // For future AWS S3 URLs, we'll implement CDN optimization here
  if (url.includes('amazonaws.com') || url.includes('s3.')) {
    // Add your S3 optimization parameters here when ready
    return url;
  }

  return url;
}

// API Fetching for Dynamic Hero Slides
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
import { HeroImage } from '@/lib/types/page-header';

export async function getHeroSlides(): Promise<HeroImage[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/home/hero-slides`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: AbortSignal.timeout(10000) // 10 second timeout
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch hero slides: ${res.status}`);
    }

    const json = await res.json();
    const data = json.data;

    // Map backend structure to frontend HeroImage
    return data.map((slide: any) => ({
      id: slide.id,
      imageUrl: slide.image_url,
      alt: slide.alt_text || 'Hero Slide'
    }));

  } catch (error) {
    console.error('Error fetching hero slides:', error);
    return [];
  }
}