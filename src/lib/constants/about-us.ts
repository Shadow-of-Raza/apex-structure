// src/lib/constants/about-us.ts
import { CompanyProfileData, LeaderMessage, VisionMissionData, TeamMember, CSRActivity, CertificationAndAchievement } from '../types/about-us';

export const COMPANY_PROFILE: CompanyProfileData = {
    badge: 'COMPANY PROFILE',
    name: 'Apex Structure Private Limited',
    title: 'Our Journey of Excellence',
    descriptionPrimary: 'Founded in 2005, Apex Structure has grown from a local construction firm to one of the most trusted real estate development companies in the region. Our journey is marked by innovation, quality, and unwavering commitment to client satisfaction.',
    descriptionSecondary: 'With over 500 successful projects across residential, commercial, and industrial sectors, we have consistently delivered spaces that inspire, function, and endure. Our team of professionals brings together expertise in architecture, engineering, project management, and sustainable design.',
    establishedOn: 2005,
    totalTeamMembers: '550+',
    image: 'https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg',
};

export const DIRECTORS_MESSAGE: LeaderMessage = {
    id: 'directors-message',
    badge: 'DIRECTORS MESSAGE',
    name: 'Nitin Agrawal',
    role: 'Founder & Managing Director',
    profile: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
    experience: '25',
    projectsLed: '150',
    messageTitle: 'Building a Legacy of Excellence',
    content: [
        'Welcome to Apex Structure, where we don\'t just build structures, we build dreams, communities, and lasting relationships.',
        'When I founded this company in 2005, I had a simple vision: to create spaces that inspire, function flawlessly, and stand the test of time. Today, as we celebrate our journey, I\'m proud to see that vision realized in every project we undertake.',
        'Our success isn\'t measured just in square feet constructed, but in the trust our clients place in us, the satisfaction of homeowners moving into their dream spaces, and the thriving businesses operating from our commercial developments.',
        'As we move forward, our commitment remains unchanged: to deliver excellence in every project, embrace innovation, and contribute positively to the communities we serve.',
    ],
    quote: 'At Apex Structure, we believe that quality is never an accident; it is always the result of intelligent effort, sincere direction, and skillful execution.',
    signatureRole: 'Founder & Managing Director',
};

export const MENTORS_MESSAGE: LeaderMessage = {
    id: 'mentors-message',
    badge: 'MENTORS MESSAGE',
    name: 'Raghav Agrawal',
    role: 'Industry Veteran & Strategic Advisor',
    profile: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    experience: '20',
    projectsLed: '100',
    messageTitle: 'Wisdom from Our Advisory Board',
    content: [
        'The construction industry\'s future belongs to those who can balance technological advancement with human-centric design. Apex Structure\'s approach to integrating smart solutions with timeless craftsmanship sets them apart.',
        'Guidance from industry veterans shapes our strategic direction and commitment to excellence. We focus on innovation, strategic growth, and uncompromising dedication to quality.',
    ],
    quote: 'Success in construction is about more than just materials; it\'s about the people you build for and the legacy you leave behind.',
    signatureRole: 'Strategic Advisor',
};

export const VISION_MISSION: VisionMissionData = {
    title: 'Rooted in Integrity, Building for the Future',
    description: 'Our guiding principles are not just words on a wall; they are the blueprint for every landmark we construct and every relationship we build.',
    vision: {
        id: 'vision',
        title: 'Our Vision',
        description: 'To redefine urban living through architectural excellence and sustainable innovation, becoming the gold standard for integrated real estate development across South Asia.',
        iconName: 'Eye',
        colorTheme: 'blue',
        highlights: [
            'Net-zero carbon footprint by 2030',
            'Smart-city integration in all projects',
            'Empowering 1M+ families with quality housing',
        ],
    },
    mission: {
        id: 'mission',
        title: 'Our Mission',
        description: 'To deliver high-performance infrastructure through rigorous engineering, transparent processes, and a relentless focus on safety and aesthetic perfection.',
        iconName: 'Target',
        colorTheme: 'green',
        highlights: [
            'Zero compromise on structural integrity',
            'Precision-driven project timelines',
            'Sustainable socio-economic development',
        ],
    },
    values: {
        id: 'values',
        title: 'Core Values',
        description: 'Our culture is built on a foundation of radical transparency, iterative innovation, and an unwavering commitment to the communities we serve.',
        iconName: 'Heart',
        colorTheme: 'purple',
        highlights: [
            'Trust through complete transparency',
            'Innovation in every square foot',
            'Safety as a fundamental right',
        ],
    },
};

export const TEAM_MEMBERS: TeamMember[] = [
    {
        id: '1',
        name: 'Rajesh Kumar',
        role: 'Founder & Managing Director',
        bio: 'Visionary leader with expertise in large-scale project management',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
        initials: 'RK',
        socialLinks: { linkedin: '#' },
    },
    {
        id: '2',
        name: 'Priya Sharma',
        role: 'Chief Operations Officer',
        bio: 'Ensures seamless project delivery across all sites',
        image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
        initials: 'PS',
        socialLinks: { linkedin: '#' },
    },
    {
        id: '3',
        name: 'Amit Patel',
        role: 'Head of Construction',
        bio: 'Expert in construction methodologies and quality assurance',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
        initials: 'AP',
        socialLinks: { linkedin: '#' },
    },
    {
        id: '4',
        name: 'Sonia Verma',
        role: 'Chief Architect',
        bio: 'Award-winning architect focused on eco-friendly designs',
        image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg',
        initials: 'SV',
        socialLinks: { linkedin: '#' },
    },
    {
        id: '5',
        name: 'Rahul Mehta',
        role: 'Finance Director',
        bio: 'Manages financial planning and investment portfolios',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
        initials: 'RM',
        socialLinks: { linkedin: '#' },
    },
    {
        id: '6',
        name: 'Neha Gupta',
        role: 'Head of Business Development',
        bio: 'Builds strategic partnerships and client relationships',
        image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
        initials: 'NG',
        socialLinks: { linkedin: '#' },
    },
    {
        id: '7',
        name: 'Rahul Mehta',
        role: 'Finance Director',
        bio: 'Manages financial planning and investment portfolios',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
        initials: 'RM',
        socialLinks: { linkedin: '#' },
    },
    {
        id: '8',
        name: 'Rahul Mehta',
        role: 'Finance Director',
        bio: 'Manages financial planning and investment portfolios',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
        initials: 'RM',
        socialLinks: { linkedin: '#' },
    },
];

export const CSR_ACTIVITIES: CSRActivity[] = [
    {
        id: 'env',
        title: 'Environmental Sustainability',
        description: 'Planting 10,000+ trees annually and implementing rainwater harvesting in all projects',
        image: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg',
        category: 'Environment',
    },
    {
        id: 'comm',
        title: 'Community Development',
        description: 'Supporting local communities through infrastructure and educational initiatives',
        image: 'https://images.pexels.com/photos/4546110/pexels-photo-4546110.jpeg',
        category: 'Society',
    },
    {
        id: 'edu',
        title: 'Education Support',
        description: 'Promoting education through scholarships and infrastructure support',
        image: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg',
        category: 'Education',
    },
];


export const CERTIFICATIONS_ACHIEVEMENTS: CertificationAndAchievement[] = [
    {
        id: 1,
        title: 'ISO 9001:2015 ',
        authority: 'International Organization for Standardization',
        description: 'Certified for Quality Management Systems in construction and real estate development.',
        image: 'https://images.pexels.com/photos/6120397/pexels-photo-6120397.jpeg',
        year: '2022',
        isFeatured: true,
    },
    {
        id: 2,
        title: 'Green Building Certification',
        authority: 'IGBC',
        description: 'Recognized for commitment to sustainable and eco-friendly construction practices.',
        image: 'https://images.pexels.com/photos/4544714/pexels-photo-4544714.jpeg',
        year: '2023',
        isFeatured: true,
    },
    {
        id: 3,
        title: 'Best Residential Builder',
        authority: 'National Real Estate Awards',
        description: 'Awarded for excellence in residential project delivery and customer satisfaction.',
        image: 'https://images.pexels.com/photos/7005031/pexels-photo-7005031.jpeg',
        year: '2021',
        isFeatured: true,
    },
    {
        id: 4,
        title: 'Iconic Commercial Project',
        authority: 'City Architecture Forum',
        description: 'Recognized for the innovative design and construction of Apex Business Park.',
        image: 'https://images.pexels.com/photos/5420902/pexels-photo-5420902.jpeg',
        year: '2023',
        isFeatured: true,
    },
    {
        id: 5,
        title: 'Safety Excellence Award',
        authority: 'Construction Safety Board',
        description: 'Recognized for maintaining over 1 million safe man-hours across all project sites.',
        image: 'https://images.pexels.com/photos/4544720/pexels-photo-4544720.jpeg',
        year: '2024',
        isFeatured: true,
    },
    {
        id: 6,
        title: 'Excellence in Structural Engineering',
        authority: 'Structural Engineers Association',
        description: 'Awarded for the complex engineering solutions implemented in Apex Grand Tower.',
        image: 'https://images.pexels.com/photos/7005501/pexels-photo-7005501.jpeg',
        year: '2022',
        isFeatured: false,
    },
];