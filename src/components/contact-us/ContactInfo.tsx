import { MapPin, Phone, Mail, Clock, MessageSquare, Users, Award } from 'lucide-react'
import { siteConfig } from '@/lib/constants/site-config'

const contactMethods = [
  {
    icon: <Phone size={24} />,
    title: "Phone",
    details: [
      { label: "General Inquiries", value: "+1 (555) 123-4567" },
      { label: "Project Inquiries", value: "+1 (555) 123-4568" },
      { label: "Emergency", value: "+1 (555) 123-4569" }
    ],
    color: "bg-blue-100 text-blue-600",
    cta: { text: "Call Now", href: "tel:+15551234567" }
  },
  {
    icon: <Mail size={24} />,
    title: "Email",
    details: [
      { label: "General", value: "info@apexstructure.com" },
      { label: "Projects", value: "projects@apexstructure.com" },
      { label: "Careers", value: "careers@apexstructure.com" }
    ],
    color: "bg-green-100 text-green-600",
    cta: { text: "Send Email", href: "mailto:info@apexstructure.com" }
  },
  {
    icon: <MapPin size={24} />,
    title: "Office",
    details: [
      { label: "Headquarters", value: "123 Construction Avenue, Business District" },
      { label: "City", value: "City, State 12345" },
      { label: "Hours", value: "Mon-Fri: 9AM-6PM" }
    ],
    color: "bg-purple-100 text-purple-600",
    cta: { text: "Get Directions", href: "#" }
  },
  {
    icon: <Clock size={24} />,
    title: "Business Hours",
    details: [
      { label: "Monday - Friday", value: "9:00 AM - 6:00 PM" },
      { label: "Saturday", value: "10:00 AM - 2:00 PM" },
      { label: "Sunday", value: "Emergency Only" }
    ],
    color: "bg-orange-100 text-orange-600",
    cta: { text: "Schedule Call", href: "#" }
  }
]

const departments = [
  {
    name: "Sales & Marketing",
    contact: "sales@apexstructure.com",
    phone: "+1 (555) 123-4570"
  },
  {
    name: "Project Management",
    contact: "projects@apexstructure.com",
    phone: "+1 (555) 123-4571"
  },
  {
    name: "Customer Support",
    contact: "support@apexstructure.com",
    phone: "+1 (555) 123-4572"
  },
  {
    name: "Human Resources",
    contact: "hr@apexstructure.com",
    phone: "+1 (555) 123-4573"
  }
]

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold">Contact Information</h3>
        
        {contactMethods.map((method, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start mb-4">
              <div className={`w-12 h-12 rounded-lg ${method.color} flex items-center justify-center mr-4`}>
                {method.icon}
              </div>
              <div>
                <h4 className="text-lg font-bold">{method.title}</h4>
                <div className="mt-2 space-y-1">
                  {method.details.map((detail, idx) => (
                    <div key={idx} className="text-sm text-gray-600">
                      <span className="font-medium">{detail.label}:</span> {detail.value}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <a
              href={method.cta.href}
              className={`inline-block mt-4 px-4 py-2 rounded-lg font-medium transition ${
                method.color.replace('100', '600').replace('text-', 'bg-') + ' text-white hover:opacity-90'
              }`}
            >
              {method.cta.text}
            </a>
          </div>
        ))}
      </div>
      
      {/* Quick Response Stats */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-6 text-white">
        <h4 className="text-lg font-bold mb-4 text-center">Our Response Time</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">24h</div>
            <div className="text-primary-200 text-sm">Email Response</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">2h</div>
            <div className="text-primary-200 text-sm">Phone Response</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">48h</div>
            <div className="text-primary-200 text-sm">Quote Preparation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">7d</div>
            <div className="text-primary-200 text-sm">Initial Consultation</div>
          </div>
        </div>
      </div>
      
      {/* Department Contacts */}
      <div className="bg-gray-50 rounded-2xl p-6">
        <h4 className="text-lg font-bold mb-4">Contact by Department</h4>
        <div className="space-y-4">
          {departments.map((dept, index) => (
            <div key={index} className="bg-white rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h5 className="font-semibold text-gray-800">{dept.name}</h5>
                  <div className="text-sm text-gray-600 mt-1">
                    <div>{dept.contact}</div>
                    <div>{dept.phone}</div>
                  </div>
                </div>
                <a
                  href={`mailto:${dept.contact}`}
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium whitespace-nowrap"
                >
                  Contact
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}