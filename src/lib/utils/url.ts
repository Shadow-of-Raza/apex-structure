/**
 * Parse URL parameters into a filter object
 */
export function parseUrlParams(searchParams: URLSearchParams | string): Record<string, string[]> {
  const params = new URLSearchParams(searchParams)
  const result: Record<string, string[]> = {}
  
  for (const [key, value] of params.entries()) {
    if (!result[key]) {
      result[key] = []
    }
    result[key].push(value)
  }
  
  return result
}

/**
 * Convert filter object to URL parameters
 */
export function filtersToUrlParams(filters: Record<string, string[]>): string {
  const params = new URLSearchParams()
  
  Object.entries(filters).forEach(([key, values]) => {
    values.forEach(value => {
      params.append(key, value)
    })
  })
  
  return params.toString()
}

/**
 * Check if a URL has any filter parameters
 */
export function hasFilterParams(url: string): boolean {
  const urlObj = new URL(url, 'http://dummy.com') // Use dummy base for parsing
  const params = new URLSearchParams(urlObj.search)
  
  const filterKeys = ['type', 'status', 'location']
  return filterKeys.some(key => params.has(key))
}

/**
 * Get filter description from URL parameters
 */
export function getFilterDescription(params: URLSearchParams): string {
  const descriptions: string[] = []
  
  const type = params.get('type')
  const status = params.get('status')
  const location = params.get('location')
  
  if (type) {
    descriptions.push(`Type: ${type}`)
  }
  
  if (status) {
    descriptions.push(`Status: ${status}`)
  }
  
  if (location) {
    descriptions.push(`Location: ${location}`)
  }
  
  return descriptions.join(' • ')
}