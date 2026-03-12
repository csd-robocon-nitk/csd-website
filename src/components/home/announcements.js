"use client"
import { useEffect, useState, useRef } from "react";
import getAnnouncements from "./announcementsCard";

export default function Announcements() {
    const [announcements, setAnnouncements] = useState([]);
    const [index, setIndex] = useState(0);
    const intervalRef = useRef(null);

    //fetching the announcements 
    useEffect(() => {
        getAnnouncements()
        .then(setAnnouncements)
        .catch(console.error);
    }, []);

    // rotation logic with the autorotation and buttons
    
    useEffect(() => {
    if (announcements.length <= 1) return;

    startRotation();
    return stopRotation;
  }, [announcements.length]);

  const startRotation = () => {
    stopRotation();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);
  };

  const stopRotation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const prev = () => {
    stopRotation();
    setIndex((i) =>
      i === 0 ? announcements.length - 1 : i - 1
    );
    startRotation();
  };

  const next = () => {
    stopRotation();
    setIndex((i) =>
      (i + 1) % announcements.length
    );
    startRotation();
  };

    if (!announcements.length) return null;

    const { heading, subheading, link, date } = announcements[index];

    return (
    <div className="absolute top-24 right-8 w-96 z-50 group" onMouseEnter={stopRotation} onMouseLeave={startRotation}>
      <h2 className="text-white text-base font-semibold mb-3 uppercase tracking-wide opacity-60 group-hover:opacity-100 transition-opacity">
        Announcements
      </h2>

      <a
        href={link}
        target="_blank"
        rel = "noopener noreferrer"
        className="
          block rounded-xl p-5
          bg-white/10 backdrop-blur-md
          transition-all duration-500
          opacity-50 group-hover:opacity-100
          hover:bg-white/25
        "
      >
        <p className="text-sm text-gray-300 mb-1">
          {new Date(date).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>

        <h3 className="text-base font-semibold text-white">
          {heading}
        </h3>

        {subheading && (
          <p className="text-sm text-gray-200 mt-1">
            {subheading}
          </p>
        )}
      </a>
        {/* Navigation */}
        <div className="mt-4 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={prev}
            className="px-3 py-1 text-sm rounded-lg bg-white/10 hover:bg-white/20 text-white"
            aria-label="Previous announcement"
          >
            ←
          </button>

          <button
            onClick={next}
            className="px-3 py-1 text-sm rounded-lg bg-white/10 hover:bg-white/20 text-white"
            aria-label="Next announcement"
          >
            →
          </button>
        </div>
    </div>
  );

}