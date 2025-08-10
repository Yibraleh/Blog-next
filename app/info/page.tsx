'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function InfoFormPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')
  const [topic, setTopic] = useState('general')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newEntry = { name, email, comment, topic }

    const stored = localStorage.getItem('userInfo')
    const list = stored ? JSON.parse(stored) : []
    list.push(newEntry)
    localStorage.setItem('userInfo', JSON.stringify(list))

    router.push('/')
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Submit Info</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full p-2 border rounded" />
        <textarea placeholder="Comment" value={comment} onChange={e => setComment(e.target.value)} required className="w-full p-2 border rounded" />
        <input type="text" placeholder="Topic" value={topic} onChange={e => setTopic(e.target.value)} required className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
      </form>
    </div>
  )
}
