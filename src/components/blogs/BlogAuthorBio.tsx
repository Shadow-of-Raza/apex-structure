import { Linkedin, Twitter, Globe } from 'lucide-react'
import { BlogAuthor } from '@/lib/types/blog'
import Button from '@/components/common/UI/Button'

interface BlogAuthorBioProps {
  author: BlogAuthor
}

export default function BlogAuthorBio({ author }: BlogAuthorBioProps) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 mb-12">
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-2xl font-bold">
            {author.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
        
        {/* Bio */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold">{author.name}</h3>
              <p className="text-primary-600 font-medium">{author.role}</p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3 mt-4 md:mt-0">
              {author.socialLinks?.twitter && (
                <a
                  href={author.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center text-white transition"
                  aria-label={`${author.name}'s Twitter`}
                >
                  <Twitter size={18} />
                </a>
              )}
              {author.socialLinks?.linkedin && (
                <a
                  href={author.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center text-white transition"
                  aria-label={`${author.name}'s LinkedIn`}
                >
                  <Linkedin size={18} />
                </a>
              )}
              {author.socialLinks?.website && (
                <a
                  href={author.socialLinks.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-600 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition"
                  aria-label={`${author.name}'s Website`}
                >
                  <Globe size={18} />
                </a>
              )}
            </div>
          </div>
          
          <p className="text-gray-700 mb-6">
            {author.bio || `${author.name} has over 15 years of experience in the construction and real estate industry. With expertise in ${author.role.toLowerCase()}, they have contributed to numerous successful projects and continue to drive innovation in the field.`}
          </p>
          
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm">
              View All Articles
            </Button>
            <Button variant="ghost" size="sm">
              Contact Author
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}