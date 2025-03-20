import React from "react";
import parse from 'html-react-parser';
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import "./page.css";

// Function to estimate reading time
function getReadingTime(content) {
  const text = content.replace(/<[^>]*>/g, '');
  const wordCount = text.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200); // Assuming 200 words per minute
  return readingTime;
}

export default async function BlogPage({ params }) {
  const token = process.env.NEXT_PUBLIC_TOKEN;
  const { id } = await params;
  if (!token) {
    throw new Error("Token not found!");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs/${id}?populate=*`,
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

  const blog = await res.json();
  const blog_data = blog.data;

  const date = new Date(blog_data.attributes.publishedDate);
  const readingTimeMinutes = getReadingTime(blog_data.attributes.blog);
  
  // Format date in a friendly way
  const formattedDate = date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const imageUrl = blog_data.attributes.thumbnail.data 
    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${blog_data.attributes.thumbnail.data.attributes.url}`
    : "/placeholder-image.jpg";

  return (
    <div className="relative flex flex-col items-center min-h-screen w-full bg-white">
      {/* Back button */}
      <Link 
        href="/blog?type=blogs" 
        className="fixed top-24 left-4 md:left-8 flex items-center gap-1 text-white bg-sky-800 p-2 md:p-3 rounded-full z-[999] hover:bg-sky-700 shadow-md transition-all duration-300"
        aria-label="Back to blogs"
      >
        <ArrowLeft size={20} />
      </Link>

      {/* Hero Section */}
      <div className="w-full bg-gradient-to-b from-sky-50 to-white pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sky-900 text-center leading-tight">
            {blog_data.attributes.title}
          </h1>
          
          <div className="flex flex-wrap justify-center items-center gap-4 mt-6 text-gray-600">
            <div className="flex items-center gap-1">
              <Calendar size={18} />
              <span className="text-sm">{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={18} />
              <span className="text-sm">{readingTimeMinutes} min read</span>
            </div>
            {blog_data.attributes.author && (
              <div className="flex items-center gap-1">
                <User size={18} />
                <span className="text-sm">{blog_data.attributes.author}</span>
              </div>
            )}
          </div>
          
          {blog_data.attributes.desc && (
            <p className="mt-6 text-lg text-gray-700 text-center max-w-3xl mx-auto">
              {blog_data.attributes.desc}
            </p>
          )}
        </div>
      </div>

      {/* Featured Image */}
      <div className="w-full max-w-5xl mx-auto px-4 -mt-6">
        <div className="aspect-[16/9] relative rounded-xl overflow-hidden shadow-lg">
          <img
            src={imageUrl}
            alt={blog_data.attributes.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Blog Content */}
      <div className="w-full max-w-4xl mx-auto px-4 py-12">
        <article className="blog-content">
          {parse(blog_data.attributes.blog)}
        </article>
      </div>

      {/* Related Posts or CTA could go here */}
    </div>
  );
}