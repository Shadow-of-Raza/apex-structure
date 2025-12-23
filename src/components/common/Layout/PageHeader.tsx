// src/components/common/Layout/PageHeader.tsx
import { Home, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface PageHeaderProps {
  title: string
  description: string
  breadcrumbs: Array<{ name: string; href: string }>
  backgroundImage?: string
}

export default function PageHeader({
  title,
  description,
  breadcrumbs,
  backgroundImage,
}: PageHeaderProps) {
  return (
    <div 
      className="relative bg-gradient-to-r from-primary-700 to-primary-800 text-white py-20"
      style={{
        backgroundImage: backgroundImage ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-secondary-300 transition">
                <Home size={18} />
                <span className="sr-only">Home</span>
              </Link>
            </li>
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.name} className="flex items-center">
                <ChevronRight size={18} className="mx-2" />
                {index === breadcrumbs.length - 1 ? (
                  <span className="font-medium">{crumb.name}</span>
                ) : (
                  <Link 
                    href={crumb.href} 
                    className="hover:text-secondary-300 transition"
                  >
                    {crumb.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        
        {/* Title and Description */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl">
          {description}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="#company-profile"
            className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
          >
            Explore Our Story
          </a>
          <a
            href="/contact-us"
            className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
      
      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-12 text-white"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  )
}