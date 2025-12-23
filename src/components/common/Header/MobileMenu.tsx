// src/components/common/Header/MobileMenu.tsx
import Link from 'next/link'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const mobileNavItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  { name: 'Our Business', href: '/our-business' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Equipment', href: '/equipment' },
  { name: 'Clientele', href: '/clientele' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Contact Us', href: '/contact-us' },
  { name: 'Career', href: '/career' },
]

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="lg:hidden bg-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col space-y-4">
          {mobileNavItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className="text-gray-700 hover:text-primary-600 font-medium py-2 border-b border-gray-100"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact-us"
            onClick={onClose}
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition duration-300 mt-4"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </div>
  )
}