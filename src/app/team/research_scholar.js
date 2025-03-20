"use client"
import React from "react";
import StaffCard from "./staffCard";

function Scholar({data}) {
  return (
    <div className="w-full mt-5">

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1rem",
            width: "100%",
            padding: "1rem",
          }}
        >
            {
                data.map((item, index) => (
                    <StaffCard key={index} item={item} />
                ))
            }
        </div>
    </div>
  );
}

export default Scholar;
