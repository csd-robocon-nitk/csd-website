import React from "react";

function BlogsCard({ blog }) {
  const date = new Date(blog.attributes.publishedDate);
  return (
    <div className="overflow-hidden w-full relative hover:scale-[1.05] transition-all duration-[300] cursor-pointer rounded border-2 border-sky-800 flex flex-col bg-sky-100">
      <img
        src={
          process.env.NEXT_PUBLIC_STRAPI_API_URL +
          blog.attributes.thumbnail.data.attributes.formats.thumbnail.url
        }
        alt="Image"
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 p-8 bg-sky-900/80 backdrop-blur-sm flex flex-col gap-4 h-auto justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-white text-2xl">
            {blog.attributes.title}
          </h1>
          <p className="font-semibold text-sm text-sky-100">{blog.attributes.desc}</p>
        </div>
        <p className="text-xl font-bold text-white">{date.toDateString()}</p>
      </div>
    </div>
  );
}

export default BlogsCard;
