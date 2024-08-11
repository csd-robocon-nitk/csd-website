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

  return (
    <div className="min-h-screen py-10 px-5 pt-10 mt-16 bg-white flex w-full flex-col items-center relative">
      <div className="flex gap-4 justify-center items-center w-full absolute z-10">
        <div className="flex flex-col items-center w-full sm:px-40 px-5">
          <div className="flex items-start justify-between w-full">
            <div className="font-extrabold lg:text-4xl sm:text-4xl text-2xl text-center">
              Our Team
            </div>
            <div className={dropdownVisible ? "p-2 transition-all duration-200 ease-in-out flex items-center flex-col justify-center gap-2  bg-slate-100 shadow-md rounded-md" : "p-2 transition-all duration-200 ease-in-out flex items-center flex-col justify-center gap-2  bg-slate-100 shadow-md rounded-md"}>
              <div className="flex items-center justify-center gap-2 w-full">
                <div className="font-bold text-xl">{type}</div>
                <FaFilter
                  className="cursor-pointer"
                  onClick={() => {
                    setDropdownVisible(!dropdownVisible);
                  }}
                />
              </div>
              <div
                className={
                  dropdownVisible
                    ? "flex flex-col gap-1 items-center"
                    : "hidden"
                }
              >
                {Object.keys(dropDown).map((key) => {
                  return (
                    <div
                      className="w-full text-center p-1 bg-shark-200/50 rounded-md"
                      onClick={() => {
                        handleType(key);
                        setDropdownVisible(false);
                      }}
                    >
                      {key}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-30 absolute z-0 mt-5">
        <div className="flex flex-col items-center justify-evenly w-full">
          <div className="flex flex-wrap items-center p-10 justify-center gap-8">
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
