"use client";
import React from "react";
import Link from "next/link";
import { Calendar, ExternalLink } from "lucide-react";

export default function ArticleCard({ article }) {
  const date = new Date(article.attributes.PostedOn);
  
  const CardWrapper = ({ children }) => {
    if (article.attributes.isLink) {
      return (
        <a 
          href={article.attributes.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full max-w-md"
        >
          {children}
        </a>
      );
    } else {
      return <Link href={`/article/${article.id}`} className="block w-full max-w-md">{children}</Link>;
    }
  };

  return (
    <CardWrapper>
      <div className="h-full flex flex-col overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-sky-50 border border-sky-100 hover:border-sky-200">
        <div className="relative overflow-hidden h-48">
          <img
            src={
              process.env.NEXT_PUBLIC_STRAPI_API_URL +
              article.attributes.thumbnail.data.attributes.url
            }
            alt={article.attributes.title || "Article thumbnail"}
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
          />
          
          {article.attributes.isLink && (
            <div className="absolute top-2 right-2 bg-sky-900/80 text-white p-1.5 rounded-full">
              <ExternalLink className="h-4 w-4" />
            </div>
          )}
        </div>
        
        <div className="p-5 flex flex-col gap-3 flex-grow">
          <div className="group/title overflow-hidden transition-all duration-300 hover:min-h-fit">
            <h3 className="text-xl font-bold text-sky-900 line-clamp-2 group-hover/title:line-clamp-none transition-all duration-300">
              {article.attributes.title}
            </h3>
          </div>
          
          {article.attributes.desc && (
            <p className="text-gray-700 text-sm line-clamp-3">{article.attributes.desc}</p>
          )}
          
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-sky-700" />
              <p className="text-sm text-gray-600">
                {date.toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                })}
              </p>
            </div>
            
            {article.attributes.postedat && (
              <p className="text-sm font-medium text-sky-700">{article.attributes.postedat}</p>
            )}
          </div>
          
          <div className="mt-auto pt-4 self-end">
            <div className="group/read inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white hover:bg-sky-50 transition-all duration-300 border border-transparent hover:border-sky-200">
              <span className="text-sm font-medium text-sky-700">
                {article.attributes.isLink ? "Visit source" : "Read article"}
              </span>
              <ExternalLink className={`h-4 w-4 text-sky-700 transform transition-transform duration-300 ${article.attributes.isLink ? "group-hover/read:scale-110" : "group-hover/read:translate-x-1.5"}`} />
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}