import React from "react";

async function Gallery() {
  const token = process.env.NEXT_PUBLIC_TOKEN;

  if (!token) {
    throw new Error("Token not found!");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/images?populate=*`,
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

  const gallery_data = await res.json();
  const gallery = gallery_data.data;

  console.log(gallery);

  return <div>Gallery</div>;
}

export default Gallery;
