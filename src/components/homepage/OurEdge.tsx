'use client'

import React from 'react';
import { serviceState, heroIcons } from '@/lib/constants/home';
import { useInView } from 'react-intersection-observer';
import { Trophy } from 'lucide-react';
import { getCompletedProjectsCount } from '@/lib/utils/projects';
import { calculateYearsOfExperience, getCompanyProfile } from '@/lib/utils/about-us';

export default function OurEdge() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [items, setItems] = React.useState(serviceState);

    React.useEffect(() => {
        const fetchStats = async () => {
            try {
                // Fetch dynamic values
                const completedCount = await getCompletedProjectsCount();
                const profile = await getCompanyProfile();
                const yearsExperience = profile ? calculateYearsOfExperience(profile.established_year) : 0;

                // Update state with dynamic values
                setItems(prevItems => prevItems.map(item => {
                    if (item.id === 1) { // Successful Completed Projects
                        return { ...item, count: `${completedCount}+` };
                    }
                    if (item.id === 2) { // Years of Excellence
                        return { ...item, count: `${yearsExperience}+` };
                    }
                    return item;
                }));
            } catch (error) {
                console.error('Failed to fetch dynamic stats for Our Edge:', error);
            }
        };

        fetchStats();
    }, []);

    return (
        <section ref={ref} className="py-10 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <div className={`inline-flex items-center px-4 rounded-full bg-secondary-50 text-secondary-600 text-sm font-bold uppercase tracking-widest transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <Trophy size={16} className="mr-2" />
                        Our Edge
                    </div>
                    <h2 className={`text-4xl md:text-5xl font-black mt-2 mb-6 text-gray-900 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        Our <span className="text-primary-600">Commitment</span> to Excellence
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((service, index) => {
                        const Icon = heroIcons[service.icon as keyof typeof heroIcons] || Trophy;

                        return (
                            <div
                                key={service.id}
                                className={`group text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-50 relative overflow-hidden transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 rounded-bl-[100%] transition-transform group-hover:scale-110"></div>
                                <div className="relative z-10">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 transition-colors duration-500 ${service.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                                        service.color === 'green' ? 'bg-emerald-50 text-emerald-600' :
                                            service.color === 'orange' ? 'bg-orange-50 text-orange-600' :
                                                'bg-purple-50 text-purple-600'
                                        } group-hover:text-white`}>
                                        <Icon size={28} className="transition-colors duration-500" />
                                    </div>
                                    <div className="text-3xl font-black text-gray-900 mb-2 transition-all duration-300">{service.count}</div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-800">{service.label}</h3>
                                    <p className="text-gray-500 text-sm font-medium leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

