"use client"
import React from "react";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react"; 

export default function BlogCard({ blog }) {
  const date = new Date(blog.attributes.publishedDate);
  
  return (
    <Link href={`/blog/${blog.id}`} className="block w-full max-w-md">
      <div className="h-full flex flex-col overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-sky-50 border border-sky-100 hover:border-sky-200">
        <div className="relative overflow-hidden h-48">
          <img
            src={
              process.env.NEXT_PUBLIC_STRAPI_API_URL +
              blog.attributes.thumbnail.data.attributes.url
            }
            alt={blog.attributes.title || "Blog thumbnail"}
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        <div className="p-5 flex flex-col gap-3 flex-grow">
          {/* Expandable title that grows on hover */}
          <div className="group overflow-hidden transition-all duration-300 hover:min-h-fit">
            <h3 className="text-xl font-bold text-sky-900 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
              {blog.attributes.title}
            </h3>
          </div>
          
          {blog.attributes.desc && (
            <p className="text-gray-700 text-sm line-clamp-3">{blog.attributes.desc}</p>
          )}
          
          <div className="flex items-center gap-2 mt-2">
            <Calendar className="h-4 w-4 text-sky-700" />
            <p className="text-sm text-gray-600">{date.toLocaleDateString("en-IN", {
              day: "numeric", 
              month: "long", 
              year: "numeric"
            })}</p>
          </div>
          
          <div className="mt-auto pt-4 self-end">
            <div className="group inline-flex items-center gap-2 py-1 px-3 rounded-full hover:bg-sky-50 transition-all duration-300">
              <span className="text-sm font-medium text-sky-700">Read blog</span>
              <ArrowRight className="h-4 w-4 text-sky-700 transform transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}