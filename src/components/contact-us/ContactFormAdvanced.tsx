'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, Loader2, CheckCircle } from 'lucide-react'
import Button from '@/components/common/UI/Button'
import FormInput from '@/components/common/Forms/FormInput'
import FormTextarea from '@/components/common/Forms/FormTextarea'

// Define Zod schema for form validation
const contactSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z.string()
    .email('Please enter a valid email address'),
  phone: z.string()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit phone number')
    .or(z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Please enter a valid international phone number')),
  company: z.string().max(100, 'Company name must be less than 100 characters').optional(),
  subject: z.string().max(200, 'Subject must be less than 200 characters').optional(),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be less than 5000 characters'),
  projectType: z.string().optional(),
  agreeToPrivacy: z.boolean().refine(val => val === true, {
    message: 'You must agree to the privacy policy'
  })
})

type ContactFormData = z.infer<typeof contactSchema>

const projectTypes = [
  'Residential',
  'Commercial',
  'Industrial',
  'Renovation',
  'Interior Design',
  'Consultation',
  'Other'
]

export default function ContactFormAdvanced() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
      projectType: '',
      agreeToPrivacy: false
    }
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('submitting')
    
    try {
      // Submit to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      if (response.ok) {
        setStatus('success')
        reset()
        
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setStatus('error')
      
      // Reset error after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    }
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
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            label="Full Name *"
            {...register('name')}
            error={errors.name?.message}
            placeholder="John Doe"
            disabled={isSubmitting}
          />
          
          <FormInput
            label="Email Address *"
            type="email"
            {...register('email')}
            error={errors.email?.message}
            placeholder="john@example.com"
            disabled={isSubmitting}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            label="Phone Number *"
            type="tel"
            {...register('phone')}
            error={errors.phone?.message}
            placeholder="+1 (555) 123-4567"
            disabled={isSubmitting}
            helperText="10-digit number or international format"
          />
          
          <FormInput
            label="Company Name"
            {...register('company')}
            error={errors.company?.message}
            placeholder="Your Company"
            disabled={isSubmitting}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
              Project Type
            </label>
            <select
              id="projectType"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition hover:border-gray-400 appearance-none bg-white"
              {...register('projectType')}
              disabled={isSubmitting}
            >
              <option value="">Select project type</option>
              {projectTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          <FormInput
            label="Subject"
            {...register('subject')}
            error={errors.subject?.message}
            placeholder="Project Inquiry"
            disabled={isSubmitting}
          />
        </div>
        
        <FormTextarea
          label="Your Message *"
          rows={5}
          {...register('message')}
          error={errors.message?.message}
          placeholder="Tell us about your project requirements, timeline, budget, and any specific needs..."
          disabled={isSubmitting}
          showCount
          maxLength={5000}
          helperText="Please provide as much detail as possible about your project"
        />
        
        <div className="flex items-start">
          <input
            type="checkbox"
            id="agreeToPrivacy"
            className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 mt-1"
            {...register('agreeToPrivacy')}
            disabled={isSubmitting}
          />
          <label htmlFor="agreeToPrivacy" className="ml-3 text-sm text-gray-700">
            I agree to the{' '}
            <a href="/privacy-policy" className="text-primary-600 hover:underline font-medium">
              Privacy Policy
            </a>
            {' '}and consent to being contacted by Apex Structure
          </label>
        </div>
        {errors.agreeToPrivacy && (
          <p className="text-sm text-red-600">{errors.agreeToPrivacy.message}</p>
        )}
        
        <div>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={isSubmitting}
            icon={Send}
            iconPosition="left"
            fullWidth
            disabled={isSubmitting}
          >
            Send Message
          </Button>
          
          <p className="mt-3 text-sm text-gray-500 text-center">
            Your information is secure and will never be shared with third parties
          </p>
        </div>
      </form>
    </div>
  )
}