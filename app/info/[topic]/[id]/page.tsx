'use client'

import { useEffect, useState } from 'react'

type Entry = {
  name: string
  email: string
  comment: string
  topic: string
}

export default function InfoDetailPage({ params }: { params: { topic: string; id: string } }) {
  const [entry, setEntry] = useState<Entry | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('userInfo')
    if (stored) {
      const list: Entry[] = JSON.parse(stored)
      const item = list[parseInt(params.id)]
      if (item) setEntry(item)
    }
  }, [params.id])

  if (!entry) {
    return <div className="p-6 text-red-500">Entry not found.</div>
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Submitted Info</h1>
      <div className="space-y-2 text-lg">
        <p><strong>Name:</strong> {entry.name}</p>
        <p><strong>Email:</strong> {entry.email}</p>
        <p><strong>Topic:</strong> {entry.topic}</p>
        <p><strong>Comment:</strong> {entry.comment}</p>
      </div>
    </div>
  )
}
