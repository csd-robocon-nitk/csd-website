import React from "react";

export default function BlogCard({ blog }) {
  const date = new Date(blog.attributes.publishedDate);
  return (
    <div className="w-3/4 m-2 flex lg:flex-row flex-col items-center justify-center gap-4 p-2  border-b-[0.5px] border-bg-dark">
      <img
        className="w-1/2 my-10 rounded-lg"
        src={
          process.env.STRAPI_API_URL +
          blog.attributes.thumbnail.data.attributes.formats.thumbnail.url
        }
        alt=""
      />
      <div className="w-1/2 my-10 flex flex-col justify-between gap-16">
        <div className="flex flex-col gap-4 justify-start">
          <h1 className="lg:text-5xl text-3xl font-bold">
            {blog.attributes.title}
          </h1>
          <p className="lg:text-2xl text-xl">{blog.attributes.desc}</p>
        </div>
        <div className="flex flex-col gap-4">
          <button className="btn bg-page-accent text-white ease-in-out hover:scale-105 hover:shadow-lg duration-200">
            Read More
          </button>
          <p className="text-2xl">{date.toDateString()}</p>
        </div>
      </div>
    </div>
  );
}
