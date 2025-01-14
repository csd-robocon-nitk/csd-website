"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <div ref={containerRef} className="relative flex flex-col items-center">
      {data.map((item, index) => (
        <div key={index} className="flex w-full mb-10">
          {/* Left Side Content */}
          <div className="w-1/2 pr-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {item.content}
            </motion.div>
          </div>

          {/* Right Side Year */}
          <div className="w-1/2 pl-4 flex justify-end items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold"
            >
              {item.title}
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};