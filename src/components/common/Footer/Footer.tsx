// src/components/common/Footer/Footer.tsx
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AS</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Apex Structure</h2>
                <p className="text-gray-400 text-sm">Building Excellence</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Leading real estate developers creating sustainable and innovative spaces for a better tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-400 hover:text-white transition">About Us</Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition">Projects</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition">Services</Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white transition">Gallery</Link>
              </li>
              <li>
                <Link href="/career" className="text-gray400 hover:text-white transition">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition">Commercial Construction</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition">Residential Projects</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition">Industrial Construction</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition">Renovation & Interior</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition">Project Management</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition">Consultation</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-primary-500 mr-3 mt-1" size={20} />
                <span className="text-gray-400">
                  123 Construction Avenue,<br />
                  Business District,<br />
                  City, State 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary-500 mr-3" size={20} />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-primary-500 mr-3" size={20} />
                <span className="text-gray-400">info@apexstructure.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                © {currentYear} Apex Structure. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="text-gray-400 hover:text-white transition text-sm">
                Terms & Conditions
              </Link>
              <Link href="/sitemap.xml" className="text-gray-400 hover:text-white transition text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}