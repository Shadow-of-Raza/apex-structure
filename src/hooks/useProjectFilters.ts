// src/hooks/useProjectFilters.ts
'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { ProjectFilter } from '@/lib/types'
import { filtersToUrlParams } from '@/lib/utils/url'

export function useProjectFilters() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [filters, setFilters] = useState<ProjectFilter>({})
  const [isInitialized, setIsInitialized] = useState(false)

  // Initialize filters from URL
  useEffect(() => {
    if (isInitialized) return

    const typeParam = searchParams.get('type')
    const statusParam = searchParams.get('status')
    const locationParam = searchParams.get('location')
    
    const initialFilters: ProjectFilter = {}
    
    if (typeParam) {
      initialFilters.type = [typeParam]
    }
    
    if (statusParam) {
      initialFilters.status = [statusParam]
    }
    
    if (locationParam) {
      initialFilters.location = [locationParam]
    }
    
    setFilters(initialFilters)
    setIsInitialized(true)
  }, [searchParams, isInitialized])

  // Update URL when filters change
  const updateFilters = useCallback((newFilters: ProjectFilter) => {
    setFilters(newFilters)
    
    // Convert filters to URL parameters
    const urlFilters: Record<string, string[]> = {}
    
    if (newFilters.type && newFilters.type.length > 0) {
      urlFilters.type = newFilters.type
    }
    
    if (newFilters.status && newFilters.status.length > 0) {
      urlFilters.status = newFilters.status
    }
    
    if (newFilters.location && newFilters.location.length > 0) {
      urlFilters.location = newFilters.location
    }
    
    const queryString = filtersToUrlParams(urlFilters)
    const newUrl = queryString ? `/projects?${queryString}` : '/projects'
    
    // Update URL without triggering a full page reload
    router.replace(newUrl, { scroll: false })
  }, [router])

  // Clear all filters
  const clearFilters = useCallback(() => {
    updateFilters({})
    router.replace('/projects', { scroll: false })
  }, [updateFilters, router])

  return {
    filters,
    updateFilters,
    clearFilters,
    isInitialized
  }
}