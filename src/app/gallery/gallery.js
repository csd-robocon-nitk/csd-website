"use client"
import React from "react";
import { motion } from "framer-motion";

function GalleryComp({gallery}) {
  return (
    <div className="sm:columns-2 lg:columns-3 columns-1 lg:px-32 px-8 sm:px-16 py-8">
      {gallery.map((image, index) => {
        return (
          <motion.img
            key={index}
            initial={{ y: 60, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.1 }}
            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${image.attributes.image.data.attributes.url}`}
            alt="gallery"
            className="h-auto my-3 mx-2 rounded-lg hover:scale-[1.05] transition-all duration-300"
          />
        );
      })}
    </div>
  );
}

export default GalleryComp;
