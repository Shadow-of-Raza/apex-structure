// src/components/common/Footer/Footer.tsx
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="items-start mb-4 inline-block">
              <Image src="/images/logo/logo.png" alt="Apex Structure Logo" width={300} height={48} />
            </Link>
            <p className="text-gray-600 mb-6">
              Leading real estate developers creating sustainable and innovative spaces for a better tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 text-gray-600 bg-gray-300 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 text-gray-600 bg-gray-300 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 text-gray-600 bg-gray-300 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 text-gray-600 bg-gray-300 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl text-gray-700 font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-primary-600 transition">Home</Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-600 hover:text-primary-600 transition">About Us</Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 hover:text-primary-600 transition">Projects</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-primary-600 transition">Services</Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-600 hover:text-primary-600 transition">Gallery</Link>
              </li>
              <li>
                <Link href="/career" className="text-gray-600 hover:text-primary-600 transition">Careers</Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-600 hover:text-primary-600 transition">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl text-gray-700 font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-600 hover:text-primary-600 transition">Commercial Construction</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-primary-600 transition">Residential Projects</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-primary-600 transition">Industrial Construction</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-primary-600 transition">Renovation & Interior</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-primary-600 transition">Project Management</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-primary-600 transition">Consultation</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl text-gray-700 font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-primary-500 mr-3 mt-1" size={20} />
                <span className="text-gray-600">
                  123 Construction Avenue,<br />
                  Business District,<br />
                  City, State 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary-500 mr-3" size={20} />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-primary-500 mr-3" size={20} />
                <span className="text-gray-600">info@apexstructure.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600">
                © {currentYear} Apex Structure. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link href="/career" className="text-gray-600 hover:text-primary-600 transition text-sm">
                Career
              </Link>
              <Link href="/privacy-policy" className="text-gray-600 hover:text-primary-600 transition text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="text-gray-600 hover:text-primary-600 transition text-sm">
                Terms & Conditions
              </Link>
              <Link href="/sitemap.xml" className="text-gray-600 hover:text-primary-600 transition text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}