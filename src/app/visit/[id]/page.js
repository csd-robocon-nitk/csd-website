import React from "react";

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
      <div className="text-sky-900 font-bold text-3xl">
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
