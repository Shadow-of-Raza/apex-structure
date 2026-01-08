// src/app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation'
import ProjectDetails from '@/components/projects/ProjectDetails'
import { projectsData } from '@/lib/constants/projects'
import type { Metadata } from 'next'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projectsData.find(p => p.slug === slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    }
  }

  return {
    title: `${project.title} - Apex Structure`,
    description: project.description,
    openGraph: {
      title: `${project.title} - Apex Structure`,
      description: project.description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} - Apex Structure`,
      description: project.description,
    },
  }
}

export async function generateStaticParams() {
  return projectsData.map(project => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projectsData.find(p => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <ProjectDetails project={project} />
    </>
  )
}