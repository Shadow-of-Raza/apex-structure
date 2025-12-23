'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { 
  ArrowLeft, 
  Upload, 
  FileText, 
  CheckCircle, 
  AlertCircle,
  Mail,
  Phone,
  MapPin,
  Briefcase
} from 'lucide-react'
import Container from '@/components/common/Layout/Container'
import PageHeader from '@/components/common/Layout/PageHeader'
import Section from '@/components/common/Layout/Section'
import FormInput from '@/components/common/Forms/FormInput'
import FormTextarea from '@/components/common/Forms/FormTextarea'
import { jobOpenings } from '@/lib/constants/career'
import { validateEmail, validatePhone } from '@/lib/utils/validation'

export default function JobApplicationPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string
  
  // Find the job by slug
  const job = jobOpenings.find(j => j.slug === slug)
  
  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Container>
          <div className="text-center">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-4">Job Not Found</h1>
            <p className="text-gray-600 mb-6">The job position you&apos;re looking for doesn&apos;t exist or has been filled.</p>
            <button
              onClick={() => router.push('/career')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold"
            >
              View All Jobs
            </button>
          </div>
        </Container>
      </div>
    )
  }

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    currentCompany: '',
    currentRole: '',
    experience: '',
    expectedSalary: '',
    coverLetter: '',
    linkedin: '',
    portfolio: ''
  })

  const [resume, setResume] = useState<File | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (!allowedTypes.includes(file.type)) {
        setErrors(prev => ({ ...prev, resume: 'Please upload PDF or DOC/DOCX files only' }))
        return
      }
      
      // Check file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, resume: 'File size must be less than 5MB' }))
        return
      }
      
      setResume(file)
      setErrors(prev => ({ ...prev, resume: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'location', 'currentRole', 'experience']
    requiredFields.forEach(field => {
      if (!formData[field as keyof typeof formData]) {
        newErrors[field] = 'This field is required'
      }
    })

    // Email validation
    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Phone validation
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    // Resume validation
    if (!resume) {
      newErrors.resume = 'Please upload your resume'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // In production, you would:
      // 1. Upload resume to cloud storage
      // 2. Send application data to your backend
      // 3. Send confirmation emails
      
      setIsSubmitted(true)
    } catch (error) {
      console.error('Submission error:', error)
      setErrors(prev => ({ ...prev, submit: 'Something went wrong. Please try again.' }))
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <>
        <PageHeader
          title="Application Submitted"
          description="Thank you for applying to Apex Structure. We'll review your application and get back to you soon."
          breadcrumbs={[
            { name: 'Home', href: '/' },
            { name: 'Career', href: '/career' },
            { name: job.title, href: `/career/apply/${job.slug}` }
          ]}
        />
        
        <Section>
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              
              <h2 className="text-3xl font-bold mb-4">Application Received!</h2>
              <p className="text-gray-600 mb-8">
                Thank you for applying for the <span className="font-semibold">{job.title}</span> position. 
                We&apos;ve received your application and will review it within 48 hours.
              </p>
              
              <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
                <h3 className="font-bold mb-4">What&apos;s Next?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      1
                    </div>
                    <span>Application review by HR team (48 hours)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      2
                    </div>
                    <span>Initial screening call if shortlisted</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      3
                    </div>
                    <span>Technical assessment and interviews</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      4
                    </div>
                    <span>Final decision and offer</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => router.push('/career')}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
                >
                  View More Jobs
                </button>
                <button
                  onClick={() => router.push('/')}
                  className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg font-semibold transition duration-300"
                >
                  Return Home
                </button>
              </div>
            </div>
          </Container>
        </Section>
      </>
    )
  }

  return (
    <>
      <PageHeader
        title={`Apply: ${job.title}`}
        description={`Submit your application for the ${job.title} position at Apex Structure`}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Career', href: '/career' },
          { name: job.title, href: `/career/apply/${job.slug}` }
        ]}
      />
      
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Job Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
                <button
                  onClick={() => router.push('/career')}
                  className="flex items-center text-primary-600 hover:text-primary-700 font-medium mb-6"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Jobs
                </button>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4">{job.title}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Briefcase className="w-4 h-4 mr-3" />
                      <span>{job.department}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-3" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Briefcase className="w-4 h-4 mr-3" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Briefcase className="w-4 h-4 mr-3" />
                      <span>{job.experience}</span>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-bold mb-3">Application Deadline</h4>
                  <div className="text-primary-700 font-semibold">
                    {new Date(job.deadline).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    We recommend applying as soon as possible
                  </p>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-bold mb-3">Need Help?</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="w-4 h-4 mr-2" />
                      HR@apexstructure.in
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-2" />
                      +1 (555) 123-4567
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Application Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">Application Form</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput
                      label="First Name *"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      error={errors.firstName}
                      placeholder="John"
                      required
                    />
                    
                    <FormInput
                      label="Last Name *"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      error={errors.lastName}
                      placeholder="Doe"
                      required
                    />
                    
                    <FormInput
                      label="Email Address *"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                      placeholder="john@example.com"
                      required
                    />
                    
                    <FormInput
                      label="Phone Number *"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      error={errors.phone}
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                  
                  {/* Professional Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput
                      label="Current Location *"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      error={errors.location}
                      placeholder="City, Country"
                      required
                    />
                    
                    <FormInput
                      label="Current Company"
                      name="currentCompany"
                      value={formData.currentCompany}
                      onChange={handleChange}
                      error={errors.currentCompany}
                      placeholder="Your current company"
                    />
                    
                    <FormInput
                      label="Current Role *"
                      name="currentRole"
                      value={formData.currentRole}
                      onChange={handleChange}
                      error={errors.currentRole}
                      placeholder="Your current position"
                      required
                    />
                    
                    <FormInput
                      label="Total Experience *"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      error={errors.experience}
                      placeholder="e.g., 5 years"
                      required
                    />
                  </div>
                  
                  {/* Resume Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Resume/CV *
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary-500 transition">
                      <input
                        type="file"
                        id="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label htmlFor="resume" className="cursor-pointer">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <div className="text-lg font-medium text-gray-700 mb-2">
                          {resume ? resume.name : 'Click to upload resume'}
                        </div>
                        <p className="text-sm text-gray-500">
                          PDF, DOC, DOCX up to 5MB
                        </p>
                      </label>
                    </div>
                    {errors.resume && (
                      <p className="mt-2 text-sm text-red-600">{errors.resume}</p>
                    )}
                  </div>
                  
                  {/* Cover Letter */}
                  <FormTextarea
                    label="Cover Letter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    error={errors.coverLetter}
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    rows={6}
                    helperText="Optional but recommended"
                  />
                  
                  {/* Portfolio Links */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput
                      label="LinkedIn Profile"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      error={errors.linkedin}
                      placeholder="https://linkedin.com/in/username"
                    />
                    
                    <FormInput
                      label="Portfolio/Website"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      error={errors.portfolio}
                      placeholder="https://yourportfolio.com"
                    />
                  </div>
                  
                  {/* Consent */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="consent"
                        className="mt-1 mr-3"
                        required
                      />
                      <label htmlFor="consent" className="text-sm text-gray-700">
                        I consent to Apex Structure processing my personal data according to the 
                        <a href="/privacy-policy" className="text-primary-600 hover:underline ml-1">
                          Privacy Policy
                        </a>
                        . I understand my data will be used for recruitment purposes only.
                      </label>
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-4 rounded-lg font-semibold text-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting Application...
                        </>
                      ) : (
                        'Submit Application'
                      )}
                    </button>
                    
                    <p className="mt-3 text-sm text-gray-500 text-center">
                      By submitting, you agree to our Terms and confirm the information provided is accurate.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}