'use client'

import { useState } from 'react'
import { Send, Loader2, CheckCircle } from 'lucide-react'
import { validateEmail, validatePhone, validateRequired, sanitizeText } from '@/lib/utils/validation'

type FormData = {
  name: string
  email: string
  phone: string
  company: string
  subject: string
  message: string
  projectType: string
}

type FormErrors = Partial<Record<keyof FormData, string>>
type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const projectTypes = [
  'Residential',
  'Commercial',
  'Industrial',
  'Renovation',
  'Interior Design',
  'Consultation',
  'Other'
]

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    projectType: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: sanitizeText(value) }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleBlur = (field: keyof FormData) => {
    setTouched(prev => ({ ...prev, [field]: true }))
    validateField(field, formData[field])
  }

  const validateField = (field: keyof FormData, value: string) => {
    let error = ''
    
    switch (field) {
      case 'name':
        if (!value.trim()) error = 'Name is required'
        break
      case 'email':
        if (!value.trim()) {
          error = 'Email is required'
        } else if (!validateEmail(value)) {
          error = 'Please enter a valid email address'
        }
        break
      case 'phone':
        if (!value.trim()) {
          error = 'Phone number is required'
        } else if (!validatePhone(value)) {
          error = 'Please enter a valid phone number'
        }
        break
      case 'message':
        if (!value.trim()) error = 'Message is required'
        else if (value.length < 10) error = 'Message must be at least 10 characters'
        break
    }
    
    if (error) {
      setErrors(prev => ({ ...prev, [field]: error }))
    } else {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    // Validate required fields
    const requiredFields: (keyof FormData)[] = ['name', 'email', 'phone', 'message']
    requiredFields.forEach(field => {
      if (!formData[field].trim()) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`
      }
    })
    
    // Validate email format
    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    // Validate phone format
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setStatus('submitting')
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // In production, you would use:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })
      
      // if (response.ok) {
        setStatus('success')
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
          projectType: ''
        })
        setTouched({})
        
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000)
      // } else {
      //   throw new Error('Submission failed')
      // }
    } catch (error) {
      setStatus('error')
      console.error('Submission error:', error)
      
      // Reset error after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const isFieldInvalid = (field: keyof FormData): boolean => {
    return !!(touched[field] && errors[field])
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">Send Us a Message</h3>
        <p className="text-gray-600">
          Fill out the form below and our team will get back to you within 24 hours
        </p>
      </div>
      
      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
            <div>
              <p className="font-semibold text-green-800">Message sent successfully!</p>
              <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
            </div>
          </div>
        </div>
      )}
      
      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center">
            <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3">!</div>
            <div>
              <p className="font-semibold text-red-800">Something went wrong</p>
              <p className="text-red-700 text-sm">Please try again or contact us directly.</p>
            </div>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={() => handleBlur('name')}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition ${
                isFieldInvalid('name')
                  ? 'border-red-300 bg-red-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              placeholder="John Doe"
              disabled={status === 'submitting'}
            />
            {isFieldInvalid('name') && (
              <p className="mt-2 text-sm text-red-600">{errors.name}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => handleBlur('email')}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition ${
                isFieldInvalid('email')
                  ? 'border-red-300 bg-red-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              placeholder="john@example.com"
              disabled={status === 'submitting'}
            />
            {isFieldInvalid('email') && (
              <p className="mt-2 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
        </div>
        
        {/* Phone and Company */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={() => handleBlur('phone')}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition ${
                isFieldInvalid('phone')
                  ? 'border-red-300 bg-red-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              placeholder="+1 (555) 123-4567"
              disabled={status === 'submitting'}
            />
            {isFieldInvalid('phone') && (
              <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition hover:border-gray-400"
              placeholder="Your Company"
              disabled={status === 'submitting'}
            />
          </div>
        </div>
        
        {/* Project Type and Subject */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition hover:border-gray-400 appearance-none bg-white"
              disabled={status === 'submitting'}
            >
              <option value="">Select project type</option>
              {projectTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition hover:border-gray-400"
              placeholder="Project Inquiry"
              disabled={status === 'submitting'}
            />
          </div>
        </div>
        
        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Your Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            onBlur={() => handleBlur('message')}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition resize-none ${
              isFieldInvalid('message')
                ? 'border-red-300 bg-red-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
            placeholder="Tell us about your project requirements, timeline, budget, and any specific needs..."
            disabled={status === 'submitting'}
          />
          {isFieldInvalid('message') && (
            <p className="mt-2 text-sm text-red-600">{errors.message}</p>
          )}
          <p className="mt-2 text-sm text-gray-500">
            Please provide as much detail as possible about your project
          </p>
        </div>
        
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className={`w-full flex items-center justify-center px-6 py-4 rounded-lg font-semibold text-lg transition duration-300 ${
              status === 'submitting'
                ? 'bg-primary-400 cursor-not-allowed'
                : 'bg-primary-600 hover:bg-primary-700'
            } text-white`}
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-3" />
                Send Message
              </>
            )}
          </button>
          
          <p className="mt-3 text-sm text-gray-500 text-center">
            By submitting this form, you agree to our{' '}
            <a href="/privacy-policy" className="text-primary-600 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </form>
    </div>
  )
}