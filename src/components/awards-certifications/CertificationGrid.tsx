'use client'

import { useState, useEffect } from 'react'
import { getCertifications } from '@/lib/utils/about-us'
import { CertificationAndAchievement } from '@/lib/types/about-us'
import Image from 'next/image'
import { Loader2 } from 'lucide-react'

export default function CertificationGrid() {
    const [items, setItems] = useState<CertificationAndAchievement[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCerts = async () => {
            setLoading(true)
            const data = await getCertifications(true)
            setItems(data)
            setLoading(false)
        }
        fetchCerts()
    }, [])

    if (loading) {
        return (
            <div className="flex h-[400px] items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="h-10 w-10 animate-spin text-primary-600" />
                    <p className="text-xs font-bold uppercase tracking-widest text-primary-600/50">Loading Credentials...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10 max-w-3xl mx-auto space-y-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-black-200">
                        Our <span className="text-secondary-500">Hall</span> of Fame
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Celebrating the milestones, recognitions, and certifications that define our journey of excellence in the construction industry.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="group relative h-[650px] rounded-2xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-700"
                        >
                            {/* Background Image */}
                            <Image
                                src={item.image_url}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />

                            {/* Permanent Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black-200 via-black-200/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-12 flex flex-col justify-end space-y-5 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                {/* Authority & Year */}
                                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {item.certificate_year && (
                                        <span className="bg-primary-600 text-white text-xs font-black px-4 py-1 rounded-full">
                                            {item.certificate_year}
                                        </span>
                                    )}
                                    <span className="bg-primary-600 text-white text-[12px] px-3 py-1 rounded-full">
                                        {item.authority}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-white text-4xl font-black leading-tight uppercase italic transform -skew-x-12 group-hover:skew-x-0 transition-all duration-500">
                                    {item.title}
                                </h3>

                                {/* Description - Reveal on hover */}
                                <div className="overflow-hidden max-h-0 group-hover:max-h-60 transition-all duration-700 ease-in-out">
                                    <p className="text-gray-300 text-base leading-relaxed font-medium pt-4 border-l-4 border-primary-500 pl-6">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Verified Badge on Hover */}
                                <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-primary-500 border border-white/20">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" /></svg>
                                    </div>
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Official Certification</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
