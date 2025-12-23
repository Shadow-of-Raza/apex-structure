// src/app/equipment/categories/[categoryId]/page.tsx
import { notFound } from 'next/navigation'
import Container from '@/components/common/Layout/Container'
import PageHeader from '@/components/common/Layout/PageHeader'
import Section from '@/components/common/Layout/Section'
import EquipmentCard from '@/components/equipment/EquipmentCard'
import { 
  equipmentCategories, 
  getEquipmentCountByCategory, 
  getEquipmentByCategory,
  getCategoryById 
} from '@/lib/constants/equipment'
import Link from 'next/link'

interface CategoryEquipmentPageProps {
  params: Promise<{
    categoryId: string
  }>
}

export default async function CategoryEquipmentPage({ params }: CategoryEquipmentPageProps) {
  const { categoryId } = await params
  
  // Get category details
  const category = getCategoryById(categoryId)
  
  if (!category) {
    notFound()
  }
  
  // Get equipment for this category
  const categoryEquipment = getEquipmentByCategory(categoryId)
  const equipmentCount = getEquipmentCountByCategory(categoryId)

  return (
    <>
      <PageHeader
        title={category.name}
        description={category.description}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Equipment', href: '/equipment' },
          { name: 'Categories', href: '/equipment#categories' },
          { name: category.name, href: `/equipment/categories/${categoryId}` }
        ]}
      />
      
      <Section>
        <Container>
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{category.name}</h1>
                <p className="text-gray-600">
                  {equipmentCount} equipment items available in this category
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Link 
                  href="/equipment" 
                  className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                >
                  ← View All Equipment Categories
                </Link>
              </div>
            </div>
            
            {/* Category Description */}
            <div className="bg-primary-50 rounded-xl p-6 mb-8">
              <div className="flex items-start">
                <div className="text-3xl mr-4">{category.icon}</div>
                <div>
                  <h2 className="text-xl font-bold mb-3">About {category.name}</h2>
                  <p className="text-gray-700">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Equipment Grid */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Available Equipment ({equipmentCount})</h2>
              {equipmentCount > 0 && (
                <div className="text-sm text-gray-500">
                  Showing all {equipmentCount} items
                </div>
              )}
            </div>
            
            {categoryEquipment.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryEquipment.map((equipment) => (
                  <EquipmentCard key={equipment.id} equipment={equipment} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-xl">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">No equipment found</h3>
                <p className="text-gray-500 mb-4">Currently, there are no equipment items in this category.</p>
                <Link 
                  href="/equipment"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Browse other categories →
                </Link>
              </div>
            )}
          </div>
          
          {/* Related categories */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-bold mb-6">Other Equipment Categories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {equipmentCategories
                .filter(cat => cat.id !== categoryId)
                .slice(0, 3)
                .map(relatedCategory => {
                  const relatedCount = getEquipmentCountByCategory(relatedCategory.id)
                  return (
                    <Link
                      key={relatedCategory.id}
                      href={`/equipment/categories/${relatedCategory.id}`}
                      className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium group-hover:text-primary-600">
                            {relatedCategory.name}
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            {relatedCount} equipment items
                          </div>
                        </div>
                        <div className="text-2xl opacity-70">
                          {relatedCategory.icon}
                        </div>
                      </div>
                    </Link>
                  )
                })}
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

// Generate static paths for SEO
export async function generateStaticParams() {
  return equipmentCategories.map(category => ({
    categoryId: category.id
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ categoryId: string }> }) {
  const { categoryId } = await params
  const category = getCategoryById(categoryId)
  
  if (!category) {
    return {
      title: 'Category Not Found',
      description: 'The requested equipment category was not found.'
    }
  }
  
  const equipmentCount = getEquipmentCountByCategory(categoryId)
  
  return {
    title: `${category.name} - Apex Structure Equipment`,
    description: `${category.description}. Browse our collection of ${equipmentCount} equipment items in the ${category.name} category.`,
    openGraph: {
      title: `${category.name} - Apex Structure Equipment`,
      description: category.description,
      type: 'website',
    },
  }
}