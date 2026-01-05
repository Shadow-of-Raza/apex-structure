// src/app/about-us/page.tsx
import PageHeader from '@/components/common/Layout/PageHeader'
import CompanyProfile from '@/components/about-us/CompanyProfile'
import DirectorsMessage from '@/components/about-us/DirectorsMessage'
import MentorsMessage from '@/components/about-us/MentorsMessage'
import VisionMission from '@/components/about-us/VisionMission'
import OurTeam from '@/components/about-us/OurTeam'
// import CSRActivity from '@/components/about-us/CSRActivity'
import CertificationsAchievements from '@/components/about-us/CertificationsAchievements'
import { ABOUT_US_IMAGES } from '@/lib/constants/page-header'

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Section with Auto-Changing Images */}
      <PageHeader
        images={ABOUT_US_IMAGES}
        imageTransitionInterval={6000}
        showOverlay={true}
        overlayOpacity={0.7}
      />

      {/* Rest of your content remains the same */}
      <CompanyProfile />
      <DirectorsMessage />
      <MentorsMessage />
      <VisionMission />
      <OurTeam />
      {/* <CSRActivity /> */}
      <CertificationsAchievements />
    </>
  )
}

