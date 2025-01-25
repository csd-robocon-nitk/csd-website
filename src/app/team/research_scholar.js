import React from "react";
import StaffCard from "./staffCard";

function Scholar({data}) {
  return (
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
            {
                data.map((item, index) => (
                    <StaffCard key={index} item={item} />
                ))
            }
        </div>
      </div>
    </div>
  );
}

export default Scholar;
