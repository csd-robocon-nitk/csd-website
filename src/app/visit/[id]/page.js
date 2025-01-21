import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

async function Visit({ params }) {
  const token = process.env.NEXT_PUBLIC_TOKEN;

  const { id } = await params;
  if (!token) {
    throw new Error("Token not found!");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/visits/${id}?populate=*`,
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

  const visit_data = await res.json();
  const visit = visit_data.data;

  const length = visit.attributes.Gallery.data.length;

  return (
    <div className="mt-20 min-h-screen flex flex-col gap-2 px-16 py-10">
      <Link href={"/events?type=visits"} className="fixed top-8 mt-20 left-4 flex items-center gap-1 text-xl text-white bg-sky-900/90 backdrop-blur-sm p-2 rounded-full z-[999] hover:scale-105 transition-all duration-300">
        <ArrowLeft /> All visits
      </Link>
      <div className="mt-20 text-sky-900 font-bold text-3xl text-center">
        {visit.attributes.Title}
      </div>
      <div className="text-black text-xl">{visit.attributes.Description}</div>
      <div className="columns-3">
        {visit.attributes.Gallery.data.map((image, index) => {
          return (
            <img
              key={index}
              src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${image.attributes.url}`}
              alt="gallery"
              className="h-auto my-3 mx-2 rounded-lg hover:scale-[1.05] transition-all duration-300"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Visit;
