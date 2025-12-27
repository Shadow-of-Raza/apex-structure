// src/lib/constants/navigation.ts
export const mainNav = [
  { name: 'Home', href: '/', current: true },
  { name: 'About Us', href: '/about-us', current: false },
  { name: 'Projects', href: '/projects', current: false },
  { name: 'Services', href: '/services', current: false },
  { name: 'Our Business', href: '/our-business', current: false },
  { name: 'Equipment', href: '/equipment', current: false },
  { name: 'Clientele', href: '/clientele', current: false },
  { name: 'Blogs', href: '/blogs', current: false },
]

export const footerNav = {
  company: [
    { name: 'About Us', href: '/about-us' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Contact Us', href: '/contact-us' },
  ],
  services: [
    { name: 'Commercial Construction', href: '/services' },
    { name: 'Residential Projects', href: '/services' },
    { name: 'Industrial Construction', href: '/services' },
    { name: 'Renovation & Interior', href: '/services' },
    { name: 'Project Management', href: '/services' },
  ],
  legal: [
    { name: 'Careers', href: '/career' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-and-conditions' },
    { name: 'Sitemap', href: '/sitemap.xml' },
  ],
}