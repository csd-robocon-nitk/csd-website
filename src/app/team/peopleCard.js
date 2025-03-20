"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import Modal from './Modal';
import { ChevronRight } from 'lucide-react';

export default function PeopleCard({item}) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const imageUrl = item?.attributes?.pfp?.data?.attributes?.formats?.thumbnail?.url 
    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.attributes.pfp.data.attributes.formats.thumbnail.url}`
    : "/placeholder.svg";

  return (
    <>
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} data={item} />}
      <div 
        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-[380px]"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 8px"
        }}
      >
        {/* Minimalist header with subtle background */}
        <div className="relative bg-gradient-to-r from-sky-700/90 to-sky-600/90 pt-12 pb-6 px-4 flex justify-center">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10" 
               style={{ 
                 backgroundImage: "radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 1%, transparent 0%)",
                 backgroundSize: "100px 100px" 
               }}>
          </div>
          
          <div className="absolute top-6 w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-white shadow-md bg-white">
            <Image
              src={imageError ? "/placeholder.svg" : imageUrl}
              alt={item?.attributes?.name || "Faculty member"}
              width={120}
              height={120}
              className="object-cover w-full h-full"
              onError={handleImageError}
              priority
            />
          </div>
          <div className="h-[60px]"></div>
        </div>

        <div className="flex flex-col items-center flex-grow p-6 pt-3">
          <h2 className="text-xl font-bold text-gray-800 text-center mt-2">
            {item?.attributes?.name || "Faculty Member"}
          </h2>
          
          <p className="text-sky-700 font-medium text-center mb-1">
            {item?.attributes?.Designation || ""}
          </p>
          
          <div className="w-12 h-0.5 bg-sky-700/50 rounded-full my-2"></div>
          
          <p className="text-gray-600 text-center mb-4">
            {item?.attributes?.Department || ""}
          </p>
          
          <div className="mt-auto w-full flex justify-center">
            <button 
              onClick={() => setIsOpen(true)}
              className="px-6 py-2 bg-white border border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-1.5 text-sm font-medium"
              aria-label={`View details about ${item?.attributes?.name || "faculty member"}`}
            >
              View Profile <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}