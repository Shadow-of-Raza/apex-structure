// src/lib/utils/images.ts
/**
 * Get fallback image component
 */
export function getFallbackImage(serviceName: string = 'Project') {
  return {
    gradient: 'from-primary-500 to-primary-700',
    text: serviceName,
    icon: null
  }
}

/**
 * Clean image URL by removing query parameters
 */
export function cleanImageUrl(url: string): string {
  if (!url) return ''
  
  try {
    // Remove query parameters and fragments
    const urlObj = new URL(url)
    urlObj.search = ''
    urlObj.hash = ''
    return urlObj.toString()
  } catch {
    // If it's not a valid URL, try to clean it manually
    const cleanUrl = url.split('?')[0]?.split('#')[0]?.trim()
    return cleanUrl || ''
  }
}

/**
 * Check if URL is a valid image
 */
export function isValidImageUrl(url: string): boolean {
  if (!url) return false
  
  const cleanUrl = cleanImageUrl(url)
  
  // Check for common image extensions
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif', '.svg']
  const hasImageExtension = imageExtensions.some(ext => 
    cleanUrl.toLowerCase().endsWith(ext)
  )
  
  // Check for known image hosting domains
  const imageDomains = [
    'pexels.com',
    'unsplash.com',
    'amazonaws.com',
    'cloudfront.net',
    'placeholder.com',
    'picsum.photos'
  ]
  const hasImageDomain = imageDomains.some(domain => 
    cleanUrl.includes(domain)
  )
  
  return hasImageExtension || hasImageDomain
}

/**
 * Check if URL is a direct image
 */
export function isDirectImageUrl(url: string): boolean {
  if (!url) return false
  
  const cleanUrl = cleanImageUrl(url)
  return cleanUrl.match(/\.(jpg|jpeg|png|gif|webp|avif)$/i) !== null
}

/**
 * Get optimized image dimensions for different aspect ratios
 */
export function getOptimizedDimensions(
  aspectRatio: 'square' | 'landscape' | 'portrait' = 'landscape',
  baseWidth: number = 400
): { width: number; height: number } {
  switch (aspectRatio) {
    case 'square':
      return { width: baseWidth, height: baseWidth }
    case 'portrait':
      return { width: baseWidth, height: Math.floor(baseWidth * 4/3) }
    case 'landscape':
    default:
      return { width: baseWidth, height: Math.floor(baseWidth * 2/3) }
  }
}

/**
 * Generate image srcset for responsive images
 */
export function generateSrcSet(src: string, widths: number[] = [320, 480, 768, 1024, 1280]): string {
  if (!src) return ''
  
  const cleanSrc = cleanImageUrl(src)
  const srcSet = widths.map(width => `${cleanSrc}?width=${width} ${width}w`).join(', ')
  return srcSet
}

/**
 * Extract filename from URL
 */
export function getImageFilename(url: string): string {
  if (!url) return 'image'
  
  try {
    const pathname = new URL(url).pathname
    const filename = pathname.split('/').pop() || 'image'
    return filename.split('.')[0] || 'image'
  } catch {
    const parts = url.split('/')
    const filename = parts[parts.length - 1] || 'image'
    return filename.split('.')[0] || 'image'
  }
}

/**
 * Get appropriate alt text for image
 */
export function getImageAltText(url: string, fallback: string = 'Image'): string {
  const filename = getImageFilename(url)
  return `${fallback} - ${filename.replace(/[-_]/g, ' ')}`
}


