"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  // Sort the timeline data by the title (assuming the title contains year information)
  const sortedData = [...data].sort((a, b) => {
    // Extract year from title if it's a string containing a year
    const yearA = parseInt(a.title.match(/\d{4}/)?.[0] || a.title);
    const yearB = parseInt(b.title.match(/\d{4}/)?.[0] || b.title);
    
    // If parsing as integers worked, compare numerically; otherwise compare as strings
    if (!isNaN(yearA) && !isNaN(yearB)) {
      return yearA - yearB;
    }
    return a.title.localeCompare(b.title);
  });

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }

    // Add scroll event listener to determine active item
    const handleScroll = () => {
      if (!ref.current) return;
      
      const items = ref.current.querySelectorAll('.timeline-item');
      let closestItem = null;
      let closestDistance = Infinity;
      
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const distance = Math.abs(rect.top - window.innerHeight * 0.4);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestItem = index;
        }
      });
      
      setActiveIndex(closestItem);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref.current]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-white font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {sortedData.map((item, index) => (
          <motion.div 
            key={index} 
            className={`flex justify-start pt-10 md:pt-32 md:gap-12 timeline-item ${activeIndex === index ? 'active' : ''}`}
            initial={{ opacity: 0.7, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, margin: "-20%" }}
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className={`h-12 absolute left-3 md:left-3 w-12 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 ${activeIndex === index ? 'scale-125' : 'scale-100'}`}>
                <div className={`h-5 w-5 rounded-full ${activeIndex === index ? 'bg-sky-600' : 'bg-neutral-300'} transition-colors duration-300`} />
              </div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`hidden md:block text-xl md:pl-20 md:text-5xl font-bold ${activeIndex === index ? 'text-sky-700' : 'text-sky-700/60'} transition-colors duration-300`}
              >
                {item.title}
              </motion.h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-8 w-full">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="md:hidden block text-2xl mb-4 text-left font-bold text-sky-800/80"
              >
                {item.title}
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`p-6 rounded-lg ${activeIndex === index ? 'bg-sky-50/80' : 'bg-transparent'} transition-all duration-500`}
              >
                {item.content}
              </motion.div>
            </div>
          </motion.div>
        ))}
        
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[3px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-t from-sky-500 via-sky-800 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};