"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { X, Linkedin, Phone, Mail, Globe } from "lucide-react";
import "./modal.css";

// Google Scholar SVG icon component
const GoogleScholar = ({ size = 20 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
  </svg>
);

function Modal({ isOpen, setIsOpen, data }) {
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  const closeModal = () => {
    modalRef.current.classList.remove("open-modal");
    modalRef.current.classList.add("close-modal");
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  const handleClickOutside = (e) => {
    if (modalRef.current && !contentRef.current.contains(e.target)) {
      closeModal();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      modalRef.current.classList.add("open-modal");
      document.body.style.overflow = 'hidden';
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Parse data with safety checks
  const achievements = data?.attributes?.Achievements?.split("\n").filter(Boolean) || [];
  const highlightProjects = data?.attributes?.HighlightProjects?.split("\n").filter(Boolean) || [];
  const academicBackground = data?.attributes?.academicBackground?.split("\n").filter(Boolean) || [];
  const areasOfInterest = data?.attributes?.areasOfInterest?.split("\n").filter(Boolean) || [];
  
  const imageUrl = data?.attributes?.pfp?.data?.attributes?.url 
    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${data.attributes.pfp.data.attributes.url}`
    : "/placeholder.svg";

  return (
    <div 
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      ref={modalRef}
    >
      <div 
        ref={contentRef}
        className="bg-white w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] relative"
        style={{ 
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
          animation: "modal-appear 0.3s ease-out forwards" 
        }}
      >
        {/* Close button - positioned absolutely to be outside the content flow */}
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 bg-white/10 rounded-full p-2 hover:bg-white/20 transition-colors text-white shadow-md"
          aria-label="Close modal"
        >
          <X size={20} color="black"/>
        </button>

        {/* Left sidebar */}
        <div className="w-full md:w-2/5 bg-gradient-to-b from-sky-800 to-sky-900 text-white p-6 flex flex-col">
          <div className="flex flex-col items-center mb-6 pt-4">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-white/80 shadow-lg overflow-hidden mb-4">
              <Image
                src={imageUrl}
                alt={data?.attributes?.name || "Faculty member"}
                width={200}
                height={200}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = "/placeholder.svg" }}
              />
            </div>
            
            <h1 className="text-2xl font-bold text-center">
              {data?.attributes?.name || "Faculty Member"}
            </h1>
            
            <p className="text-lg text-sky-100 text-center">
              {data?.attributes?.Designation || ""}
            </p>
            
            <p className="text-sm text-sky-200 text-center">
              {data?.attributes?.Department || ""}
            </p>
          </div>
          
          <div className="space-y-4 mt-2">
            {data?.attributes?.telephone && (
              <div className="flex items-center gap-3 text-sky-100">
                <Phone size={18} />
                <span>{data.attributes.telephone}</span>
              </div>
            )}
            
            {data?.attributes?.email && (
              <div className="flex items-center gap-3 text-sky-100 break-all">
                <Mail size={18} />
                <a href={`mailto:${data.attributes.email}`} className="hover:underline">
                  {data.attributes.email}
                </a>
              </div>
            )}
          </div>
          
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            {data?.attributes?.linkedin && (
              <a 
                href={data.attributes.linkedin}
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
            )}
            
            {data?.attributes?.scholar && (
              <a 
                href={data.attributes.scholar}
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Scholar Profile"
              >
                <GoogleScholar size={20} />
              </a>
            )}
            
            {data?.attributes?.nitk && (
              <a 
                href={data.attributes.nitk}
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NITK Profile"
              >
                <Globe size={20} />
              </a>
            )}
          </div>
        </div>
        
        {/* Main content area */}
        <div className="w-full md:w-3/5 p-6 overflow-y-auto max-h-[60vh] md:max-h-[90vh] pt-12 md:pt-6">
          {areasOfInterest.length > 0 && (
            <section className="mb-6">
              <h2 className="text-xl font-bold text-sky-900 mb-2 flex items-center gap-2">
                Areas of Interest
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {areasOfInterest.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}
        
          {achievements.length > 0 && (
            <section className="mb-6">
              <h2 className="text-xl font-bold text-sky-900 mb-2 flex items-center gap-2">
                Achievements
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </section>
          )}
          
          {highlightProjects.length > 0 && (
            <section className="mb-6">
              <h2 className="text-xl font-bold text-sky-900 mb-2 flex items-center gap-2">
                Notable Projects
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {highlightProjects.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
            </section>
          )}
          
          {academicBackground.length > 0 && (
            <section className="mb-6">
              <h2 className="text-xl font-bold text-sky-900 mb-2 flex items-center gap-2">
                Academic Background
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {academicBackground.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;