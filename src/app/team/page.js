"use client";
import { FaFilter } from "react-icons/fa";
import PeopleCard from "./peopleCard.js";
import StaffCard from "./staffCard.js";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

export default function PeoplePage() {
  const [type, setType] = useState("Faculty");
  const [loading, setLoading] = useState(true);
  const [displayData, setDisplayData] = useState();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const token = process.env.NEXT_PUBLIC_TOKEN;
  if (!token) {
    throw new Error("Token not found!");
  }

  const dropDown = {
    Faculty: "associated_faculty",
    "Research Scholars": "associated_research_scholars",
    Staff: "associated_staff",
  };

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
    <div className="min-h-screen py-10 px-5 pt-10 mt-16 bg-white flex w-full flex-col items-center">
      
      <div className="flex justify-between w-full px-20">
        <h1 className="text-4xl font-bold text-center">Our Team</h1>
        <div>
          {
            Object.keys(dropDown).map((key) => (
              <button
                onClick={() => handleType(key)}
                className={`${
                  type === key
                    ? "bg-shark-900 text-white"
                    : "bg-slate-100"
                } px-4 py-2 rounded-md shadow-md font-semibold mr-2`}
              >
                {key}
              </button>
            ))
          }
        </div>
      </div>
        
      
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
                .filter((item) => item.attributes.type === "associated_faculty")
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
