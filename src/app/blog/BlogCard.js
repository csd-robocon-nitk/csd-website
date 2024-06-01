"use client"
import React from "react";
import Image from "next/image";

export default function BlogCard({ blog }) {

  const navigateToBlog = () => {
    window.location.href = `/blog/${blog.id}`;
  }

  const date = new Date(blog.attributes.publishedDate);
  return (
    <div className="w-4/5 m-2 flex lg:flex-row lg:items-stretch items-center flex-col justify-center gap-4 p-2 pb-8 border-b-[0.5px] border-shark-950">
      <div className="w-1/2 rounded-lg overflow-hidden">
        <Image
          className="w-full h-full object-cover aspect-auto"
          src={
            process.env.NEXT_PUBLIC_STRAPI_API_URL +
            blog.attributes.thumbnail.data.attributes.formats.thumbnail.url
          }
          width={300}
          height={300}
          alt=""
        />
      </div>
      <div className="flex flex-col w-1/2 gap-4 justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{blog.attributes.title}</h1>
          <p className="lg:text-2xl text-xl">{blog.attributes.desc}</p>
        </div>
        <div className="flex flex-col gap-4">
          <button
            onClick={navigateToBlog}
            className="btn btn-primary border-none hover:bg-shark-950 bg-shark-800  text-white ease-in-out hover:scale-[1.01] hover:shadow-lg duration-200"
          >
            Read More
          </button>
          <p className="text-2xl font-bold text-cobalt-600">
            {date.toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
