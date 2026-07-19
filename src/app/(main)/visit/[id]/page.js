import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, MapPin, Users, ExternalLink } from "lucide-react";

async function Visit({ params }) {
  const token = process.env.NEXT_PUBLIC_TOKEN;

  const { id } = params;
  if (!token) {
    throw new Error("Token not found!");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/visits/${id}?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-cache",
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
  }

  const visit_data = await res.json();
  const visit = visit_data.data;

  // Format date if available
  const visitDate = visit.attributes.Date ? new Date(visit.attributes.Date) : null;
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Back Button */}
        <Link 
          href={"/events?type=visits"} 
          className="fixed top-8 mt-20 left-4 flex items-center gap-1 text-xl text-white bg-sky-800 hover:bg-sky-900 p-2 rounded-full z-[999] hover:scale-105 transition-all duration-300 shadow-md"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h1 className="mt-12 text-4xl md:text-5xl font-bold text-sky-900 mb-6">
            {visit.attributes.Title}
          </h1>
          
          {/* Meta information */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {visitDate && (
              <div className="flex items-center gap-2 text-gray-700">
                <Calendar className="h-5 w-5 text-sky-700" />
                <span>
                  {visitDate.toLocaleDateString("en-IN", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}
                </span>
              </div>
            )}
            
            {visit.attributes.Location && (
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="h-5 w-5 text-sky-700" />
                <span>{visit.attributes.Location}</span>
              </div>
            )}
            
            {visit.attributes.Participants && (
              <div className="flex items-center gap-2 text-gray-700">
                <Users className="h-5 w-5 text-sky-700" />
                <span>{visit.attributes.Participants}</span>
              </div>
            )}
          </div>
          
          {/* Description */}
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-justify">
            {visit.attributes.Description}
          </p>
          
          {/* External Link if available */}
          {visit.attributes.ExternalLink && (
            <a 
              href={visit.attributes.ExternalLink}
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center mt-6 px-5 py-2 bg-sky-100 hover:bg-sky-200 text-sky-800 font-medium rounded-full transition-colors duration-300"
            >
              Visit Website
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          )}
        </div>
        
        {/* Gallery Section */}
        <div className="relative">
          <h2 className="text-2xl font-semibold text-sky-900 mb-8 text-center">Photos</h2>
          
          {visit.attributes.Gallery.data.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {visit.attributes.Gallery.data.map((image, index) => (
                <div 
                  key={index} 
                  className="relative overflow-hidden rounded-xl shadow-md group h-64 md:h-80"
                >
                  <img
                    src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${image.attributes.url}`}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No images available for this visit.</p>
          )}
        </div>
        
        {/* Additional Content */}
        {visit.attributes.AdditionalNotes && (
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-sky-900 mb-4">Takeaways from the Visit</h2>
            <div className="prose prose-sky max-w-none">
              <p className="text-gray-700">{visit.attributes.AdditionalNotes}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Visit;