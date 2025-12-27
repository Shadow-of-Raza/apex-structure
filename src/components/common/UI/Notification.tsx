'use client'

import { useEffect, useState } from 'react'
import { X, CheckCircle } from 'lucide-react'

interface NotificationProps {
  message: string
  type?: 'success' | 'error' | 'info'
  duration?: number
  onClose?: () => void
}

export default function Notification({ 
  message, 
  type = 'success', 
  duration = 3000,
  onClose 
}: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onClose?.()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  if (!isVisible) return null

  const typeStyles = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800'
  }

  return (
    <div className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg animate-slide-in ${typeStyles[type]}`}>
      <CheckCircle className="w-5 h-5 flex-shrink-0" />
      <span className="font-medium">{message}</span>
      <button
        onClick={() => {
          setIsVisible(false)
          onClose?.()
        }}
        className="ml-2 text-gray-500 hover:text-gray-700"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}