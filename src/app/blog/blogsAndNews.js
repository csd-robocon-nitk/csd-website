"use client";
import React from "react";
import { useState } from "react";
import BlogCard from "./BlogCard";
import ArticleCard from "./ArticleCard";

function BlogsAndNews({ blogs, articles }) {
  const [type, setType] = useState("Blogs");

  const handleType = (key) => {
    setType(key);
  };

  const dropDown = {
    Blogs: "blogs",
    News: "news",
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center w-full px-20 py-10">
        <div className="w-full justify-center flex mb-4">
          {Object.keys(dropDown).map((key) => (
            <button
              onClick={() => handleType(key)}
              className={`${
                type === key ? "bg-sky-900 text-white" : "bg-slate-100"
              } px-4 py-2 rounded-md shadow-md font-semibold mr-2`}
            >
              {key}
            </button>
          ))}
        </div>
        {/* Blogs */}
        <div>
          {type === "Blogs" && (
            <div className="w-full m-2 grid grid-cols-2 items-stretch justify-center gap-8">
              {blogs.map((blog, index) => (
                <BlogCard key={index} blog={blog} />
              ))}
            </div>
          )}
        </div>

        {/* News */}
        <div>
          {type === "News" && (
            <div className="w-full m-2 grid grid-cols-2 items-stretch justify-center gap-8">
              {articles.map((article, index) => (
                <ArticleCard key={index} article={article} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogsAndNews;
