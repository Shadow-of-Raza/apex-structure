import { forwardRef } from 'react'
import { LucideIcon } from 'lucide-react'

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  icon?: LucideIcon
  helperText?: string
  showCount?: boolean
  maxLength?: number
}

const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ 
    label, 
    error, 
    icon: Icon, 
    helperText, 
    showCount, 
    maxLength, 
    className = '', 
    value,
    ...props 
  }, ref) => {
    const characterCount = typeof value === 'string' ? value.length : 0
    
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 mb-2">
            {label} {props.required && <span className="text-red-500">*</span>}
          </label>
        )}
        
        <div className="relative">
          {Icon && (
            <div className="absolute left-3 top-3 text-gray-400">
              <Icon size={20} />
            </div>
          )}
          
          <textarea
            ref={ref}
            className={`
              w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition resize-none
              ${Icon ? 'pl-11' : 'pl-4'}
              ${error 
                ? 'border-red-300 bg-red-50 focus:ring-red-500' 
                : 'border-gray-300 hover:border-gray-400'
              }
              ${props.disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
              ${className}
            `}
            value={value}
            maxLength={maxLength}
            {...props}
          />
          
          {showCount && maxLength && (
            <div className="absolute bottom-2 right-2 text-xs text-gray-500 bg-white px-1">
              {characterCount}/{maxLength}
            </div>
          )}
        </div>
        
        {helperText && !error && (
          <p className="mt-2 text-sm text-gray-500">{helperText}</p>
        )}
        
        {error && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}
      </div>
    )
  }
)

FormTextarea.displayName = 'FormTextarea'

export default FormTextarea