'use client'
import { useState, useMemo } from 'react'
import PublicationCard from './PublicationCard'

export default function PublicationListClient({ publications }) {
    const [activeFilter, setActiveFilter] = useState('All')

    const types = useMemo(() => {
        const allTypes = publications.map(p => p.attributes.type).filter(Boolean)
        return ['All', ...new Set(allTypes)]
    }, [publications])

    const filteredPublications = useMemo(() => {
        if (activeFilter === 'All') return publications
        return publications.filter(p => p.attributes.type === activeFilter)
    }, [publications, activeFilter])

    return (
        <div className="max-w-[1100px] mx-auto w-full">
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
                {types.map(type => (
                    <button
                        key={type}
                        onClick={() => setActiveFilter(type)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            activeFilter === type
                                ? 'bg-indigo-600 text-white shadow-md'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                        {type}
                    </button>
                ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {filteredPublications.map(publication => (
                    <PublicationCard key={publication.id} publication={publication} />
                ))}
                
                {filteredPublications.length === 0 && (
                    <div className="col-span-full text-center py-12 text-gray-500">
                        No publications found for this type.
                    </div>
                )}
            </div>
        </div>
    )
}
