"use client";
import React from "react";
import StaffCard from "./staffCard";
import { useState } from "react";

function Staff({ data }) {
  const [type, setType] = useState("staff");

  const handleType = (key) => {
    setType(key);
  };

  const dropDown = {
    "Staff": "staff",
    "Upskilled Staff": "upskilled_staff",
  };

  const filteredData = data.filter((item) =>
    type === "staff"
      ? item.attributes.type === "staff"
      : item.attributes.type === "upskilled_staff"
  );

  return (
    <div className="w-full flex flex-col justify-center items-center p-2">

      <div className="w-full justify-center flex mb-4">
        {Object.keys(dropDown).map((key) => (
          <button
            key={key}
            onClick={() => handleType(dropDown[key])}
            className={`${
              type === dropDown[key] ? "bg-sky-900 text-white" : "bg-slate-100"
            } px-4 py-2 rounded-md shadow-md font-semibold mr-2`}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="grid gap-10 px-10 py-12 justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredData.map((item, index) => (
          <StaffCard key={index} item={item} />
        ))}
      </div>
  </div>
  );
}

export default Staff;
