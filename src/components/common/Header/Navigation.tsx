'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { mainNav } from '@/lib/constants/navigation'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-8">
      {mainNav.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`font-medium transition duration-300 ${
            pathname === item.href || 
            (item.href === '/services' && pathname?.startsWith('/services')) ||
            (item.href === '/projects' && pathname?.startsWith('/projects'))
              ? 'text-primary-600 font-semibold'
              : 'text-gray-700 hover:text-primary-600'
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}