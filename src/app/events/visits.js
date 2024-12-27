import React from "react";
import VisitsCard from "./visitsCard";

function Visits({ visits }) {
  return (
    <div className="min-h-screen w-full">
      <div className="grid grid-cols-3 ">
        {visits.map((visit, index) => (
          <VisitsCard key={index} visit={visit} />
        ))}
      </div>
    </div>
  );
}

export default Visits;
