// src/app/career/page.tsx
import PageHeader from '@/components/common/Layout/PageHeader'
import JobOpening from '@/components/career/JobOpening'
import { CAREER_IMAGES } from '@/lib/constants/page-header'
import { jobOpenings } from '@/lib/constants/career'
import Container from '@/components/common/Layout/Container'

export default function CareerPage() {
    return (
        <>
            <PageHeader
                images={CAREER_IMAGES}
                imageTransitionInterval={6000}
                showOverlay={true}
                overlayOpacity={0.7}
            />

            <main className="py-16 bg-gray-50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Openings</h2>
                            <p className="text-gray-600">Explore exciting opportunities to join our team and build the future of real estate.</p>
                        </div>

                        <div className="space-y-8">
                            {jobOpenings.map((job) => (
                                <JobOpening key={job.id} job={job} />
                            ))}
                        </div>
                    </div>
                </Container>
            </main>
        </>
    )
}
