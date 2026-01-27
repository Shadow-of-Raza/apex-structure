// src/app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation'
import ProjectDetails from '@/components/projects/ProjectDetails'
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/utils/projects'
import type { Metadata } from 'next'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

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
  const slugs = await getAllProjectSlugs()
  return slugs.map(slug => ({
    slug: slug,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <ProjectDetails project={project} />
    </>
  )
}