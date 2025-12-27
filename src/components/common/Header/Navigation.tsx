// src/components/common/Header/Navigation.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Building2, MessageSquare, Target, Users, Heart } from 'lucide-react'
import { mainNav } from '@/lib/constants/navigation'

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

export default function Navigation() {
  const pathname = usePathname()
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const isAboutActive = pathname?.startsWith('/about-us')

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAboutDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Close dropdown when route changes
  useEffect(() => {
    setIsAboutDropdownOpen(false)
  }, [pathname])

  return (
    <nav className="flex items-center space-x-8 relative font-sans">
      {mainNav.map((item) => {
        if (item.name === 'About Us') {
          return (
            <div key={item.name} className="relative" ref={dropdownRef}>
              <button
                className={`relative font-medium transition duration-300 flex items-center space-x-1 group ${
                  isAboutActive
                    ? 'text-primary-700 font-semibold'
                    : 'text-black-400 hover:text-primary-700'
                }`}
                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                aria-expanded={isAboutDropdownOpen}
                aria-haspopup="true"
              >
                <span className="relative">
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary-500 transition-all duration-300 group-hover:w-full"></span>
                </span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {/* Dropdown Menu */}
              {isAboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="py-3">
                    {aboutDropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        onClick={() => setIsAboutDropdownOpen(false)}
                        className="flex items-center space-x-3 px-4 py-3 text-black-400 hover:bg-platinum-700 hover:text-primary-700 transition-colors duration-200 font-sans"
                      >
                        <div className="text-secondary-500">
                          {dropdownItem.icon}
                        </div>
                        <span className="font-medium">{dropdownItem.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        }
        
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`relative font-medium transition duration-300 font-sans group ${
              pathname === item.href || 
              (item.href === '/services' && pathname?.startsWith('/services')) ||
              (item.href === '/projects' && pathname?.startsWith('/projects'))
                ? 'text-primary-700 font-semibold'
                : 'text-black-400 hover:text-primary-700'
            }`}
          >
            <span className="relative">
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary-500 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
        )
      })}
    </nav>
  )
}