import Container from '@/components/common/Layout/Container'
import PageHeader from '@/components/common/Layout/PageHeader'
import ContactForm from '../../components/contact-us/ContactForm'
import ContactInfo from '../../components/contact-us/ContactInfo'
import Section from '@/components/common/Layout/Section'

export default function ContactUsPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHeader
        title="Get In Touch"
        description="Connect with our team for premium real estate development solutions, project consultations, and partnership opportunities."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Contact Us', href: '/contact-us' }
        ]}
      />
      
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How Can We Help You?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you have a project in mind, need expert consultation, or want to explore 
              partnership opportunities, our team is ready to assist you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Contact Info */}
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
            
            {/* Right Column - Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
      
      {/* Map Section */}
      <Section background="gray" padding="none">
        <div className="h-[400px] w-full bg-gradient-to-br from-primary-500 to-primary-700 relative">
          {/* Placeholder for Map */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <div className="text-center">
              <div className="text-6xl mb-4">📍</div>
              <h3 className="text-2xl font-bold mb-2">Our Headquarters</h3>
              <p className="text-primary-100 max-w-md mx-auto">
                123 Construction Avenue, Business District,<br />
                City, State 12345
              </p>
              <button className="mt-6 bg-white text-primary-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition duration-300">
                View on Google Maps
              </button>
            </div>
          </div>
        </div>
      </Section>
      
      {/* FAQ Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Quick answers to common questions about working with us
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: "What types of projects do you handle?",
                  answer: "We handle residential, commercial, and industrial projects including apartments, offices, malls, factories, and specialized facilities."
                },
                {
                  question: "What is your project timeline?",
                  answer: "Timelines vary based on project scope. Residential projects typically take 12-24 months, while commercial projects may take 18-36 months."
                },
                {
                  question: "Do you provide design services?",
                  answer: "Yes, we have an in-house team of architects and designers who create custom designs based on your requirements."
                },
                {
                  question: "What areas do you serve?",
                  answer: "We serve nationwide with projects in 25+ cities. International projects are handled on a case-by-case basis."
                },
                {
                  question: "How do you ensure project quality?",
                  answer: "We follow stringent quality control processes, use premium materials, and have dedicated quality assurance teams on every site."
                },
                {
                  question: "Can you work within my budget?",
                  answer: "Absolutely! We provide flexible solutions and transparent cost breakdowns to meet various budget requirements."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-bold mb-2 text-primary-700">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
      
      {/* CTA Section */}
      <Section background="primary" padding="lg">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our experts to discuss your requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300"
              >
                Call Now: +1 (555) 123-4567
              </a>
              <a
                href="mailto:info@apexstructure.com"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300"
              >
                Email Us
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}