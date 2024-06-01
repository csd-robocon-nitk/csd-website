import React from "react";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export default async function BlogPage({ params }) {
  const token = process.env.TOKEN;
  if (!token) {
    throw new Error("Token not found!");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs/${params.id}?populate=*`,
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
    <div className="flex pt-20 flex-col items-center min-h-screen w-full">
      <div className="p-10 flex flex-col items-center w-4/5 gap-8">
        <div className="py-20 flex flex-col items-center gap-4">
            <h1 className="text-7xl font-extrabold text-wrap text-center">{blog_data.attributes.title}</h1>
            <p className="text-2xl font-bold text-page-accent">{date.toDateString()}</p>
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
        <div className="prose-xl text-shark-950 text-2xl">
            <BlocksRenderer content={blog_data.attributes.content} />
        </div>
      </div>
    </div>
  );
}
