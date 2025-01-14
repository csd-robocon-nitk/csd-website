"use client"
import React from "react";
import Image from "next/image";

export default function BlogCard({ blog }) {

  const navigateToBlog = () => {
    window.location.href = `/blog/${blog.id}`;
  }

  const date = new Date(blog.attributes.publishedDate);
  return (
    <div
    onClick={navigateToBlog}
    className="w-full m-2 flex cursor-pointer flex-col h-[300px] justify-between hover:scale-[1.05] transition-all bg-sky-100 rounded overflow-hidden">
        <img
          className="object-fill h-1/2"
          src={
            process.env.NEXT_PUBLIC_STRAPI_API_URL +
            blog.attributes.thumbnail.data.attributes.url
          }
          alt=""
        />
      <div className="flex h-1/2 flex-col w-full gap-2 justify-between text-black p-2">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-bold text-sky-900">{blog.attributes.title}</h1>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-bold text-black">
            {date.toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
