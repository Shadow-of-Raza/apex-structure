// src/components/common/Header/MobileMenu.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Building2, MessageSquare, Target, Users, Heart } from 'lucide-react'
import { usePathname } from 'next/navigation'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const mobileNavItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us', hasDropdown: true },
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  { name: 'Our Business', href: '/our-business' },
  { name: 'Equipment', href: '/equipment' },
  { name: 'Clientele', href: '/clientele' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Contact Us', href: '/contact-us' },
  { name: 'Career', href: '/career' },
]

const aboutDropdownItems = [
  { 
    name: 'Company Profile', 
    href: '/about-us#company-profile',
    icon: <Building2 size={16} />
  },
  { 
    name: 'Director\'s Message', 
    href: '/about-us#directors-message',
    icon: <MessageSquare size={16} />
  },
  { 
    name: 'Mentor\'s Message', 
    href: '/about-us#mentors-message',
    icon: <MessageSquare size={16} />
  },
  { 
    name: 'Vision & Mission', 
    href: '/about-us#vision-mission',
    icon: <Target size={16} />
  },
  { 
    name: 'Our Team', 
    href: '/about-us#our-team',
    icon: <Users size={16} />
  },
  { 
    name: 'CSR Activity', 
    href: '/about-us#csr',
    icon: <Heart size={16} />
  },
]

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const pathname = usePathname()

  if (!isOpen) return null

  const isAboutActive = pathname?.startsWith('/about-us')

  return (
    <div className="lg:hidden bg-white shadow-lg max-h-[80vh] overflow-y-auto">
      <div className="container mx-5 px-4 py-4">
        <div className="flex flex-col space-y-0 font-sans">
          {mobileNavItems.map((item) => {
            const isActive = 
              pathname === item.href ||
              (item.href === '/services' && pathname?.startsWith('/services')) ||
              (item.href === '/projects' && pathname?.startsWith('/projects')) ||
              (item.href === '/about-us' && pathname?.startsWith('/about-us'))
            
            return (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsAboutOpen(!isAboutOpen)}
                      className={`flex items-center justify-between w-full font-medium py-3 border-b border-platinum-700 transition-colors duration-200 ${
                        isActive ? 'text-primary-700 font-semibold' : 'text-black-400 hover:text-primary-700'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''} ${
                          isActive ? 'text-primary-700' : 'text-black-400'
                        }`} 
                      />
                    </button>
                    
                    {isAboutOpen && (
                      <div className="pl-4 bg-platinum-900 mb-2">
                        {aboutDropdownItems.map((dropdownItem) => {
                          const isDropdownItemActive = pathname?.includes(dropdownItem.href)
                          return (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={() => {
                                onClose()
                                setIsAboutOpen(false)
                              }}
                              className={`flex items-center space-x-3 py-3 font-medium border-b border-platinum-700 last:border-b-0 transition-colors duration-200 ${
                                isDropdownItemActive 
                                  ? 'text-primary-700' 
                                  : 'text-black-400 hover:text-primary-700'
                              }`}
                            >
                              <div className={`${
                                isDropdownItemActive ? 'text-secondary-500' : 'text-secondary-500'
                              }`}>
                                {dropdownItem.icon}
                              </div>
                              <span className={`text-sm ${
                                isDropdownItemActive ? 'font-semibold' : 'font-medium'
                              }`}>
                                {dropdownItem.name}
                              </span>
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`font-medium py-3 border-b border-platinum-700 block transition-colors duration-200 ${
                      isActive ? 'text-primary-700 font-semibold' : 'text-black-400 hover:text-primary-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            )
          })}
          
          <Link
            href="/contact-us"
            onClick={onClose}
            className="bg-primary-700 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 mt-5 font-sans"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </div>
  )
}