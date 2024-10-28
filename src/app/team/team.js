"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import PeopleCard from "./peopleCard";
import StaffCard from "./staffCard";
import { ClipLoader } from "react-spinners";

function Team({ data }) {
  const [type, setType] = useState("Faculty");
  const [displayData, setDisplayData] = useState([]);

  const dropDown = {
    Faculty: "associated_faculty",
    "Research Scholars": "associated_research_scholars",
    Staff: "associated_staff",
  };

  useEffect(() => {

    const newData = data.filter((item) => item.attributes.type === dropDown[type]);
    setDisplayData(newData);
  }, [type]);

  const handleType = (type) => {
    setType(type);
  };

  return (
    <>
      <div className="flex justify-between w-full px-20">
        <h1 className="text-4xl font-bold text-center">Our Team</h1>
        <div>
          {Object.keys(dropDown).map((key) => (
            <button
              key={key}
              onClick={() => handleType(key)}
              className={`${
                type === key ? "bg-shark-900 text-white" : "bg-slate-100"
              } px-4 py-2 rounded-md shadow-md font-semibold mr-2`}
            >
              {key}
            </button>
          ))}
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
            { type == "Faculty" ? (
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
    </>
  );
}

export default Team;
