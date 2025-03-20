import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react' // Import if using lucide-react

function VisitsCard({visit}) {
  return (
    <Link href={`/visit/${visit.id}`} className="block w-full max-w-md">
      <div className="h-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-sky-50 border border-sky-100 hover:border-sky-200">
        <div className="relative overflow-hidden h-48">
          <img 
            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${visit.attributes.Thumbnail.data.attributes.url}`} 
            alt={visit.attributes.Title} 
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        <div className="p-5 flex flex-col gap-3">
          <h3 className="text-xl font-bold text-sky-900 line-clamp-2">{visit.attributes.Title}</h3>
          <p className="text-gray-700 text-sm line-clamp-3">{visit.attributes.Description}</p>
          
          <div className="flex items-center justify-end mt-2 text-sky-700 font-medium text-sm group">
            <span>View details</span>
            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default VisitsCard