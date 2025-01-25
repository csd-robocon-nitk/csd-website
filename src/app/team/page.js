import React from "react";
import Splash from "@/components/splash";
import Faculty from "./faculty";
import Staff from "./staff";
import Scholar from "./research_scholar";

async function TeamPage({ searchParams }) {
  const { type } = await searchParams;

  console.log(type);

  const token = process.env.NEXT_PUBLIC_TOKEN;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/peoples?populate=*`,
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

  const people = await res.json();
  const people_data = await people.data;

  const data = people_data.filter((item) => {
    if (type === 'staff') {
      return item.attributes.type === 'staff' || item.attributes.type === 'upskilled_staff';
    }
    return item.attributes.type === type;
  });

  console.log(data)

  return (
    <div className="min-h-screen mt-20 bg-white flex w-full flex-col items-center">
      <Splash title={"Our Team"} subtitle={"Meet the people at CSD!"} />
      {type === "faculty" ? <Faculty data={data} /> : null}
      {type === "staff" ? <Staff data={data} /> : null}
      {type === "research_scholar" ? <Scholar data={data} /> : null}
    </div>
  );
}

export default TeamPage;
