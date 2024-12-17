"use client"
import React from "react";
import BlogsCard from "./blogsCard";
import { motion } from "framer-motion";

function Blogs({ blogs }) {
  return (
    <div className="flex flex-col w-full px-16 py-12 gap-8">
      <motion.h1 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-3xl font-semibold text-sky-800 w-full text-start">All Blogs</motion.h1>
      <motion.div className="grid lg:grid-cols-2 grid-cols-1 gap-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      >
        {blogs.map((blog, index) => (
          <BlogsCard blog={blog} />
        ))}
      </motion.div>
    </div>
  );
}

export default Blogs;
