// src/app/projects/not-found.tsx
import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'
import Container from '@/components/common/Layout/Container'
import Section from '@/components/common/Layout/Section'

export default function ProjectNotFound() {
  return (
    <Section padding="lg">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-red-100 to-red-50 rounded-full flex items-center justify-center">
            <Search size={48} className="text-red-500" />
          </div>
          
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-600 text-lg mb-8">
            The project you&apos;re looking for doesn&apos;t exist or has been moved.
            Browse our portfolio to find similar projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Projects
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              <Home size={20} className="mr-2" />
              Go Home
            </Link>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4">Can&apos;t find what you&apos;re looking for?</h3>
            <p className="text-gray-600 mb-6">
              Contact our team for information about specific projects or to discuss your requirements.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center bg-secondary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-600 transition"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}