import React from "react";
import { Scroll } from "./sponsors";

async function Sponsors() {
  const token = process.env.NEXT_PUBLIC_TOKEN;
  if (!token) {
    throw new Error("Token not found!");
  }

  let logos = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/sponsors?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-cache",
    }
  );

  if (!logos.ok) {
    throw new Error(
      `Failed to fetch data: ${logos.status} ${logos.statusText}`
    );
  }

  logos = await logos.json()
  console.log(logos)

  return (
    <section className="flex flex-col mb-12 justify-center items-center gap-8" id="sponsors">
      <h1 className="text-4xl font-bold sticky top-16 pt-12">Our Partners</h1>
      <div className="h-fit flex flex-col antialiased items-center justify-center relative overflow-hidden w-11/12 mx-auto">
        <Scroll items={logos.data} direction="left" speed="slow" />
      </div>
    </section>
  );
}

export default Sponsors;
