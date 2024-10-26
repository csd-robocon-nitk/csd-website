"use client";
import React from "react";
import { useState, useEffect } from "react";
import "./milestones.css";
import { motion } from "framer-motion";

function MileStones() {
  const [displayData, setDisplayData] = useState();

  const token = process.env.NEXT_PUBLIC_TOKEN;
  if (!token) {
    throw new Error("Token not found!");
  }

  useEffect(() => {
    const fetchData = async () => {
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
        throw new Error(
          `Failed to fetch data: ${res.status} ${res.statusText}`
        );
      }

      const data = await res.json();
      const milestones = await data.data;

      setDisplayData(milestones);
    };

    fetchData();
  }, []);

  return (
    <div className="mt-24 min-h-screen flex justify-center">
      <div className="flex flex-col items-center gap-4 w-full px-32">
        <h1 className="text-4xl font-extrabold">Mile Stones</h1>
        {/* Timeline */}
        <div className="flex flex-col w-full relative timeline m-4">
          {displayData?.map((milestone, index) =>
            index % 2 === 0 ? (
              <div key={index} className="p-6 w-1/2 left-0 relative box-left">
                <h1 className="text-4xl font-bold text-shark-400 text-right mb-4">
                  {milestone.attributes.timeline}
                </h1>
                <div className="w-6 h-6 bg-shark-500 border-2 border-shark-950 absolute top-[15%] right-[-12px] rounded-full"></div>
                <div className="p-4 border border-shark-950 rounded-md shadow-md">
                  <h1 className="text-2xl font-bold">
                    {milestone.attributes.title}
                  </h1>
                  <p>
                    {milestone.attributes.description}
                  </p>
                </div>
              </div>
            ) : (
                <div key={index} className="p-6 w-1/2 left-[50%] relative box-right">
                <h1 className="text-4xl font-bold text-shark-400 mb-4">{milestone.attributes.timeline}</h1>
                <div className="w-6 h-6 bg-shark-500 border-2 border-shark-950 absolute top-[15%] left-[-12px] rounded-full"></div>
                <div className="p-4 border border-shark-950 rounded-md shadow-md">
                  <h1 className="text-2xl font-bold">{milestone.attributes.title}</h1>
                  <p>
                    {milestone.attributes.description}
                  </p>
                </div>
              </div>
            )
          )}

          
        </div>
      </div>
    </div>
  );
}

export default MileStones;
