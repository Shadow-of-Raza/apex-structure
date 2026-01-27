import PageHeader from '@/components/common/Layout/PageHeader'
import { CLIENTELE_IMAGES } from '@/lib/constants/page-header'
import ClientLogo from '@/components/clientele/ClientLogo'
import { getClients } from '@/lib/utils/client'

export default async function ClientelePage() {
  const clients = await getClients()
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <PageHeader
        images={CLIENTELE_IMAGES}
        imageTransitionInterval={6000}
        showOverlay={true}
        overlayOpacity={0.7}
      />
      {/* Partners Marquee Section */}
      <ClientLogo initialClients={clients} />
    </main>
  )
}