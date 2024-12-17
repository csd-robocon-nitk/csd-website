"use client";
import React from "react";
import Carousel from "@/components/carousel";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

function HighlightedBlogs({ blogs }) {
  return (
    <motion.div
      className="w-full flex flex-col gap-4 px-16 pt-8 py-12 h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 className="text-3xl font-semibold text-sky-800 text-start w-full pb-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      >
        Blogs & Events
      </motion.h1>
      <Carousel className="w-full">
        {blogs.map((blog, index) => {
          const date = new Date(blog.attributes.publishedDate);
          return (
            <div className="flex gap-4 w-full rounded overflow-hidden border-2 border-sky-800 bg-sky-100 h-full">
              <Image
                src={
                  process.env.NEXT_PUBLIC_STRAPI_API_URL +
                  blog.attributes.thumbnail.data.attributes.formats.thumbnail
                    .url
                }
                className="w-3/5"
                width={300}
                height={300}
                alt=""
              />
              <div className="flex flex-col justify-between w-2/5 p-4 h-auto">
                <div className="flex flex-col">
                  <p className="text-xl font-bold text-sky-700">
                    {date.toDateString()}
                  </p>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-semibold text-sky-900">
                      {blog.attributes.title}
                    </h1>
                    <p className="text-lg text-sky-700 text-justify">
                      {blog.attributes.desc}
                    </p>
                  </div>
                </div>
                <div className="rounded-full px-2 py-1 gap-2 flex self-end items-center bg-sky-800/95 hover:bg-sky-800 hover:scale-[1.05] transition-all duratoion-[100] cursor-pointer text-white">
                  <button className="text-lg">
                    <Link href={`/blog/${blog.id}`}>Read More</Link>
                  </button>
                  <ArrowRight size={24} color="#ffffff" />
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </motion.div>
  );
}

export default HighlightedBlogs;
