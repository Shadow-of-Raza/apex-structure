import { NextRequest, NextResponse } from 'next/server'
import { validateEmail, validatePhone } from '@/lib/utils/validation'

// Rate limiting configuration
const RATE_LIMIT_DURATION = 60000 // 1 minute
const MAX_REQUESTS_PER_IP = 5
const requestCounts = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limitData = requestCounts.get(ip)

  if (!limitData) {
    requestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_DURATION })
    return true
  }

  if (now > limitData.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_DURATION })
    return true
  }

  if (limitData.count >= MAX_REQUESTS_PER_IP) {
    return false
  }

  limitData.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Get IP address for rate limiting
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : '127.0.0.1'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'message']
    const missingFields = requiredFields.filter(field => !body[field])
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      )
    }
    
    // Validate email format
    if (!validateEmail(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }
    
    // Validate phone format
    if (!validatePhone(body.phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      )
    }
    
    // Sanitize inputs
    const sanitizedData = {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim(),
      company: body.company?.trim() || '',
      subject: body.subject?.trim() || '',
      message: body.message.trim(),
      projectType: body.projectType || '',
      ipAddress: ip,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || 'Unknown'
    }
    
    // In production, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send auto-response to user
    // 4. Integrate with CRM
    
    console.log('Contact form submission:', sanitizedData)
    
    // Simulate saving to database
    await new Promise(resolve => setTimeout(resolve, 500))
    
    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! We will get back to you within 24 hours.',
        data: {
          id: Date.now().toString(),
          submittedAt: sanitizedData.timestamp
        }
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Contact form error:', error)
    
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}