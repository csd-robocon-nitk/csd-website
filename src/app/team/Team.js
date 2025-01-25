"use client";
import PeopleCard from "./peopleCard.js";
import StaffCard from "./staffCard.js";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import Splash from "@/components/splash.js";

export default function PeoplePage() {
  const [type, setType] = useState("Faculty");
  const [loading, setLoading] = useState(true);
  const [displayData, setDisplayData] = useState();

  const token = process.env.NEXT_PUBLIC_TOKEN;
  if (!token) {
    throw new Error("Token not found!");
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
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
        throw new Error(
          `Failed to fetch data: ${res.status} ${res.statusText}`
        );
      }

      const people = await res.json();
      const people_data = await people.data;

      const dispData = people_data.filter(
        (item) => item.attributes.type === dropDown[type]
      );

      setDisplayData(dispData);
      setLoading(false);
    };

    fetchData();
  }, [type]);

  const handleType = (key) => {
    setType(key);
  };
  // efn
  return (
    <div className="min-h-screen mt-20 bg-white flex w-full flex-col items-center">
      
      
      <div className="w-full mt-5">
        <div className="flex flex-col items-center justify-evenly w-full px-16 p-2">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1rem",
              width: "100%",
              padding: "1rem",
            }}
          >
            {loading ? (
              <ClipLoader color={"#363797"} loading={loading} />
            ) : type == "Faculty" ? (
              displayData
                .filter((item) => item.attributes.type === "faculty")
                .map((item, index) => <PeopleCard key={index} item={item} />)
            ) : (
              displayData
                .filter((item) => item.attributes.type === dropDown[type])
                .map((item, index) => <StaffCard key={index} item={item} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
