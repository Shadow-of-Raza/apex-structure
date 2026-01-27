'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { ServiceFAQ } from '@/lib/types/service'

interface ServiceFAQsProps {
    faqs: ServiceFAQ[]
    serviceTitle: string
}

export default function ServiceFAQs({ faqs, serviceTitle }: ServiceFAQsProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    if (!faqs || faqs.length === 0) return null

    return (

            <div className="container mx-auto px-4 md:px-0">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-bold uppercase tracking-widest mb-4">
                        <HelpCircle size={16} className="mr-2" />
                        Support & Clarity
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 leading-tight">
                        Common <span className="text-primary-600">Questions</span> About {serviceTitle}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Everything you need to know about our {serviceTitle.toLowerCase()} process and delivery.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index
                        return (
                            <div
                                key={faq.id || index}
                                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-primary-200 shadow-xl shadow-primary-50' : 'border-gray-100 hover:border-gray-200'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-primary-600' : 'text-gray-900'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-primary-600 text-white rotate-180' : 'bg-gray-50 text-gray-400'}`}>
                                        <ChevronDown size={20} />
                                    </div>
                                </button>
                                <div
                                    className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                                        }`}
                                >
                                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
    )
}
