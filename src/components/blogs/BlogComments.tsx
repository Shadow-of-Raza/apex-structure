'use client'

import { useState } from 'react'
import { Send, User, Calendar } from 'lucide-react'
import Button from '@/components/common/UI/Button'
import FormInput from '@/components/common/Forms/FormInput'
import FormTextarea from '@/components/common/Forms/FormTextarea'
import { formatDate } from '@/lib/utils/format'

interface Comment {
  id: string
  author: {
    name: string
    avatar?: string
  }
  content: string
  createdAt: string
  replies?: Comment[]
}

const dummyComments: Comment[] = [
  {
    id: '1',
    author: {
      name: 'Rahul Sharma',
      avatar: '/images/avatars/rahul.jpg'
    },
    content: 'Great article! The insights on sustainable construction are very relevant to our current projects.',
    createdAt: '2024-01-20T14:30:00Z',
    replies: [
      {
        id: '1-1',
        author: {
          name: 'Apex Structure',
          avatar: '/images/logo/logo.png'
        },
        content: 'Thank you, Rahul! We\'re glad you found it helpful. Feel free to reach out if you have any questions about implementation.',
        createdAt: '2024-01-20T15:45:00Z'
      }
    ]
  },
  {
    id: '2',
    author: {
      name: 'Priya Patel',
      avatar: '/images/avatars/priya.jpg'
    },
    content: 'Could you elaborate more on the cost implications of these sustainable practices?',
    createdAt: '2024-01-19T11:20:00Z'
  },
  {
    id: '3',
    author: {
      name: 'Arun Kumar',
      avatar: '/images/avatars/arun.jpg'
    },
    content: 'Very informative post. Looking forward to more content on this topic!',
    createdAt: '2024-01-18T09:15:00Z'
  }
]

interface BlogCommentsProps {
  postId: string
}

export default function BlogComments({ postId }: BlogCommentsProps) {
  const [comments, setComments] = useState<Comment[]>(dummyComments)
  const [newComment, setNewComment] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyContent, setReplyContent] = useState('')

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name.trim() || !email.trim() || !newComment.trim()) {
      alert('Please fill in all fields')
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const newCommentObj: Comment = {
      id: Date.now().toString(),
      author: {
        name,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=primary&color=fff`
      },
      content: newComment,
      createdAt: new Date().toISOString()
    }
    
    setComments(prev => [newCommentObj, ...prev])
    setNewComment('')
    setName('')
    setEmail('')
    setIsSubmitting(false)
  }

  const handleReply = async (commentId: string, e: React.FormEvent) => {
    e.preventDefault()
    
    if (!replyContent.trim()) {
      alert('Please enter a reply')
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800))
    
    const reply: Comment = {
      id: `${commentId}-${Date.now()}`,
      author: {
        name: 'You',
        avatar: 'https://ui-avatars.com/api/?name=You&background=secondary&color=fff'
      },
      content: replyContent,
      createdAt: new Date().toISOString()
    }
    
    setComments(prev => prev.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...(comment.replies || []), reply]
        }
      }
      return comment
    }))
    
    setReplyContent('')
    setReplyingTo(null)
    setIsSubmitting(false)
  }

  const CommentItem = ({ comment, depth = 0 }: { comment: Comment; depth?: number }) => (
    <div className={`${depth > 0 ? 'ml-8 md:ml-12' : ''}`}>
      <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
        <div className="flex items-start mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
            {comment.author.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
              <h4 className="font-bold text-gray-800">{comment.author.name}</h4>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar size={14} className="mr-1" />
                <time dateTime={comment.createdAt}>{formatDate(comment.createdAt)}</time>
              </div>
            </div>
            <p className="text-gray-700">{comment.content}</p>
            
            <button
              onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
              className="mt-4 text-sm text-primary-600 hover:text-primary-700 font-medium"
            >
              {replyingTo === comment.id ? 'Cancel Reply' : 'Reply'}
            </button>
          </div>
        </div>
        
        {/* Reply Form */}
        {replyingTo === comment.id && (
          <form onSubmit={(e) => handleReply(comment.id, e)} className="mt-4 pl-16">
            <FormTextarea
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              placeholder="Write your reply..."
              rows={3}
              disabled={isSubmitting}
            />
            <div className="flex justify-end mt-3 space-x-3">
              <button
                type="button"
                onClick={() => setReplyingTo(null)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <Button
                type="submit"
                variant="primary"
                size="sm"
                loading={isSubmitting}
                disabled={isSubmitting}
              >
                Post Reply
              </Button>
            </div>
          </form>
        )}
      </div>
      
      {/* Replies */}
      {comment.replies && comment.replies.map(reply => (
        <CommentItem key={reply.id} comment={reply} depth={depth + 1} />
      ))}
    </div>
  )

  return (
    <div className="mt-12">
      <div className="flex items-center mb-8">
        <div className="w-2 h-8 bg-primary-600 rounded mr-4"></div>
        <h2 className="text-2xl font-bold">Comments ({comments.length})</h2>
      </div>
      
      {/* Comment Form */}
      <div className="bg-gray-50 rounded-2xl p-6 mb-12">
        <h3 className="text-xl font-bold mb-6">Leave a Comment</h3>
        <form onSubmit={handleSubmitComment} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              disabled={isSubmitting}
            />
            <FormInput
              label="Email *"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              disabled={isSubmitting}
              helperText="Your email will not be published"
            />
          </div>
          
          <FormTextarea
            label="Comment *"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Share your thoughts..."
            rows={5}
            disabled={isSubmitting}
            showCount
            maxLength={1000}
          />
          
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Your comment will be visible after approval
            </p>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={isSubmitting}
              icon={Send}
              iconPosition="right"
              disabled={isSubmitting}
            >
              Post Comment
            </Button>
          </div>
        </form>
      </div>
      
      {/* Comments List */}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-2">No comments yet</h3>
            <p className="text-gray-600">Be the first to share your thoughts!</p>
          </div>
        ) : (
          comments.map(comment => (
            <CommentItem key={comment.id} comment={comment} />
          ))
        )}
      </div>
    </div>
  )
}