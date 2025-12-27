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
            <p className="text-black-400 font-medium mb-6 font-sans">
              Leading real estate developers creating sustainable and innovative spaces for a better tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 text-black-400 bg-platinum-500 rounded-full flex items-center justify-center hover:bg-blue_shade_1 hover:text-white transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 text-black-400 bg-platinum-500 rounded-full flex items-center justify-center hover:bg-blue_shade_1 hover:text-white transition-all duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 text-black-400 bg-platinum-500 rounded-full flex items-center justify-center hover:bg-blue_shade_1 hover:text-white transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 text-black-400 bg-platinum-500 rounded-full flex items-center justify-center hover:bg-blue_shade_1 hover:text-white transition-all duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl text-blue_shade_1 font-bold mb-6 font-sans">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/about-us" 
                  className="relative text-black-400 font-medium hover:text-blue_shade_1 transition-colors duration-300 inline-block group font-sans"
                >
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-royal_gold-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className="relative text-black-400 font-medium hover:text-blue_shade_1 transition-colors duration-300 inline-block group font-sans"
                >
                  Projects
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-royal_gold-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="relative text-black-400 font-medium hover:text-blue_shade_1 transition-colors duration-300 inline-block group font-sans"
                >
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-royal_gold-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/our-business" 
                  className="relative text-black-400 font-medium hover:text-blue_shade_1 transition-colors duration-300 inline-block group font-sans"
                >
                  Our Buisness
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-royal_gold-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/equipments" 
                  className="relative text-black-400 font-medium hover:text-blue_shade_1 transition-colors duration-300 inline-block group font-sans"
                >
                  Equipments
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-royal_gold-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/blogs" 
                  className="relative text-black-400 font-medium hover:text-blue_shade_1 transition-colors duration-300 inline-block group font-sans"
                >
                  Blogs
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-royal_gold-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact-us" 
                  className="relative text-black-400 font-medium hover:text-blue_shade_1 transition-colors duration-300 inline-block group font-sans"
                >
                  Contact Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-royal_gold-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl text-blue_shade_1 font-bold mb-6 font-sans">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/services" 
                  className="relative text-black-400 font-medium hover:text-blue_shade_1 transition-colors duration-300 inline-block group font-sans"
                >
                  Commercial Construction
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-royal_gold-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="relative text-black-400 font-medium hover:text-blue_shade_1 transition-colors duration-300 inline-block group font-sans"
                >
                  Residential Projects
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-royal_gold-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="relative text-black-400 font-medium hover:text-blue_shade_1 transition-colors duration-300 inline-block group font-sans"
                >
                  Industrial Construction
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-royal_gold-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="relative text-black-400 font-medium hover:text-blue_shade_1 transition-colors duration-300 inline-block group font-sans"
                >
                  Renovation & Interior
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-royal_gold-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="relative text-black-400 font-medium hover:text-blue_shade_1 transition-colors duration-300 inline-block group font-sans"
                >
                  Project Management
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-royal_gold-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="relative text-black-400 font-medium hover:text-blue_shade_1 transition-colors duration-300 inline-block group font-sans"
                >
                  Consultation
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-royal_gold-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl text-blue_shade_1 font-bold mb-6 font-sans">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-royal_gold-400 mr-3 mt-1" size={20} />
                <span className="text-black-400 font-medium font-sans">
                  123 Construction Avenue,<br />
                  Business District,<br />
                  City, State 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-royal_gold-400 mr-3" size={20} />
                <span className="text-black-400 font-medium font-sans">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-royal_gold-400 mr-3" size={20} />
                <span className="text-black-400 font-medium font-sans">info@apexstructure.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-platinum-500 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-black-400 font-medium font-sans">
                © {currentYear} Apex Structure. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link 
                href="/career" 
                className="relative text-black-400 font-medium hover:text-blue_shade_1 transition-colors duration-300 inline-block group font-sans"
              >
                Career
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-royal_gold-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/privacy-policy" 
                className="relative text-black-400 font-medium hover:text-blue_shade_1 transition-colors duration-300 inline-block group font-sans"
              >
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-royal_gold-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/terms-and-conditions" 
                className="relative text-black-400 font-medium hover:text-blue_shade_1 transition-colors duration-300 inline-block group font-sans"
              >
                Terms & Conditions
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-royal_gold-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/sitemap.xml" 
                className="relative text-black-400 font-medium hover:text-blue_shade_1 transition-colors duration-300 inline-block group font-sans"
              >
                Sitemap
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-royal_gold-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}