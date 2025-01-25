"use client";
import React from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function articleCard({ article }) {
  const navigateToArticle = () => {
    if (article.attributes.isLink) {
      window.open(article.attributes.link, "_blank");
    } else {
      window.location.href = `/article/${article.id}`;
    }
  };

  const date = new Date(article.attributes.PostedOn);
  return (
    <div
      onClick={navigateToArticle}
      className="relative w-full m-2 flex cursor-pointer flex-col h-[300px] justify-between hover:scale-[1.05] transition-all bg-sky-100 rounded overflow-hidden"
    >
      <img
        className="object-fill h-1/2"
        src={
          process.env.NEXT_PUBLIC_STRAPI_API_URL +
          article.attributes.thumbnail.data.attributes.url
        }
        alt=""
      />
      <div className="flex h-1/2 flex-col w-full gap-2 justify-between text-black p-2">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-bold text-sky-900">
            {article.attributes.title}
          </h1>
          {article.attributes.isLink && (
            <FaExternalLinkAlt className="z-10 top-2 right-2 ml-2 text-lg text-sky-600" />
          )}
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-black flex justify-between font-bold">
            <h1>{article.attributes.postedat}</h1>
            <h1>{date.toDateString()}</h1>
          </p>
        </div>
      </div>
    </div>
  );
}
