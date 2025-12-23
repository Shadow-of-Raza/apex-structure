'use client'

import { useState, useEffect } from 'react'
import { Search, Filter, MapPin, Briefcase, Clock, DollarSign, Users, Award, TrendingUp, Heart } from 'lucide-react'
import Container from '@/components/common/Layout/Container'
import PageHeader from '@/components/common/Layout/PageHeader'
import Section from '@/components/common/Layout/Section'
import JobOpening from '@/components/career/JobOpening'
import { 
  departments, 
  jobOpenings, 
  employeeTestimonials, 
  benefits, 
  careerStats,
  type JobOpening as JobOpeningType 
} from '@/lib/constants/career'

export default function CareerPage() {
  const [filteredJobs, setFilteredJobs] = useState<JobOpeningType[]>(jobOpenings)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedLocation, setSelectedLocation] = useState<string>('all')

  // Extract unique values for filters
  const jobTypes = Array.from(new Set(jobOpenings.map(job => job.type)))
  const locations = Array.from(new Set(jobOpenings.map(job => job.location)))

  // Filter jobs based on criteria
  useEffect(() => {
    let filtered = [...jobOpenings]

    if (searchTerm) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedDepartment !== 'all') {
      filtered = filtered.filter(job => job.department === selectedDepartment)
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter(job => job.type === selectedType)
    }

    if (selectedLocation !== 'all') {
      filtered = filtered.filter(job => job.location === selectedLocation)
    }

    setFilteredJobs(filtered)
  }, [searchTerm, selectedDepartment, selectedType, selectedLocation])

  const handleResetFilters = () => {
    setSearchTerm('')
    setSelectedDepartment('all')
    setSelectedType('all')
    setSelectedLocation('all')
  }

  return (
    <>
      {/* Hero Section */}
      <PageHeader
        title="Build Your Career With Us"
        description="Join Apex Structure and contribute to landmark projects while advancing your professional journey in real estate development."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Career', href: '/career' }
        ]}
      />
      
      {/* Stats Section */}
      <Section>
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {Object.entries(careerStats).map(([key, value]) => (
              <div key={key} className="text-center bg-primary-50 rounded-xl p-4">
                <div className="text-3xl font-bold text-primary-700 mb-1">{value}</div>
                <div className="text-sm text-gray-600 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Join Us Section */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Join Apex Structure?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We don&apos;t just offer jobs; we build careers and create opportunities for professional and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                icon: <Award className="w-12 h-12" />,
                title: 'Award-Winning Projects',
                description: 'Work on prestigious projects that shape skylines and communities'
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: 'Career Growth',
                description: 'Clear progression paths and leadership development programs'
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: 'Collaborative Culture',
                description: 'Work with industry experts in a supportive team environment'
              },
              {
                icon: <Heart className="w-12 h-12" />,
                title: 'Make an Impact',
                description: 'Contribute to sustainable development and community building'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Job Openings Section */}
      <Section>
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h2 className="text-4xl font-bold mb-2">Current Openings</h2>
              <p className="text-gray-600">
                {filteredJobs.length} position{filteredJobs.length !== 1 ? 's' : ''} available
              </p>
            </div>
            <button className="mt-4 lg:mt-0 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
              Subscribe to Job Alerts
            </button>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              {/* Department Filter */}
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Departments</option>
                {departments.map(dept => (
                  <option key={dept.id} value={dept.name}>
                    {dept.name} ({dept.openings})
                  </option>
                ))}
              </select>

              {/* Job Type Filter */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Job Types</option>
                {jobTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>

              {/* Location Filter */}
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Locations</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                Showing {filteredJobs.length} of {jobOpenings.length} jobs
              </div>
              <button
                onClick={handleResetFilters}
                className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
              >
                <Filter className="w-4 h-4 mr-2" />
                Reset Filters
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-blue-50 rounded-xl p-4 flex items-center">
              <Briefcase className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-blue-700">{jobOpenings.length}</div>
                <div className="text-sm text-blue-600">Open Positions</div>
              </div>
            </div>
            <div className="bg-green-50 rounded-xl p-4 flex items-center">
              <MapPin className="w-8 h-8 text-green-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-green-700">{locations.length}</div>
                <div className="text-sm text-green-600">Cities</div>
              </div>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 flex items-center">
              <Clock className="w-8 h-8 text-purple-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-purple-700">24h</div>
                <div className="text-sm text-purple-600">Avg. Response Time</div>
              </div>
            </div>
            <div className="bg-yellow-50 rounded-xl p-4 flex items-center">
              <DollarSign className="w-8 h-8 text-yellow-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-yellow-700">90%</div>
                <div className="text-sm text-yellow-600">Above Market Salary</div>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobOpening key={job.id} job={job} />
              ))
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-xl">
                <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">No matching jobs found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search criteria</p>
                <button
                  onClick={handleResetFilters}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Departments Section */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Explore Departments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find your perfect fit in one of our specialized departments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept) => (
              <div 
                key={dept.id} 
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:-translate-y-1"
                onClick={() => setSelectedDepartment(dept.name)}
              >
                <div className="text-3xl mb-4">{dept.icon}</div>
                <h3 className="text-xl font-bold mb-2">{dept.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{dept.description}</p>
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    {dept.openings} openings
                  </span>
                  <span className="text-primary-600 font-medium">View →</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Employee Testimonials */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Life at Apex Structure</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our team members about their experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {employeeTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{testimonial.name}</h4>
                    <p className="text-primary-600 font-medium">{testimonial.role}</p>
                    <p className="text-gray-600 text-sm">
                      {testimonial.department} • {testimonial.tenure} at company
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-700 italic mb-6">&quot;{testimonial.quote}&quot;</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.projects} projects completed
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section background="primary">
        <Container>
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-4">Employee Benefits</h2>
            <p className="text-primary-100 max-w-2xl mx-auto">
              We invest in our people with comprehensive benefits and perks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition duration-300">
                <div className="text-2xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-primary-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Application Process */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Application Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined hiring process ensures a smooth experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Application Review',
                description: 'Submit your application and our team reviews it within 48 hours'
              },
              {
                step: '2',
                title: 'Initial Screening',
                description: 'Phone interview with HR to discuss your background and expectations'
              },
              {
                step: '3',
                title: 'Technical Assessment',
                description: 'Skills evaluation and/or technical interview with department heads'
              },
              {
                step: '4',
                title: 'Final Interview & Offer',
                description: 'Meet leadership team and receive offer letter within 5 business days'
              }
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
                {item.step !== '4' && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gray">
        <Container>
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Future With Us?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our team and contribute to projects that shape communities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#job-openings"
                className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300"
              >
                View Open Positions
              </a>
              <a
                href="/contact-us"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300"
              >
                General Inquiry
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}