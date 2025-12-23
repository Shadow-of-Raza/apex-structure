// src/components/services/ServiceCTA.tsx
import { Phone, Mail, Calendar, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function ServiceCTA() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column - Contact Info */}
        <div className="p-8 md:p-12 text-white">
          <span className="text-secondary-500 font-semibold">GET STARTED</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
            Ready to Start Your Project?
          </h2>
          
          <p className="text-gray-300 mb-8 text-lg">
            Contact us for a free consultation and let's discuss how we can bring your vision to life.
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <Phone className="w-6 h-6 text-secondary-500 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Call Us Anytime</h4>
                <p className="text-gray-300">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-400">Mon-Fri: 9AM-6PM | Sat: 10AM-4PM</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="w-6 h-6 text-secondary-500 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Email Us</h4>
                <p className="text-gray-300">services@apexstructure.com</p>
                <p className="text-sm text-gray-400">Response within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start">
              <Calendar className="w-6 h-6 text-secondary-500 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Schedule a Meeting</h4>
                <p className="text-gray-300">Book a free consultation</p>
                <p className="text-sm text-gray-400">Virtual or in-person meetings available</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Now
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition duration-300"
            >
              View Our Projects
            </Link>
          </div>
        </div>

        {/* Right Column - Benefits */}
        <div className="bg-white p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            Why Partner With Us
          </h3>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold mb-1 text-gray-900">Experienced Team</h4>
                <p className="text-gray-600">
                  200+ professionals with 18+ years of industry experience
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold mb-1 text-gray-900">Quality Assurance</h4>
                <p className="text-gray-600">
                  ISO-certified processes and strict quality control measures
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-bold mb-1 text-gray-900">Timely Delivery</h4>
                <p className="text-gray-600">
                  98% on-time project completion record
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h4 className="font-bold mb-1 text-gray-900">Transparent Pricing</h4>
                <p className="text-gray-600">
                  No hidden costs with detailed cost breakdown
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h4 className="font-bold mb-1 text-gray-900">Post-Completion Support</h4>
                <p className="text-gray-600">
                  5-year warranty and maintenance support
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Note:</span> All projects include free initial consultation, 
              detailed project proposal, and 3D visualization before commencement.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}