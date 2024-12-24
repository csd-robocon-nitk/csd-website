"use client"
import React from "react";
import Image from "next/image";

export default function articleCard({ article }) {

  const navigateToarticle = () => {
    window.location.href = `/article/${article.id}`;
  }

  const date = new Date(article.attributes.PostedOn);
  return (
    <div className="w-full m-2 flex cursor-pointer flex-col h-[800px] justify-between hover:scale-[1.05] transition-all bg-sky-100 rounded gap-4 overflow-hidden">
        <img
          className="object-fill h-2/5"
          src={
            process.env.NEXT_PUBLIC_STRAPI_API_URL +
            article.attributes.thumbnail.data.attributes.url
          }
          alt=""
        />
      <div className="flex h-3/5 flex-col w-full gap-2 justify-between text-black p-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold text-sky-900">{article.attributes.title}</h1>
          <p className="text-lg text-justify">{article.attributes.desc}</p>
        </div>
        <div className="flex flex-col gap-2">
          <button
            onClick={navigateToarticle}
            className="btn border-none hover:bg-sky-950 bg-sky-800  text-white ease-in-out hover:scale-[1.01] hover:shadow-lg duration-200"
          >
            Read More
          </button>
          <p className="text-lg text-black flex justify-between font-bold">
            <h1>{article.attributes.postedat}</h1>
            <h1>{date.toDateString()}</h1>
          </p>
        </div>
      </div>
    </div>
  );
}
