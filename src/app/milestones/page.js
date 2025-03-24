import React from "react";
import { Timeline } from "./timeline";
import Splash from "@/components/splash";

export default async function TimelineDemo() {
  const token = process.env.NEXT_PUBLIC_TOKEN;
  if (!token) {
    throw new Error("Token not found!");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/milestones?populate=*`,
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

  const data1 = await res.json();
  const milestones = await data1.data;

  const data = milestones.map((milestone) => ({
    title: milestone.attributes.timeline,
    content: (
      <div>
        <h1 className="text-3xl font-bold mb-2 text-sky-900">
          {milestone.attributes.title}
        </h1>
        <div className="text-base text-gray-700">
          {milestone.attributes.description}
        </div>
      </div>
    ),
  }));

  return (
    <div className="w-full">
      <Splash 
        title="Our Milestones" 
        subtitle="Trace our journey through key moments and achievements" 
      />
      <Timeline data={data} />
    </div>
  );
}