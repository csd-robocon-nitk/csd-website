"use client"
import React from "react";
import Splash from "@/components/splash";
import { motion } from "framer-motion";

async function Gallery() {
  const token = process.env.NEXT_PUBLIC_TOKEN;

  if (!token) {
    throw new Error("Token not found!");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/images?populate=*`,
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

  const gallery_data = await res.json();
  const gallery = gallery_data.data;

  console.log(gallery);

  return (
    <div className="flex flex-col pt-20">
      <Splash
        title={"Gallery"}
        subtitle={"Explore a curated collection of moments and memories"}
      />
      <div className="sm:columns-2 lg:columns-3 columns-1 lg:px-32 px-8 sm:px-16 py-8">
        {gallery.map((image, index) => {
          return (
            <motion.img
              key={index}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y:0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${image.attributes.image.data.attributes.url}`}
              alt="gallery"
              className="h-auto my-3 mx-2 rounded-lg hover:scale-[1.05] transition-all duration-300"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
