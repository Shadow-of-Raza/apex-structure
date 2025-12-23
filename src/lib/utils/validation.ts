/**
 * Validate email format
 */
export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

/**
 * Validate phone number (Indian format)
 */
export function validatePhone(phone: string): boolean {
  const re = /^[6-9]\d{9}$/
  return re.test(phone.replace(/\D/g, ''))
}

/**
 * Validate required fields
 */
export function validateRequired(fields: Record<string, any>): string[] {
  const errors: string[] = []
  
  Object.entries(fields).forEach(([key, value]) => {
    if (!value || (typeof value === 'string' && value.trim() === '')) {
      errors.push(`${key} is required`)
    }
  })
  
  return errors
}

/**
 * Sanitize input text
 */
export function sanitizeText(text: string): string {
  return text
    .replace(/[<>]/g, '') // Remove HTML tags
    .trim()
}