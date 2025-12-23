import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  onClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

interface CardHeaderProps {
  title: string
  description?: string
  icon?: LucideIcon
  action?: ReactNode
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

interface CardFooterProps {
  children: ReactNode
  className?: string
}

export function Card({ 
  children, 
  className = '', 
  hover = false, 
  padding = 'md',
  shadow = 'md',
  onClick,
  onMouseEnter,
  onMouseLeave
}: CardProps) {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  }
  
  return (
    <div 
      className={`
        bg-white rounded-xl border border-gray-200
        ${paddingClasses[padding]}
        ${shadowClasses[shadow]}
        ${hover ? 'hover:shadow-lg transition-shadow duration-300 cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  )
}

export function CardHeader({ title, description, icon: Icon, action }: CardHeaderProps) {
  return (
    <div className="mb-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          {Icon && (
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
              <Icon className="w-6 h-6 text-primary-600" />
            </div>
          )}
          <div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            {description && (
              <p className="text-gray-600 mt-1">{description}</p>
            )}
          </div>
        </div>
        {action && <div>{action}</div>}
      </div>
    </div>
  )
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={`text-gray-700 ${className}`}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`mt-6 pt-6 border-t border-gray-200 ${className}`}>
      {children}
    </div>
  )
}