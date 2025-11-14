'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const router = useRouter()
  const [query, setQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    const params = new URLSearchParams()
    if (query) params.set('q', query)

    router.push(`/search?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-xl p-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="O que procura?"
          className="flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 text-lg"
        />
        <button
          type="submit"
          className="px-8 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-semibold text-lg"
        >
          Pesquisar
        </button>
      </div>
    </form>
  )
}
