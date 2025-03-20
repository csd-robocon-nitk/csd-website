import React from 'react'
import Link from 'next/link'
import { Calendar, MapPin } from 'lucide-react' // Import icons if you have lucide-react

export default function EventsCard({event}) {
  const startDateTime = event.attributes.start ? new Date(event.attributes.start) : null
  
  return (
    <div className="w-full m-2 max-w-md overflow-hidden rounded-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-sky-50 border border-sky-100">
      <div className="relative overflow-hidden h-48">
        <img
          src={
            process.env.NEXT_PUBLIC_STRAPI_API_URL +
            event.attributes.media.data.attributes.formats.thumbnail.url
          }
          alt={event.attributes.title}
          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-xl font-bold text-sky-900 line-clamp-2">{event.attributes.title}</h3>
        <p className="text-gray-700 text-sm line-clamp-3">{event.attributes.desc}</p>
        
        <div className="flex flex-col gap-3 mt-2">
          {startDateTime && (
            <div className="flex items-start gap-2">
              <Calendar className="h-4 w-4 text-sky-700 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {startDateTime.toLocaleDateString("en-IN", {
                    weekday: "short",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <p className="text-xs text-gray-600">
                  {startDateTime.toLocaleTimeString("en-IN", {
                    hour: "2-digit",
                    minute: "2-digit",
                  }).toUpperCase()}
                </p>
              </div>
            </div>
          )}
          
          {event.attributes.venue && event.attributes.venue.trim() !== "" && (
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-sky-700 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-800">{event.attributes.venue}</p>
            </div>
          )}
        </div>
        
        <div className="flex gap-3 mt-3 pt-3 border-t border-sky-100">
          {event.attributes.registerLink && event.attributes.registerLink.trim() !== "" && (
            <Link 
              href={event.attributes.registerLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1"
            >
              <button className="w-full rounded-md py-2 px-4 text-sm font-medium text-white bg-sky-800 hover:bg-sky-900 transition-colors shadow-sm hover:shadow">
                Register
              </button>
            </Link>
          )}
          
          {event.attributes.learnMoreLink && event.attributes.learnMoreLink.trim() !== "" && (
            <Link 
              href={event.attributes.learnMoreLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1"
            >
              <button className="w-full rounded-md py-2 px-4 text-sm font-medium text-sky-800 bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-colors">
                Learn More
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}