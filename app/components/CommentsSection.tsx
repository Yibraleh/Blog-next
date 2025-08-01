// app/components/CommentsSection.tsx
'use client'

import { useState, FormEvent } from 'react'

interface Comment {
  name: string
  email: string
  body: string
}

export default function CommentsSection() {
  const [comments, setComments] = useState<Comment[]>([])
  const [name, setName]       = useState('')
  const [email, setEmail]     = useState('')
  const [body, setBody]       = useState('')
  const [error, setError]     = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!body.trim()) {
      setError('Please enter a comment.')
      return
    }
    setComments(prev => [...prev, { name, email, body }])
    setName(''); setEmail(''); setBody(''); setError('')
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md my-6">
      <h2 className="text-2xl font-semibold mb-4">Leave a Comment</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Your comment..."
            className="w-full border border-gray-300 rounded px-3 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={body}
            onChange={e => setBody(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-xl font-medium mb-3">All Comments</h3>
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet.</p>
        ) : (
          <ul className="space-y-4">
            {comments.map((c, i) => (
              <li key={i} className="border-b pb-3">
                <p className="font-semibold">{c.name} <span className="text-sm text-gray-500">({c.email})</span></p>
                <p className="mt-1">{c.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
