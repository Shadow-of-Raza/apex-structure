// src/components/common/Layout/Section.tsx
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  background?: 'white' | 'gray' | 'primary' | 'secondary'
}

export default function Section({ 
  children, 
  className = '', 
  id,
  padding = 'lg',
  background = 'white'
}: SectionProps) {
  const paddingClasses = {
    none: 'py-0',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-20',
    xl: 'py-32',
  }

  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-50',
    secondary: 'bg-secondary-50',
  }

  return (
    <section 
      id={id} 
      className={`${paddingClasses[padding]} ${backgroundClasses[background]} ${className}`}
    >
      {children}
    </section>
  )
}