// src/components/common/Header/Header.tsx
'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'
import Navigation from './Navigation'
import MobileMenu from './MobileMenu'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar - COMPACT VERSION */}
      <div className="bg-primary-700 text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-1 sm:space-y-0">
            {/* Contact Info - Single line */}
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-6 gap-y-2 text-sm font-normal">
              <div className="flex items-center space-x-1.5">
                <Phone size={14} className="flex-shrink-0 mt-0.5 text-secondary-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Mail size={14} className="flex-shrink-0 mt-0.5 text-secondary-500" />
                <span>info@apexstructure.com</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <MapPin size={14} className="flex-shrink-0 mt-0.5 text-secondary-500" />
                <span className="whitespace-nowrap">123 Construction Avenue, Business District, City, State 12345</span>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="flex space-x-4">
              <Link 
                href="/career" 
                className="text-white hover:text-secondary-500 text-sm transition whitespace-nowrap"
              >
                Careers
              </Link>
              <Link 
                href="/contact-us" 
                className="text-white hover:text-secondary-500 text-sm transition whitespace-nowrap"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/images/logo/logo.png" 
              alt="Apex Structure Logo" 
              width={150}
              height={50}
              className="h-auto w-[140px] md:w-[170px] lg:w-[190px]"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block ml-14">
            <Navigation />
          </div>


          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              href="/contact-us"
              className="bg-primary-700 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 whitespace-nowrap"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-black-400 hover:bg-platinum-700 ml-4"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  )
}