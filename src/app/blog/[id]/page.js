import React from "react";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import parse from 'html-react-parser';
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import "./page.css"

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

  return (
    <div className="relative flex mt-20 flex-col items-center min-h-screen w-full">
      <Link href={"/blog?type=blogs"} className="fixed top-8 mt-20 left-4 flex items-center gap-1 text-xl text-white bg-sky-900/90 backdrop-blur-sm p-2 rounded-full z-[999] hover:scale-105 transition-all duration-300">
        <ArrowLeft />
      </Link>
      <div className="p-10 flex flex-col items-center w-4/5 gap-4">
        <div className="py-20 flex flex-col items-center gap-4">
            <h1 className="text-5xl font-extrabold text-wrap text-center">{blog_data.attributes.title}</h1>
            <p className="text-xl font-bold text-page-accent">{date.toDateString()}</p>
            <div className="text-xl text-wrap">{blog_data.attributes.desc}</div>
        </div>
        <div className="w-full justify-center flex ">
            <img
                className="w-3/4 rounded-lg"
                src={
                process.env.NEXT_PUBLIC_STRAPI_API_URL +
                blog_data.attributes.thumbnail.data.attributes.formats.thumbnail.url
                }
                alt=""
            />
        </div>
        <article className="prose-xl text-shark-950 text-2xl ck-content">
            {await parse(blog_data.attributes.blog)}
            {console.log(blog_data.attributes.blog)}
        </article>
      </div>
    </div>
  );
}
